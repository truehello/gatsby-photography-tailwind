//const fs = require("fs")
const path = require("path")
//const { createFilePath } = require(`gatsby-source-filesystem`)

// define the File type to add a slug property
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
        
        interface Album @nodeInterface {
          id: ID!
          name: String!
          slug: String!
          sourceInstanceName: String!
          relativePath: String!
        }
  
  
        type File implements Node {
            id: ID!
            slug: String!
           

        }
        
        type Directory implements Node & Album {
            id: ID!
            slug: String!
        }
    `)
}

// define the resolvers for any custom fields (slug)
exports.createResolvers = ({ createResolvers }, options) => {
  //function to format the slug strings
  const slugify = str => {
    const slug = str
      .toLowerCase()
      //replace any character that is not a letter, number or forward slash with a dash
      //leave slash in for folder structure
      .replace(/[^a-z0-9/]+/g, "-")
      //remove any dash at the begining or end of the slug
      .replace(/(^-|-$)+/g, "")
    //remove any occurence of double forward slash
    return `${slug}`.replace(/\/\/+/g, "/")
  }

  createResolvers({
    File: {
      slug: {
        resolve: source =>
          slugify(`${source.relativeDirectory}/${source.name}`),
      },
    },
    Directory: {
      slug: {
        resolve: source => slugify(source.name),
      },
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //query the graphql for all the folders in Galleries to create pages
  //then query for each image in the folders to create a page for that image. 
  const result = await graphql(`
    query {
      allDirectory(filter: { sourceInstanceName: {eq: "galleryImages"}, relativePath: { ne: "" } }) {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
      allFile(filter: { sourceInstanceName: {eq: "galleryImages"}, ext: { ne: ".md" } }, sort: {fields: relativeDirectory}) {
        edges {
          node {
            id
            name
            slug
            relativeDirectory
          }
        }
      }
    }
  `)

  let allAlbums = result.data.allDirectory.edges
  //console.log(allAlbums)
  let allAlbumImages = result.data.allFile.edges
 // console.log(allAlbumImages)
  //create a page for each album
  result.data.allDirectory.edges.forEach(({ node }) => {
    

    createPage({
      path: `/albums/${node.slug}`,
      component: path.resolve(`./src/templates/album-page-template.js`),
      context: {
        slug: node.slug,
        name: node.name,
      },
    })
    //create new array for the  album
    const albumArray = allAlbumImages.filter(photo => photo.node.relativeDirectory === node.name);
    //console.log( albumArray )

    albumArray.forEach(({ node }, index, arr) => {  
      const nextSlug = index === 0 ? `` : arr[index - 1].node.slug
      const prevSlug = index === arr.length - 1 ? `` : arr[index + 1].node.slug
      
      createPage({
        path: `/albums/${node.slug}`,
        component: path.resolve(`./src/templates/image-page-template.js`),
        context: {
          slug: node.slug,
          next: nextSlug,
          prev: prevSlug
        },
      })
    })
   
  })

 


}

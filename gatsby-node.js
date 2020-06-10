//const fs = require("fs")
const path = require("path")
//const { createFilePath } = require(`gatsby-source-filesystem`)

// define the File type to add a slug property
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
        type File implements Node {
            id: ID!
            slug: String!
            Image: Image

        }
        type Image implements Node{
            name: String!
            slug: String!
        }
        type Directory implements Node {
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
      allDirectory(filter: { relativePath: { ne: "" } }) {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
      allFile(filter: { ext: { ne: ".md" } }, sort: {fields: relativeDirectory}) {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `)

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
  })

  //photos = result.data.allFile.edges;
   //console.log(result.data.allFile.edges)
//   //create a page for each image
  result.data.allFile.edges.forEach(({ node }, index, arr) => {  
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

 

//   //create a page for each image
//   result.data.allFile.edges.map(({ node }, index) => {
//     //photos.map((photo, index) =>

//     createPage({
//       path: `/albums/${node.slug}`,
//       component: path.resolve(`./src/templates/image-page-template.js`),
//       context: {
//         slug: node.slug,
//         prev: node[index-1].slug,
// 		next: node[index+1].slug,
//       },
//     })
//   })


}

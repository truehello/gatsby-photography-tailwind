const fs = require ('fs');
const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.sourceNodes = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type Photo implements Node {
//       name: String!
//       id: String!
//       slug: String!
//     }
//   `
//   createTypes(typeDefs)
// }

 exports.onCreateNode = ({ node, actions }) => {

//    // Quick-and-dirty helper to convert strings into URL-friendly slugs.
//   const slugify = str => {
//     const slug = str
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, '-')
//       .replace(/(^-|-$)+/g, '');

//     return `/${basePath}/${slug}`.replace(/\/\/+/g, '/');
//   };



  const { createNodeField } = actions
  if (node.internal.type === `File`) {
    const slug = createFilePath({ node, basePath: `images/Galleries` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allFile(filter: { ext: { ne: ".md" } }) {
        edges {
          node {
            id
            relativePath
            name
            fields {
              slug
            }
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `)
  
  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: `/albums${node.fields.slug}`,
      component: path.resolve(`./src/templates/image-page-template.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/albums/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/album-page-template.js`),
      context: {
        slug: node.frontmatter.slug,
        title: node.frontmatter.title,
      },
    })
  })
}


// exports.sourceNodes = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type Photo implements Node {
//       name: String!
//       id: String!
//       slug: String!
//     }
//   `
//   createTypes(typeDefs)
// }

// exports.createResolvers = ({ createResolvers }, options) => {
//   const basePath = options.basePath || '/';

//   // Quick-and-dirty helper to convert strings into URL-friendly slugs.
//   const slugify = str => {
//     const slug = str
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, '-')
//       .replace(/(^-|-$)+/g, '');

//     return `/${basePath}/${slug}`.replace(/\/\/+/g, '/');
//   };

//   createResolvers({
//     Photo: {
//       slug: {
//         resolve: source => slugify(source.name)
//       }
//     }
//   });
// };



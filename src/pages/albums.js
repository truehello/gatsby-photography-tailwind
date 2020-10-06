import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
//import albumThumbnail from "../components/albumThumbnail"

const ALL_ALBUM_QUERY = graphql`
  query AlbumQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "galleryImages" }
        ext: { eq: ".md" }
      }
    ) {
      edges {
        node {
          id
          relativeDirectory
          childMarkdownRemark {
            frontmatter {
              title
              slug
              featureImageURL {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_tracedSVG
                    presentationWidth
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
const Albums = () => (
  <StaticQuery
    query={ALL_ALBUM_QUERY}
    render={({ allFile }) => (
      <Layout>
        <SEO title="Albums" />
        <section className="mt-24">
        <h1 className="text-lg md:text-xl tracking-widest uppercase font-light py-4">
          Albums
        </h1>

        <div className="grid grid-cols grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {allFile.edges.map(edge => (
            //console.log("edge", edge)
            <div key={edge.node.id}>
            <Link
              to={`/albums/${edge.node.childMarkdownRemark.frontmatter.slug}`}
              className="overflow-hidden"
              
            >
              <Img
                className="transform hover:-translate-y-1 hover:scale-125 transition-transform duration-700 ease-in-out"
               
                fluid={
                  edge.node.childMarkdownRemark.frontmatter.featureImageURL
                    .childImageSharp.fluid
                }
                alt={edge.node.childMarkdownRemark.frontmatter.title}
              />
            </Link>
             <h3 className="mt-4 text-normal text-center tracking-tight">
             {edge.node.childMarkdownRemark.frontmatter.title}
             </h3>
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allFile.edges.map(({ edge }, i) => (
            <Link
              key={edge.node.id}
              to={`/albums/${edge.node.childMarkdownRemark.frontmatter.slug}`}
              className="overflow-hidden"
            >
              <Img
                fluid={edge.node.childMarkdownRemark.frontmatter.featureImageURL
                  .childImageSharp.fluid}
                className="transform hover:-translate-y-1 hover:scale-125 transition-transform duration-700 ease-in-out"
              />
            </Link>
          ))}
        </div> */}



        <Link
          to="/"
          className="text-normal text-gray-500 tracking-tight underline hover:no-underline"
        >
          Go back to the homepage
        </Link>
        </section>
      </Layout>
    )}
  />
)

export default Albums

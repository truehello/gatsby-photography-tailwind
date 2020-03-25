import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import ImageList from "../components/imagelist"

const ALL_ALBUM_QUERY = graphql`
  query AlbumQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date(fromNow: true)
          }
        }
      }
    }
  }
`
const Albums = () => (
  <StaticQuery
    query={ALL_ALBUM_QUERY}
    render={({ allMarkdownRemark }) => (
      <Layout>
        <SEO title="Albums" />
        <h1>Albums</h1>
        <ul>
          {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/albums/${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )}
  />
)

export default Albums

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import albumThumbnail from "../components/albumThumbnail"

const ALL_ALBUM_QUERY = graphql`
  query AlbumQuery {
    allDirectory(filter: {relativePath: {ne: ""}}, sort: {order: DESC, fields: birthTime}) {
    edges {
      node {
        name
        slug
      }
    }
  }
  }
`
const Albums = () => (
  <StaticQuery
    query={ALL_ALBUM_QUERY}
    render={({ allDirectory }) => (
      <Layout>
        <SEO title="Albums" />
        <h1>Albums</h1>
       
        <ul>
          {allDirectory.edges.map(edge => (
            <li key={edge.node.slug}>
              <Link to={`/albums/${edge.node.slug}`}>
                {edge.node.name}
               
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

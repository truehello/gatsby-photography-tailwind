import React from "react"
import { graphql } from "gatsby"

const albumThumbnail = ({ albumName }) => {
  const data = graphql`
    query($albumName: String!) {
      allFile(
        filter: { relativeDirectory: { eq: $albumName }, ext: { ne: ".md" } }
        limit: 1
      ) {
        edges {
          node {
            id
            name
            slug
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_tracedSVG
                presentationWidth
              }
            }
          }
        }
      }
      allDirectory(filter: { name: { eq: $albumName } }) {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `

  console.log("data = " + data)

  return <div>hello</div>
}

export default albumThumbnail

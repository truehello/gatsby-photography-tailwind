import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
//import Layout from "../components/layout"
import SEO from "../components/seo"

const ImagePageTemplate = ({ data }) => {
  const { image, next, prev } = data
  const albumSlug = image.slug.replace(/\/[^/]+$/, "")

  return (
    <>
      <SEO title={image.name} />
      <Link to={`albums/${albumSlug}`}>back to {albumSlug}</Link>
      <Link to={`albums/${prev.slug}`}>prev</Link>
      <Link to={`albums/${next.slug}`}>next</Link>

      <Img fluid={image.childImageSharp.fluid} alt={image.name} />
    </>
  )
}

export default ImagePageTemplate

export const query = graphql`
  query($slug: String!, $next: String!, $prev: String!) {
    image: file(slug: { eq: $slug }) {
      id
      slug
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
      name
    }
    next: file(slug: { eq: $next }) {
      slug
    }
    prev: file(slug: { eq: $prev }) {
      slug
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

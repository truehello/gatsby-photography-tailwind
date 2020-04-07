import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
//import Layout from "../components/layout"
import SEO from "../components/seo"

const ImagePageTemplate = ({ data }) => {
  //console.table(data)
  //const nextSlug = $nextSlug
 // console.log(data.site.siteMetadata.title)
 const { image, next, prev } = data

  return (
    <>
   
      <SEO title={image.name} />
       <Img fluid={image.childImageSharp.fluid} alt={image.name} /> 
    </>
  )
}

export default ImagePageTemplate

export const query = graphql`
  query($slug: String!, $next: String!, $prev: String! ) {
    image: file( slug: { eq: $slug } ) {
      id
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
      name
    }
    next: file( slug: { eq: $next } ) {
      slug
    }
    prev: file( slug: { eq: $prev } ) {
      slug
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

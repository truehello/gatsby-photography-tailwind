import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ImagePageTemplate = ({ data }) => {
  //console.table(data.file.id)
 // console.log(data.site.siteMetadata.title)
  return (
    <Layout>
      <SEO title={data.file.name} />
       <Img fluid={data.file.childImageSharp.fluid} alt={data.file.name} /> 
    </Layout>
  )
}

export default ImagePageTemplate

export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      id
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
      name
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

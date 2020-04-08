import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
//import Layout from "../components/layout"
import SEO from "../components/seo"
import NextButton from "../components/nextButton"
import PrevButton from "../components/prevButton"


const ImagePageTemplate = ({ data }) => {
  const { image, next, prev } = data
  const albumSlug = image.slug.replace(/\/[^/]+$/, "")

  return (
    <div>
      <SEO title={image.name} />

      <Link to={`/albums/${albumSlug}`} className="p-2 text-base text-gray-500 tracking-tight underline hover:no-underline">back to {albumSlug}</Link>

      <div className="flex w-full h-full items-center">

        {prev && (

          // <Link to={`/albums/${prev.slug}`} className="">
          //   prev
          // </Link>
          <PrevButton  name={prev.name} slug={prev.slug} />
        )}

        <Img
          fluid={image.childImageSharp.fluid}
          alt={image.name}
          className="m-4 flex-1 max-w-full h-auto"
        />

        {next && (
          // <Link to={`/albums/${next.slug}`} className="">
          //   next
          // </Link>
          <NextButton name={next.name} slug={next.slug} />
        )}
      </div>
    </div>
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
      name
    }
    prev: file(slug: { eq: $prev }) {
      slug
      name
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

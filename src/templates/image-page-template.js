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

      <Link
        to={`/albums/${albumSlug}`}
        className="p-2 text-base text-gray-800 tracking-tight underline hover:no-underline absolute top-0"
      >
        back to {albumSlug}
      </Link>

      <div className="h-screen flex justify-between items-center">
        {next ? <PrevButton name={next.name} slug={next.slug} /> : <div></div>}

        <div className="w-full md:w-3/5">
          <Img
            fluid={image.childImageSharp.fluid}
            alt={image.name}
            className="absolute"
          />
        </div>

        {prev ? (
          <NextButton name={prev.name} slug={prev.slug} className="absolute" />
        ) : (
          <div></div>
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

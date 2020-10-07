import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Helmet from "react-helmet"
//import Layout from "../components/layout"
import SEO from "../components/seo"
import NextButton from "../components/nextButton"
import PrevButton from "../components/prevButton"

const ImagePageTemplate = ({ data }) => {
  const { image, next, prev, site } = data
  const albumSlug = image.slug.replace(/\/[^/]+$/, "")
  const url = site.siteMetadata.siteUrl+`/albums/`+image.slug
  const imgPath = site.siteMetadata.siteUrl+image.childImageSharp.fluid.originalImg
  const imgTitle = site.siteMetadata.title+ ` || `+image.name
  const imgDescription = site.siteMetadata.title+` `+image.name
  return (
    <div>
      <SEO title={image.name} />
      <Helmet>
        {site.siteMetadata.title && <meta property="og:site_name" content={site.siteMetadata.title} />}
       
        <meta property="og:locale" content={site.siteMetadata.ogLanguage} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={imgTitle} />
        <meta property="og:description" content={imgDescription} />
        <meta property="og:image" content={imgPath} />
        <meta property="og:image:alt" content={image.name} />


        {site.siteMetadata.twitter && <meta name="twitter:creator" content={site.siteMetadata.twitter} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site.siteMetadata.title} />
        <meta name="twitter:description" content={imgDescription} />
        <meta name="twitter:image" content={imgPath} />
        <meta name="twitter:image:alt" content={imgDescription} />
      </Helmet>

      <Link
        to={`/albums/${albumSlug}`}
        className="p-2 text-base text-gray-800 tracking-tight underline hover:no-underline absolute top-0"
      >
        back to {albumSlug}
      </Link>

      <div className="h-screen flex justify-between items-center">
        {next ? <PrevButton name={next.name} slug={next.slug} /> : <div></div>}

        <div className="w-full lg:w-4/5 xl:w-3/5">
          <Img
            fluid={image.childImageSharp.fluid}
            alt={image.name}
            className="absolute"
          />
        </div>

        {prev ? <NextButton name={prev.name} slug={prev.slug} /> : <div></div>}
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
          originalImg
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
        siteUrl
        ogLanguage
        description
        facebook
        twitter
      }
    }
  }
`

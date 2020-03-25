import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import ImageList from "../components/imagelist"
import LightBox from "../components/lightbox"

const AlbumTemplate = ({ data }) => {
  // console.log(data.allMarkdownRemark.edges[0].node)

  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleOpen = i => e => {
    setShowLightbox(true)
    setSelectedImage(i)
  }
  const handleClose = () => {
    setShowLightbox(false)
    setSelectedImage(null)
  }
  const handlePrevRequest = (i, length) => e => {
    setSelectedImage((i - 1 + length) % length)
  }
  const handleNextRequest = (i, length) => e => {
    setSelectedImage((i + 1) % length)
  }

  const images = data.allFile.edges

  return (
    <Layout>
      <SEO title="Album Page" />
      <Link to="/albums">Albums</Link>
      <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>

      {/* <ImageList data={data.allFile.edges} /> */}

      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr 1fr`,
          gridGap: `10px`,
        }}
      >
        {images.map(({ node }, i) => (
          // <div key={node.id}>
          //   <Link to={node.fields.slug}>
          //     <Img fluid={node.childImageSharp.fluid} />
          //   </Link>
          // </div>

          <button onClick={handleOpen(i)} key={node.id}>
            <Img fluid={node.childImageSharp.fluid} />
          </button>
        ))}

        {showLightbox && selectedImage !== null && (
          <LightBox
            images={images}
            handleClose={handleClose}
            handleNextRequest={handleNextRequest}
            handlePrevRequest={handlePrevRequest}
            selectedImage={selectedImage}
          />
        )}

      </div>
    </Layout>
  )
}

export default AlbumTemplate

export const query = graphql`
  query($title: String!) {
    allFile(filter: { relativeDirectory: { eq: $title }, ext: { ne: ".md" } }) {
      edges {
        node {
          id
          name
          fields {
            slug
          }
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
              presentationWidth
            }
          }
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { title: { eq: $title } } }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`

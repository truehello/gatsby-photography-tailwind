import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import ImageList from "../components/imagelist"
//import LightBox from "../components/lightbox"

const AlbumTemplate = ({ data }) => {
  // console.log(data.allMarkdownRemark.edges[0].node)

//   const [showLightbox, setShowLightbox] = useState(false)
//   const [selectedImage, setSelectedImage] = useState(null)

//   const handleOpen = i => e => {
//     setShowLightbox(true)
//     setSelectedImage(i)
//   }
//   const handleClose = () => {
//     setShowLightbox(false)
//     setSelectedImage(null)
//   }
//   const handlePrevRequest = (i, length) => e => {
//     setSelectedImage((i - 1 + length) % length)
//   }
//   const handleNextRequest = (i, length) => e => {
//     setSelectedImage((i + 1) % length)
//   }

  const images = data.allFile.edges

  return (
    <Layout>
      <SEO title="Album Page" />
      <Link to="/albums">Albums</Link>
      {/* <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1> */}
      <h1>{data.allDirectory.edges[0].node.name}</h1>
      {/* <ImageList data={data.allFile.edges} /> */}

      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr 1fr`,
          gridGap: `2px`,
        }}
      >
        {images.map(({ node }, i) => (
        //   <button
        //     onClick={handleOpen(i)}
        //     key={node.id}
        //     style={{
        //       padding: `0`,
        //       border: `none`,
        //       background: `none`,
        //       cursor: `pointer`,
        //     }}
        //   >
        //     <Img fluid={node.childImageSharp.fluid} />
        //   </button>
        <Link to={`/albums/${node.slug}`} >
        <Img fluid={node.childImageSharp.fluid} />
        </Link>

        ))}

        {/* {showLightbox && selectedImage !== null && (
          <LightBox
            images={images}
            handleClose={handleClose}
            handleNextRequest={handleNextRequest}
            handlePrevRequest={handlePrevRequest}
            selectedImage={selectedImage}
          />
        )} */}


      </div>
    </Layout>
  )
}

export default AlbumTemplate

export const query = graphql`
  query($name: String!) {
    allFile(filter: { relativeDirectory: { eq: $name }, ext: { ne: ".md" } }) {
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
    allDirectory(filter: { name: { eq: $name } }) {
      edges {
        node {
          name
          id
        }
      }
    }
    # allMarkdownRemark(filter: { frontmatter: { title: { eq: $title } } }) {
    #   edges {
    #     node {
    #       id
    #       frontmatter {
    #         title
    #       }
    #     }
    #   }
    # }
  }
`

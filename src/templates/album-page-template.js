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
      <section className="mt-24">
      <Link to="/albums" className="text-normal text-gray-500 tracking-tight underline hover:no-underline">Albums</Link>

      <h1 className="text-lg md:text-xl tracking-widest uppercase font-light py-4">{data.allDirectory.edges[0].node.name}</h1>

      <div className="grid grid-cols grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
     
      >
        {images.map(({ node }, i) => (
          <Link to={`/albums/${node.slug}`} className="overflow-hidden">
            <Img fluid={node.childImageSharp.fluid}  className="transform hover:-translate-y-1 hover:scale-125 transition-transform duration-700 ease-in-out" />
          </Link>
        ))}
      </div>
      </section>
    </Layout>
  )
}

export default AlbumTemplate

export const query = graphql`
  query($name: String!) {
    allFile(filter: { relativeDirectory: { eq: $name }, ext: {ne: ".md"}}, sort: {order: ASC, fields: name}) {
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

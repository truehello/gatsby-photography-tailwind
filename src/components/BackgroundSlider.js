import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BackgroundSlider = () => {
  const [index, setIndex] = useState(0)

  const bgdata = useStaticQuery(graphql`
    query BackgroundImages {
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
          id
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  //Minus 1 for array offset from 0
  const length = bgdata.backgrounds.nodes.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const node = bgdata.backgrounds.nodes[index]

  //console.log(JSON.stringify(index, 2, null))
  //console.log(JSON.stringify(node.id, 2, null))
  //const bgImages = bgdata.backgrounds.nodes

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen overflow-y-hidden"
      style={{ zIndex: -10 }}
    >
      {/* <figure className="flex h-auto" style={{width:`600%`}} > */}
      <Img
        fluid={node.childImageSharp.fluid}
        key={node.id}
        alt={node.relativePath}
        className="w-full"
      />

      {/* {bgImages.map(item => (
        <Img fluid={item.childImageSharp.fluid} key={item.id} alt={item.relativePath}  className="w-full"/>
      ))} */}
      {/* </figure> */}
      <div>
        <button onClick={() => handlePrevious()} className="relative top-50">
          Previous
        </button>
        <button onClick={() => handleNext()} className="absolute bottom-50">
          Next
        </button>
      </div>
      
    </div>
  )
}

export default BackgroundSlider

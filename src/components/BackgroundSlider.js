import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const BackgroundSlider = () => {
  const bgdata = useStaticQuery(graphql`
    query BackgroundImages {
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
          id
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_tracedSVG
              presentationWidth
            }
          }
        }
      }
    }
  `)

  //Minus 1 for array offset from 0
  const length = bgdata.backgrounds.nodes.length - 1

  const [counter, changeCounter] = useState(0)

  const imageNode = bgdata.backgrounds.nodes[counter]

  useEffect(() => {
    const interval = setInterval(() => {
      // let  prevCounter
     
      if (counter === length) {
        changeCounter(0)
      } else {
        changeCounter(prevCounter => prevCounter + 1)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [counter, length])

  return (
      <div
        className="absolute top-0 left-0 w-screen h-screen "
        style={{ zIndex: -10 }}
      >
        <Img
          fluid={imageNode.childImageSharp.fluid}
          key={imageNode.id}
          alt={imageNode.relativePath}
          className="h-screen"
        />
      </div>

   
  )
}

export default BackgroundSlider

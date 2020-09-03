import React from "react"
import {  Link } from "gatsby"

import BackgroundSlider from '../components/BackgroundSlider'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {  

  return (
    <Layout>
      <SEO title="Home" />
     <div className="flex flex-col items-center justify-center" style={{height:90+'vh'}}>
     <section className="flex flex-col items-center justify-between">
      <p className="text-lg md:text-xl tracking-widest uppercase text-center font-light">Moments. Stories. Photography</p>
      <h1 className="text-3xl md:text-5xl font-semibold my-4 uppercase text-center">Gatsby <span className="font-light">Photography</span></h1>
      <p className="text-lg md:text-xl tracking-widest uppercasetext-center font-light">Now go build something great.</p>
     
      <Link className="mt-8 bg-gray-900 text-gray-100 py-4 px-8 rounded shadow" to="/albums/">View Photos</Link>
      </section>
</div>
     <BackgroundSlider />
    </Layout>
  )
}

export default IndexPage

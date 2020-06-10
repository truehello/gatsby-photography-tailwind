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
     
     <section className="flex flex-col items-center justify-between p-12 rounded-lg mt-10 bg-white opacity-75 shadow-lg">
      <h1 className="text-3xl font-semibold mb-4">Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
     
      <Link className="mt-6" to="/albums/">Go to Albums</Link>
      </section>

     <BackgroundSlider />
    </Layout>
  )
}

export default IndexPage

import React from "react"
import Link from "gatsby-link"

import Layout from "../components/layout"
import AboutImage from "../images/gatsby-astronaut.png"



const About = () => (
  <Layout>
    <div className="flex flex-col items-center ">
      <section className="max-w-3xl mt-24 flex">
        <img
          src={AboutImage}
          alt="Gatsby McGatsby "
          className="w-64 h-64 rounded-full mr-8 mt-20 border border-gray-500"
        />


        <div>
          <h1 className="text-lg md:text-xl tracking-widest uppercase font-light mb-10">
            About
          </h1>
          <p className="mt-4 text-base md:text-lg leading-normal ">
            I’m Gatsby McGatsby, an internationally famous photographer,
            with a documentary approach on capturing beautiful life moments. I’m
            also an astronaut, and a ferret father!
          </p>

          <p className="mt-4 text-base md:text-lg leading-normal">
            My vision is to help you look and feel your very best when we work
            together. The people who I work with are not just my clients — they
            are my inspiration.
          </p>

          <p className="mt-4 text-base md:text-lg leading-normal">
            Regardless of who you are, we all have something to give and
            something to learn! I hope that we can work together to create
            something special.
          </p>

          <p className="mt-4 text-base md:text-lg leading-normal">
            If that sounds like someone you’d like to collaborate with then{" "}
            <Link to="/contact" className="underline hover:no-underline">
              get in touch.
            </Link>
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default About

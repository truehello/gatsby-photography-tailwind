import React from "react"


import Layout from "../components/Layout"
import ContactForm from "../components/contactForm"


const Contact = () => (
  <Layout>
    <div className="flex flex-col items-center ">
      <section className="mt-24 w-full p-4 md:w-4/6">
        
        
          <h1 className="text-lg md:text-xl tracking-widest uppercase font-light mb-10">
            Contact
          </h1>

          <ContactForm />
       
    
      </section>
    </div>
  </Layout>
)

export default Contact

import React from "react"

const ContactForm = props => {
  return (
    <section id="contact">
      
       
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thanks/"
          >
            {/* You still need to add the hidden input with the form name to your JSX form to work with netlify and gatsby*/}
            <input type="hidden" name="form-name" value="contact" aria-hidden="true" />
            <input type="hidden" name="bot-field" aria-hidden="true" />

            <div className="flex flex-col mb-4">
              <label className="block uppercase tracking-wide text-sm">
                Name
                <input
                  className="w-full shadow-inner p-4 border-0 text-gray-700"
                  placeholder="Fred Flintstone"
                  type="text"
                  name="name"
                  aria-label="Name"
                />
              </label>
            </div>

            <div className="flex flex-col mb-4">
              <label className="block uppercase tracking-wide text-sm">
                Email
                <input
                  className="w-full shadow-inner p-4 border-0 text-gray-700"
                  placeholder="fred@slateindustries.com"
                  type="email"
                  name="email"
                  aria-label="email"
                  required
                />
              </label>
            </div>

            <div className="flex flex-col mb-4">
              <label className="block uppercase tracking-wide text-sm">
                Message
                <textarea
                  className="w-full shadow-inner p-4 border-0 text-gray-700"
                  placeholder="Yabba Dabba Do"
                  type="text"
                  name="message"
                  aria-label="message"
                  required
                />
              </label>
            </div>

            <button
              className="bg-gray-900 text-gray-100 py-4 px-8 rounded shadow"
              type="submit"
              aria-label="Submit"
            >
              Send
            </button>
          </form>
      
     
    </section>
  )
}

export default ContactForm

import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"


export const Header = ({ siteTitle }) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header className="fixed w-full z-10 top-0 shadow-large">
      <div>
        <nav className="fixed w-full z-10 top-0">
          <div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
            <div className="pl-4">
              <h1 className="logo pt-0">
                <Link
                  className="text-base no-underline hover:no-underline font-extrabold lg:text-xl"
                  to="/"
                >
                  {siteTitle}
                </Link>
              </h1>
            </div>

            <div className="block lg:hidden pr-4">
              <button
                onClick={() => toggleExpansion(!isExpanded)}
                id="nav-toggle"
                className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>

            <div
  
              id="nav-content"
              className={`${ isExpanded ? `block bg-opacity-100` : `hidden bg-opacity-0` } w-full flex flex-col lg:flex-row items-center lg:w-auto lg:flex pb-2`}
            >
              <ul className="flex flex-col items-center lg:flex-row">
              <li className="lg:mr-3">
                  <Link
                    className="inline-block no-underline hover:text-underline py-2 px-4"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                
                <li className="lg:mr-3">
                  <Link
                    className="inline-block no-underline hover:text-underline py-2 px-4"
                    to="/albums"
                  >
                    Albums
                  </Link>
                </li>

                <li className="lg:mr-3">
                  <Link
                    className="inline-block no-underline hover:text-underline py-2 px-4"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header



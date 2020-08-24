import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="flex w-full items-center justify-center p-4 z-40 top-0 bg-gray-100 opacity-50">
    <div className="flex justify-between">
      <h1>
        <Link to="/" className="text-xl font-semibold text-gray-900 tracking-tight">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header



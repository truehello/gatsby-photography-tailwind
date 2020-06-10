import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="flex w-full items-center justify-center p-4 w-full z-40 top-0 bg-gray-100 opacity-75">
    <div className="flex justify-between">
      <h1>
        <Link to="/" className="text-xl tracking-tight opacity-100">
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

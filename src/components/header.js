import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav nav-dark">
      <h1 className="logo">
        D&D
      </h1>
      <div className="nav-container">
        <Link to="/" className="nav-links">Home</Link>
        <Link to="/logs" className="nav-links">Logs</Link>
        <Link to="/char" className="nav-links">Char</Link>
        <Link to="/maps" className="nav-links">Maps</Link>
      </div>
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

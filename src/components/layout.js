import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../styles/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <div>
        <main className="font-bask">{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

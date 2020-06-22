import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../styles/main.scss"

const sidebarLayout = ({ children }) => {
  return (
    <>
      <Header/>
      <div className="grid wiki">
          {children}
      </div>
    </>
  )
}

sidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default sidebarLayout

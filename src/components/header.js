import { Link } from "gatsby"
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'
import React from "react"

import logo from "../images/logo.svg"

function Header() {
  const data = useStaticQuery(graphql`
    query Icons {
      icons: allFile(filter: {relativeDirectory: {eq: "icons"}}) {
        nodes {
          id
          childImageSharp {
            fixed(width: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  const icons = data.icons.nodes.map(icon => (
    <Img fixed={icon.childImageSharp.fixed} alt={icon.id} key={icon.id} />
  ))

  return (
    <header>
      <div className="nav nav-dark">
        <h1 className="logo m-1">
          <Link to="/"><img src={logo} alt="Website Logo"/></Link>
        </h1>
        <div className="nav-container">
          <Link to="/" className="nav-links">{icons[0]}<br/>Home</Link>
          <Link to="/logs" className="nav-links">{icons[1]}<br/>Logs</Link>
          <Link to="/wiki" className="nav-links">{icons[2]}<br/>Wiki</Link>
          <Link to="/char" className="nav-links">{icons[3]}<br/>Char</Link>
          <Link to="/maps" className="nav-links">{icons[5]}<br/>Maps</Link>
        </div>
      </div>
    </header>
  )
}


export default Header

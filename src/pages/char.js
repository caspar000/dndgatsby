import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const char = ({data}) => {
  const charList = data.allMarkdownRemark.edges.map(char => (
   <Link to={char.node.frontmatter.path} className="card shadow" key={char.node.id}>
      <Img fluid={char.node.frontmatter.image.childImageSharp.fluid} alt={char.node.frontmatter.name} />
      <h1>{char.node.frontmatter.name}</h1>
      <span>{char.node.frontmatter.class}</span>
      <div className="lvl">2</div>
      <div className="tri"/>
   </Link>      
  ))

  return (
    <Layout className="container shadow">
      <div className="grid p-1">
        {charList}
      </div>
    </Layout>
  )
}

export const pageQuaery = graphql`
  query Characters{
    allMarkdownRemark(
      sort: {fields: [frontmatter___id]},
      filter: {fileAbsolutePath: {regex: "/(chars)/"}}
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            name
            class
            image{
              childImageSharp{
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default char

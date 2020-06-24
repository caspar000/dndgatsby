import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const char = ({data}) => {
  const charList = data.allMarkdownRemark.edges.map(char => (
   <Link to={char.node.frontmatter.path} className="card shadow" key={char.node.id}>
      <Img fluid={char.node.frontmatter.image.childImageSharp.fluid} alt={char.node.frontmatter.name} />
      <h2>{char.node.frontmatter.name}</h2>
      <span>{char.node.frontmatter.class}</span>
      <div className="lvl">2</div>
      <div className="tri"/>
      <div className="sq1"/>
      <div className="sq2"/>
      <div className="icon"><Img fixed={char.node.frontmatter.icon.childImageSharp.fixed} alt={char.node.frontmatter.name} /></div>
   </Link>      
  ))

  return (
    <Layout>
      <div className="container shadow" style={{padding: '0'}}>
        <h1 className="banner">Player Characters</h1>
        <div className="grid p-1">
          {charList}
        </div>
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
            icon {
              childImageSharp{
                fixed(width: 75){
                  ...GatsbyImageSharpFixed
                }
              }
            }
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

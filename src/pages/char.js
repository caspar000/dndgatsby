import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const char = ({data}) => {
  const imageList = data.img.nodes.map(img => (
     <Img fluid={img.childImageSharp.fluid} alt={img.id} key={img.id} />
  ))

  const charList = data.allMarkdownRemark.edges.map((char, index) => (
   <Link to={char.node.frontmatter.path} className="card shadow" key={char.node.id}>
     {imageList[index]}
     <h1>{char.node.frontmatter.name}</h1>
     <span>{char.node.frontmatter.class}</span>
     <div className="lvl">2</div>
     <div className="tri"/>
   </Link>      
  ))

  return (
    <Layout>
      <div className="grid p-1">
        {charList}
      </div>
    </Layout>
  )
}

export const pageQuaery = graphql`
  query Characters{
    img: allFile(
      sort: {fields: name},
      filter: {relativeDirectory: {eq: "chars"}}
    ) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
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
          }
        }
      }
    }
  }
`

export default char

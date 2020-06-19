import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'

function Sidebar() {
  const data = useStaticQuery(graphql`
    query Wiki{
      allMarkdownRemark (
        sort: {fields: [frontmatter___id]},
        filter: {fileAbsolutePath: {regex: "/(wiki)/"}}
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)

  return (
    <div className="sidebar">
      {data.allMarkdownRemark.edges.map((wiki) => (
        <div key={wiki.node.id}>
          <Link to={wiki.node.frontmatter.path}>{wiki.node.frontmatter.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default Sidebar
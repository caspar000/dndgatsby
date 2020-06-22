import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query Log{
      allMarkdownRemark (
        sort: {fields: [frontmatter___title], order: DESC},
        filter: {fileAbsolutePath: {regex: "/(logs)/"}}
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
    <>
    <div className="sidebar shadow">
      {data.allMarkdownRemark.edges.map((log) => (
        <div key={log.node.id}>
          <Link to={log.node.frontmatter.path}>{log.node.frontmatter.title}</Link>
        </div>
      ))}
    </div>
    </>
  )
}


export default Sidebar
import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query Wiki{
      allMarkdownRemark (
        sort: {fields: [frontmatter___title]},
        filter: {fileAbsolutePath: {regex: "/(lore)/"}}
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              tags
            }
          }
        }
      }
    }
  `)

  return (
    <>
    <div className="sidebar shadow">
      {data.allMarkdownRemark.edges.map((wiki) => (
        <div key={wiki.node.id}>
          <Link to={wiki.node.frontmatter.path}>{wiki.node.frontmatter.title}</Link>
        </div>
      ))}
    </div>
    </>
  )
}


export default Sidebar
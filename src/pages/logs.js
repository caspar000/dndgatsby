import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/layout"

const logs = ({data}) => {
  return (
    <Layout>
      <div>
        <h1>Logs</h1>
        {data.allMarkdownRemark.edges.slice(0).reverse().map(log => (
          <div key={log.node.id}>
            <hr/>
            <h3>{log.node.frontmatter.title}</h3>
            <small>{log.node.frontmatter.date}</small>
            <br/><br/>
            <Link to={log.node.frontmatter.path}>Read More</Link>
            <br/><br/>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuaery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(log)/"}}
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`

export default logs

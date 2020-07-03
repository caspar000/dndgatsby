import React from 'react'
import {Link, graphql} from 'gatsby'

import LogSidebar from '../components/logSidebar'
import Layout from '../components/layout'

export default function Template({data}) {
  const log = data.markdownRemark

  return (
    <Layout>
      <LogSidebar />
      <main className="p-1">
        <div className="container shadow" key={log.id}>
          <Link to="/logs">Go Back</Link>
          <hr />
          <h1>{log.frontmatter.title}</h1>
          <h4>{log.frontmatter.date}</h4>
          <div dangerouslySetInnerHTML={{__html: log.html}} />
        </div>
      </main>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}){
      html
      frontmatter{
        path
        title
        date
      }
    }
  }
`
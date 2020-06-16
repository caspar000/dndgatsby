import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from "../components/layout"

export default function Template({data}) {
  const char = data.markdownRemark

  return (
    <Layout>
      <div>
        <Link to="/char">Go Back</Link>
        <hr />
        <h1>{char.frontmatter.name}</h1>
        <h4>{char.frontmatter.class}</h4>
        <div dangerouslySetInnerHTML={{__html: char.html}} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query CharByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}){
      html
      frontmatter{
        path
        name
        class  
      }
    }
  }
`
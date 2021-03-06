import React from 'react'

import { graphql, StaticQuery } from 'gatsby'

import Sidebar from '../components/loreSidebar'
import Post from '../components/post'
import Layout from '../components/layout'

export default function Template({data}) {
  const lore = data.markdownRemark

  return (
    <Layout>
      <Sidebar />
      <main className="p-1">
        <div className="container shadow">
          <StaticQuery query={loreQuery} render={data => {
            return (
              <Post 
              title={lore.frontmatter.title}
              author={lore.frontmatter.author}
              path={lore.frontmatter.path}
              date={lore.frontmatter.date}
              html={lore.html}
              fluid={lore.frontmatter.image.childImageSharp.fluid}
              tags={lore.frontmatter.tags}
              />
            )}}/>
        </div>
      </main>
    </Layout>
  )
}

const loreQuery = graphql`
  query WikiPostByPath ($path: String!){
    markdownRemark(
      frontmatter: {path: {eq: $path}}
    ) {
      html
      frontmatter{
        path
        title
        author
        date
        image{
          childImageSharp{
            fluid(maxWidth: 1000){
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
      excerpt
    }
  }
`
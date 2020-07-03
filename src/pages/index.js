import React from "react"
import {setConfig} from 'react-hot-loader'
import {graphql, StaticQuery} from 'gatsby'

import SEO from '../components/seo'
import Post from '../components/post'
import Layout from '../components/layout'
import IndexSidebar from '../components/indexSidebar'

setConfig({
  showReactDomPatchNotification: false
})

function IndexPage () {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container index-grid">
        <div>
          <StaticQuery query={indexQuery} render={data => {
            return (
              data.allMarkdownRemark.edges.map(anno => (
                <div key={anno.node.id}>
                  <Post 
                  id={anno.node.id}
                  title={anno.node.frontmatter.title}
                  subtit={anno.node.frontmatter.subtit}
                  author={anno.node.frontmatter.author}
                  date={anno.node.frontmatter.date}
                  html={anno.node.html}
                  fluid={anno.node.frontmatter.image.childImageSharp.fluid}
                  />
                </div>
              ))
            )
          }}/>
        </div>
        <IndexSidebar />
      </div>
    </Layout>
  )
}


const indexQuery = graphql`
  query index{
    allMarkdownRemark (
      sort: {fields: [frontmatter___id], order: DESC},
      filter: {fileAbsolutePath: {regex: "/(anno)/"}}
      limit: 2
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            subtit
            author
            image{
              childImageSharp{
                fluid(maxWidth: 1200){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
          }
        }
      }
    }
  }
`

export default IndexPage

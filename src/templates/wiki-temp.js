import React from 'react'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'

import Header from '../components/header'
import Sidebar from '../components/sidebar'

export default function Template({data}) {
  const log = data.markdownRemark
  const img = data.img.nodes[log.frontmatter.imgid]

  return (
    <div>
      <Header />
      <div className="grid wiki">
        <Sidebar />
        <div className="container shadow">
          <h1>Wiki</h1>
          <Link to="/wiki">Go Back</Link>
          <Img fluid={img.childImageSharp.fluid} alt={log.frontmatter.title} />
          <h1>{log.frontmatter.title}</h1>
          <h4>{log.frontmatter.date}</h4>
          <div dangerouslySetInnerHTML={{__html: log.html}} />
        </div>
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query WikiPostByPath($path: String!) {
    img: allFile(
      filter: {relativeDirectory: {eq: "wiki"}},
      sort: {fields: name}
    ) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    markdownRemark(frontmatter: {path: {eq: $path}}){
      html
      frontmatter{
        path
        title
        imgid
      }
    }
  }
`
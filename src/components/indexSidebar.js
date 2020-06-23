import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const indexSidebar = () => (
  <div className="container sidecontent">
    <h3>Latest Updates</h3>
    <StaticQuery query={indexSidebarQuery} render={data => (
      <div>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id} className="container">
            <Link to={node.frontmatter.path} >
              <h3>{node.frontmatter.title}</h3>
              <Img className="mb-1" fluid={node.frontmatter.image.childImageSharp.fluid} />
              <h5>{node.frontmatter.date}</h5>
            </Link>
          </div>
        ))}
      </div>
    )} />
  </div>
)

const indexSidebarQuery = graphql`
  query indexSidebar{
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
            image {
              childImageSharp{
                fluid(maxWidth: 300, maxHeight: 200){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default indexSidebar
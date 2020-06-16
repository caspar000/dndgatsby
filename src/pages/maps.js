import React from 'react'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from "../components/layout"

function Maps() {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: {relativeDirectory: {eq: "maps"}}) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      <div className="maps">
        {data.images.nodes.map((image) => (
          <div className="m-1" key={image.id}>
            <Img  fluid={image.childImageSharp.fluid} alt={image.id}/>
          </div>
        ))}
        <div className="m-1">
          <iframe src="https://miro.com/app/embed/o9J_krXd0CI=/?" frameBorder="0" scrolling="no" allowFullScreen title="mapFrame"></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default Maps
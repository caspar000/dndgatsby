import React from "react"
import Img from "gatsby-image"
import {graphql, useStaticQuery} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage () {
  const data = useStaticQuery(graphql`
    query Image {
      image: file(relativePath : {eq: "anon.jpg"}) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>14 June 2020, Dungeons & Dragons - Session 1</h1>
      <h2>Time: 3PM, Location: The Sacred Room</h2>
      <Img fluid={data.image.childImageSharp.fluid} alt="The Sacred Room"/>
      <p>Yes, indeed. It is called Dlab, where the transitory lands of the Lords of Cinder converge. In venturing north, the pilgrims discover the truth of the old words: The fire fades and the lords go without thrones." When the link of the fire is threatened, the bell tolls, unearthing the old Lords of Cinders from their graves...</p>
    </Layout>
  )
}


export default IndexPage

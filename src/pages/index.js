import React from "react"
import Img from "gatsby-image"
import {graphql, useStaticQuery} from 'gatsby'

import Layout from "../components/layout"

function IndexPage () {
  const data = useStaticQuery(graphql`
    query Image {
      image2: file(relativePath : {eq: "anon2.jpg"}) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image: file(relativePath : {eq: "anon.jpg"}) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="container">
        <h1>28 June 2020, Dungeons & Dragons - Session 2</h1>
        <h2>Time: 3PM, Location: Main Laboratory</h2>
        <Img fluid={data.image2.childImageSharp.fluid} alt="Fantasy World"/>
        <br/>
        <p>
          The rutted track emerges from a wooded hillside, and you
          catch your first glimpse of Tao. The town consists of
          forty or fifty simple log buildings, some built on old fieldstone
          foundations. More old ruins-crumbling stone walls covered
          in ivy and briars-surround the newer houses and shops,
          showing how this must have been a much larger town in
          centuries past. Most of the newer buildings are set on the
          sides of the cart track, which widens into a muddy main
          street of sorts as it climbs toward a ruined manor house on a
          hillside at the east side of town.
        </p>
        <p>
          As you approach, you see children playing on the town green
          and townsfolk tending to chores or running errands at shops.
          Many people look up as you approach, but all return to their
          business as you go by.
        </p>
        <p>
        Sildar seems much more at ease.
        </p>
        <p>
        "My friends," he says, "let us secure lodgings. I'm told the
        local inn is very quaint."
        </p>

      </div>
      <div className="container">
        <h1>14 June 2020, Dungeons & Dragons - Session 1</h1>
        <h2>Time: 3PM, Location: The Sacred Room</h2>
        <Img fluid={data.image.childImageSharp.fluid} alt="The Sacred Room"/>
        <br />
        <p>Yes, indeed. It is called Dlab, where the transitory lands of the Lords of Cinder converge. In venturing north, the pilgrims discover the truth of the old words: The fire fades and the lords go without thrones." When the link of the fire is threatened, the bell tolls, unearthing the old Lords of Cinders from their graves...</p>
      </div>
    </Layout>
  )
}


export default IndexPage

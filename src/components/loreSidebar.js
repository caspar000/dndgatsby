import React, {useState} from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query Wiki{
      allMarkdownRemark (
        sort: {fields: [frontmatter___title]},
        filter: {fileAbsolutePath: {regex: "/(lore)/"}}
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              tags
            }
          }
        }
      }
    }
  `)
  
  const [sidebar, setstate] = useState('none')

  const sidetabOpen = () => {
    if (sidebar === 'none') {
      setstate('active')
    } else {
      setstate('none')
    }
  }


  return (
    <>
    <div className={`sidetab ${sidebar}`}>
      <button onClick={sidetabOpen}>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="2.6em" 
        height="2em" 
        shapeRendering="geometricPrecision" 
        textRendering="geometricPrecision" 
        imageRendering="optimizeQuality" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        viewBox="0 0 640 640"
        fill="#fff"
        >
          <path d="M640 67.643v104.423H172.892V67.643H640zM110.068 467.947V572.37H0V467.947h110.068zm0-200.14v104.41H0v-104.41h110.068zm0-200.164v104.423H0V67.643h110.068zM640 467.947V572.37H172.892V467.947H640zm0-200.14v104.41H172.892v-104.41H640z"/>
        </svg>
      </button>
      <div className="inside">
        <h1>Lore</h1>
      {data.allMarkdownRemark.edges.map((wiki) => (
        <div key={wiki.node.id}>
          <Link to={wiki.node.frontmatter.path}>{wiki.node.frontmatter.title}</Link>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}


export default Sidebar
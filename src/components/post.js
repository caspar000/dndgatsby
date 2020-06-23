import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunction'

const Post = ({ title, subtit, author, path, date, body, fluid, tags, html, id}) => {
  if (tags === undefined) {
    return (
      <div className="container" key={id + title}>
          <h1>{title}</h1>
          <h2>{subtit}</h2>
          <h4>{date} by {author}</h4>
          <Img fluid={fluid} alt={title} />
          <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    )
    
  }
  return (
    <div key={id + title}>
        <Link to="/lore">Go Back</Link>
        <Img fluid={fluid} alt={title} />
        <h1>{title}</h1>
        <h4>{date} by {author}</h4>

        <h5 className="tags">{tags.map(tag => (
          <li key={id + tag}>
            <Link to={`/lore/${slugify(tag)}`}>
              <span>{tag}</span>
            </Link>
          </li>
          ))}</h5>
        <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  )
}

export default Post 
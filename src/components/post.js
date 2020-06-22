import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunction'

const Post = ({ title, author, path, date, body, fluid, tags, html }) => {
  return (
    <div>
        <Link to="/lore">Go Back</Link>
        <Img fluid={fluid} alt={title} />
        <h1>{title}</h1>
        <h4>{date} by {author}</h4>
        <h5 className="tags">{tags.map(tag => (
          <li>
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
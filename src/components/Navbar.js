import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby';


export default function Navbar() {
  const data = useStaticQuery(graphql`
    query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
const title = data.site.siteMetadata.title
  return (
    <nav>
      <h1>{title}</h1>
      <div className='nav-wrapper'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}

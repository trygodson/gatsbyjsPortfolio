import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'
import {portfolio, projects} from '../../styles/projects.module.css'
import Img from 'gatsby-image'

export default function Projects({data}) {
 console.log(data)
 const project = data.allMarkdownRemark.nodes
 const contact = data.site.siteMetadata.contact
  return (
    <Layout>
      <div className={portfolio}>
        <h2 >Portfolio</h2>
        <h3 > websites created</h3>
        <div className={projects}>
          {project.map((item)=>{
            return <Link to={'/projects/' + item.frontmatter.slug} key={item.id}>
              <div>
                <Img fluid={item.frontmatter.thumb.childImageSharp.fluid}/>
                <h3>{item.frontmatter.title}</h3>
                <p>{item.frontmatter.stack}</p>
              </div>
            </Link>
          })}
        </div>
        <p>Contact Address 24/7 {contact}</p>
      </div>
    </Layout>
  )
}

export const projectsProject = graphql`
  query projects {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
    site {
      siteMetadata {
        contact
      }
    }
  }

`;


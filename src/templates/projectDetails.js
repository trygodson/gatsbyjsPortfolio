import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import {detail,html, featured} from '../styles/project-details.module.css'
import { graphql } from 'gatsby'


export default function ProjectDetails({data}) {
  const htmlData = data.markdownRemark.html
  const details = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={detail}>
        <h2>{details.stack}</h2>
        <h3>{details.title}</h3>
        <div className={featured}>
          <Img fluid={details.featuredImg.childImageSharp.fluid}/>
        </div>
        <div className={html} dangerouslySetInnerHTML={{__html: htmlData}}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
query projectQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;
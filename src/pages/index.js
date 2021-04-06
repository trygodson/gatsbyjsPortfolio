import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import {header, btn} from '../styles/home.module.css'
import Img from 'gatsby-image'
// import Img from 'gatsby-image'

export default function Home({data}) {
  return (
      <Layout>
        <section className={header} >
        
          <div>
            <h2>Illuminate Your Bussiness</h2>
            <h2>To the World</h2>
            <p>I create awesome websites</p>
            <Link className={btn} to="/projects">Projects</Link>
          </div>
          <Img fluid={data.file.childImageSharp.fluid}/>
          {/*<img src='/banner.jpg' style={{maxWidth= '100%'}}/>*/}
        </section>
      </Layout>
  )
}
export const query = graphql`
  query banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

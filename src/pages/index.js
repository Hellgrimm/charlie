import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
    <section className={styles.header}>
      <div>
      <h2>Main Page</h2>
      <h3>Hi, my name is Helly and this is a new world that i create.</h3>
      <p>What do you think? Thats a first page of it, just testing things.</p>
      <p>Thats another paragraph. Nice to see you!</p>
      <Link className={styles.btn} to="/characters">To Characters Page</Link>
      </div>
      <div className={styles.pic}>
        <Img fluid={data.file.childImageSharp.fluid}/>
      </div>
    </section>
    </Layout>
  )
}

//exports page query
export const query = graphql`
query Steven {
  file(relativePath: {eq: "tea.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
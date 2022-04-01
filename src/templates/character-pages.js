import React from "react"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import * as styles from '../styles/character-details.module.css'
import { graphql } from "gatsby"

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg, sex, gender_pronoun, height, occupations, relatives, species, status, affiliations, age, birthday} = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
          <div className={styles.side_panel}>
            <h4>{title}</h4>
            <div className={styles.featured}>
              <Img fluid={featuredImg.childImageSharp.fluid} />
            </div>
            <div className={styles.info}>
              <h5><b>Sex:</b> {sex}</h5>
              <h5><b>Gender Pronoun:</b> {gender_pronoun}</h5>
              <h5><b>Species:</b> {species}</h5>
              <h5><b>Age:</b> {age}</h5>
              <h5><b>Birthday:</b> {birthday}</h5>
              <h5><b>Height:</b> {height}</h5>
              <h5><b>Affiliation(s):</b> {affiliations}</h5>
              <h5><b>Occupation(s):</b> {occupations}</h5>
              <h5><b>Status:</b> {status}</h5>
              <h5><b>Relative(s):</b> {relatives}</h5>
            </div>
          </div>
          <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    </Layout>
  )
}
 
export default ProjectDetails

export const query = graphql`
query ProjectDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      featuredImg {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stack
      title
      gender_pronoun
      height
      occupations
      relatives
      sex
      slug
      species
      status
      type
      affiliations
      age
      birthday
    }
  }
}
`
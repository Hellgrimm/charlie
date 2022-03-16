import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from "../../components/Layout"
import * as styles from "../../styles/characters.module.css"
import Img from "gatsby-image"

export default function Locations({ data }) {
  console.log(data)
  const locations = data.allMarkdownRemark.nodes

  return (
    <Layout>
    <div className={styles.characters}>
        <h2>Locations Page</h2>
        <div className={styles.projects}>
          {locations.map(location =>(
            <Link to = {"/locations/" + location.frontmatter.slug} key={location.id}>
              <div>
                <Img fluid={location.frontmatter.thumb.childImageSharp.fluid}/>
                <h3>{location.frontmatter.title}</h3>
                <p>{location.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
    </div>
    </Layout>
  );
}

//exports page query
export const query = graphql`
query LocationsPage {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "locations"}}}) {
    nodes {
      frontmatter {
        title
        stack
        slug
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
}
`
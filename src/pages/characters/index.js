import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from "../../components/Layout"
import * as styles from "../../styles/characters.module.css"
import Img from "gatsby-image"

export default function Characters({ data }) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
    <div className={styles.characters}>
        <h2>Characters Page</h2>
        <div className={styles.projects}>
          {projects.map(project =>(
            <Link to = {"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
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
query CharactersPage {
  allMarkdownRemark {
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
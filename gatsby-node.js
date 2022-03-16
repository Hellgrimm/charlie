const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
  query Articles {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          type
        }
      }
    }
  }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/"+ node.frontmatter.type + "/" + node.frontmatter.slug,
      component: path.resolve('./src/templates/character-pages.js'),
      context: { slug: node.frontmatter.slug }
    })
  })

}
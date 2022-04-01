/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/charlie",
  plugins: [
    `gatsby-transformer-remark`,
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locations`,
        path: `${__dirname}/src/locations/`,
      },
    },*/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `characters`,
        path: `${__dirname}/src/characters/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: 'The Game',
    description: 'Game world site',
    copyright: 'This website is copyright 2022 Cordi'
  }
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `projects`,
      path: `${__dirname}/src/projects/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,

  ],
  siteMetadata: {
    title: 'TryGodson',
    description: 'Web Development Portfolio',
    copyright: 'TryGodson Design All Right Reserved',
    contact: 'Off Leisure Palace Street Kubwa'
  }
}

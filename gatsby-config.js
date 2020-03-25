module.exports = {
  siteMetadata: {
    title: `Gatsby Photography Starter`,
    description: `Barebones starter for Gatsby Photography website.`,
    author: `@truehello`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `galleryImages`,
        path: `${__dirname}/src/images/galleries`,
        //ignore: [`**.md`], // ignore markdown files
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-photography-starter-default`,
        short_name: `photography starter`,
        start_url: `/`,
        background_color: `#010101`,
        theme_color: `#010101`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

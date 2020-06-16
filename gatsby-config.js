module.exports = {
  siteMetadata: {
    title: `Dungeons & Dragons`,
    description: `Explore the adventure which takes place in the States of Germandia.`,
    author: `@Vanir`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `log`,
        path: `${__dirname}/src/content/log`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `char`,
        path: `${__dirname}/src/content/chars`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

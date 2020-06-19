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
        name: `wiki`,
        path: `${__dirname}/src/content/wiki`,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dungeons & Dragons`,
        short_name: `D&D`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    }
  ],
}

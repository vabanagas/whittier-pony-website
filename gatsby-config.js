module.exports = {
  siteMetadata: {
    title: `Whittier PONY Baseball`,
    description: `PONY Baseball is designed to “Protect Our Nation’s Youth” by providing experiences in youth baseball that will help young people grow into healthier and happier adults.`,
    author: `@vabanagas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Whittier PONY Baseball`,
        short_name: `PONY`,
        start_url: `/`,
        background_color: `#002E5D`,
        theme_color: `#002E5D`,
        display: `minimal-ui`,
        icon: `src/images/pony-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`,
  ],
}

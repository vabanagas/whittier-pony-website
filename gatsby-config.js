module.exports = {
  siteMetadata: {
    title: `Whittier PONY Baseball`,
    description: `PONY Baseball is designed to “Protect Our Nation’s Youth” by providing experiences in youth baseball that will help young people grow into healthier and happier adults.`,
    author: `@vabanagas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms-paths`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Whittier PONY Baseball`,
        short_name: `PONY`,
        start_url: `/`,
        background_color: `#002E5D`,
        theme_color: `#002E5D`,
        display: `minimal-ui`,
        icon: `static/images/pony-logo.png`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`,
  ],
}

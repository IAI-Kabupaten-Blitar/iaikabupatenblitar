module.exports = {
  siteMetadata: {
    title: `Ikatan Apoteker Indonesia - Pengurus Cabang Kabupaten Blitar`,
    description: `Website resmi Ikatan Apoteker Indonesia Pengurus Cabang Kabupaten Blitar. Kami berkomitmen untuk meningkatkan kualitas pelayanan kefarmasian dan kesehatan di Kabupaten Blitar.`,
    keywords: [
      "IAI Kabupaten Blitar",
      "Ikatan Apoteker Indonesia",
      "Pengurus Cabang",
      "Kabupaten Blitar",
      "farmasi",
      "pelayanan kesehatan",
    ],
    siteUrl: "https://iaikabupatenblitar.or.id/",
    author: `@rezzafri_apt`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/contents`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                paragraph: "causes__text",
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

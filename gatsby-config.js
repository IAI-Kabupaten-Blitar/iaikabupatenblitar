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
        name: `posts`,
        path: `${__dirname}/src/contents/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/src/contents/events`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sliders`,
        path: `${__dirname}/src/contents/sliders`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `download`,
            },
          },
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
              maxWidth: 590,
            },
          },
        ],
      },
    },
  ],
};

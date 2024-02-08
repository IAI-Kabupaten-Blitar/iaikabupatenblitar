require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Ikatan Apoteker Indonesia Kabupaten Blitar`,
    description: `Website resmi Ikatan Apoteker Indonesia Pengurus Cabang Kabupaten Blitar. Kami berkomitmen untuk meningkatkan kualitas pelayanan kefarmasian dan kesehatan di Kabupaten Blitar.`,
    keywords: [
      "IAI Kabupaten Blitar",
      "Ikatan Apoteker Indonesia",
      "Pengurus Cabang",
      "Kabupaten Blitar",
      "farmasi",
      "pelayanan kesehatan",
    ],
    domain: "iaikabupatenblitar.or.id",
    siteUrl: "https://www.iaikabupatenblitar.or.id",
    author: `@rezzafri_apt`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ikatan Apoteker Indonesia Kabupaten Blitar`,
        short_name: `iaikabupatenblitar`,
        start_url: `/`,
        background_color: `#e36955`,
        theme_color: `#e36955`,
        display: `browser`,
        icon: `src/images/logo-iai-blitar.png`, // This path is relative to the root of the site.
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `certificates`,
        path: `${__dirname}/src/contents/certificates`,
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
              showCaptions: ["title"],
              markdownCaptions: true,
            },
          },
          `gatsby-plugin-qrcode`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-decap-cms`,
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
};

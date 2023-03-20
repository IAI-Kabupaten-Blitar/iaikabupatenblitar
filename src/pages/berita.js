import React from "react";
import { graphql } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import News from "../components/News";

const NewsPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  const canonical = `${siteUrl}/berita`;
  return (
    <Layout
      pageTitle="Berita"
      pageDescription="Berita-berita Ikatan Apoteker Indonesia Kabupaten Blitar"
      canonical={canonical}
    >
      <GatsbySeo
        openGraph={{
          url: canonical,
        }}
      />
      <NavOne />
      <PageHeader title="Berita" />
      <News posts={edges} />
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          id
          excerpt(format: PLAIN)
          frontmatter {
            author
            date(formatString: "DD MMMM YYYY", locale: "id_ID")
            slug
            title
            thumbnail {
              childImageSharp {
                fluid(maxHeight: 320, maxWidth: 570) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;

export default NewsPage;

import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import News from "../components/News";
import Pagination from "../components/Pagination";

const postsPage = ({ data, pageContext }) => {
  const {
    allMarkdownRemark: { edges },
  } = data;
  const { currentPage, numPages } = pageContext;
  return (
    <Layout>
      <NavOne />
      <PageHeader title="Berita" />
      <News posts={edges} />
      <Pagination currentPage={currentPage} numPages={numPages} slug="berita" />
      <Footer />
    </Layout>
  );
};

export const Head = ({ data }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  const canonical = `${siteUrl}/berita`;
  return (
    <Seo
      pageTitle="Berita"
      pageDescription="Berita-berita Ikatan Apoteker Indonesia Kabupaten Blitar"
      canonical={canonical}
    />
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      limit: $limit
      skip: $skip
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
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 690
                  placeholder: BLURRED
                )
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

export default postsPage;

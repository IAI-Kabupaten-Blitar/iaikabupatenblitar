import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Events from "../components/Events";
import Pagination from "../components/Pagination";

const eventsPage = ({ data, pageContext }) => {
  const {
    allMarkdownRemark: { edges },
  } = data;
  const { currentPage, numPages } = pageContext;
  return (
    <Layout>
      <NavOne />
      <PageHeader title="Kegiatan" />
      <Events events={edges} />
      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        slug="kegiatan"
      />
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
  const canonical = `${siteUrl}/kegiatan`;
  return (
    <Seo
      pageTitle="Kegiatan"
      pageDescription="Kegiatan-kegiatan Ikatan Apoteker Indonesia Kabupaten Blitar"
      canonical={canonical}
    />
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/events/" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            contacts
            coordinate
            date
            location
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

export default eventsPage;

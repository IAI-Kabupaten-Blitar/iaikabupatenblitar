import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Events from "../components/Events";
import Pagination from "../components/Pagination";

const eventsPage = ({ data, pageContext }) => {
  const {
    allMarkdownRemark: { edges },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  const { currentPage, numPages } = pageContext;
  const canonical = `${siteUrl}/kegiatan`;
  return (
    <Layout
      pageTitle="Kegiatan"
      pageDescription="Kegiatan-kegiatan Ikatan Apoteker Indonesia Kabupaten Blitar"
      canonical={canonical}
    >
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
                  height: 320
                  width: 570
                  layout: FULL_WIDTH
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

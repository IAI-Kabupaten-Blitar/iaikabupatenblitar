import React from "react";
import { graphql } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Events from "../components/Events";

const EventsPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  const canonical = `${siteUrl}/kegiatan`;
  return (
    <Layout
      pageTitle="Kegiatan"
      pageDescription="Kegiatan-kegiatan Ikatan Apoteker Indonesia Kabupaten Blitar"
      canonical={canonical}
    >
      <GatsbySeo
        openGraph={{
          url: canonical,
        }}
      />
      <NavOne />
      <PageHeader title="Kegiatan" />
      <Events events={edges} />
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/events/" } }
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

export default EventsPage;

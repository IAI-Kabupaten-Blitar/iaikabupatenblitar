import React from "react";
import { graphql } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Events from "../components/Events";

const EventsPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout
      pageTitle="Kegiatan"
      pageDescription="Kegiatan-kegiatan Ikatan Apoteker Indonesia Kabupaten Blitar"
    >
      <GatsbySeo
        openGraph={{
          url: "https://www.iaikabupatenblitar.or.id/kegiatan",
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
  }
`;

export default EventsPage;

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const Sertifikat = ({ data, pageContext }) => {
  const {
    markdownRemark,
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  const { nomor, pathSlug } = pageContext;
  const {
    frontmatter: { sertifikat },
    html,
  } = markdownRemark;

  const canonical = `${siteUrl}/sertifikat/${pathSlug}/${nomor}`;
  return (
    <Layout pageTitle={`Sertifikat: ${sertifikat}`} canonical={canonical}>
      <NavOne />
      <PageHeader title={sertifikat} />

      <section className="event-detail-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-content">
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!, $nomor: String!) {
    markdownRemark(
      fileAbsolutePath: { regex: "/certificates/" }
      frontmatter: { eventslug: { eq: $pathSlug }, nomor: { eq: $nomor } }
    ) {
      html
      frontmatter {
        peserta
        sertifikat
        skp
        skiai
        date
        event {
          frontmatter {
            title
            slug
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 650
                  formats: [JPG]
                  quality: 70
                  layout: FIXED
                )
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default Sertifikat;

import React from "react";
import { graphql } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import EventsDetail from "../components/EventsDetail";

const singleEvent = ({ data, pageContext }) => {
  const {
    markdownRemark,
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  const { prev, next, pathSlug } = pageContext;
  const {
    frontmatter: { title },
    excerpt,
  } = markdownRemark;
  const {
    src,
    width,
    height,
  } = markdownRemark.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback;
  const url = `${siteUrl}${src}`;
  const canonical = `${siteUrl}/kegiatan/${pathSlug}`;
  return (
    <Layout
      pageTitle={`Kegiatan: ${title}`}
      pageDescription={excerpt}
      canonical={canonical}
    >
      <GatsbySeo
        openGraph={{
          title,
          description: excerpt,
          images: [
            {
              url,
              width,
              height,
              alt: title,
            },
          ],
        }}
      />
      <NavOne />
      <PageHeader title={title} />
      <EventsDetail content={markdownRemark} next={next} prev={prev} />
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(
      fileAbsolutePath: { regex: "/events/" }
      frontmatter: { slug: { eq: $pathSlug } }
    ) {
      html
      excerpt(format: PLAIN)
      frontmatter {
        contacts
        coordinate
        date
        location
        slug
        title
        time
        maps
        qrcode
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
            gatsbyImageData(layout: FIXED)
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

export default singleEvent;

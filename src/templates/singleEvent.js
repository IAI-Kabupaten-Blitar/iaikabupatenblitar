import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import EventsDetail from "../components/EventsDetail";

const singleEvent = ({ data, pageContext }) => {
  const { markdownRemark } = data;
  const { prev, next } = pageContext;
  const {
    frontmatter: { title },
  } = markdownRemark;
  return (
    <Layout>
      <NavOne />
      <PageHeader title={title} />
      <EventsDetail content={markdownRemark} next={next} prev={prev} />
      <Footer />
    </Layout>
  );
};

export const Head = ({ data, pageContext }) => {
  const {
    markdownRemark,
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  const { pathSlug } = pageContext;
  const {
    frontmatter: { title, date },
    excerpt,
  } = markdownRemark;
  const {
    images: {
      fallback: { src },
    },
    width,
    height,
  } = markdownRemark.frontmatter.thumbnail.childImageSharp.ogImage;
  const url = `${siteUrl}${src}`;
  const canonical = `${siteUrl}/kegiatan/${pathSlug}`;
  return (
    <Seo
      pageTitle={`Kegiatan: ${title}`}
      pageDescription={excerpt}
      canonical={canonical}
      imageUrl={url}
      imageWidth={width}
      imageHeight={height}
      type="event"
    >
      <meta property="og:event:start_time" content={date} />
      <meta property="og:event:timezone" content="+7" />
    </Seo>
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            ogImage: gatsbyImageData(
              width: 650
              formats: [JPG]
              quality: 70
              layout: FIXED
            )
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

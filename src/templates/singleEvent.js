import React from "react";
import { graphql } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import EventsDetail from "../components/EventsDetail";

const EventsDetailPage = ({ data, pageContext }) => {
  const { markdownRemark } = data;
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

  return (
    <Layout pageTitle={`Kegiatan: ${title}`} pageDescription={excerpt}>
      <GatsbySeo
        openGraph={{
          url: `https://www.iaikabupatenblitar.or.id/kegiatan/${pathSlug}`,
          title,
          description: excerpt,
          images: [
            {
              url: src,
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
  }
`;

export default EventsDetailPage;

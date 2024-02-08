import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NewsSingle from "../components/NewsSingle";

const singlePost = ({ data, pageContext }) => {
  const { markdownRemark } = data;
  const { prev, next } = pageContext;
  const {
    frontmatter: { title },
  } = markdownRemark;
  return (
    <Layout>
      <NavOne />
      <PageHeader title={title} />
      <NewsSingle content={markdownRemark} next={next} prev={prev} />
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
    frontmatter: { title },
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
  const canonical = `${siteUrl}/berita/${pathSlug}`;
  return (
    <Seo
      pageTitle={title}
      pageDescription={excerpt}
      canonical={canonical}
      imageUrl={url}
      imageWidth={width}
      imageHeight={height}
      type="article"
    />
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(
      fileAbsolutePath: { regex: "/posts/" }
      frontmatter: { slug: { eq: $pathSlug } }
    ) {
      html
      excerpt(format: PLAIN)
      frontmatter {
        title
        author
        date(formatString: "DD MMMM YYYY", locale: "id_ID")
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

export default singlePost;

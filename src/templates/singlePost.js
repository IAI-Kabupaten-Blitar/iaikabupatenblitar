import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NewsSingle from "../components/NewsSingle";

const singlePost = ({ data, pageContext }) => {
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
  } = markdownRemark.frontmatter.thumbnail.childImageSharp.fixed;
  const url = `${siteUrl}${src}`;
  const canonical = `${siteUrl}/berita/${pathSlug}`;
  return (
    <Layout
      pageTitle={title}
      pageDescription={excerpt}
      canonical={canonical}
      type="article"
    >
      <Helmet>
        <meta property="og:image" content={url} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content={width} />
        <meta property="og:image:height" content={height} />
      </Helmet>
      <NavOne />
      <PageHeader title={title} />
      <NewsSingle content={markdownRemark} next={next} prev={prev} />
      <Footer />
    </Layout>
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
            gatsbyImageData(layout: FULL_WIDTH)
            fixed(width: 650, toFormat: JPG, quality: 70) {
              ...GatsbyImageSharpFixed
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

export default singlePost;

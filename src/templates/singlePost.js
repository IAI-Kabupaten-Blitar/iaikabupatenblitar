import React from "react";
import { graphql } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NewsSingle from "../components/NewsSingle";

const SinglePost = ({ data, pageContext }) => {
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
    <Layout pageTitle={title} pageDescription={excerpt}>
      <GatsbySeo
        openGraph={{
          url: `https://www.iaikabupatenblitar.or.id/berita/${pathSlug}`,
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
            fluid {
              ...GatsbyImageSharpFluid
            }
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
`;

export default SinglePost;

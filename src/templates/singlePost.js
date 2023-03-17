import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NewsSingle from "../components/NewsSingle";

const SinglePost = ({ data, pageContext }) => {
  const { markdownRemark } = data;
  const { prev, next } = pageContext;
  const title = markdownRemark.frontmatter.title;

  return (
    <Layout pageTitle={title}>
      <NavOne />
      <PageHeader title={title} />
      <NewsSingle content={markdownRemark} next={next} prev={prev} />
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "DD MMMM YYYY", locale: "id_ID")
        thumbnail {
          childImageSharp {
            id
            fluid {
              srcSet
              src
              sizes
            }
          }
        }
      }
    }
  }
`;

export default SinglePost;

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import News from "../components/News";

const NewsPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout pageTitle="IAI Kabupaten Blitar | Berita">
      <NavOne />
      <PageHeader title="Berita" />
      <News posts={edges} />
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query NewsPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "DD MMMM YYYY", locale: "id_ID")
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
          excerpt(format: PLAIN)
        }
      }
    }
  }
`;

export default NewsPage;

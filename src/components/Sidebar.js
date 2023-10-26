import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Sidebar = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              thumbnail {
                childImageSharp {
                  gatsbyImageData(width: 59, height: 59, layout: FIXED)
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className="sidebar-shared">
      <div className="side-widget">
        <h2 className="widget__title">Artikel Terakhir</h2>
        {edges.map(post => {
          const { frontmatter, id } = post.node;
          const thumbnail =
            frontmatter.thumbnail.childImageSharp.gatsbyImageData;
          return (
            <div key={id} className="author-box recent-donate-item">
              <div className="author__avatar">
                <GatsbyImage image={thumbnail} alt={""} />
              </div>
              <div className="author__detail">
                <h4 className="author__title author__title2">
                  <Link to={`/berita/${frontmatter.slug}`}>
                    {frontmatter.title}
                  </Link>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

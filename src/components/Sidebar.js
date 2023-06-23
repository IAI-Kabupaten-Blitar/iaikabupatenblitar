import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

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
                  fixed(width: 59, height: 59) {
                    ...GatsbyImageSharpFixed
                  }
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
          const thumbnail = frontmatter.thumbnail.childImageSharp.fixed;
          return (
            <div key={id} className="author-box recent-donate-item">
              <div className="author__avatar">
                <Img fixed={thumbnail} />
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

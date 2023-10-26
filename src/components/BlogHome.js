import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const BlogHome = () => {
  const { firstPost, restOfThePosts } = useStaticQuery(graphql`
    {
      firstPost: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        limit: 1
      ) {
        edges {
          node {
            id
            excerpt(format: PLAIN)
            frontmatter {
              author
              date(formatString: "DD MMMM YYYY", locale: "id_ID")
              slug
              title
              thumbnail {
                childImageSharp {
                  gatsbyImageData(width: 570, height: 354, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
      restOfThePosts: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        limit: 3
        skip: 1
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "DD MMMM YYYY", locale: "id_ID")
              slug
              title
              thumbnail {
                childImageSharp {
                  gatsbyImageData(width: 170, height: 137, layout: FIXED)
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section className="blog-area mt-5 pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="section-heading blog-heading">
              <h2 className="section__title">Berita Terbaru</h2>
              <p className="section__meta">
                berita dan laporan kegiatan terbaru
              </p>
            </div>
          </div>
        </div>
        <div className="row recent-post-wrap">
          {firstPost.edges.length > 0 &&
            firstPost.edges.map(post => {
              const { excerpt, id, frontmatter } = post.node;
              const image =
                frontmatter.thumbnail.childImageSharp.gatsbyImageData;
              return (
                <div key={id} className="col-lg-6">
                  <div className="recent-item">
                    <div className="recent__img">
                      <span className="meta__date-date">
                        {frontmatter.date}
                      </span>
                      <GatsbyImage image={image} alt={""} />
                    </div>
                    <div className="news__content">
                      <h3 className="news__content-title">
                        <Link to={`/berita/${frontmatter.slug}`}>
                          {frontmatter.title}
                        </Link>
                      </h3>
                      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
                      <Link
                        className="theme-btn"
                        to={`/berita/${frontmatter.slug}`}
                      >
                        Selanjutnya
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="col-lg-6">
            <div className="third-recent-box">
              <ul className="third-recent-item">
                {restOfThePosts.edges.length > 0 &&
                  restOfThePosts.edges.map(post => {
                    const { id, frontmatter } = post.node;
                    const image =
                      frontmatter.thumbnail.childImageSharp.gatsbyImageData;
                    return (
                      <li key={id}>
                        <div className="recent__img">
                          <Link to={`/berita/${frontmatter.slug}`}>
                            <GatsbyImage image={image} alt={""} />
                          </Link>
                        </div>
                        <div className="recent__content">
                          <span>{frontmatter.date}</span>
                          <h4>
                            <Link to={`/berita/${frontmatter.slug}`}>
                              {frontmatter.title}
                            </Link>
                          </h4>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHome;

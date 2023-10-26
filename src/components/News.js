import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const News = ({ posts }) => {
  return (
    <section className="blog-area blog-area2">
      <div className="container">
        <div className="row recent-post-wrap">
          {posts.map(post => {
            const { frontmatter, id, excerpt } = post.node;
            const images =
              frontmatter.thumbnail.childImageSharp.gatsbyImageData;
            return (
              <div key={id} className="col-lg-6 col-sm-6">
                <div className="recent-item">
                  <div className="recent__img">
                    <span className="meta__date-date meta__date-date3">
                      {frontmatter.date}
                    </span>

                    <Link to={`/berita/${frontmatter.slug}`}>
                      <GatsbyImage image={images} alt={""} />
                    </Link>
                  </div>
                  <div className="news__content">
                    <h3 className="news__content-title">
                      <Link to={`/berita/${frontmatter.slug}`}>
                        {frontmatter.title}
                      </Link>
                    </h3>
                    <ul className="news__content-list">
                      <li className="news__content-active">
                        <a href="#none">{frontmatter.author}</a>
                      </li>
                    </ul>
                    <p className="news__content-text">{excerpt}</p>
                    <Link
                      to={`/berita/${frontmatter.slug}`}
                      className="theme-btn"
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;

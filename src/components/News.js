import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const News = ({ posts }) => {
  return (
    <section className="blog-area blog-area2">
      <div className="container">
        <div className="row recent-post-wrap">
          {posts.map(post => {
            const { frontmatter, id, excerpt } = post.node;
            const images = frontmatter.thumbnail.childImageSharp.fluid;
            return (
              <div key={id} className="col-lg-6 col-sm-6">
                <div className="recent-item">
                  <div className="recent__img">
                    <span className="meta__date-date">{frontmatter.date}</span>

                    <Link to={`/berita/${frontmatter.slug}`}>
                      <Img fluid={images} />
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

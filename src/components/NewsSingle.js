import React from "react";
import { Link } from "gatsby";
import Sidebar from "./Sidebar";

const NewsSingle = ({ content, next, prev }) => {
  const { html, frontmatter } = content;
  const { date, author, title } = frontmatter;
  const images = frontmatter.thumbnail.childImageSharp.fluid;

  return (
    <section className="causes-detail-area news-detail-area">
      <div className="container">
        <div className="row blog-content-wrap">
          <div className="col-lg-8">
            <div className="blog-content">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    srcSet={images.srcSet}
                    sizes={images.sizes}
                    src={images.src}
                    alt=""
                  />
                  <span className="blog__date">{date}</span>
                </div>
                <div className="blog-inner-content">
                  <div className="inner-causes-box">
                    <h3 className="blog__title">
                      <a href="#none">{title}</a>
                    </h3>
                    <ul className="blog__list">
                      <li>{author}</li>
                    </ul>
                  </div>
                </div>
                <div className="blog-inner-content-2">
                  <div
                    className="causes__text"
                    dangerouslySetInnerHTML={{ __html: html }} />
                  <nav aria-label="...">
                    <ul className="pagination justify-content-center">
                      {prev ? (
                        <li className="page-item">
                          <Link
                            to={`/berita/${prev.frontmatter.slug}`}
                            className="page-link"
                          >
                            {`Sebelumnya :${prev.frontmatter.title}`}
                          </Link>
                        </li>
                      ) : (
                        <li className="page-item disabled">
                          <a className="page-link" href="#none">
                            Sebelumnya
                          </a>
                        </li>
                      )}
                      {next ? (
                        <li className="page-item">
                          <Link
                            to={`/berita/${next.frontmatter.slug}`}
                            className="page-link"
                          >
                            {`Selanjutnya: ${next.frontmatter.title}`}
                          </Link>
                        </li>
                      ) : (
                        <li className="page-item disabled">
                          <a className="page-link" href="#none">
                            Selanjutnya
                          </a>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSingle;

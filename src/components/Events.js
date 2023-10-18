import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import moment from "moment";
import "moment/locale/id";

const Events = ({ events }) => {
  return (
    <section className="causes-area upcoming-event-area upcoming-event-area2">
      <div className="container">
        <div className="row blog-content-wrap">
          {events.map(event => {
            const { frontmatter, id } = event.node;
            const images =
              frontmatter.thumbnail.childImageSharp.gatsbyImageData;
            moment.locale("id");
            const date = moment(frontmatter.date);
            return (
              <div key={id} className="col-lg-6">
                <div className="blog-content">
                  <div className="blog-item blog-item1">
                    <Link to={`/kegiatan/${frontmatter.slug}`}>
                      <div className="blog-img">
                        <GatsbyImage image={images} />
                        <span className="blog__tag blog__tag1">
                          <span className="date__num-text">
                            {date.format("DD")}
                          </span>
                          <span className="date__mon-text">
                            {date.format("MMMM")}
                          </span>
                          <span className="date__mon-text">
                            {date.format("YYYY")}
                          </span>
                          <span className="date__mon-text"></span>
                        </span>
                      </div>
                    </Link>
                    <div className="blog-inner-content">
                      <h3 className="blog__title">
                        <Link to={`/kegiatan/${frontmatter.slug}`}>
                          {frontmatter.title}
                        </Link>
                      </h3>
                      <ul className="blog__list">
                        <li className="blog__dot-active">{date.fromNow()}</li>
                        <li>{frontmatter.location}</li>
                      </ul>
                    </div>
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

export default Events;

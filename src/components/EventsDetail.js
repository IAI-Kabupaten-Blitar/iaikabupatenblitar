import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import moment from "moment";
import "moment/locale/id";

const EventsDetail = ({ content, next, prev }) => {
  const { frontmatter, html } = content;
  const image = frontmatter.thumbnail.childImageSharp.gatsbyImageData;
  const title = frontmatter.title;
  const date = moment(frontmatter.date);
  const maps = frontmatter.maps;
  const qrcode = frontmatter.qrcode;

  return (
    <section className="event-detail-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-content">
              <div className="blog-item">
                <div className="blog-img">
                  <GatsbyImage image={image} alt="" />
                  {date && (
                    <span className="blog__tag">
                      <span className="date__num-text">
                        {date.format("DD")}
                      </span>
                      <span className="date__mon-text">
                        {date.format("MMMM")}
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="event-detail-content">
              <div className="event-detail-item">
                <h3 className="event__title">{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="event-detail-sidebar">
              <div className="event-detail-item">
                <h3 className="event__title">Detail Kegiatan</h3>
                <ul className="event__list">
                  {frontmatter.time && (
                    <li>
                      <span>Waktu:</span>
                      {frontmatter.time}
                    </li>
                  )}
                  {date && (
                    <li>
                      <span>Tanggal:</span>
                      {date.format("DD MMMM YYYY")} ({date.fromNow()})
                    </li>
                  )}
                  {frontmatter.contacts.length > 0 && (
                    <li>
                      {frontmatter.contacts.map((contact, index) => {
                        return (
                          <div key={index}>
                            <span>Kontak:</span>
                            {contact}
                          </div>
                        );
                      })}
                    </li>
                  )}
                  {frontmatter.location && (
                    <li>
                      <span>Lokasi:</span>
                      {frontmatter.location}
                    </li>
                  )}
                </ul>
              </div>
              {qrcode && (
                <div className="event-detail-item text-center">
                  <h3 className="event__title mb-4">Pindai Peta lokasi</h3>
                  <a href={maps} rel="noreferrer" target="_blank">
                    <img
                      className="img-thumbnail"
                      src={qrcode}
                      alt={`Peta Lokasi: ${frontmatter.location}`}
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsDetail;

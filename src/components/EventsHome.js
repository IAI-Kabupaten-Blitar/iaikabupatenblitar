import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Events from "../components/Events";

const EventsHome = () => {
  const { lastEvents } = useStaticQuery(graphql`
    {
      lastEvents: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/events/" } }
        limit: 2
      ) {
        edges {
          node {
            id
            frontmatter {
              contacts
              coordinate
              date
              location
              slug
              title
              thumbnail {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    width: 690
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section className="causes-area upcoming-event-area mt-0 pt-0 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading blog-heading text-center">
              <h2 className="section__title">Kegiatan</h2>
              <p className="section__meta">Daftar Kegiatan</p>
            </div>
          </div>
        </div>
        {lastEvents.edges.length > 0 && <Events events={lastEvents.edges} />}
      </div>
    </section>
  );
};

export default EventsHome;

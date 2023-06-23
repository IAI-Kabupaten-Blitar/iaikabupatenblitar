import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const HiwArea = () => {
  const { Simona, Siap, Sipnap } = useStaticQuery(graphql`
    {
      Simona: file(relativePath: { eq: "simona.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Siap: file(relativePath: { eq: "siap.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Sipnap: file(relativePath: { eq: "sipnap.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section className="hiw-area pt-0 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="section-heading blog-heading mb-5">
              <h2 className="section__title">Aplikasi</h2>
              <p class="section__meta">
                website aplikasi pendukung praktek kefarmasian
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="hiw-item">
              <div className="hiw-item-img-box hiw-bg1">
                <figure>
                  <Img fluid={Simona.childImageSharp.fluid} />
                  <h3 className="hiw-title">SIMONA Kemkes</h3>
                  <div className="hiw-btn-box">
                    <a
                      href="https://simona.kemkes.go.id/simona_Login/"
                      target="_blank"
                      rel="noreferrer"
                      className="theme-btn"
                    >
                      Daftar / Masuk
                    </a>
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="hiw-item">
              <div className="hiw-item-img-box hiw-bg2">
                <figure>
                  <Img fluid={Siap.childImageSharp.fluid} />
                  <h3 className="hiw-title">WEBINAR IAI</h3>
                  <div className="hiw-btn-box">
                    <a
                      href="https://p2ab.net/#!/cpd/login"
                      target="_blank"
                      rel="noreferrer"
                      className="theme-btn"
                    >
                      Ikuti Webinar IAI
                    </a>
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="hiw-item">
              <div className="hiw-item-img-box hiw-bg3">
                <figure>
                  <Img fluid={Sipnap.childImageSharp.fluid} />
                  <h3 className="hiw-title">Lapor SIPNAP</h3>
                  <div className="hiw-btn-box">
                    <a
                      href="https://sipnap.kemkes.go.id/"
                      target="_blank"
                      rel="noreferrer"
                      className="theme-btn"
                    >
                      Lapor SIPNAP
                    </a>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiwArea;

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const HiwArea = () => {
  const { Simona, Siap, Sipnap, Satusehat } = useStaticQuery(graphql`
    {
      Simona: file(relativePath: { eq: "simona.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      Siap: file(relativePath: { eq: "siap.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      Sipnap: file(relativePath: { eq: "sipnap.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      Satusehat: file(relativePath: { eq: "satusehat.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
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
              <p className="section__meta">
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
                  <GatsbyImage
                    image={Simona.childImageSharp.gatsbyImageData}
                    alt={""}
                  />
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
                  <GatsbyImage
                    image={Siap.childImageSharp.gatsbyImageData}
                    alt={""}
                  />
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
                  <GatsbyImage
                    image={Sipnap.childImageSharp.gatsbyImageData}
                    alt={""}
                  />
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
          <div className="col">
            <div className="hiw-item">
              <div className="hiw-item-img-box hiw-bg1">
                <figure>
                  <GatsbyImage
                    image={Satusehat.childImageSharp.gatsbyImageData}
                    alt={""}
                  />
                  <h3 className="hiw-title">SATUSEHAT Kemkes</h3>
                  <div className="hiw-btn-box">
                    <a
                      href="https://satusehat.kemkes.go.id/sdmk/login"
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
        </div>
      </div>
    </section>
  );
};

export default HiwArea;

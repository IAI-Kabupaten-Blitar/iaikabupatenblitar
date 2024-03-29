import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const SliderTwo = ({ className }) => {
  const { Slider } = useStaticQuery(graphql`
    {
      Slider: file(absolutePath: { regex: "/sliders/slider1/" }) {
        id
        childImageSharp {
          id
          gatsbyImageData(
            quality: 100
            placeholder: BLURRED
            layout: FULL_WIDTH
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const image = getImage(Slider);
  const bgImage = convertToBgImage(image);

  return (
    <BackgroundImage {...bgImage} preserveStackingContext>
      <section className="slider-area slider-area2 text-center">
        <div className="homepage-slide1">
          <div className="single-slide-item ">
            <div className="slide-item-table">
              <div className="slide-item-tablecell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="slider-heading">
                        <p className="slider__meta">
                          Ikatan Apoteker Indonesia Kabupaten Blitar
                        </p>
                        <h2 className="slider__title">
                          Maju Bersama, Sejahtera Bersama
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundImage>
  );
};

export default SliderTwo;

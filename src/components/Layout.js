import React, { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/font-awesome.css";
import "../assets/css/animate.min.css";
import "../assets/css/fontello.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

const Layout = props => {
  const { MetaData, OgImage } = useStaticQuery(graphql`
    {
      MetaData: site {
        siteMetadata {
          title
          description
        }
      }
      OgImage: file(
        relativePath: { eq: "og-image.jpg" }
        absolutePath: { regex: "/images/" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 800)
        }
      }
    }
  `);
  const { title, description } = MetaData.siteMetadata;
  const {
    src,
    width,
    height,
  } = OgImage.childImageSharp.gatsbyImageData.images.fallback;
  const theTitle = props.pageTitle ? `${props.pageTitle} | ${title}` : title;
  const theDescription = props.pageDescription
    ? props.pageDescription
    : description;
  return (
    <Fragment>
      <GatsbySeo
        title={theTitle}
        description={theDescription}
        canonical="https://www.iaikabupatenblitar.or.id/"
        openGraph={{
          url: "https://www.iaikabupatenblitar.or.id/",
          title: theTitle,
          description: theDescription,
          images: [
            {
              url: src,
              width,
              height,
              alt: title,
            },
          ],
          site_name: title,
        }}
      />
      {props.children}
    </Fragment>
  );
};
export default Layout;

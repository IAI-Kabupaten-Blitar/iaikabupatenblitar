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
          siteUrl
        }
      }
      OgImage: file(
        relativePath: { eq: "og-image.jpg" }
        absolutePath: { regex: "/images/" }
      ) {
        childImageSharp {
          fixed(width: 650, toFormat: JPG, quality: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const { title, description, siteUrl } = MetaData.siteMetadata;
  const { src, width, height } = OgImage.childImageSharp.fixed;
  const url = `${siteUrl}${src}`;
  const theTitle = props.pageTitle ? `${props.pageTitle} | ${title}` : title;
  const theDescription = props.pageDescription
    ? props.pageDescription
    : description;
  const theCanonical = props.canonical ? props.canonical : siteUrl;
  return (
    <Fragment>
      <GatsbySeo
        title={theTitle}
        description={theDescription}
        canonical={theCanonical}
        openGraph={{
          url: theCanonical,
          title: theTitle,
          description: theDescription,
          images: [
            {
              url,
              width,
              height,
              alt: title,
            },
          ],
          site_name: title,
        }}
        metaTags={[
          {
            property: "og:image:type",
            content: "image/jpeg",
          },
          {
            name: "thumbnailUrl",
            content: url,
            itemprop: "thumbnailUrl",
          },
        ]}
      />
      {props.children}
    </Fragment>
  );
};
export default Layout;

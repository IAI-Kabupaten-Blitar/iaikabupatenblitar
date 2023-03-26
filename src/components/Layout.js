import React, { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
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
  const theType = props.type ? props.type : "website";
  return (
    <Fragment>
      <Helmet>
        <title>{theTitle}</title>
        <meta
          name="description"
          content={theDescription}
          itemprop="description"
        />
        <link rel="canonical" href={theCanonical} key="canonical" />
        <meta property="og:type" content={theType} />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={theDescription} />
        <meta property="og:url" content={theCanonical} />
        <meta property="og:image" content={url} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content={width} />
        <meta property="og:image:height" content={height} />
      </Helmet>
      {props.children}
    </Fragment>
  );
};
export default Layout;

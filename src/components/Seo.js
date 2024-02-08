import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = props => {
  const { MetaData, OgImage } = useStaticQuery(graphql`
    {
      MetaData: site {
        siteMetadata {
          title
          description
          domain
          siteUrl
        }
      }
      OgImage: file(
        relativePath: { eq: "og-image.jpg" }
        absolutePath: { regex: "/images/" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 650
            formats: [JPG]
            quality: 70
            layout: FIXED
          )
        }
      }
    }
  `);
  const { title, description, siteUrl, domain } = MetaData.siteMetadata;
  const {
    images: {
      fallback: { src },
    },
    width,
    height,
  } = OgImage.childImageSharp.gatsbyImageData;
  const imageUrl = props.imageUrl ? props.imageUrl : `${siteUrl}${src}`;
  const imageHeight = props.imageHeight ? props.imageHeight : height;
  const imageType = props.imageType ? props.imageType : "image/jpeg";
  const imageWidth = props.imageWidth ? props.imageWidth : width;
  const theTitle = props.pageTitle ? `${props.pageTitle} | ${title}` : title;
  const theDescription = props.pageDescription
    ? props.pageDescription
    : description;
  const theCanonical = props.canonical ? props.canonical : siteUrl;
  const theType = props.type ? props.type : "website";
  return (
    <>
      <title>{theTitle}</title>
      <meta
        name="description"
        content={theDescription}
        itemProp="description"
      />
      <link rel="canonical" href={theCanonical} key="canonical" />
      <meta property="og:type" content={theType} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={theTitle} />
      <meta property="og:description" content={theDescription} />
      <meta property="og:url" content={theCanonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:type" content={imageType} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={theCanonical} />
      <meta name="twitter:title" content={theTitle} />
      <meta name="twitter:description" content={theDescription} />
      <meta name="twitter:image" content={imageUrl} />
      {props.children}
    </>
  );
};

export default Seo;

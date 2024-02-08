import React from "react";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import HiwArea from "../components/HiwArea";
import BlogHome from "../components/BlogHome";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import SliderTwo from "../components/SliderTwo";

const HomePage = () => {
  return (
    <Layout>
      <NavOne />
      <SliderTwo />
      <BlogHome />
      <HiwArea />
      <Footer />
    </Layout>
  );
};

export const Head = () => <Seo />;

export default HomePage;

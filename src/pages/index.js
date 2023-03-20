import React from "react";
import Footer from "../components/Footer";
import HiwArea from "../components/HiwArea";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import SliderTwo from "../components/SliderTwo";

const HomePage = () => {
  return (
    <Layout>
      <NavOne />
      <SliderTwo />
      <HiwArea />
      <Footer />
    </Layout>
  );
};

export default HomePage;

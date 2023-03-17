import React from "react";
import Footer from "../components/Footer";
import HiwArea from "../components/HiwArea";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import SliderTwo from "../components/SliderTwo";

const HomePage = () => {
  return (
    <Layout pageTitle="IAI Kabupaten Blitar - Website Resmi Ikatan Apoteker Kabupaten Blitar">
      <NavOne />
      <SliderTwo />
      <HiwArea />
      <Footer />
    </Layout>
  );
};

export default HomePage;

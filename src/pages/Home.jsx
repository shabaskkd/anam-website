import React from "react";
import ArchitectureProcess from "../components/ArchitectureProcess";
import Counter from "../components/Counter";
import Layout from "../components/Layout";
import LogoSlider from "../components/LogoSlider";
import ServicesSection from "../components/ServicesSection";
import Spotlight from "../components/Spotlight";
import TailoredServices from "../components/TailoredServices";

const Home = () => {
  return (
    <Layout>
      <Spotlight />
      <Counter />
      <ServicesSection />
      <LogoSlider />
      <ArchitectureProcess />
      <TailoredServices />
    </Layout>
  );
};

export default Home;

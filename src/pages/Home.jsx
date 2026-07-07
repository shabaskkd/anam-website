import ArchitectureProcess from "../components/ArchitectureProcess";
import BlogSection from "../components/BlogSection";
import Counter from "../components/Counter";
import FinishingSolutions from "../components/FinishingSolutions";
import HeroSection from "../components/HeroSection";
import HorizontalGallery from "../components/HorizontalGallery";
import Layout from "../components/Layout";
import LogoSlider from "../components/LogoSlider";
import MasonryGallery from "../components/MasanoryGallery";
import ProductShowcaseSection from "../components/ProductShowCase";
import ServicesSection from "../components/ServicesSection";
import Spotlight from "../components/Spotlight";
import TailoredServices from "../components/TailoredServices";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Layout>
        <Spotlight />
        {/* <HeroSection /> */}
        <Counter />
        <ServicesSection />
        <LogoSlider />
        <ArchitectureProcess />
        <TailoredServices />
        {/* <FinishingSolutions /> */}
        {/* <ProductShowcaseSection /> */}
        {/* <Testimonial /> */}
        {/* <BlogSection /> */}
        {/* <HorizontalGallery /> */}
        {/* <MasonryGallery /> */}
      </Layout>
    </>
  );
};

export default Home;

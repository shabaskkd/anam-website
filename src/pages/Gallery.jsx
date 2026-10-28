import React from "react";
import MasonryGallery from "../components/MasanoryGallery";
import Layout from "../components/Layout";

const Gallery = () => {
  return (
    <Layout withBg>
      <div className="pt-[100px] pb-20">
        <div className="container mx-auto px-4 text-center my-12">
          <span className="anam-hero-eyebrow">Visual Inspiration</span>
          <h1 className="anam-hero-title text-center text-[#1a1a1a]">
            The <span className="text-primary">Gallery</span>
          </h1>
          <p className="anam-lead-p max-w-xl mx-auto text-center">
            Delivering Excellence Across Every Project. From concept to
            completion, quality you can see.
          </p>
        </div>
        <MasonryGallery />
      </div>
    </Layout>
  );
};

export default Gallery;

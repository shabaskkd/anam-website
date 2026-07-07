import React from "react";
import MasonryGallery from "../components/MasanoryGallery";
import Layout from "../components/Layout";

const Gallery = () => {
  return (
    <Layout withBg>
      <div className="pt-[100px] pb-20">
        <div className="container mx-auto px-4 text-center my-12">
          <h1 className="text-6xl font-bold tracking-tighter text-[#1a1a1a] mb-4">
            The <span className="text-primary">gallery</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
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

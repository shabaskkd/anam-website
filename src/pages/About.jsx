import React from "react";
import Layout from "../components/Layout";
import { IMAGES } from "../utils/assets";
import MasonryGallery from "../components/MasanoryGallery";

const AboutSection = () => {
  return (
    <Layout withBg>
      <div className="text-[#1a1a1a] font-sans pt-10">
        {/* Hero Banner */}
        <div className="relative h-[200px] md:h-[440px] w-full flex items-center justify-center overflow-hidden">
          <img
            src={IMAGES.master_3d}
            alt="Architecture"
            className="w-full md:w-2/3 mx-auto z-10 relative"
          />
          <h1 className="absolute top-4 md:top-18 text-gray-200 text-6xl md:text-8xl font-medium tracking-tight">
            About Us
          </h1>
        </div>

        {/* Content Content */}
        <div className="max-w-7xl mx-auto px-6 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif italic leading-tight mb-8">
                Dream
                <span className="font-sans italic"> into reality.</span>
                <br />
              </h2>
              <p className="text-gray-600 max-w-xl leading-relaxed">
                Welcome to Anam Trading and Contracting, a pioneering venture of
                Aspire Furniture, established in Qatar in 2012. With a passion
                for delivering exceptional interior solutions, we’ve grown into
                a leading provider of premium products and services for
                residential and commercial spaces. <br />
                <br /> Anam Trading and Contracting, a venture of Aspire Blinds,
                is your go-to provider for high-quality finishing and
                landscaping solutions in Qatar. We specialize in a wide range of
                products, including parquet flooring, SPC flooring, wall panels,
                WPC and wooden doors, curtains, and blinds. <br />
                <br />
                Founded on the principles of quality, innovation, and customer
                satisfaction, Anam Trading and Contracting has built a
                reputation for excellence. Our journey began with a simple
                vision: to transform spaces, enhance lives. Today, we’re proud
                to offer a comprehensive range of interior solutions, tailored
                to meet the unique needs of our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 lg:pt-0">
              <div>
                <h4 className="text-xl font-bold mb-4">Mission</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  ANAM group is committed to make the world better place through
                  innovative business which provide inspiration for luxury ( or
                  better ) living. having the largest /(best) collection of
                  trend setting decors for floor, wall, sanitary wares products
                  and building materials by the world’s best house, Anam carries
                  a mission to serve the customers better forever.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Vision</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  At ANAM constructions, our focus is on YOU and what YOU want
                  to achieve. we provide ourselves on forging strong, lasting
                  relationship which help us to continue to thrive and develop.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Image */}

          <MasonryGallery />
        </div>
      </div>
    </Layout>
  );
};
export default AboutSection;

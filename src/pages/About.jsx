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
                Welcome to ANAM Trading and Contracting, established in Qatar in
                2012. With a passion for delivering exceptional interior and
                architectural finishing solutions, we have grown into a leading
                provider of premium products and services for residential,
                commercial, and hospitality spaces across Qatar. <br />
                <br /> We specialize in a wide range of premium products and
                turnkey fit-out solutions, including custom kitchen cabinets,
                wardrobes, parquet and SPC flooring, decorative wall panels,
                WPC and wooden doors, partitions, ceilings, curtains, and blinds. <br />
                <br />
                Founded on the principles of quality, innovation, and client
                satisfaction, ANAM Trading and Contracting has built an enduring
                reputation for excellence. Our journey began with a clear
                vision: to transform spaces and enhance lives. Today, we take pride
                in offering comprehensive, tailor-made interior solutions designed
                to meet the exact requirements of every client.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 lg:pt-0">
              <div>
                <h4 className="text-xl font-bold mb-4">Mission</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  ANAM is committed to elevating interior spaces through
                  innovative solutions and premium craftsmanship that inspire modern
                  living. By bringing together the finest collections of trendsetting
                  decors for floors, walls, doors, and architectural finishing from
                  world-class manufacturers, ANAM is dedicated to delivering excellence
                  and enduring customer satisfaction.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Vision</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  At ANAM Trading and Contracting, our focus is on you and the vision
                  you want to achieve. We pride ourselves on forging strong, lasting
                  client partnerships built on trust, transparency, and top-tier execution
                  that help us continuously innovate and lead the industry.
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

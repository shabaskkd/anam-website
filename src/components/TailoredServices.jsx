import React from "react";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { productData } from "../data/productData";

const TailoredServices = () => {
  const brandColor = "#4B0B22";
  const products = productData;

  return (
    <section className="container mx-auto pt-24 px-4">
      <div className="mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="md:text-5xl text-3xl text-gray-800">Best Products</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-[50px]"
        >
          {products.slice(0, 10)?.map((product, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 flex flex-col group cursor-pointer h-full border border-gray-100 group overflow-hidden relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-white">
                  <img
                    src={product?.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>

                <div className="p-6 flex items-center justify-between bg-gradient-to-t from-primary to-transparent text-white absolute w-full left-0 -bottom-[100%] group-hover:bottom-0 transition-all duration-500">
                  <h5 className="text-sm font-bold text-white leading-tight uppercase tracking-wider">
                    {product?.name}
                  </h5>
                  <Link
                    to={`/products/${product?.slug}`}
                    style={{ transition: "all 0.3s ease" }}
                    className="p-2 w-10 h-10 flex items-center justify-center bg-white/10 text-white border border-gray-100/30 hover:border-primary hover:text-[#fff] hover:shadow-md"
                  >
                    <LuArrowRight size={18} />
                  </Link>

                  {/* <div className="flex flex-col gap-3 mb-4 flex-grow">
                    <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">
                      {product?.description}
                    </p>
                  </div> */}

                  {/* <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-400">
                      {index + 1}
                    </span>
                   
                  </div> */}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: ${brandColor} !important;
          transform: scale(0.7);
        }
        .swiper-pagination-bullet-active {
          background: ${brandColor} !important;
        }
        .swiper-pagination {
          position: absolute;
          bottom: -26px !important;
          left: 50%;
        }
      `}</style>
    </section>
  );
};

export default TailoredServices;

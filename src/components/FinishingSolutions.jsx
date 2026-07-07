import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import "swiper/css";
import { IMAGES } from "../utils/assets";

const PRODUCTS = [
  {
    id: 1,
    title: "Artificial Plants & Pots",
    image: IMAGES.plants,
  },
  {
    id: 2,
    title: "Parquet Flooring",
    image: IMAGES.flooring,
  },
  {
    id: 3,
    title: "SPC Flooring",
    image: IMAGES.spc_flooring,
  },
  {
    id: 4,
    title: "Doors",
    image: IMAGES.doors,
  },
  {
    id: 5,
    title: "Wallpaper",
    image: IMAGES.wallpaper,
  },
];

const ProductCard = ({ product }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full h-[400px] overflow-hidden shadow-2xl bg-black"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
        <h3 className="text-xl font-bold text-white leading-tight">
          {product.title}
        </h3>
      </div>
    </motion.div>
  );
};

const FinishingSolutions = () => {
  return (
    <section className="bg-primary text-white flex items-center py-20 overflow-hidden">
      <div className="max-w-[1400px] px-12 items-center flex">
        {/* Left Side: STATIC TEXT with Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-2/3 space-y-8 z-20"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-black opacity-60">
              Products
            </span>
            <h2 className="text-5xl font-bold mt-4 leading-tight">
              Premium Finishing Solutions
            </h2>
          </div>
          <p className="text-lg opacity-80 max-w-sm">
            High-quality landscaping and interior solutions crafted for Qatar's
            finest spaces.
          </p>

          <div className="flex gap-4 pt-4">
            <button
              id="p-prev"
              className="w-14 h-14 border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all z-30"
            >
              <LuChevronLeft size={24} />
            </button>
            <button
              id="p-next"
              className="w-14 h-14 border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all z-30"
            >
              <LuChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Right Side: Slider with Fade Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="overflow-hidden mt-10"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            speed={1000}
            spaceBetween={30}
            slidesPerView={1.2}
            loop={true}
            navigation={{ prevEl: "#p-prev", nextEl: "#p-next" }}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {PRODUCTS.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default FinishingSolutions;

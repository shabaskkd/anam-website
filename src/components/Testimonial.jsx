import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LuStar } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import LogoSlider from "./LogoSlider";
import { IMAGES } from "../utils/assets";

const testimonials = [
  {
    quote:
      "A wonderful experience! They knew what they were doing and were incredibly knowledgeable throughout the process.",
    name: "Morgan Dufresne",
    role: "Company Owner",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "From start to finish, the team delivered outstanding quality and attention to detail.",
    name: "Sarah Johnson",
    role: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "Professional, creative, and reliable. Highly recommended for premium projects.",
    name: "Daniel Roberts",
    role: "Architect",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
];

const Testimonial = () => {
  const scrollRef = useRef(null);
  const bgImages = [IMAGES.bg_3, IMAGES.dark_bg_2, IMAGES.bg_4];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="py-8 pb-14 h-[500px] flex items-center overflow-hidden relative"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div className="absolute inset-0">
        {bgImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: bgIndex === index ? 1 : 0,
              scale: bgIndex === index ? 1.05 : 1,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-[1400px] mx-auto px-12 flex relative z-10">
        <div className="w-3/4 text-left flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-[#fff] mb-8">
            Happy words
            <br />
            <span className="text-[#fff]">About us</span>
          </h2>
          <div className="">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-black text-gray-100">4.8</span>
              <div>
                <div className="flex text-yellow-500 mb-0">
                  {[...Array(5)].map((_, i) => (
                    <LuStar key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-100 uppercase tracking-tighter">
                  2,688 Reviews
                </span>
              </div>
            </div>

            <p className="text-gray-200 font-medium leading-relaxed max-w-[440px] mt-4">
              From Concept To Reality, The Team Turned My Vision Into A
              Stunning, Livable Space.
            </p>
          </div>
        </div>

        <div className="w-1/2 items-center">
          {/* Right Side (Swiper Testimonials) */}
          <div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1.5}
              speed={3000}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="testimonial-swiper"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    // initial={{ scale: 0.9, backdropFilter: "blur(10px)" }}
                    animate={{
                      scale: activeIndex === index ? 1 : 0.8,
                      opacity: activeIndex === index ? 1 : 0.9,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="space-y-10 bg-white/0.7 border border-white/40 p-10 backdrop-blur-sm rounded-3xl shadow-lg min-h-[300px] flex flex-col justify-between"
                  >
                    <p className="text-xl text-white italic font-thin">
                      “{item.quote}”
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-100">
                          {item.name}
                        </h4>
                        <p className="text-[#F0B100] font-medium text-sm">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

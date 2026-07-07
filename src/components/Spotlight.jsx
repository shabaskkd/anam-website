import { gsap } from "gsap";
import { useRef } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IMAGES } from "../utils/assets";

const slides = [
  {
    image: IMAGES.LP2,
    title: ["Premium", "Flooring Solutions"],
    subtitle: "Durability Meets Style",
    desc: "Upgrade your interiors with premium SPC flooring that combines durability, water resistance, and modern aesthetics for long-lasting elegant spaces.",
    cta: "Explore Flooring",
  },
  {
    image: IMAGES.LP3,
    title: ["Elegant &", "Modern Partitions"],
    subtitle: "Transform Your Walls",
    desc: "Create stylish and functional spaces with our sleek aluminium partitions designed for flexibility, durability, and modern interior aesthetics.",
    cta: "View Wallpapers",
  },
  {
    image: IMAGES.LP1,
    title: ["Modern & Secure", "Door Collection"],
    subtitle: "Security & Aesthetics",
    desc: "Explore our premium door collection crafted for superior security, durability, and contemporary design that complements any interior.",
    cta: "Browse Doors",
  },
  {
    image: IMAGES.LP4,
    title: ["Minimalist", "Wall Panels"],
    subtitle: "Bring Minimalism",
    desc: "Enhance your walls with elegant minimalist wall panels that add depth, texture, and a refined modern look to your interiors.",
    cta: "See Collection",
  },
];

const Spotlight = () => {
  const sectionRef = useRef(null);

  const onSlideChange = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const titleLines = activeSlide.querySelectorAll(".title-line");
    const descLines = activeSlide.querySelectorAll(".desc-line");
    const bgImage = activeSlide.querySelector(".bg-image");

    const tl = gsap.timeline();

    gsap.fromTo(
      bgImage,
      { scale: 1.2, filter: "blur(10px) brightness(0.5)" },
      {
        scale: 1,
        filter: "blur(0px) brightness(1)",
        duration: 2,
        ease: "power2.out",
      },
    );

    tl.fromTo(
      titleLines,
      { y: 100, rotate: 5, opacity: 0 },
      {
        y: 0,
        rotate: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
      },
      0.3,
    ).fromTo(
      descLines,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8",
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[90vh] overflow-hidden bg-black"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onSlideChange={onSlideChange}
        onInit={onSlideChange}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".spotlight-prev",
          nextEl: ".spotlight-next",
        }}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center text-left">
              <img
                src={slide.image}
                alt=""
                className="bg-image absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="absolute left-4 md:left-24 bottom-[120px] z-10 max-w-4xl px-6">
                <h1 className="text-white text-3xl md:text-5xl font-bold leading-[1.1em] mt-4">
                  {slide.title.map((line, idx) => (
                    <span key={idx} className="block overflow-hidden">
                      <span className="title-line block text-[#fff]">
                        {line}
                      </span>
                    </span>
                  ))}
                </h1>

                <p className="desc-line mt-6 text-[#fff] text-md md:text-lg leading-relaxed max-w-xl">
                  {slide.desc}
                </p>

                {/* <div className="mt-10 flex justify-start gap-4">
                  <button className="px-8 py-4 bg-white text-black font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
                    {slide.cta}
                  </button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Spotlight;

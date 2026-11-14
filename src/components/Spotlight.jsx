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
    desc: "Upgrade your interiors with premium SPC flooring that combines durability, water resistance, and modern aesthetics for long-lasting elegant spaces in Qatar.",
    cta: "Explore Flooring",
    link: "/flooring",
  },
  {
    image: IMAGES.LP3,
    title: ["Elegant &", "Modern Partitions"],
    subtitle: "Flexible Space Solutions",
    desc: "Create stylish and functional spaces with our sleek aluminium and glass partitions designed for durability and modern interior architecture.",
    cta: "Explore Partitions",
    link: "/partitions",
  },
  {
    image: IMAGES.LP1,
    title: ["Modern & Secure", "Door Collection"],
    subtitle: "Security & Aesthetics",
    desc: "Explore our premium door collection crafted for superior acoustic insulation, durability, and contemporary design that complements any villa or office.",
    cta: "Browse Doors",
    link: "/doors",
  },
  {
    image: IMAGES.LP4,
    title: ["Minimalist", "Wall Panels"],
    subtitle: "Bring Minimalism",
    desc: "Enhance your walls with luxury SPC panels, WPC fluted cladding, and acoustic wooden slats that add depth, texture, and refined elegance.",
    cta: "See Wall Panels",
    link: "/wall-panels",
  },
];

const Spotlight = () => {
  const sectionRef = useRef(null);

  const onSlideChange = (swiper) => {
    if (!swiper || !swiper.slides) return;

    // Reset non-active slides to prevent overlapping text
    swiper.slides.forEach((slide, idx) => {
      if (idx !== swiper.activeIndex) {
        const otherTitles = slide.querySelectorAll(".title-line");
        const otherDescs = slide.querySelectorAll(".desc-line");
        const otherBtns = slide.querySelectorAll(".cta-btn");
        gsap.set(otherTitles, { opacity: 0, y: 40 });
        gsap.set(otherDescs, { opacity: 0, y: 20 });
        gsap.set(otherBtns, { opacity: 0, y: 20 });
      }
    });

    const activeSlide = swiper.slides[swiper.activeIndex];
    if (!activeSlide) return;

    const titleLines = activeSlide.querySelectorAll(".title-line");
    const descLines = activeSlide.querySelectorAll(".desc-line");
    const btn = activeSlide.querySelectorAll(".cta-btn");
    const bgImage = activeSlide.querySelector(".bg-image");

    const tl = gsap.timeline();

    if (bgImage) {
      gsap.fromTo(
        bgImage,
        { scale: 1.15, filter: "blur(6px) brightness(0.6)" },
        {
          scale: 1,
          filter: "blur(0px) brightness(1)",
          duration: 1.6,
          ease: "power2.out",
        },
      );
    }

    if (titleLines && titleLines.length > 0) {
      tl.fromTo(
        titleLines,
        { y: 80, rotate: 3, opacity: 0 },
        {
          y: 0,
          rotate: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "expo.out",
        },
        0.2,
      );
    }

    if (descLines && descLines.length > 0) {
      tl.fromTo(
        descLines,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      );
    }

    if (btn && btn.length > 0) {
      tl.fromTo(
        btn,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.5",
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[85vh] sm:h-[90vh] min-h-[520px] overflow-hidden bg-black"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
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
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                decoding="async"
                src={slide.image}
                alt={slide.title.join(" ")}
                className="bg-image absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />

              <div className="absolute left-2 sm:left-6 md:left-24 bottom-14 sm:bottom-20 md:bottom-[110px] z-10 max-w-4xl px-4 sm:px-6">
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C9A86A] uppercase mb-2 block">
                  {slide.subtitle}
                </span>
                <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold leading-[1.12em] mt-1">
                  {slide.title.map((line, idx) => (
                    <span key={idx} className="block overflow-hidden">
                      <span className="title-line block text-white opacity-0">
                        {line}
                      </span>
                    </span>
                  ))}
                </h1>

                <p className="desc-line mt-3 sm:mt-5 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl opacity-0">
                  {slide.desc}
                </p>

                <div className="cta-btn mt-6 sm:mt-8 flex justify-start gap-4 opacity-0">
                  <a
                    href={slide.link}
                    className="px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 shadow-xl border border-white/20 inline-flex items-center gap-2"
                  >
                    {slide.cta} ↗
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Spotlight;

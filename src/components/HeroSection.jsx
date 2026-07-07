import React, { useState } from "react";
import { LuArrowRight, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Beams from "./ui/Beams";
import { IMAGES } from "../utils/assets";
import { Link } from "react-router-dom";

const HERO_IMAGES = [
  IMAGES.spotlight_two,
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
];

const HeroSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = Math.abs(page % HERO_IMAGES.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const innerTranslateX = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["8%", "-8%"]
  );
  const innerTranslateY = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["8%", "-8%"]
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      filter: "blur(10px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      filter: "blur(10px)",
      transition: { duration: 0.5 },
    }),
  };

  return (
    <section className="relative py-10 lg:py-20 bg-[#fff] text-white flex items-center overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: STATIC CONTENT (No changes here) */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 ">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-widest text-gray-900">
              Started In 1999
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-5xl text-black font-bold leading-[1.1] tracking-tight">
            Where Spaces <br /> Inspire, and{" "}
            <span className="text-primary">
              Design <br /> Comes Alive
            </span>
          </h1>

          <div className="space-y-6 text-gray-400 max-w-xl leading-relaxed text-md">
            <p>
              Anam Trading and Contracting, a venture of Aspire Blinds, offers
              premium interior solutions in Qatar since 2012. From floorings to
              doors, curtains to decor, we provide wholesale, retail, and
              installation services for residential and commercial spaces.{" "}
              <br />
              <br />
              Experience exceptional quality, innovative designs, and
              unparalleled support. Explore our website to discover how we can
              elevate your space. <br />
            </p>
          </div>

          <Link to={"/about"}>
            <button className="px-8 py-4 border border-black text-black hover:border-transparent rounded-full font-semibold hover:bg-primary hover:text-white flex items-center transition-all duration-300 group">
              Know More{" "}
              <span className="block ml-2 group-hover:translate-x-1 transition-transform">
                <LuArrowRight />
              </span>
            </button>
          </Link>
        </div>

        <div
          className="relative group flex items-center justify-center"
          style={{ perspective: "1500px" }}
        >
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 border border-white/10 hover:bg-primary transition-all opacity-0 group-hover:opacity-100"
          >
            <LuChevronLeft size={24} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 border border-white/10 hover:bg-primary transition-all opacity-0 group-hover:opacity-100"
          >
            <LuChevronRight size={24} />
          </button>

          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
            style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
            className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl z-10 relative cursor-pointer aspect-[4/3] bg-neutral-900 w-full"
          >
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full absolute inset-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  style={{
                    translateX: innerTranslateX,
                    translateY: innerTranslateY,
                    scale: 1.25,
                  }}
                  className="w-full h-full"
                >
                  <img
                    src={HERO_IMAGES[imageIndex]}
                    alt="Interior Design"
                    className="w-full h-full object-cover"
                    style={{ transform: "translateZ(40px)" }}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

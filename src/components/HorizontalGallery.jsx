import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const row1 = [
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    size: "w-[350px] h-[350px]",
  },
  {
    src: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?_gl=1*plkynr*_ga*MTkzNzEyNzI2MS4xNzYzOTI0MDQ3*_ga_8JE65Q40S6*czE3NjgxMzA3NzgkbzE3JGcxJHQxNzY4MTMwNzkzJGo0NSRsMCRoMA..",
    size: "w-[500px] h-[350px]",
  },
  {
    src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?_gl=1*geez60*_ga*MTkzNzEyNzI2MS4xNzYzOTI0MDQ3*_ga_8JE65Q40S6*czE3NjgxMzA3NzgkbzE3JGcxJHQxNzY4MTMwODE5JGoxOSRsMCRoMA..",
    size: "w-[550px] h-[450px]",
  },
  {
    src: "https://images.pexels.com/photos/34277666/pexels-photo-34277666.jpeg",
    size: "w-[250px] h-[350px]",
  },
];

const row2 = [
  {
    src: "https://images.pexels.com/photos/32926476/pexels-photo-32926476.jpeg",
    size: "w-[480px] h-[320px]",
  },
  {
    src: "https://images.pexels.com/photos/33857158/pexels-photo-33857158.jpeg",
    size: "w-[550px] h-[380px]",
  },
  {
    src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    size: "w-[420px] h-[320px]",
  },
];

const HorizontalGallery = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const x1 = useTransform(smoothProgress, [0, 1], ["0%", "-35%"]);
  const x2 = useTransform(smoothProgress, [0, 1], ["5%", "-15%"]);

  return (
    <section ref={targetRef} className="relative py-10">
      <div className="flex flex-col justify-center py-10">
        <div className="relative z-10 flex flex-col gap-10">
          {/* Row 1: Heavy lifting handled by GPU */}
          <motion.div
            style={{ x: x1, willChange: "transform" }}
            className="flex gap-8 items-end px-20"
          >
            {row1.map((img, i) => (
              <div
                key={i}
                className={`flex-shrink-0 rounded-[2rem] overflow-hidden ${img.size}`}
              >
                <img
                  src={img.src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div
            style={{ x: x2, willChange: "transform" }}
            className="flex gap-8 items-start px-60"
          >
            {row2.map((img, i) => (
              <div
                key={i}
                className={`flex-shrink-0 rounded-[2rem] overflow-hidden ${img.size}`}
              >
                <img
                  src={img.src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;

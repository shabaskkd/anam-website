import React, { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "../data/galleryData";

const GalleryCard = memo(({ image, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.05 }}
    className="relative group overflow-hidden break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer mb-8"
  >
    <img
      src={`${image.src}?auto=format&fit=crop&q=80&w=800`}
      alt={image.title}
      loading="lazy"
      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
      <p className="text-[#c29d59] text-xs font-bold uppercase tracking-[0.2em] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        {image.category}
      </p>
      <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
        {image.title}
      </h3>
    </div>
  </motion.div>
));

const MasonryGallery = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(bgIndex);
      setBgIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    galleryImages.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });

    return () => clearInterval(interval);
  }, [bgIndex]);

  return (
    <section className="px-6 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[50vh] md:h-[65vh] overflow-hidden shadow-2xl mb-12 bg-black">
          {prevIndex !== null && (
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${galleryImages[prevIndex].src})`,
              }}
            />
          )}

          <AnimatePresence>
            <motion.div
              key={bgIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "linear" }}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${galleryImages[bgIndex].src})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-white">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <p className="text-[#c29d59] font-bold uppercase tracking-widest text-xs mb-3">
                    Featured Interior
                  </p>
                  <h2 className="text-2xl md:text-5xl font-bold uppercase tracking-tighter leading-none">
                    {galleryImages[bgIndex].title}
                  </h2>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
          {galleryImages.map((image, index) => (
            <GalleryCard key={image.src} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGallery;

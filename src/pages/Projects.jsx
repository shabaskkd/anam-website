import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import { projectsData } from "../data/projectsData";

const categories = [
  "All",
  "Interior",
  "Doors",
  "Kitchen & Wardrobe",
  "Partitions",
  "Ceiling & Lighting",
];

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <Layout withBg>
      <section className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="anam-hero-eyebrow">Portfolio Showcase</span>
            <h1 className="anam-hero-title text-center text-[#1a1a1a]">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="anam-lead-p mx-auto text-center">
              Discover our diverse portfolio ranging from bespoke interior
              designs to premium architectural finishes across Qatar.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border-2
                ${
                  activeTab === cat
                    ? "bg-primary border-primary text-white shadow-lg"
                    : "bg-transparent border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative group break-inside-avoid rounded-[2.5rem] overflow-hidden bg-white shadow-md hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={`${project.src}?auto=format&fit=crop&q=80&w=800`}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover / Touch Label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                    <span className="text-[#c29d59] font-bold text-xs tracking-wider mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;

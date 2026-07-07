import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../utils/assets";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Initial Consultation",
    description:
      "We begin by understanding your vision, goals, and needs, followed by a detailed site analysis.",
    image: IMAGES.initial_step,
  },
  {
    id: "02",
    title: "Design & Planning",
    description:
      "Our team creates detailed 3D designs and material palettes that reflect your unique requirements.",
    image: IMAGES.planning,
  },
  {
    id: "03",
    title: "Implementation",
    description:
      "With carefully selected contractors and on-site supervision, we manage every phase of construction.",
    image: IMAGES.implementation,
  },
  {
    id: "04",
    title: "Project Handover",
    description:
      "Upon completion, we conduct a thorough review to ensure every detail meets our high standards.",
    image: IMAGES.handover,
  },
];

const ArchitectureProcess = () => {
  return (
    <section
      className="pt-10 overflow-hidden bg-no-repeat bg-contain bg-bottom"
      style={{
        backgroundImage:
          "url(https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-bg02.png)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="md:mb-20 mb-10 gap-8 flex flex-col lg:flex-row">
          <div>
            <div className="max-w-2xl">
              <h2 className="md:text-5xl text-3xl text-[#1a1a1a] ">
                How we work
              </h2>
            </div>
            <div className="max-w-md">
              {/* <p className="text-gray-500 text-lg leading-relaxed pt-4">
                Our process is alive – adapting, refining, and growing with your
                vision. Always. Like artists with a blank canvas, we transform
                rooms into living works of art.
              </p> */}
            </div>
          </div>
          {/* <div className="w-1/2">
            <img src={IMAGES.plan_3d} alt="3d plan" />
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white overflow-hidden py-4 px-4 shadow-sm hover:shadow-xl transition-shadow duration-500 group border border-gray-100"
            >
              <div className="w-full h-[150px] overflow-hidden mb-8">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary font-bold text-lg">
                    {step.id}.
                  </span>
                  <h3 className="font-bold text-xl text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {step.description}
                </p>

                <span className="text-right block w-full bottom-0 right-4 text-7xl font-bold text-gray-100 group-hover:text-[#ead8df] transition-colors pointer-events-none">
                  {step.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureProcess;

import React from "react";

const products = [
  {
    title: "Vinyl Flooring",
    highlight: "largest",
    desc: "India’s largest facility with, 25 million plus square meters of contract sheet vinyl",
    image:
      "https://images.unsplash.com/photo-1604039619887-415341e31b58?q=80&w=2907&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with your image
    apps: [
      "Healthcare",
      "Safety & Transport",
      "Education",
      "Hospitality",
      "Sports",
      "Retail & Offices",
      "Commercial",
      "Industry",
    ],
    reverse: false,
  },
  {
    title: "Synthetic Leather",
    highlight: "20 million",
    desc: "20 million square meters produced annually",
    image:
      "https://images.unsplash.com/photo-1718115690443-cd8b7f6c112b?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with your image
    apps: [
      "Upholstery",
      "Footwear",
      "Automotive",
      "Multi purpose",
      "Transport",
    ],
    reverse: true,
  },
];

const ProductShowcaseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {products.map((item, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
              item.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className={`relative ${item.reverse ? "lg:order-2" : ""}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[420px] object-cover"
              />

            </div>

            <div
              className={`bg-gray-50 p-8 ${item.reverse ? "lg:order-1" : ""}`}
            >
              <div
                className={` ${
                  item.reverse ? "right-8" : "left-8"
                } text-white max-w-sm mb-8`}
              >
                <h3 className="text-3xl text-primary font-bold">
                  {item.title}
                </h3>
                <p className="mt-3 text-[#333] leading-relaxed">{item.desc}</p>
              </div>
              <h4 className="text-lg font-semibold mb-6">Applications:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
                {item.apps.map((app, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcaseSection;

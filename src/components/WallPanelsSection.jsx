import React, { useState } from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: "✦",
    title: "Wall Cladding Supplier in Doha",
    description:
      "Reliable wall cladding solutions for residential, commercial, and interior projects.",
  },
  {
    icon: "◆",
    title: "Wall Cladding Qatar",
    description:
      "Upgrade plain walls with modern textures, patterns and premium finishes.",
  },
  {
    icon: "✧",
    title: "Decorative Wall Panels Qatar",
    description:
      "Add texture, depth and character to modern residential and commercial interiors.",
  },
  {
    icon: "❖",
    title: "Interior Wall Panels Doha",
    description:
      "Elegant feature walls, reception backgrounds and contemporary office interiors.",
  },
  {
    icon: "✦",
    title: "Wall Panels for Every Space",
    description:
      "Suitable solutions for residential, commercial, hospitality and retail spaces.",
  },
];

const whyList = [
  "Premium-quality wall panel solutions",
  "Modern designs and finishes",
  "Residential & commercial applications",
  "Suitable for feature walls & interior spaces",
  "Professional project support",
  "Solutions for different architectural requirements",
  "Wall cladding options for modern interiors",
  "Serving customers across Qatar",
];

const faqs = [
  {
    q: "What are wall panels?",
    a: "Wall panels are decorative or functional panels used to cover and enhance wall surfaces. They are available in different materials, textures, patterns and finishes for residential and commercial applications.",
  },
  {
    q: "Do you provide wall cladding in Doha?",
    a: "Yes. ANAM Qatar provides wall cladding solutions for residential and commercial projects in Doha and across Qatar.",
  },
  {
    q: "Where can wall panels be used?",
    a: "Wall panels can be used in villas, apartments, offices, hotels, restaurants, retail stores, showrooms, reception areas and other residential and commercial spaces.",
  },
  {
    q: "Are decorative wall panels suitable for homes?",
    a: "Yes. Decorative wall panels can be used for living rooms, bedrooms, TV walls, entrance areas and other residential interiors.",
  },
  {
    q: "Do you supply wall panels in Qatar?",
    a: "ANAM Qatar provides wall panel and wall cladding solutions for residential and commercial projects across Qatar.",
  },
  {
    q: "Can wall panels be used for commercial interiors?",
    a: "Yes. Wall panels can be used in offices, hotels, restaurants, retail stores, showrooms and other commercial interiors.",
  },
];

const WallPanelsSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="wall-panels-container text-[#171717]">
      {/* Custom CSS rules for exact visual fidelity */}
      <style>{`
        .wp-primary-bg { background-color: #5A0F2F; }
        .wp-primary-text { color: #5A0F2F; }

        .solution-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .solution-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 3px;
          background: #5A0F2F;
          transition: 0.5s ease;
        }
        .solution-card:hover::before {
          left: 0;
        }
        .solution-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 35px rgba(90, 15, 47, 0.12);
          border-color: rgba(90, 15, 47, 0.2);
        }
        .solution-icon {
          transition: all 0.4s ease;
        }
        .solution-card:hover .solution-icon {
          transform: rotate(8deg) scale(1.08);
          background: #430921;
        }

        .why-image img {
          transition: transform 0.8s ease;
        }
        .why-image:hover img {
          transform: scale(1.08);
        }

        .application-image img {
          transition: transform 0.7s ease;
        }
        .application-image:hover img {
          transform: scale(1.06);
        }

        .cta-button {
          transition: all 0.4s ease;
        }
        .cta-button:hover {
          background: #f5f5f5;
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
      `}</style>

      {/* =====================================================
           PREMIUM WALL PANEL SOLUTIONS
      ===================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] w-[92%] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 text-[#5A0F2F] text-[13px] font-bold uppercase tracking-[2px] mb-3">
              <span className="w-[35px] h-[2px] bg-[#5A0F2F] inline-block"></span>
              Our Solutions
              <span className="w-[35px] h-[2px] bg-[#5A0F2F] inline-block"></span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] md:text-[46px] font-extrabold leading-[1.1] mb-[15px] text-[#171717]">
              Premium Wall Panel Solutions
            </h2>
            <p className="max-w-[720px] mx-auto text-[#666] text-[16px] leading-[1.6]">
              ANAM Qatar provides high-quality wall panel solutions designed for
              residential and commercial applications with modern finishes and
              durable materials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-[18px]">
            {solutions.map((item, idx) => (
              <div
                key={idx}
                className="solution-card bg-white border border-[#e8e8e8] p-[30px_20px] text-center shadow-[0_5px_20px_rgba(0,0,0,0.03)]"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="solution-icon w-[62px] h-[62px] rounded-full bg-[#5A0F2F] text-white mx-auto mb-5 flex items-center justify-center text-[25px]">
                  {item.icon}
                </div>
                <h3 className="text-[17px] font-bold mb-3 leading-[1.3] text-[#171717]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#666] leading-[1.7]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
           WHY CHOOSE ANAM
      ===================================================== */}
      <section className="bg-[#5A0F2F] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] min-h-[500px]">
          <div className="p-8 sm:p-[60px_40px] lg:p-[75px_55px] flex flex-col justify-center">
            <div className="text-[13px] uppercase tracking-[2px] font-bold mb-3">
              Why Choose
            </div>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold leading-[1.05] mb-[30px]">
              ANAM Qatar?
            </h2>

            <ul className="space-y-[15px] list-none">
              {whyList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[14px]">
                  <span className="w-[22px] h-[22px] min-w-[22px] rounded-full bg-white text-[#5A0F2F] flex items-center justify-center text-[12px] font-bold shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 overflow-hidden min-h-[300px] lg:min-h-full">
            <div className="why-image relative overflow-hidden h-full min-h-[250px] lg:min-h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent z-10" />
              <img
                src="/images/wall-panel-1.webp"
                alt="Modern Wall Panels in Qatar"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="why-image relative overflow-hidden h-full min-h-[250px] lg:min-h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent z-10" />
              <img
                src="/images/wall-panel-2.webp"
                alt="Interior Wall Panels Doha"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="why-image relative overflow-hidden h-full min-h-[250px] lg:min-h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent z-10" />
              <img
                src="/images/wall-panel-3.webp"
                alt="Decorative Wall Panels Qatar"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
           APPLICATIONS
      ===================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] w-[92%] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 text-[#5A0F2F] text-[13px] font-bold uppercase tracking-[2px] mb-3">
              <span className="w-[35px] h-[2px] bg-[#5A0F2F] inline-block"></span>
              Applications
              <span className="w-[35px] h-[2px] bg-[#5A0F2F] inline-block"></span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] md:text-[46px] font-extrabold leading-[1.1] mb-[15px] text-[#171717]">
              Applications of Wall Panels
            </h2>
            <p className="max-w-[720px] mx-auto text-[#666] text-[16px] leading-[1.6]">
              Our wall panels can be used in a variety of residential and commercial spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr_1.5fr] gap-[20px] items-stretch">
            {/* Residential List */}
            <div className="border border-[#e8e8e8] p-[25px] bg-white shadow-[0_5px_20px_rgba(0,0,0,0.04)] flex flex-col justify-center">
              <div className="inline-block bg-[#5A0F2F] text-white px-[13px] py-[7px] text-[11px] font-bold uppercase tracking-[1px] mb-[20px] self-start">
                Residential
              </div>
              <ul className="list-none space-y-0">
                <li className="flex items-center gap-[10px] py-[8px] text-[14px] border-b border-[#f1f1f1]">
                  <span className="text-[#5A0F2F] font-bold">⌂</span> Villas
                </li>
                <li className="flex items-center gap-[10px] py-[8px] text-[14px] border-b border-[#f1f1f1]">
                  <span className="text-[#5A0F2F] font-bold">⌂</span> Apartments
                </li>
                <li className="flex items-center gap-[10px] py-[8px] text-[14px] border-b border-[#f1f1f1]">
                  <span className="text-[#5A0F2F] font-bold">●</span> Living Rooms
                </li>
                <li className="flex items-center gap-[10px] py-[8px] text-[14px] border-b border-[#f1f1f1]">
                  <span className="text-[#5A0F2F] font-bold">●</span> Bedrooms
                </li>
                <li className="flex items-center gap-[10px] py-[8px] text-[14px] border-b border-[#f1f1f1]">
                  <span className="text-[#5A0F2F] font-bold">▣</span> TV Walls
                </li>
                <li className="flex items-center gap-[10px] py-[8px] text-[14px]">
                  <span className="text-[#5A0F2F] font-bold">◆</span> Dining Areas
                </li>
              </ul>
            </div>

            {/* Residential Image */}
            <div className="application-image overflow-hidden min-h-[280px] lg:min-h-[320px]">
              <img
                src="/images/residential-wall-panels.webp"
                alt="Wall Panels for Villas and Residential Interiors in Qatar"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Commercial List */}
            <div className="border border-[#e8e8e8] p-[25px] bg-white shadow-[0_5px_20px_rgba(0,0,0,0.04)] flex flex-col justify-center">
              <div className="inline-block bg-[#5A0F2F] text-white px-[13px] py-[7px] text-[11px] font-bold uppercase tracking-[1px] mb-[20px] self-start">
                Commercial
              </div>
              <ul className="list-none space-y-0">
                <li className="flex items-center gap-[10px] py-[8px] text-[14px] border-b border-[#f1f1f1]">
                  <span className="text-[#5A0F2F] font-bold">▦</span> Offices
                </li>
                <li className="flex items-center gap-[10px] py-[8px] text-[14px] border-b border-[#f1f1f1]">
                  <span className="text-[#5A0F2F] font-bold">▦</span> Hotels
                </li>
                <li className="flex items-center gap-[10px] py-[8px] text-[14px] border-b border-[#f1f1f1]">
                  <span className="text-[#5A0F2F] font-bold">◆</span> Restaurants
                </li>
                <li className="flex items-center gap-[10px] py-[8px] text-[14px] border-b border-[#f1f1f1]">
                  <span className="text-[#5A0F2F] font-bold">◆</span> Retail Stores
                </li>
                <li className="flex items-center gap-[10px] py-[8px] text-[14px] border-b border-[#f1f1f1]">
                  <span className="text-[#5A0F2F] font-bold">▣</span> Showrooms
                </li>
                <li className="flex items-center gap-[10px] py-[8px] text-[14px]">
                  <span className="text-[#5A0F2F] font-bold">●</span> Reception Areas
                </li>
              </ul>
            </div>

            {/* Commercial Image */}
            <div className="application-image overflow-hidden min-h-[280px] lg:min-h-[320px]">
              <img
                src="/images/commercial-wall-panels.webp"
                alt="Commercial Wall Panels and Wall Cladding in Qatar"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
           FAQ
      ===================================================== */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1200px] w-[92%] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 text-[#5A0F2F] text-[13px] font-bold uppercase tracking-[2px] mb-3">
              <span className="w-[35px] h-[2px] bg-[#5A0F2F] inline-block"></span>
              FAQ
              <span className="w-[35px] h-[2px] bg-[#5A0F2F] inline-block"></span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] md:text-[46px] font-extrabold leading-[1.1] text-[#171717]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] max-w-[1000px] mx-auto items-start">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white border transition-colors duration-300 ${
                    isOpen ? "border-[#5A0F2F]" : "border-[#e8e8e8]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full border-none bg-white p-[20px_22px] text-left text-[14px] font-bold cursor-pointer flex items-center justify-between text-[#171717] gap-3"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`w-[25px] h-[25px] shrink-0 rounded-full bg-[#5A0F2F] text-white flex items-center justify-center text-[16px] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      isOpen ? "max-h-[300px]" : "max-h-0"
                    }`}
                  >
                    <p className="px-[22px] pb-[20px] text-[#666] text-[14px] leading-[1.6]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
           CTA
      ===================================================== */}
      <section className="bg-[#5A0F2F] text-white py-[70px]">
        <div className="max-w-[1200px] w-[92%] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="max-w-[650px]">
              <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-extrabold leading-[1.05] mb-[15px]">
                Get Wall Panels<br />in Qatar
              </h2>
              <p className="text-white/85 text-[16px] leading-[1.6]">
                Upgrade your interiors with modern and durable wall panel solutions
                from ANAM Qatar. Our team can help you select a suitable solution for
                your residential or commercial project.
              </p>
            </div>

            <Link
              to="/contact"
              className="cta-button inline-flex items-center gap-3 bg-white text-[#5A0F2F] p-[15px_25px] font-bold text-[14px] whitespace-nowrap shadow-md hover:bg-[#f5f5f5]"
            >
              Contact Us Today
              <span className="text-[16px]">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WallPanelsSection;

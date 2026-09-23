import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BLOGS } from "../data/blogs";

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
    q: "1. What are the best wall panels for homes in Qatar?",
    a: "The best option depends on the application and desired appearance. WPC, SPC, UV, solid wooden and other decorative panels can be suitable for different interior requirements.",
  },
  {
    q: "2. Are wall panels suitable for villas in Qatar?",
    a: "Yes. Wall panels can be used in living rooms, bedrooms, majlis areas, TV walls, entrances and other villa interiors.",
  },
  {
    q: "3. Can wall panels be used for TV walls?",
    a: "Yes. Decorative, WPC and marble-effect panels are commonly used to create attractive TV feature walls.",
  },
  {
    q: "4. Are WPC wall panels suitable for interior applications?",
    a: "Yes. WPC panels can be used for several interior applications, depending on the specific product specifications and installation requirements.",
  },
  {
    q: "5. Can wall panels be customised?",
    a: "Depending on the panel type and project requirements, different colours, textures, patterns and installation combinations can be considered.",
  },
  {
    q: "6. Where can I buy wall panels in Qatar?",
    a: "ANAM Qatar provides a range of wall panel solutions for residential and commercial interior applications across Qatar.",
  },
  {
    q: "Do you provide wall cladding in Doha?",
    a: "Yes. ANAM Qatar provides wall cladding solutions for residential and commercial projects in Doha and across Qatar.",
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
        .wp-hero-grid {
          display: grid;
          grid-template-columns: 44% 56%;
          min-height: 560px;
          position: relative;
        }
        .wp-hero-left {
          background: #ffffff;
          display: flex;
          align-items: center;
          padding: 64px 8% 64px 10%;
          position: relative;
          z-index: 10;
        }
        .wp-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #5A0F2F;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .wp-hero-tag::before {
          content: "";
          display: inline-block;
          width: 28px;
          height: 2px;
          background: #5A0F2F;
        }
        .wp-hero-title {
          font-size: clamp(36px, 4.2vw, 58px);
          line-height: 1.04;
          font-weight: 900;
          color: #171717;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin: 0 0 24px;
        }
        .wp-hero-underline-bar {
          display: block;
          height: 5px;
          width: 150px;
          background: #5A0F2F;
          border-radius: 999px;
          margin-top: 8px;
        }
        .wp-hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #5A0F2F;
          color: #ffffff;
          padding: 16px 30px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(90, 15, 47, 0.22);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .wp-hero-btn:hover {
          background: #420820;
          transform: translateY(-3px);
          box-shadow: 0 16px 32px rgba(90, 15, 47, 0.32);
        }
        .wp-hero-right {
          position: relative;
          min-height: 560px;
          overflow: hidden;
          background: #111;
        }
        .wp-hero-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wp-hero-right:hover img {
          transform: scale(1.035);
        }
        .wp-floating-badge {
          position: absolute;
          bottom: 28px;
          right: 28px;
          background: #5A0F2F;
          color: #ffffff;
          padding: 14px 22px;
          z-index: 15;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          gap: 14px;
        }
        @media (max-width: 1024px) {
          .wp-hero-grid { grid-template-columns: 1fr; }
          .wp-hero-left { padding: 48px 6%; }
          .wp-hero-right { min-height: 400px; }
        }
        @media (max-width: 640px) {
          .wp-hero-title { font-size: 32px; }
          .wp-hero-underline-bar { width: 110px; }
          .wp-floating-badge { bottom: 16px; right: 16px; padding: 10px 16px; }
          .wp-hero-right { min-height: 300px; }
        }
      `}</style>

      {/* =====================================================
           LUXURY SPLIT HERO
      ===================================================== */}
      <section className="wp-hero-grid">
        <div className="wp-hero-left">
          <div className="max-w-[540px]">
            <div className="wp-hero-tag">Premium Wall Panel Solutions</div>
            <h1 className="wp-hero-title">
              Wall Panels <br />
              <span className="inline-block">
                In Qatar
                <span className="wp-hero-underline-bar" />
              </span>
            </h1>
            <p className="text-[#444] text-[16px] leading-[1.65] mb-4">
              ANAM Qatar is a premier provider of decorative and architectural wall panels in Doha, transforming residential villas, majlis, and commercial spaces with timeless texture and elegance.
            </p>
            <p className="text-[#666] text-[14.5px] leading-[1.65] mb-8">
              Explore our innovative range of WPC fluted panels, marble-effect UV sheets, acoustic wall cladding, and exterior composite finishes designed for Qatar's climate.
            </p>
            <a
              href="#wall-panel-categories"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.getElementById("wall-panel-categories");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              }}
              className="wp-hero-btn"
            >
              Explore Wall Panels <span>→</span>
            </a>
          </div>
        </div>

        <div className="wp-hero-right">
          <img
            src="/images/wall-panels-qatar.webp"
            alt="Wall Panels in Qatar - Modern Villa Interior Feature Wall"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
          <div className="wp-floating-badge">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C9A86A] shadow-[0_0_10px_#C9A86A] animate-pulse" />
            <div>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C9A86A]">Doha, Qatar</div>
              <div className="text-xs md:text-sm font-extrabold tracking-wide uppercase text-white">Wall Cladding Specialists</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Strip */}
      <section className="bg-white border-b border-[#e8e8e8]">
        <div className="max-w-[1240px] w-[94%] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-[#e8e8e8]">
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">✓</div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]">Waterproof & Durable</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Moisture & termite resistant</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">⚒</div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]">Expert Fitting</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Seamless installation Doha</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">▣</div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]">Modern Finishes</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Wood, marble & fluted</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">◆</div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]">UV Protected</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Fade-resistant colours</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">◉</div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]">Villas & Offices</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Feature walls & majlis</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">✦</div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]">Quality Assurance</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Certified premium grade</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
           WALL PANEL CATEGORIES GRID
      ===================================================== */}
      <section id="wall-panel-categories" className="py-16 bg-[#faf8f7] border-b border-[#eee]">
        <div className="max-w-[1240px] w-[92%] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 text-[#5A0F2F] text-[13px] font-bold uppercase tracking-[2px] mb-2">
              <span className="w-[30px] h-[2px] bg-[#5A0F2F] inline-block" />
              Explore Collections
              <span className="w-[30px] h-[2px] bg-[#5A0F2F] inline-block" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717]">Wall Panel Collections</h2>
            <p className="text-[#666] max-w-[650px] mx-auto mt-2 text-sm md:text-base">
              Select from our wide selection of interior and exterior architectural panel systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "SPC Wall Panels",
                desc: "100% waterproof stone polymer composite panels for bathrooms, kitchens, and feature walls.",
                image: "/images/wall-panel-1.webp",
                link: "/products/wall-panels/spc-panel",
              },
              {
                name: "WPC Fluted Panels",
                desc: "Modern wood plastic composite slatted panels offering architectural depth and acoustic charm.",
                image: "/images/wall-panel-2.webp",
                link: "/products/wall-panels/wpc-wall-panel",
              },
              {
                name: "UV Marble Sheet Panels",
                desc: "High-gloss luxury marble-effect sheets for elegant TV units, majlis, and reception walls.",
                image: "/images/wall-panel-3.webp",
                link: "/products/wall-panels/uv-panel",
              },
              {
                name: "WPC Outdoor Cladding",
                desc: "Weather-resistant exterior composite cladding engineered to endure Qatar's extreme climate.",
                image: "/images/commercial-wall-panels.webp",
                link: "/products/wall-panels/wpc-outdoor-panel",
              },
              {
                name: "Fibre Cement Panels",
                desc: "Fire-rated, durable architectural panels for high-performance exterior and interior walls.",
                image: "/images/residential-wall-panels.webp",
                link: "/products/wall-panels/fibre-cement-panel",
              },
              {
                name: "Solid Wooden Panels",
                desc: "Natural wood warmth and timeless luxury for executive offices and luxury villa interiors.",
                image: "/images/wall-panels-qatar.webp",
                link: "/products/wall-panels/solid-wooden-panel",
              },
            ].map((cat, idx) => (
              <Link
                key={idx}
                to={cat.link}
                className="group bg-white border border-[#e8e8e8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              >
                <div className="relative h-[240px] overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white text-lg font-bold block">{cat.name}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-[#666] text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#5A0F2F] group-hover:text-[#420820] transition-colors">
                    View Specifications <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
           PREMIUM WALL PANEL SOLUTIONS
      ===================================================== */}
      <section id="wall-panel-solutions" className="py-20 bg-white">
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
           LATEST BLOGS (3 BLOG CARDS)
      ===================================================== */}
      <section id="wall-panel-blog" className="py-24 bg-white border-t border-[#eaeaea]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-3 text-[#5A0F2F] text-[13px] font-bold uppercase tracking-[2.5px] mb-3">
                <span className="w-[35px] h-[2px] bg-[#5A0F2F] inline-block"></span>
                Our Blog & Guides
                <span className="w-[35px] h-[2px] bg-[#5A0F2F] inline-block"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                Latest <span className="text-[#5A0F2F]">Blog</span> & Articles
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[#5A0F2F] font-bold text-[14px] uppercase tracking-wider hover:text-black transition-colors self-start md:self-auto"
            >
              View All Articles ↗
            </Link>
          </div>

          {/* 3 Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOGS.slice(0, 3).map((post) => (
              <article key={post.slug} className="group cursor-pointer">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative overflow-hidden aspect-[4/3] mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-[#5A0F2F] text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2 shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 px-2">
                    <div className="flex items-center gap-1 text-sm font-bold uppercase tracking-tighter text-[#5A0F2F]">
                      <span>{post.author}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#5A0F2F] transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-gray-500 leading-relaxed line-clamp-3 text-sm font-medium">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
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

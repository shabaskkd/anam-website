import React, { useMemo } from "react";
import logo1 from "../assets/images/logos/logo1.png";
import logo2 from "../assets/images/logos/logo2.png";
import logo3 from "../assets/images/logos/logo3.png";
import logo4 from "../assets/images/logos/logo4.png";
import logo6 from "../assets/images/logos/logo6.png";
import logo7 from "../assets/images/logos/logo7.png";
import clicks from "../assets/images/logos/clicks.png";
import dnbco from "../assets/images/logos/DnBco-logo-2-1.png";
import fmm from "../assets/images/logos/FMM.png";
import gtc from "../assets/images/logos/GTC.png";
import intertech from "../assets/images/logos/Inter-tech_logo-removebg.png.avif";
import jungleZone from "../assets/images/logos/jungle-zone.jpg";

import keypact from "../assets/images/logos/keypact-logo-white@3x.png";
import logo3Custom from "../assets/images/logos/logo-3.png";
import logoWhite from "../assets/images/logos/logo-white@3x.png";
import logoDefault from "../assets/images/logos/logo.png";
import logoWebp from "../assets/images/logos/logo.webp";
import logo22 from "../assets/images/logos/LOGO22.png.webp";
import logoGreen from "../assets/images/logos/LogoGreen.png";
import loopMobility from "../assets/images/logos/Loop Mobility@3x.png";
import mgqHeader from "../assets/images/logos/mgq+header.png.webp";
import screenshotLogo from "../assets/images/logos/screenshot-logo.png";
import shufaLogo from "../assets/images/logos/Shufa-Logo@3x.png";
import unnamed from "../assets/images/logos/unnamed.png";

// Row 1: 12 partner logos
const row1Logos = [
  { src: logo1, alt: "Partner 1" },
  { src: logo2, alt: "Partner 2" },
  { src: logo3, alt: "Partner 3" },
  { src: logo4, alt: "Partner 4" },
  { src: logo6, alt: "Partner 6" },
  { src: logo7, alt: "Partner 7" },
  { src: clicks, alt: "Clicks" },
  { src: dnbco, alt: "DnBco" },
  { src: fmm, alt: "FMM" },
  { src: gtc, alt: "GTC" },
  { src: intertech, alt: "Inter-Tech" },
  { src: jungleZone, alt: "Jungle Zone" },
];

// Row 2: 12 partner logos
const row2Logos = [
  { src: keypact, alt: "Keypact" },
  { src: logo3Custom, alt: "Partner 3 Custom" },
  { src: logoWhite, alt: "Partner Prestige" },
  { src: logoDefault, alt: "Partner Brand" },
  { src: logoWebp, alt: "Partner Group" },
  { src: logo22, alt: "Partner 22" },
  { src: logoGreen, alt: "Green Building Partner" },
  { src: loopMobility, alt: "Loop Mobility" },
  { src: mgqHeader, alt: "MGQ" },
  { src: screenshotLogo, alt: "Enterprise Partner" },
  { src: shufaLogo, alt: "Shufa" },
  { src: unnamed, alt: "Qatar Partner" },
];

export default function LogoSlider() {
  // Duplicated once to enable mathematically seamless 50% loop
  const row1Doubled = useMemo(() => [...row1Logos, ...row1Logos], []);
  const row2Doubled = useMemo(() => [...row2Logos, ...row2Logos], []);

  return (
    <section className="w-full overflow-hidden relative py-12 md:py-16 bg-[#f9f4ef] select-none">
      <style>{`
        /* Mathematically seamless single-track infinite marquees */
        /* All items share a single flexbox parent - overlap is physically impossible */
        @keyframes marquee-scroll-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes marquee-scroll-right {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .slider-marquee-left {
          display: flex;
          align-items: center;
          width: max-content;
          flex-wrap: nowrap;
          animation: marquee-scroll-left 38s linear infinite;
          will-change: transform;
        }

        .slider-marquee-right {
          display: flex;
          align-items: center;
          width: max-content;
          flex-wrap: nowrap;
          animation: marquee-scroll-right 38s linear infinite;
          will-change: transform;
        }

        /* Mobile speeds: smooth and balanced */
        @media (max-width: 768px) {
          .slider-marquee-left {
            animation-duration: 26s;
          }
          .slider-marquee-right {
            animation-duration: 26s;
          }
        }

        /* ONLY pause on hover for real mouse pointers, never on mobile touch */
        @media (hover: hover) and (pointer: fine) {
          .slider-row:hover .slider-marquee-left,
          .slider-row:hover .slider-marquee-right {
            animation-play-state: paused;
          }
        }

        /* Strict flex spacing ensuring cards never collide */
        .logo-item {
          flex: 0 0 auto;
          padding: 0 6px;
        }

        @media (min-width: 640px) {
          .logo-item {
            padding: 0 10px;
          }
        }

        @media (min-width: 1024px) {
          .logo-item {
            padding: 0 14px;
          }
        }

        /* Polished cards with optimal contrast and mobile dimensions */
        .logo-card {
          width: 120px;
          height: 58px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 12px;
          box-sizing: border-box;
          flex-shrink: 0;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (min-width: 768px) {
          .logo-card {
            width: 144px;
            height: 68px;
            padding: 8px 16px;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .logo-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 22px rgba(90, 15, 47, 0.12);
            border-color: rgba(90, 15, 47, 0.25);
          }
          .logo-card:hover img {
            transform: scale(1.04);
          }
        }

        .logo-card img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          opacity: 1;
          filter: none;
          pointer-events: none;
          user-select: none;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      {/* Header Eyebrow & Title */}
      <div className="max-w-7xl mx-auto text-center mb-8 md:mb-12 px-6">
        <span className="anam-hero-eyebrow justify-center !text-xs tracking-[0.22em]">
          Trusted Industry Partners
        </span>
        <h2 className="anam-section-title !text-xl sm:!text-2xl md:!text-3xl !mb-0 text-gray-900">
          Collaborating with Leading Enterprises Across Qatar
        </h2>
      </div>

      {/* Edge Gradient Mask Overlays - subtle on mobile so logos stay fully visible */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 md:w-32 bg-gradient-to-r from-[#f9f4ef] via-[#f9f4ef]/90 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 md:w-32 bg-gradient-to-l from-[#f9f4ef] via-[#f9f4ef]/90 to-transparent z-10" />

      <div className="space-y-4 md:space-y-6 relative">
        {/* Row 1: Right-to-Left Continuous Single-Track Loop */}
        <div className="slider-row relative overflow-hidden w-full">
          <div className="slider-marquee-left">
            {row1Doubled.map((logo, index) => (
              <div
                key={`r1-${index}`}
                className="logo-item"
                aria-hidden={index >= row1Logos.length ? "true" : undefined}
              >
                <div className="logo-card">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left-to-Right Continuous Single-Track Loop */}
        <div className="slider-row relative overflow-hidden w-full">
          <div className="slider-marquee-right">
            {row2Doubled.map((logo, index) => (
              <div
                key={`r2-${index}`}
                className="logo-item"
                aria-hidden={index >= row2Logos.length ? "true" : undefined}
              >
                <div className="logo-card">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

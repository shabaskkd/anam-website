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
import intertech from "../assets/images/logos/Inter-tech_logo-removebg.png";
import jungleZone from "../assets/images/logos/jungle-zone.jpg";

import keypact from "../assets/images/logos/keypact-logo-white@3x.png";
import logo3Custom from "../assets/images/logos/logo-3.png";
import logoWhite from "../assets/images/logos/logo-white@3x.png";
import logoDefault from "../assets/images/logos/logo.png";
import logoWebp from "../assets/images/logos/logo.png";
import logo22 from "../assets/images/logos/LOGO22.png";
import logoGreen from "../assets/images/logos/LogoGreen.png";
import loopMobility from "../assets/images/logos/Loop Mobility@3x.png";
import mgqHeader from "../assets/images/logos/mgq+header.png";
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
        /* ========================================================
           APPLE WEBKIT & RETINA DISPLAY BULLETPROOF HARDENING
           - Fixes WebKit 3D compositing stacking bug on iOS
           - Enforces strict deterministic slot widths (no image layout shifts)
           - Prevents iOS Safari overflow:hidden render bleed with mask-image
           - Zero touch-gesture freezing or sticky hover states
           ======================================================== */

        @-webkit-keyframes marquee-scroll-left {
          0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
          100% {
            -webkit-transform: translate3d(-50%, 0, 0);
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes marquee-scroll-left {
          0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
          100% {
            -webkit-transform: translate3d(-50%, 0, 0);
            transform: translate3d(-50%, 0, 0);
          }
        }

        @-webkit-keyframes marquee-scroll-right {
          0% {
            -webkit-transform: translate3d(-50%, 0, 0);
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes marquee-scroll-right {
          0% {
            -webkit-transform: translate3d(-50%, 0, 0);
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        /* Container with iOS Safari overflow:hidden clipping fix */
        .slider-row {
          position: relative;
          overflow: hidden;
          width: 100%;
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          mask-image: radial-gradient(white, black);
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          isolation: isolate;
          contain: paint layout;
        }

        /* Animated tracks: GPU-accelerated and isolated */
        .slider-marquee-left {
          display: flex;
          align-items: center;
          width: max-content;
          flex-wrap: nowrap;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-perspective: 1000px;
          perspective: 1000px;
          -webkit-transform-style: flat;
          transform-style: flat;
          -webkit-animation: marquee-scroll-left 38s linear infinite;
          animation: marquee-scroll-left 38s linear infinite;
          will-change: -webkit-transform, transform;
        }

        .slider-marquee-right {
          display: flex;
          align-items: center;
          width: max-content;
          flex-wrap: nowrap;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-perspective: 1000px;
          perspective: 1000px;
          -webkit-transform-style: flat;
          transform-style: flat;
          -webkit-animation: marquee-scroll-right 38s linear infinite;
          animation: marquee-scroll-right 38s linear infinite;
          will-change: -webkit-transform, transform;
        }

        /* Mobile speeds: smooth, readable, non-jarring */
        @media (max-width: 768px) {
          .slider-marquee-left {
            -webkit-animation-duration: 26s;
            animation-duration: 26s;
          }
          .slider-marquee-right {
            -webkit-animation-duration: 26s;
            animation-duration: 26s;
          }
        }

        /* ONLY pause on hover for desktop fine mouse pointers - never iOS touch */
        @media (hover: hover) and (pointer: fine) {
          .slider-row:hover .slider-marquee-left,
          .slider-row:hover .slider-marquee-right {
            -webkit-animation-play-state: paused;
            animation-play-state: paused;
          }
        }

        /* Deterministic slot width: locks geometry so WebKit never recalculates loop math */
        .logo-item {
          flex: 0 0 132px;
          width: 132px;
          max-width: 132px;
          min-width: 132px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }

        @media (min-width: 768px) {
          .logo-item {
            flex: 0 0 168px;
            width: 168px;
            max-width: 168px;
            min-width: 168px;
          }
        }

        /* Luxury card surfaces with optimal contrast */
        .logo-card {
          width: 120px;
          height: 58px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px 12px;
          box-sizing: border-box;
          flex-shrink: 0;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          transition: -webkit-transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
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
            -webkit-transform: translateY(-2px);
            transform: translateY(-2px);
            box-shadow: 0 8px 22px rgba(90, 15, 47, 0.12);
            border-color: rgba(90, 15, 47, 0.25);
          }
          .logo-card:hover img {
            -webkit-transform: scale(1.04);
            transform: scale(1.04);
          }
        }

        /* Image protection against iOS selection/drag and rendering bugs */
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
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
          -webkit-user-drag: none;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transition: -webkit-transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
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
                    draggable={false}
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
                    draggable={false}
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

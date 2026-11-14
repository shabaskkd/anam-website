import React from "react";
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
  return (
    <section className="w-full overflow-hidden relative py-12 md:py-16 bg-[#f9f4ef]">
      <style>{`
        /* Smooth, 60fps GPU-accelerated marquee animations */
        @keyframes marquee-to-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }

        @keyframes marquee-to-right {
          0% {
            transform: translate3d(-100%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .slider-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        .animate-row-left {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          animation: marquee-to-left 42s linear infinite;
          will-change: transform;
        }

        .animate-row-right {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          animation: marquee-to-right 42s linear infinite;
          will-change: transform;
        }

        /* Responsive speeds */
        @media (max-width: 768px) {
          .animate-row-left {
            animation-duration: 28s;
          }
          .animate-row-right {
            animation-duration: 28s;
          }
        }

        .slider-row:hover .animate-row-left,
        .slider-row:hover .animate-row-right {
          animation-play-state: paused;
        }

        .logo-item {
          flex-shrink: 0;
          padding: 0 10px;
        }

        @media (min-width: 768px) {
          .logo-item {
            padding: 0 16px;
          }
        }

        .logo-card {
          width: 130px;
          height: 64px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 14px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 768px) {
          .logo-card {
            width: 110px;
            height: 54px;
            padding: 8px 10px;
            border-radius: 10px;
          }
        }

        .logo-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(90, 15, 47, 0.12);
          border-color: rgba(90, 15, 47, 0.2);
        }

        .logo-card img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(20%);
          opacity: 0.88;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .logo-card:hover img {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.05);
        }
      `}</style>

      {/* Header Eyebrow */}
      <div className="max-w-7xl mx-auto text-center mb-8 md:mb-12 px-6">
        <span className="anam-hero-eyebrow justify-center !text-xs tracking-[0.22em]">
          Trusted Industry Partners
        </span>
        <h2 className="anam-section-title !text-xl sm:!text-2xl md:!text-3xl !mb-0 text-gray-900">
          Collaborating with Leading Enterprises Across Qatar
        </h2>
      </div>

      {/* Edge Gradient Mask Overlays for Smooth In/Out Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-[#f9f4ef] via-[#f9f4ef]/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-[#f9f4ef] via-[#f9f4ef]/80 to-transparent z-10" />

      <div className="space-y-4 md:space-y-6 relative">
        {/* Row 1: Right to Left (Continuous Loop) */}
        <div className="slider-row relative overflow-hidden w-full">
          <div className="slider-track">
            {/* Primary Track */}
            <div className="animate-row-left">
              {row1Logos.map((logo, i) => (
                <div key={`r1-${i}`} className="logo-item">
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

            {/* Duplicate Seamless Loop Track */}
            <div className="animate-row-left" aria-hidden="true">
              {row1Logos.map((logo, i) => (
                <div key={`r1-dup-${i}`} className="logo-item">
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

        {/* Row 2: Left to Right (Continuous Loop) */}
        <div className="slider-row relative overflow-hidden w-full">
          <div className="slider-track">
            {/* Primary Track */}
            <div className="animate-row-right">
              {row2Logos.map((logo, i) => (
                <div key={`r2-${i}`} className="logo-item">
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

            {/* Duplicate Seamless Loop Track */}
            <div className="animate-row-right" aria-hidden="true">
              {row2Logos.map((logo, i) => (
                <div key={`r2-dup-${i}`} className="logo-item">
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
      </div>
    </section>
  );
}

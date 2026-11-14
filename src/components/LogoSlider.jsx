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

// Row 1: 13 logos
const row1Logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo6,
  logo7,
  clicks,
  dnbco,
  fmm,
  gtc,
  intertech,
  jungleZone,
];

// Row 2: 12 logos
const row2Logos = [
  keypact,
  logo3Custom,
  logoWhite,
  logoDefault,
  logoWebp,
  logo22,
  logoGreen,
  loopMobility,
  mgqHeader,
  screenshotLogo,
  shufaLogo,
  unnamed,
];

export default function LogoSlider() {
  return (
    <div className="w-full overflow-hidden relative py-8 space-y-8">
      <style>
        {`
          /* Right → Left (Current Row 1 animation) */
          @keyframes marquee-left {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }

          /* Left → Right (Opposite Row 2 animation) */
          @keyframes marquee-right {
            0%   { transform: translateX(-100%); }
            100% { transform: translateX(0%); }
          }

          .slider-track {
            display: flex;
            width: max-content;
          }

          .slider-row:hover .animate-row-left,
          .slider-row:hover .animate-row-right {
            animation-play-state: paused;
          }

          .animate-row-left {
            display: flex;
            flex-shrink: 0;
            animation: marquee-left 50s linear infinite;
            will-change: transform;
          }

          .animate-row-right {
            display: flex;
            flex-shrink: 0;
            animation: marquee-right 50s linear infinite;
            will-change: transform;
          }

          .logo-item {
            flex-shrink: 0;
            padding: 0 36px;
            opacity: 0.85;
            transition: all 0.3s ease;
          }

          .logo-item:hover {
            opacity: 1;
            transform: scale(1.05);
          }
        `}
      </style>

      {/* Row 1: 13 Logos (Current Animation: Right to Left) */}
      <div className="slider-row relative overflow-hidden w-full">
        <div className="slider-track">
          <div className="animate-row-left">
            {row1Logos.map((logo, i) => (
              <div
                key={`r1-${i}`}
                className="logo-item flex items-center justify-center"
              >
                <img
                  src={logo}
                  className="h-10 md:h-12 w-auto max-w-[130px] object-contain"
                  alt={`partner-logo-row1-${i}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="animate-row-left" aria-hidden="true">
            {row1Logos.map((logo, i) => (
              <div
                key={`r1-dup-${i}`}
                className="logo-item flex items-center justify-center"
              >
                <img
                  src={logo}
                  className="h-10 md:h-12 w-auto max-w-[130px] object-contain"
                  alt={`partner-logo-row1-dup-${i}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: 12 Logos (Opposite Animation: Left to Right) */}
      <div className="slider-row relative overflow-hidden w-full">
        <div className="slider-track">
          <div className="animate-row-right">
            {row2Logos.map((logo, i) => (
              <div
                key={`r2-${i}`}
                className="logo-item flex items-center justify-center"
              >
                <img
                  src={logo}
                  className="h-10 md:h-12 w-auto max-w-[130px] object-contain"
                  alt={`partner-logo-row2-${i}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="animate-row-right" aria-hidden="true">
            {row2Logos.map((logo, i) => (
              <div
                key={`r2-dup-${i}`}
                className="logo-item flex items-center justify-center"
              >
                <img
                  src={logo}
                  className="h-10 md:h-12 w-auto max-w-[130px] object-contain"
                  alt={`partner-logo-row2-dup-${i}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

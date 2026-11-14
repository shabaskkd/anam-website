import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "✓",
    title: "PREMIUM QUALITY",
    desc: "High quality doors built to last",
  },
  {
    icon: "⚒",
    title: "EXPERT INSTALLATION",
    desc: "Professional installation services",
  },
  {
    icon: "▣",
    title: "MODERN DESIGNS",
    desc: "Stylish designs for every space",
  },
  {
    icon: "◆",
    title: "WIDE RANGE",
    desc: "Multiple materials & finishes",
  },
  {
    icon: "◉",
    title: "CUSTOMER SUPPORT",
    desc: "Dedicated support you can rely on",
  },
  {
    icon: "✦",
    title: "TRUSTED BRAND",
    desc: "Trusted by homes & businesses across Qatar",
  },
];

const doorCollections = [
  {
    name: "Wooden Doors",
    desc: "Timeless beauty and natural elegance for your interiors.",
    image: "/images/wooden-doors-qatar.webp",
    link: "/products/doors/wooden-door",
    alt: "Wooden Doors Qatar",
  },
  {
    name: "Aluminium Doors",
    desc: "Sleek, strong and modern doors for contemporary spaces.",
    image: "/images/aluminium-doors-qatar.webp",
    link: "/products/doors/aluminium-door",
    alt: "Aluminium Doors Qatar",
  },
  {
    name: "WPC Doors",
    desc: "Weather resistant and durable doors for long lasting performance.",
    image: "/images/wpc-doors-qatar.webp",
    link: "/products/doors/wpc-doors",
    alt: "WPC Doors Qatar",
  },
  {
    name: "UPVC Doors",
    desc: "Low maintenance and energy efficient door solutions.",
    image: "/images/upvc-doors-qatar.webp",
    link: "/products/doors/upvc-doors",
    alt: "UPVC Doors Qatar",
  },
];

const whyChooseList = [
  "Premium quality materials",
  "Wide range of styles and finishes",
  "Expert installation across Qatar",
  "Perfect for residential & commercial projects",
];

const applications = [
  {
    title: "Residential",
    desc: "Villas, Apartments & Homes",
    image: "/images/residential-doors-qatar.webp",
    alt: "Residential Doors Qatar",
  },
  {
    title: "Commercial",
    desc: "Offices, Buildings & Showrooms",
    image: "/images/commercial-doors-qatar.webp",
    alt: "Commercial Doors Qatar",
  },
  {
    title: "Hospitality",
    desc: "Hotels, Restaurants & Resorts",
    image: "/images/hospitality-doors-qatar.webp",
    alt: "Hospitality Doors Qatar",
  },
  {
    title: "Retail",
    desc: "Shops, Malls & Retail Stores",
    image: "/images/retail-doors-qatar.webp",
    alt: "Retail Doors Qatar",
  },
];

const DoorsSection = () => {
  return (
    <div className="doors-container text-[#171717]">
      <style>{`
        .door-feature {
          transition: all 0.4s ease;
        }
        .door-feature:hover {
          transform: translateY(-5px);
        }
        .product-card-door {
          transition: all 0.4s ease;
        }
        .product-card-door:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(90,15,47,.12);
        }
        .product-card-door:hover img {
          transform: scale(1.07);
        }
        .product-link-door {
          transition: all 0.4s ease;
        }
        .product-link-door:hover {
          letter-spacing: 1px;
        }
        .why-image-door img {
          transition: transform 0.8s ease;
        }
        .why-image-door:hover img {
          transform: scale(1.04);
        }
        .app-card-door {
          transition: all 0.4s ease;
        }
        .app-card-door:hover {
          transform: translateY(-7px);
          box-shadow: 0 15px 30px rgba(90,15,47,.12);
        }
        .app-card-door:hover img {
          transform: scale(1.07);
        }
        .cta-btn-door {
          transition: all 0.4s ease;
        }
        .cta-btn-door:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,.2);
        }
        .door-hero-grid {
          display: grid;
          grid-template-columns: 44% 56%;
          min-height: 560px;
          position: relative;
        }
        .door-hero-left {
          background: #ffffff;
          display: flex;
          align-items: center;
          padding: 64px 8% 64px 10%;
          position: relative;
          z-index: 10;
        }
        .doors-container {
          font-family: 'Raleway', sans-serif;
        }
        .door-hero-tag {
          font-family: 'Raleway', sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #5A0F2F;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .door-hero-tag::before {
          content: "";
          display: inline-block;
          width: 28px;
          height: 2px;
          background: #5A0F2F;
        }
        .door-hero-title {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(42px, 5vw, 68px);
          line-height: .98;
          font-weight: normal;
          color: #171717;
          letter-spacing: -2px;
          margin: 0 0 24px;
        }
        .door-hero-title span {
          color: #5A0F2F;
        }
        .door-hero-underline-bar {
          display: block;
          height: 5px;
          width: 140px;
          background: #5A0F2F;
          border-radius: 999px;
          margin-top: 8px;
        }
        .door-hero-btn {
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
        .door-hero-btn span {
          display: inline-flex;
          align-items: center;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .door-hero-btn:hover {
          background: #420820;
          transform: translateY(-3px);
          box-shadow: 0 16px 32px rgba(90, 15, 47, 0.32);
        }
        .door-hero-btn:hover span {
          transform: translateX(4px);
        }
        .door-hero-right {
          position: relative;
          min-height: 560px;
          overflow: hidden;
          background: #111;
        }
        .door-hero-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .door-hero-right:hover img {
          transform: scale(1.035);
        }
        .door-floating-badge {
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
          .door-hero-grid { grid-template-columns: 1fr; }
          .door-hero-left { padding: 48px 6%; }
          .door-hero-right { min-height: 400px; }
        }
        @media (max-width: 768px) {
          .door-hero-title { font-size: 34px; letter-spacing: -1px; }
          .door-hero-underline-bar { width: 110px; }
          .door-floating-badge { bottom: 16px; right: 16px; padding: 10px 16px; }
          .door-hero-right { min-height: 300px; }
        }
      `}</style>

      {/* =====================================================
           LUXURY SPLIT HERO
      ===================================================== */}
      <section className="door-hero-grid">
        <div className="door-hero-left">
          <div className="max-w-[540px]">
            <div className="door-hero-tag anam-hero-eyebrow">Premium Door Systems</div>
            <h1 className="door-hero-title anam-hero-title">
              Doors <br />
              <span className="inline-block relative">
                In Qatar
                <span className="door-hero-underline-bar anam-underline-bar" />
              </span>
            </h1>
            <p className="text-[#444] text-[16px] leading-[1.65] mb-4">
              ANAM Qatar provides handcrafted wooden doors, modern aluminium systems, waterproof WPC doors, and high-performance UPVC doors for residential villas, towers, and luxury developments in Doha.
            </p>
            <p className="text-[#666] text-[14.5px] leading-[1.65] mb-8">
              Engineered with advanced acoustic isolation, multi-point security hardware, and weather-resistant finishes designed to withstand Qatar's extreme climate.
            </p>
            <a
              href="#door-collections"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.getElementById("door-collections");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              }}
              className="door-hero-btn"
            >
              Explore Door Collections <span>→</span>
            </a>
          </div>
        </div>

        <div className="door-hero-right">
          <img
            src="/images/doors-qatar.webp"
            alt="Doors in Qatar - Luxury Villa Front Entrance"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
          <div className="door-floating-badge">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C9A86A] shadow-[0_0_10px_#C9A86A] animate-pulse" />
            <div>
              <div className="text-[10px] font-bold tracking-[0.15em] text-[#C9A86A]">Doha, Qatar</div>
              <div className="text-xs md:text-sm font-extrabold tracking-wide text-white">Luxury Doors Specialists</div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
           FEATURES STRIP
      ===================================================== */}
      <section id="door-collections" className="bg-white border-b border-[#eee]">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-[#e8e8e8]">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="door-feature p-[16px_12px] md:p-[20px_18px] text-center"
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <div className="w-[38px] h-[38px] border-[1.5px] border-[#5A0F2F] rounded-full flex items-center justify-center mx-auto mb-2 text-[#5A0F2F] text-[16px]">
                  {item.icon}
                </div>
                <h3 className="text-[10px] md:text-[11px] font-bold mb-[3px] text-[#222]">
                  {item.title}
                </h3>
                <p className="text-[9px] md:text-[10px] text-[#777] leading-[1.4]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
           OUR DOOR COLLECTIONS
      ===================================================== */}
      <section className="py-[75px] bg-white">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-[40px]">
            <div className="text-[#5A0F2F] uppercase text-[11px] font-bold tracking-[1.8px] mb-[7px]">
              <span className="inline-block w-[25px] h-[1.5px] bg-[#5A0F2F] align-middle mr-2"></span>
              Our Products
              <span className="inline-block w-[25px] h-[1.5px] bg-[#5A0F2F] align-middle ml-2"></span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] font-extrabold leading-[1.15] text-[#171717]">
              Our Door Collections
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {doorCollections.map((col, idx) => (
              <div
                key={idx}
                className="product-card-door bg-white border border-[#eee] shadow-[0_5px_18px_rgba(0,0,0,.05)] overflow-hidden"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="h-[210px] overflow-hidden">
                  <img
                    src={col.image}
                    alt={col.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-[18px_15px_20px] text-center">
                  <h3 className="text-[14px] font-bold mb-[7px] text-[#171717]">
                    {col.name}
                  </h3>
                  <p className="text-[11px] text-[#777] min-h-[40px]">
                    {col.desc}
                  </p>
                  <Link
                    to={col.link}
                    className="product-link-door inline-block mt-[12px] text-[#5A0F2F] text-[11px] font-bold uppercase"
                  >
                    View More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
           WHY CHOOSE ANAM QATAR
      ===================================================== */}
      <section className="bg-[#f8f6f5]">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[42%_58%] min-h-[360px]">
            <div className="p-[45px_30px] md:p-[45px_50px] flex flex-col justify-center">
              <div className="text-[#5A0F2F] text-[10px] uppercase font-bold tracking-[1.5px] mb-[8px]">
                Why Choose ANAM Qatar
              </div>
              <h2 className="text-[26px] sm:text-[31px] font-extrabold leading-[1.05] mb-[25px] text-[#171717]">
                Quality Doors,<br />
                Exceptional Service
              </h2>

              <ul className="list-none space-y-[12px]">
                {whyChooseList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-[10px] text-[12px]">
                    <span className="w-[20px] h-[20px] min-w-[20px] bg-[#5A0F2F] text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="why-image-door overflow-hidden min-h-[250px] md:min-h-full">
              <img
                src="/images/doors-interior.webp"
                alt="Modern Interior Doors Qatar"
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
      <section className="py-[75px] bg-white">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-[40px]">
            <div className="text-[#5A0F2F] uppercase text-[11px] font-bold tracking-[1.8px] mb-[7px]">
              <span className="inline-block w-[25px] h-[1.5px] bg-[#5A0F2F] align-middle mr-2"></span>
              Applications
              <span className="inline-block w-[25px] h-[1.5px] bg-[#5A0F2F] align-middle ml-2"></span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] font-extrabold leading-[1.15] text-[#171717]">
              Perfect Doors for Every Space
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="app-card-door border border-[#eee] bg-white overflow-hidden shadow-[0_5px_18px_rgba(0,0,0,.04)]"
              >
                <div className="h-[145px] overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-[15px]">
                  <h3 className="text-[13px] font-bold mb-[4px] text-[#171717]">
                    {app.title}
                  </h3>
                  <p className="text-[10px] text-[#777]">
                    {app.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
           CTA
      ===================================================== */}
      <section className="bg-[#5A0F2F] py-[45px] text-white">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[30px]">
            <div>
              <h2 className="text-[24px] sm:text-[28px] font-extrabold leading-[1.1] mb-[8px]">
                Looking for the Perfect<br />
                Door Solution?
              </h2>
              <p className="text-[13px] text-white/85">
                Contact us today for a free consultation and quote.
              </p>
            </div>

            <Link
              to="/contact"
              className="cta-btn-door inline-flex items-center gap-[10px] bg-white text-[#5A0F2F] p-[13px_22px] text-[11px] font-bold uppercase whitespace-nowrap shadow-md"
            >
              Get In Touch →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoorsSection;

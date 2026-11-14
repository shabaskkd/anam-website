import React from "react";

const FlooringHero = () => {
  const scrollToCategories = (e) => {
    e.preventDefault();
    const elem = document.getElementById("flooring-categories");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flooring-hero-wrapper relative overflow-hidden bg-white">
      <style>{`
        .flooring-hero-grid {
          display: grid;
          grid-template-columns: 44% 56%;
          min-height: 580px;
          position: relative;
        }

        .flooring-hero-left {
          background: #ffffff;
          display: flex;
          align-items: center;
          padding: 64px 8% 64px 10%;
          position: relative;
          z-index: 10;
        }

        .flooring-hero-wrapper {
          font-family: 'Raleway', sans-serif;
        }

        .flooring-hero-tag {
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

        .flooring-hero-tag::before {
          content: "";
          display: inline-block;
          width: 28px;
          height: 2px;
          background: #5A0F2F;
        }

        .flooring-hero-title {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(42px, 5vw, 68px);
          line-height: .98;
          font-weight: normal;
          color: #171717;
          letter-spacing: -2px;
          margin: 0 0 24px;
        }

        .flooring-hero-title span {
          color: #5A0F2F;
        }

        .flooring-hero-underline-wrapper {
          display: inline-block;
          position: relative;
        }

        .flooring-hero-underline-bar {
          display: block;
          height: 5px;
          width: 140px;
          background: #5A0F2F;
          border-radius: 999px;
          margin-top: 8px;
        }

        .flooring-hero-p1 {
          color: #444;
          font-size: 16px;
          line-height: 1.65;
          margin-bottom: 16px;
          max-width: 520px;
        }

        .flooring-hero-p2 {
          color: #666;
          font-size: 14.5px;
          line-height: 1.65;
          margin-bottom: 32px;
          max-width: 520px;
        }

        .flooring-hero-btn {
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

        .flooring-hero-btn span {
          display: inline-flex;
          align-items: center;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .flooring-hero-btn:hover {
          background: #420820;
          transform: translateY(-3px);
          box-shadow: 0 16px 32px rgba(90, 15, 47, 0.32);
        }

        .flooring-hero-btn:hover span {
          transform: translateX(4px);
        }

        .flooring-hero-right {
          position: relative;
          min-height: 580px;
          overflow: hidden;
          background: #111;
        }

        .flooring-hero-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .flooring-hero-right:hover img {
          transform: scale(1.035);
        }

        .flooring-floating-badge {
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

        .flooring-badge-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #C9A86A;
          box-shadow: 0 0 10px #C9A86A;
        }

        @media (max-width: 1024px) {
          .flooring-hero-grid {
            grid-template-columns: 1fr;
          }
          .flooring-hero-left {
            padding: 48px 6%;
          }
          .flooring-hero-right {
            min-height: 420px;
          }
        }

        @media (max-width: 768px) {
          .flooring-hero-title {
            font-size: 34px;
            letter-spacing: -1px;
          }
          .flooring-hero-underline-bar {
            width: 110px;
            height: 4px;
          }
          .flooring-floating-badge {
            bottom: 16px;
            right: 16px;
            padding: 10px 16px;
          }
          .flooring-hero-right {
            min-height: 320px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="flooring-hero-grid">
        {/* Left Content Card */}
        <div className="flooring-hero-left">
          <div className="max-w-[540px]">
            <div className="flooring-hero-tag anam-hero-eyebrow">
              Top-Rated Flooring Company in Doha, Qatar
            </div>

            <h1 className="flooring-hero-title anam-hero-title">
              Best Flooring <br />
              <span className="flooring-hero-underline-wrapper inline-block relative">
                In Qatar
                <span className="flooring-hero-underline-bar anam-underline-bar" />
              </span>
            </h1>

            <p className="flooring-hero-p1">
              ANAM Qatar provides premium quality flooring solutions across
              Doha and Qatar, combining elegance, durability, and craftsmanship
              for residential and commercial spaces.
            </p>

            <p className="flooring-hero-p2">
              From luxury SPC, vinyl, and laminate to engineered hardwood,
              carpet tiles, and outdoor WPC decking, our collections are
              engineered for high-performance living.
            </p>

            <a
              href="#flooring-categories"
              onClick={scrollToCategories}
              className="flooring-hero-btn"
            >
              Explore Flooring Solutions <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Photo Area */}
        <div className="flooring-hero-right">
          <img
            src="/images/luxury-flooring-qatar-hero.jpg"
            alt="Best Luxury Flooring in Qatar - SPC, Parquet & Vinyl Installation Doha"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

          {/* Floating Luxury Badge */}
          <div className="flooring-floating-badge">
            <div className="flooring-badge-dot animate-pulse" />
            <div>
              <div className="text-[10px] font-bold tracking-[0.15em] text-[#C9A86A]">
                Doha, Qatar
              </div>
              <div className="text-xs md:text-sm font-extrabold tracking-wide text-white">
                Luxury Flooring Specialists
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Strip */}
      <section className="bg-white border-b border-[#e8e8e8]">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-[#e8e8e8]">
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">✓</div>
              <h3 className="text-xs font-bold tracking-wider text-[#171717]">High Durability</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Heavy foot-traffic ready</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">⚒</div>
              <h3 className="text-xs font-bold tracking-wider text-[#171717]">Expert Installation</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Skilled Doha fitters</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">▣</div>
              <h3 className="text-xs font-bold tracking-wider text-[#171717]">Modern Aesthetics</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Herringbone & wide planks</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">◆</div>
              <h3 className="text-xs font-bold tracking-wider text-[#171717]">100% Water Resistant</h3>
              <p className="text-[11px] text-[#666] mt-0.5">SPC & vinyl solutions</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">◉</div>
              <h3 className="text-xs font-bold tracking-wider text-[#171717]">Villas & Commercial</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Custom projects support</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">✦</div>
              <h3 className="text-xs font-bold tracking-wider text-[#171717]">Trusted Brand</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Serving clients across Qatar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlooringHero;

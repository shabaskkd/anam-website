import React from "react";

const ProductHero = ({
  title = "Products",
  categoryTag = "Premium Architectural Solutions",
  description = "ANAM Qatar provides high-quality architectural materials, craftsmanship and reliable installation services across Qatar.",
  paragraph2 = "Engineered for longevity, modern aesthetics and outstanding performance in both residential and commercial spaces.",
  image = "/placeholder.jpg",
  badgeTitle = "Specialist Supplier",
  badgeSubtitle = "Doha, Qatar",
  ctaText = "Explore Products",
  ctaLink = "#product-categories",
  onCtaClick,
}) => {
  const handleClick = (e) => {
    if (onCtaClick) {
      onCtaClick(e);
      return;
    }
    if (ctaLink && ctaLink.startsWith("#")) {
      e.preventDefault();
      const elem = document.querySelector(ctaLink);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Format title to see if it already includes "in Qatar"
  const hasInQatar = title.toLowerCase().includes("in qatar") || title.toLowerCase().includes("qatar");
  const mainTitle = hasInQatar
    ? title.replace(/in qatar/gi, "").replace(/qatar/gi, "").trim()
    : title;
  const locationText = "In Qatar";

  return (
    <div className="product-hero-wrapper relative overflow-hidden bg-white">
      <style>{`
        .product-hero-grid {
          display: grid;
          grid-template-columns: 46% 54%;
          height: clamp(480px, 42vw, 560px);
          min-height: 480px;
          max-height: 560px;
          position: relative;
          overflow: hidden;
        }

        .product-hero-left {
          background: #ffffff;
          display: flex;
          align-items: center;
          padding: 44px 8% 44px 10%;
          height: 100%;
          position: relative;
          z-index: 10;
        }

        .product-hero-wrapper {
          font-family: 'Raleway', sans-serif;
        }

        .product-hero-tag {
          font-family: 'Raleway', sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #5A0F2F;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .product-hero-tag::before {
          content: "";
          display: inline-block;
          width: 28px;
          height: 2px;
          background: #5A0F2F;
        }

        .product-hero-title {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(38px, 4.2vw, 62px);
          line-height: .98;
          font-weight: normal;
          color: #171717;
          letter-spacing: -2px;
          margin: 0 0 20px;
        }

        .product-hero-title span {
          color: #5A0F2F;
        }

        .product-hero-underline-wrapper {
          display: inline-block;
          position: relative;
        }

        .product-hero-underline-bar {
          display: block;
          height: 5px;
          width: 140px;
          background: #5A0F2F;
          border-radius: 999px;
          margin-top: 8px;
        }

        .product-hero-p1 {
          color: #444;
          font-size: 15.5px;
          line-height: 1.6;
          margin-bottom: 12px;
          max-width: 520px;
        }

        .product-hero-p2 {
          color: #666;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 520px;
        }

        .product-hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #5A0F2F;
          color: #ffffff;
          padding: 15px 28px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(90, 15, 47, 0.22);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .product-hero-btn span {
          display: inline-flex;
          align-items: center;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .product-hero-btn:hover {
          background: #420820;
          transform: translateY(-3px);
          box-shadow: 0 16px 32px rgba(90, 15, 47, 0.32);
        }

        .product-hero-btn:hover span {
          transform: translateX(4px);
        }

        .product-hero-right {
          position: relative;
          height: 100%;
          width: 100%;
          overflow: hidden;
          background: #111;
        }

        .product-hero-right img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .product-hero-right:hover img {
          transform: scale(1.035);
        }

        .product-floating-badge {
          position: absolute;
          bottom: 24px;
          right: 24px;
          background: #5A0F2F;
          color: #ffffff;
          padding: 12px 20px;
          z-index: 15;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .product-badge-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #C9A86A;
          box-shadow: 0 0 10px #C9A86A;
        }

        @media (max-width: 1024px) {
          .product-hero-grid {
            grid-template-columns: 1fr;
            height: auto;
            max-height: none;
          }
          .product-hero-left {
            padding: 48px 6%;
            height: auto;
          }
          .product-hero-right {
            position: relative;
            height: 380px;
            min-height: 380px;
          }
        }

        @media (max-width: 768px) {
          .product-hero-title {
            font-size: 34px;
            letter-spacing: -1px;
          }
          .product-hero-underline-bar {
            width: 110px;
            height: 4px;
          }
          .product-floating-badge {
            bottom: 16px;
            right: 16px;
            padding: 10px 16px;
          }
          .product-hero-right {
            height: 280px;
            min-height: 280px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="product-hero-grid">
        {/* Left Content Card */}
        <div className="product-hero-left">
          <div className="max-w-[540px]">
            <div className="product-hero-tag anam-hero-eyebrow">{categoryTag}</div>

            <h1 className="product-hero-title anam-hero-title">
              {mainTitle} <br />
              <span className="product-hero-underline-wrapper inline-block relative">
                {locationText}
                <span className="product-hero-underline-bar anam-underline-bar" />
              </span>
            </h1>

            <p className="product-hero-p1">{description}</p>
            {paragraph2 && <p className="product-hero-p2">{paragraph2}</p>}

            <a
              href={ctaLink}
              onClick={handleClick}
              className="product-hero-btn"
            >
              {ctaText}
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Visual Image */}
        <div className="product-hero-right">
          <img
            loading="eager"
            fetchPriority="high"
            decoding="async"
            src={image}
            alt={`${title} in Qatar - ANAM Qatar`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
          <div className="product-floating-badge">
            <span className="product-badge-dot animate-pulse" />
            <div>
              <div className="text-[10px] font-bold tracking-[0.15em] text-[#C9A86A]">
                {badgeSubtitle}
              </div>
              <div className="text-xs md:text-sm font-extrabold tracking-wide text-white">
                {badgeTitle}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Assurance Strip */}
      <section className="bg-white border-b border-[#e8e8e8]">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-[#e8e8e8]">
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">✓</div>
              <h3 className="text-xs font-bold tracking-wider text-[#171717]">Premium Quality</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Top-grade materials</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">⚒</div>
              <h3 className="text-xs font-bold tracking-wider text-[#171717]">Expert Installation</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Experienced Qatar team</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">▣</div>
              <h3 className="text-xs font-bold tracking-wider text-[#171717]">Modern Designs</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Tailored to your space</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">◆</div>
              <h3 className="text-xs font-bold tracking-wider text-[#171717]">Wide Range</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Multiple finishes & styles</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">◉</div>
              <h3 className="text-xs font-bold tracking-wider text-[#171717]">Project Support</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Consultation & delivery</p>
            </div>
            <div className="p-5 text-center transition hover:-translate-y-1">
              <div className="text-[#5A0F2F] font-bold text-xl mb-1">✦</div>
              <h3 className="text-xs font-bold tracking-wider text-[#171717]">Trusted Brand</h3>
              <p className="text-[11px] text-[#666] mt-0.5">Serving clients in Doha</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductHero;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import kitchenWardrobeHero from "../assets/images/kitchen & wardrob/kitchen & wardrobe cover.jpg";

const KitchenWardrobeSection = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".kw-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    items.forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="anam-kw-page">
      <style>{`
        .anam-kw-page {
            --kw-maroon: #5A0F2F;
            --kw-dark: #420820;
            --kw-light: #faf7f8;
            --kw-text: #171717;
            --kw-muted: #666;
            --kw-border: #e8e1e4;
            --kw-white: #ffffff;

            font-family: 'Raleway', sans-serif;
            color: var(--kw-text);
            background: #fff;
            line-height: 1.6;
            overflow: hidden;
        }

        .anam-kw-page *,
        .anam-kw-page *::before,
        .anam-kw-page *::after {
            box-sizing: border-box;
        }

        .anam-kw-page img {
            width: 100%;
            display: block;
        }

        .kw-container {
            width: min(1200px, 92%);
            margin: auto;
        }

        /* =========================================================
           HERO
        ========================================================= */

        .kw-hero {
            display: grid;
            grid-template-columns: 44% 56%;
            min-height: 550px;
            background: #faf8f6;
        }

        .kw-hero-content {
            display: flex;
            align-items: center;
            padding: 64px 8%;
        }

        .kw-hero-inner {
            max-width: 560px;
        }

        .kw-eyebrow {
            color: var(--kw-maroon);
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 1.8px;
            text-transform: uppercase;
            margin-bottom: 16px;
        }

        .kw-hero h1 {
            font-size: clamp(42px, 5vw, 68px);
            line-height: .98;
            letter-spacing: -2px;
            margin: 0 0 24px;
            font-weight: 700;
        }

        .kw-hero h1 span {
            color: var(--kw-maroon);
        }

        .kw-hero-text {
            color: #555;
            font-size: 15px;
            max-width: 510px;
            margin: 0 0 24px;
        }

        .kw-hero-text strong {
            color: var(--kw-maroon);
        }

        .kw-hero-features {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            margin-bottom: 28px;
        }

        .kw-hero-feature {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 10px;
            font-weight: 600;
        }

        .kw-feature-icon {
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--kw-maroon);
            border-radius: 50%;
            color: var(--kw-maroon);
        }

        .kw-button {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 15px 25px;
            background: var(--kw-maroon);
            color: #fff;
            text-decoration: none;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            transition: .35s ease;
        }

        .kw-button:hover {
            background: var(--kw-dark);
            transform: translateY(-4px);
            box-shadow: 0 12px 25px rgba(90,15,47,.25);
        }

        .kw-hero-image {
            min-height: 550px;
            overflow: hidden;
        }

        .kw-hero-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: transform .8s ease;
        }

        .kw-hero-image:hover img {
            transform: scale(1.04);
        }

        /* =========================================================
           FEATURE STRIP
        ========================================================= */

        .kw-feature-strip {
            background: #fff;
            border-bottom: 1px solid var(--kw-border);
        }

        .kw-feature-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
        }

        .kw-feature-box {
            text-align: center;
            padding: 23px 10px;
            border-right: 1px solid var(--kw-border);
            transition: .35s ease;
        }

        .kw-feature-box:last-child {
            border-right: none;
        }

        .kw-feature-box:hover {
            transform: translateY(-5px);
        }

        .kw-feature-box-icon {
            width: 43px;
            height: 43px;
            margin: 0 auto 9px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--kw-maroon);
            color: var(--kw-maroon);
            border-radius: 50%;
            font-size: 17px;
        }

        .kw-feature-box h3 {
            font-size: 10px;
            margin: 0 0 5px;
        }

        .kw-feature-box p {
            font-size: 9px;
            color: var(--kw-muted);
            margin: 0;
        }

        /* =========================================================
           COMMON SECTION
        ========================================================= */

        .kw-section {
            padding: 75px 0;
        }

        .kw-section-heading {
            text-align: center;
            margin-bottom: 42px;
        }

        .kw-label {
            color: var(--kw-maroon);
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 8px;
        }

        .kw-label::before,
        .kw-label::after {
            content: "";
            display: inline-block;
            width: 28px;
            height: 2px;
            background: var(--kw-maroon);
            vertical-align: middle;
            margin: 0 9px;
        }

        .kw-section-heading h2 {
            font-size: clamp(28px, 4vw, 40px);
            line-height: 1.1;
            margin: 0 0 10px;
        }

        .kw-section-heading p {
            max-width: 720px;
            margin: auto;
            color: var(--kw-muted);
            font-size: 13px;
        }

        /* =========================================================
           SOLUTIONS
        ========================================================= */

        .kw-solutions {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 17px;
        }

        .kw-solution-card {
            background: #fff;
            border: 1px solid var(--kw-border);
            box-shadow: 0 6px 22px rgba(0,0,0,.05);
            overflow: hidden;
            transition: .4s ease;
        }

        .kw-solution-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 18px 35px rgba(90,15,47,.14);
        }

        .kw-solution-image {
            height: 215px;
            overflow: hidden;
        }

        .kw-solution-image img {
            height: 100%;
            object-fit: cover;
            transition: .7s ease;
        }

        .kw-solution-card:hover img {
            transform: scale(1.07);
        }

        .kw-solution-content {
            text-align: center;
            padding: 19px 15px 23px;
        }

        .kw-solution-content h3 {
            font-size: 14px;
            margin: 0 0 8px;
        }

        .kw-solution-content p {
            color: var(--kw-muted);
            font-size: 11px;
            min-height: 57px;
            margin: 0;
        }

        .kw-learn {
            display: inline-block;
            margin-top: 13px;
            color: var(--kw-maroon);
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            transition: color .2s ease;
        }

        .kw-learn:hover {
            color: var(--kw-dark);
            text-decoration: underline;
        }

        /* =========================================================
           WHY CHOOSE
        ========================================================= */

        .kw-why {
            background: var(--kw-maroon);
            color: #fff;
            padding: 58px 0;
        }

        .kw-why-heading {
            text-align: center;
            margin-bottom: 35px;
        }

        .kw-why-heading .kw-label {
            color: #fff;
        }

        .kw-why-heading .kw-label::before,
        .kw-why-heading .kw-label::after {
            background: #fff;
        }

        .kw-why-heading h2 {
            font-size: 31px;
            margin: 0;
        }

        .kw-why-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
        }

        .kw-why-card {
            text-align: center;
            padding: 12px 15px;
            border-right: 1px solid rgba(255,255,255,.28);
        }

        .kw-why-card:last-child {
            border-right: none;
        }

        .kw-why-icon {
            width: 50px;
            height: 50px;
            margin: 0 auto 11px;
            border: 1px solid rgba(255,255,255,.8);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 19px;
        }

        .kw-why-card h3 {
            font-size: 11px;
            margin: 0 0 5px;
        }

        .kw-why-card p {
            font-size: 9px;
            color: rgba(255,255,255,.8);
            margin: 0;
        }

        /* =========================================================
           PROJECTS
        ========================================================= */

        .kw-projects {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 14px;
        }

        .kw-project {
            overflow: hidden;
            text-align: center;
        }

        .kw-project-image {
            height: 155px;
            overflow: hidden;
            border: 1px solid var(--kw-border);
        }

        .kw-project-image img {
            height: 100%;
            object-fit: cover;
            transition: .7s ease;
        }

        .kw-project:hover img {
            transform: scale(1.08);
        }

        .kw-project h3 {
            font-size: 11px;
            margin: 10px 0 0;
        }

        /* =========================================================
           VIEW PROJECT BUTTON
        ========================================================= */

        .kw-view-projects {
            display: block;
            width: fit-content;
            margin: 32px auto 0;
            padding: 12px 25px;
            border: 1px solid var(--kw-maroon);
            color: var(--kw-maroon);
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            transition: .35s ease;
        }

        .kw-view-projects:hover {
            color: #fff;
            background: var(--kw-maroon);
        }

        /* =========================================================
           PROCESS
        ========================================================= */

        .kw-process {
            background: #faf8f8;
        }

        .kw-process-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            position: relative;
        }

        .kw-process-grid::before {
            content: "";
            position: absolute;
            left: 10%;
            right: 10%;
            top: 27px;
            border-top: 1px dashed var(--kw-maroon);
        }

        .kw-process-step {
            position: relative;
            z-index: 2;
            text-align: center;
            padding: 0 14px;
        }

        .kw-step-number {
            width: 54px;
            height: 54px;
            margin: 0 auto 14px;
            border: 6px solid #faf8f8;
            background: var(--kw-maroon);
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: 700;
        }

        .kw-process-step h3 {
            font-size: 11px;
            margin: 0 0 5px;
        }

        .kw-process-step p {
            color: var(--kw-muted);
            font-size: 9px;
            margin: 0;
        }

        /* =========================================================
           SEO CONTENT WITH IMAGE
        ========================================================= */

        .kw-seo-content {
            display: grid;
            grid-template-columns: 43% 57%;
            gap: 45px;
            align-items: center;
        }

        .kw-seo-image {
            height: 500px;
            overflow: hidden;
        }

        .kw-seo-image img {
            height: 100%;
            object-fit: cover;
        }

        .kw-seo-text h2 {
            font-size: 30px;
            line-height: 1.1;
            margin: 0 0 7px;
        }

        .kw-seo-subtitle {
            color: var(--kw-maroon);
            font-weight: 700;
            font-size: 15px;
            margin-bottom: 17px;
        }

        .kw-seo-text p {
            color: #555;
            font-size: 13px;
            margin: 0 0 14px;
        }

        .kw-keyword-list {
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 8px 25px;
            margin: 20px 0;
        }

        .kw-keyword-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 11px;
            font-weight: 600;
        }

        .kw-check {
            width: 18px;
            height: 18px;
            background: var(--kw-maroon);
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 9px;
            flex-shrink: 0;
        }

        /* =========================================================
           SEO TEXT FULL WIDTH
        ========================================================= */

        .kw-seo-full {
            max-width: 1000px;
            margin: 55px auto 0;
        }

        .kw-seo-full h3 {
            color: var(--kw-maroon);
            font-size: 21px;
            margin: 30px 0 9px;
        }

        .kw-seo-full p {
            color: #555;
            font-size: 14px;
            margin: 0 0 13px;
        }

        /* =========================================================
           CTA
        ========================================================= */

        .kw-cta {
            background: var(--kw-maroon);
            color: #fff;
            padding: 42px 0;
        }

        .kw-cta-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 30px;
        }

        .kw-cta-left {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .kw-cta-icon {
            width: 65px;
            height: 65px;
            border: 1px solid rgba(255,255,255,.7);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 25px;
            flex-shrink: 0;
        }

        .kw-cta h2 {
            font-size: 27px;
            line-height: 1.1;
            margin: 0 0 5px;
        }

        .kw-cta p {
            color: rgba(255,255,255,.82);
            font-size: 12px;
            margin: 0;
        }

        .kw-cta-button {
            background: #fff;
            color: var(--kw-maroon);
            padding: 14px 24px;
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            white-space: nowrap;
            transition: .35s ease;
            display: inline-block;
        }

        .kw-cta-button:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 25px rgba(0,0,0,.2);
        }

        /* =========================================================
           SCROLL ANIMATION
        ========================================================= */

        .kw-reveal {
            opacity: 0;
            transform: translateY(30px);
            transition:
                opacity .8s ease,
                transform .8s ease;
        }

        .kw-reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* =========================================================
           RESPONSIVE
        ========================================================= */

        @media(max-width:1050px) {
            .kw-feature-grid {
                grid-template-columns: repeat(3,1fr);
            }

            .kw-solutions {
                grid-template-columns: repeat(2,1fr);
            }

            .kw-why-grid {
                grid-template-columns: repeat(3,1fr);
                gap: 20px 0;
            }

            .kw-projects {
                grid-template-columns: repeat(3,1fr);
            }
        }

        @media(max-width:750px) {
            .kw-hero {
                grid-template-columns: 1fr;
            }

            .kw-hero-content {
                padding: 55px 6%;
            }

            .kw-hero-image {
                min-height: 370px;
            }

            .kw-feature-grid {
                grid-template-columns: repeat(2,1fr);
            }

            .kw-why-grid {
                grid-template-columns: repeat(2,1fr);
            }

            .kw-process-grid {
                grid-template-columns: 1fr;
                gap: 25px;
            }

            .kw-process-grid::before {
                display: none;
            }

            .kw-seo-content {
                grid-template-columns: 1fr;
            }

            .kw-seo-image {
                height: 400px;
            }

            .kw-cta-wrapper {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        @media(max-width:768px) {
            .kw-hero h1 {
                font-size: 34px;
                letter-spacing: -1px;
            }

            .kw-solutions,
            .kw-projects,
            .kw-keyword-list {
                grid-template-columns: 1fr;
            }

            .kw-feature-grid,
            .kw-why-grid {
                grid-template-columns: 1fr;
            }

            .kw-feature-box,
            .kw-why-card {
                border-right: none;
            }
        }
      `}</style>

      {/* =========================================================
           1. HERO
      ========================================================= */}
      <section className="kw-hero">
        <div className="kw-hero-content">
          <div className="kw-hero-inner">
            <div className="kw-eyebrow anam-hero-eyebrow">
              Premium Kitchen & Wardrobe Solutions
            </div>

            <h1 className="anam-hero-title">
              Kitchen & Wardrobe <br />
              <span className="inline-block relative">
                Cabinets Qatar
                <span className="anam-underline-bar block h-[5px] w-[140px] bg-[#5A0F2F] mt-2 rounded-full" />
              </span>
            </h1>

            <p className="kw-hero-text">
              ANAM Qatar provides premium{" "}
              <strong>Kitchen Cabinets in Qatar</strong>, wardrobes and complete
              interior solutions designed to combine modern style, functionality
              and long-lasting quality.
            </p>

            <div className="kw-hero-features">
              <div className="kw-hero-feature">
                <span className="kw-feature-icon">✓</span>
                Premium Quality
              </div>

              <div className="kw-hero-feature">
                <span className="kw-feature-icon">⚒</span>
                Custom Designs
              </div>

              <div className="kw-hero-feature">
                <span className="kw-feature-icon">◉</span>
                Reliable Support
              </div>

              <div className="kw-hero-feature">
                <span className="kw-feature-icon">◷</span>
                On Time Delivery
              </div>
            </div>

            <Link to="/contact" className="kw-button">
              Get a Free Quote →
            </Link>
          </div>
        </div>

        <div className="kw-hero-image">
          <img
            src={kitchenWardrobeHero}
            alt="Premium Kitchen & Wardrobe Cabinets Qatar"
            loading="eager"
          />
        </div>
      </section>

      {/* =========================================================
           2. FEATURES
      ========================================================= */}
      <section className="kw-feature-strip">
        <div className="kw-container">
          <div className="kw-feature-grid">
            <div className="kw-feature-box">
              <div className="kw-feature-box-icon">✦</div>
              <h3>Modern Designs</h3>
              <p>Elegant designs for modern interiors</p>
            </div>

            <div className="kw-feature-box">
              <div className="kw-feature-box-icon">◆</div>
              <h3>Premium Materials</h3>
              <p>Quality materials for lasting use</p>
            </div>

            <div className="kw-feature-box">
              <div className="kw-feature-box-icon">▣</div>
              <h3>Smart Storage</h3>
              <p>Practical storage for every space</p>
            </div>

            <div className="kw-feature-box">
              <div className="kw-feature-box-icon">⚙</div>
              <h3>Expert Craftsmanship</h3>
              <p>Precise finishing by skilled professionals</p>
            </div>

            <div className="kw-feature-box">
              <div className="kw-feature-box-icon">✓</div>
              <h3>Affordable Pricing</h3>
              <p>Quality solutions at competitive prices</p>
            </div>

            <div className="kw-feature-box">
              <div className="kw-feature-box-icon">◉</div>
              <h3>After Sales Support</h3>
              <p>Reliable support after installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
           3. SOLUTIONS
      ========================================================= */}
      <section className="kw-section">
        <div className="kw-container">
          <div className="kw-section-heading kw-reveal">
            <div className="kw-label">Our Solutions</div>
            <h2>Kitchen & Wardrobe Solutions</h2>
            <p>
              Explore our custom interior solutions designed for modern homes,
              villas, apartments and commercial spaces across Qatar.
            </p>
          </div>

          <div className="kw-solutions">
            {/* KITCHEN */}
            <div className="kw-solution-card kw-reveal">
              <div className="kw-solution-image">
                <img
                  src="/images/kitchen-cabinets-qatar.webp"
                  alt="Kitchen Cabinets in Qatar"
                  loading="lazy"
                />
              </div>
              <div className="kw-solution-content">
                <h3>Kitchen Cabinets</h3>
                <p>
                  Modern and functional kitchen cabinets designed to make your
                  kitchen beautiful and efficient.
                </p>
                <Link to="/products/kitchen-wardrobe/kitchen-cupboard" className="kw-learn">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* WARDROBE */}
            <div className="kw-solution-card kw-reveal">
              <div className="kw-solution-image">
                <img
                  src="/images/custom-wardrobes-qatar.webp"
                  alt="Custom Wardrobes Qatar"
                  loading="lazy"
                />
              </div>
              <div className="kw-solution-content">
                <h3>Wardrobes</h3>
                <p>
                  Stylish and spacious wardrobes with smart storage solutions
                  for every room.
                </p>
                <Link to="/products/kitchen-wardrobe/wardrobe-accessories" className="kw-learn">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* MODULAR */}
            <div className="kw-solution-card kw-reveal">
              <div className="kw-solution-image">
                <img
                  src="/images/modular-kitchen-qatar.webp"
                  alt="Modular Kitchen Cabinets Qatar"
                  loading="lazy"
                />
              </div>
              <div className="kw-solution-content">
                <h3>Modular Kitchens</h3>
                <p>
                  Custom modular kitchen solutions that blend design, durability
                  and functionality.
                </p>
                <Link to="/products/kitchen-wardrobe/kitchen-cupboard" className="kw-learn">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* INTERIOR */}
            <div className="kw-solution-card kw-reveal">
              <div className="kw-solution-image">
                <img
                  src="/images/interior-solutions-qatar.webp"
                  alt="Interior Solutions Qatar"
                  loading="lazy"
                />
              </div>
              <div className="kw-solution-content">
                <h3>Interior Solutions</h3>
                <p>
                  Complete interior solutions to enhance the beauty and comfort
                  of your space.
                </p>
                <Link to="/services/interior-exterior-solutions" className="kw-learn">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
           4. WHY CHOOSE ANAM
      ========================================================= */}
      <section className="kw-why">
        <div className="kw-container">
          <div className="kw-why-heading">
            <div className="kw-label">Why Choose ANAM Qatar?</div>
            <h2>Crafted for Quality, Designed for You</h2>
          </div>

          <div className="kw-why-grid">
            <div className="kw-why-card">
              <div className="kw-why-icon">⌂</div>
              <h3>Custom Designs</h3>
              <p>Tailored designs that match your taste and space.</p>
            </div>

            <div className="kw-why-card">
              <div className="kw-why-icon">★</div>
              <h3>Premium Quality</h3>
              <p>Quality materials selected for lasting performance.</p>
            </div>

            <div className="kw-why-card">
              <div className="kw-why-icon">◇</div>
              <h3>Smart Solutions</h3>
              <p>Smart storage and space-saving solutions.</p>
            </div>

            <div className="kw-why-card">
              <div className="kw-why-icon">♙</div>
              <h3>Expert Team</h3>
              <p>Experienced and skilled installation professionals.</p>
            </div>

            <div className="kw-why-card">
              <div className="kw-why-icon">◷</div>
              <h3>Timely Delivery</h3>
              <p>On-time project completion with attention to detail.</p>
            </div>

            <div className="kw-why-card">
              <div className="kw-why-icon">◉</div>
              <h3>After Sales Support</h3>
              <p>Reliable support even after project completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
           5. PROJECTS
      ========================================================= */}
      <section className="kw-section">
        <div className="kw-container">
          <div className="kw-section-heading kw-reveal">
            <div className="kw-label">Our Projects</div>
            <h2>Our Recent Projects</h2>
            <p>
              Explore some of our kitchen, wardrobe and interior solutions
              created for modern spaces.
            </p>
          </div>

          <div className="kw-projects">
            <div className="kw-project kw-reveal">
              <div className="kw-project-image">
                <img
                  src="/images/modern-kitchen-qatar.webp"
                  alt="Modern Kitchen Qatar"
                  loading="lazy"
                />
              </div>
              <h3>Modern Kitchen</h3>
            </div>

            <div className="kw-project kw-reveal">
              <div className="kw-project-image">
                <img
                  src="/images/luxury-kitchen-qatar.webp"
                  alt="Luxury Kitchen Qatar"
                  loading="lazy"
                />
              </div>
              <h3>Luxury Kitchen</h3>
            </div>

            <div className="kw-project kw-reveal">
              <div className="kw-project-image">
                <img
                  src="/images/sliding-wardrobe-qatar.webp"
                  alt="Sliding Wardrobe Qatar"
                  loading="lazy"
                />
              </div>
              <h3>Sliding Wardrobe</h3>
            </div>

            <div className="kw-project kw-reveal">
              <div className="kw-project-image">
                <img
                  src="/images/walk-in-wardrobe-qatar.webp"
                  alt="Walk in Wardrobe Qatar"
                  loading="lazy"
                />
              </div>
              <h3>Walk-in Wardrobe</h3>
            </div>

            <div className="kw-project kw-reveal">
              <div className="kw-project-image">
                <img
                  src="/images/tv-unit-interior-qatar.webp"
                  alt="TV Unit Interior Qatar"
                  loading="lazy"
                />
              </div>
              <h3>TV Unit &amp; Interior</h3>
            </div>
          </div>

          <Link to="/gallery" className="kw-view-projects">
            View More Projects →
          </Link>
        </div>
      </section>

      {/* =========================================================
           6. PROCESS
      ========================================================= */}
      <section className="kw-section kw-process">
        <div className="kw-container">
          <div className="kw-section-heading">
            <div className="kw-label">Our Process</div>
            <h2>From Concept to Creation</h2>
            <p>
              A structured process to turn your ideas into beautiful and
              functional interiors.
            </p>
          </div>

          <div className="kw-process-grid">
            <div className="kw-process-step">
              <div className="kw-step-number">01</div>
              <h3>Consultation</h3>
              <p>We understand your requirements and space.</p>
            </div>

            <div className="kw-process-step">
              <div className="kw-step-number">02</div>
              <h3>Design &amp; Planning</h3>
              <p>Our team creates the best design for your requirements.</p>
            </div>

            <div className="kw-process-step">
              <div className="kw-step-number">03</div>
              <h3>Production</h3>
              <p>Quality materials are used with precise manufacturing.</p>
            </div>

            <div className="kw-process-step">
              <div className="kw-step-number">04</div>
              <h3>Installation</h3>
              <p>Expert professionals handle the installation carefully.</p>
            </div>

            <div className="kw-process-step">
              <div className="kw-step-number">05</div>
              <h3>Handover</h3>
              <p>On-time completion with quality assurance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
           7. MAIN SEO CONTENT
      ========================================================= */}
      <section className="kw-section">
        <div className="kw-container">
          <div className="kw-seo-content">
            <div className="kw-seo-image">
              <img
                src="/images/premium-kitchen-interior-qatar.webp"
                alt="Premium Kitchen Cabinets Qatar"
                loading="lazy"
              />
            </div>

            <div className="kw-seo-text">
              <h2>Premium Kitchen Cabinets Qatar</h2>

              <div className="kw-seo-subtitle">
                Beautiful Designs. Smart Spaces.
              </div>

              <p>
                ANAM Qatar is a trusted provider of{" "}
                <strong>Premium Kitchen Cabinets Qatar</strong>, wardrobes and
                complete interior solutions. We combine creative design, quality
                materials and practical craftsmanship to create functional and
                elegant spaces for homes and businesses.
              </p>

              <p>
                Whether you are planning a modern kitchen, custom wardrobe or
                complete interior upgrade, our solutions can be designed around
                your space, lifestyle and functional requirements.
              </p>

              <div className="kw-keyword-list">
                <div className="kw-keyword-item">
                  <span className="kw-check">✓</span>
                  Premium Kitchen Cabinets Qatar
                </div>

                <div className="kw-keyword-item">
                  <span className="kw-check">✓</span>
                  Custom Wardrobes Qatar
                </div>

                <div className="kw-keyword-item">
                  <span className="kw-check">✓</span>
                  Kitchen Cabinets in Qatar
                </div>

                <div className="kw-keyword-item">
                  <span className="kw-check">✓</span>
                  Kitchen Wardrobe Qatar
                </div>

                <div className="kw-keyword-item">
                  <span className="kw-check">✓</span>
                  Modular Kitchen Cabinets Qatar
                </div>

                <div className="kw-keyword-item">
                  <span className="kw-check">✓</span>
                  Wardrobes Qatar
                </div>

                <div className="kw-keyword-item">
                  <span className="kw-check">✓</span>
                  Kitchen Cabinets Doha
                </div>

                <div className="kw-keyword-item">
                  <span className="kw-check">✓</span>
                  Wardrobe Installation Qatar
                </div>

                <div className="kw-keyword-item">
                  <span className="kw-check">✓</span>
                  Interior Solutions Qatar
                </div>

                <div className="kw-keyword-item">
                  <span className="kw-check">✓</span>
                  Interiors Qatar
                </div>
              </div>

              <Link to="/contact" className="kw-button">
                Discuss Your Project →
              </Link>
            </div>
          </div>

          {/* =========================================================
               SEO TEXT
          ========================================================= */}
          <div className="kw-seo-full">
            <h3>Premium Kitchen Cabinets Qatar</h3>
            <p>
              Our <strong>Premium Kitchen Cabinets Qatar</strong> solutions are
              designed for homeowners, villas, apartments and commercial
              properties looking for a combination of modern appearance,
              practical storage and quality finishing. Every kitchen requires a
              different approach, so our solutions can be adapted to the
              available space and design requirements.
            </p>

            <h3>Kitchen Cabinets in Qatar</h3>
            <p>
              ANAM provides stylish and functional{" "}
              <strong>Kitchen Cabinets in Qatar</strong> for modern residential
              and commercial interiors. Well-planned cabinets can help improve
              kitchen organization while making better use of available space.
              Customers can choose suitable layouts, finishes, colours and
              storage configurations according to their requirements.
            </p>

            <h3>Modular Kitchen Cabinets Qatar</h3>
            <p>
              Our <strong>Modular Kitchen Cabinets Qatar</strong> solutions are
              suitable for contemporary homes that require an organized and
              efficient kitchen layout. Modular designs can incorporate different
              storage units, drawers, cabinets and work areas to create a
              practical kitchen environment.
            </p>

            <h3>Custom Wardrobes Qatar</h3>
            <p>
              ANAM also provides <strong>Custom Wardrobes Qatar</strong>{" "}
              solutions designed around the dimensions and requirements of your
              room. Custom wardrobes can include practical storage sections for
              clothing, accessories, shoes and other personal items.
            </p>

            <h3>Wardrobes Qatar</h3>
            <p>
              Our <strong>Wardrobes Qatar</strong> solutions are available for
              bedrooms, dressing areas, apartments, villas and other residential
              interiors. Modern wardrobe designs can help maximize storage while
              complementing the overall interior style.
            </p>

            <h3>Kitchen Wardrobe Qatar</h3>
            <p>
              For customers searching for{" "}
              <strong>Kitchen Wardrobe Qatar</strong> solutions, ANAM offers
              coordinated cabinetry and storage options designed to create a
              consistent and functional interior appearance.
            </p>

            <h3>Kitchen Cabinets Doha</h3>
            <p>
              If you are looking for <strong>Kitchen Cabinets Doha</strong>{" "}
              solutions, ANAM provides kitchen cabinetry options for residential
              and commercial projects in Doha. Our team can help you select a
              suitable design based on your available space and requirements.
            </p>

            <h3>Wardrobe Installation Qatar</h3>
            <p>
              Professional installation plays an important role in achieving the
              correct fit, alignment and final appearance of your wardrobes. ANAM
              provides <strong>Wardrobe Installation Qatar</strong> support for
              suitable projects, helping ensure that the completed installation
              matches the planned design.
            </p>

            <h3>Interior Solutions Qatar</h3>
            <p>
              ANAM provides <strong>Interior Solutions Qatar</strong> for
              customers looking to create coordinated and functional interiors.
              Kitchen cabinets, wardrobes and other interior elements can be
              planned together to create a cohesive appearance throughout the
              property.
            </p>

            <h3>Interiors Qatar</h3>
            <p>
              Modern <strong>Interiors Qatar</strong> require a balance between
              aesthetics, functionality and efficient use of space. Our kitchen
              and wardrobe solutions are designed to complement contemporary
              interior concepts while providing practical storage for everyday
              use.
            </p>

            <h3>Kitchen &amp; Wardrobe Solutions for Residential Spaces</h3>
            <p>
              From villas and apartments to modern homes, ANAM offers kitchen and
              wardrobe solutions for different residential requirements. We
              focus on creating interiors that are comfortable, organized and
              visually appealing.
            </p>

            <h3>Kitchen &amp; Wardrobe Solutions for Commercial Spaces</h3>
            <p>
              Our solutions can also be considered for offices, hospitality
              spaces, serviced apartments and other commercial environments
              where practical storage and attractive interiors are important.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
           8. FINAL CTA
      ========================================================= */}
      <section className="kw-cta">
        <div className="kw-container">
          <div className="kw-cta-wrapper">
            <div className="kw-cta-left">
              <div className="kw-cta-icon">▣</div>
              <div>
                <h2>Let's Build Your Dream Space</h2>
                <p>
                  Contact ANAM Qatar today for a consultation and explore our
                  kitchen and wardrobe solutions.
                </p>
              </div>
            </div>

            <Link to="/contact" className="kw-cta-button">
              Contact Us Now →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitchenWardrobeSection;

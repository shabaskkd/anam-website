import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const trustFeatures = [
  {
    icon: "✓",
    title: "Premium Quality",
    desc: "Durable windows built to last",
  },
  {
    icon: "⚒",
    title: "Expert Installation",
    desc: "Professional window installation in Doha",
  },
  {
    icon: "▣",
    title: "Modern Designs",
    desc: "Stylish designs for every space",
  },
  {
    icon: "◆",
    title: "Wide Range",
    desc: "Aluminium & UPVC options",
  },
  {
    icon: "◉",
    title: "Customer Support",
    desc: "Dedicated project support",
  },
  {
    icon: "✦",
    title: "Trusted Brand",
    desc: "Serving homes & businesses",
  },
];

const windowProducts = [
  {
    name: "Aluminium Windows",
    desc: "Strong, lightweight and corrosion-resistant windows for modern architectural designs.",
    image: "/images/aluminium-windows-qatar.webp",
    alt: "Aluminium Windows Qatar",
    link: "/products/windows/aluminium-window",
  },
  {
    name: "UPVC Windows",
    desc: "Energy-efficient, low-maintenance and practical window solutions.",
    image: "/images/upvc-windows-qatar.webp",
    alt: "UPVC Windows Qatar",
    link: "/products/windows/upvc-window",
  },
  {
    name: "Sliding Windows",
    desc: "Smooth operation with a contemporary and space-saving design.",
    image: "/images/sliding-windows-qatar.webp",
    alt: "Sliding Windows Qatar",
    link: "/products/windows/aluminium-window",
  },
  {
    name: "Casement Windows",
    desc: "Excellent ventilation and secure sealing for different applications.",
    image: "/images/casement-windows-qatar.webp",
    alt: "Casement Windows Qatar",
    link: "/products/windows/upvc-window",
  },
];

const whyChooseList = [
  "Top Windows Providers in Doha Qatar",
  "High-quality Aluminium & UPVC profiles",
  "Modern technology & stylish designs",
  "Professional Window Installation Doha",
  "Residential & Commercial solutions",
  "Energy-efficient and practical options",
];

const stats = [
  { number: "10+", title: "Years Experience" },
  { number: "500+", title: "Projects Completed" },
  { number: "1000+", title: "Happy Customers" },
  { number: "100%", title: "Quality Assurance" },
];

const applications = [
  {
    title: "Residential Windows",
    desc: "Stylish window solutions for villas, apartments and homes.",
    image: "/images/residential-windows-qatar.webp",
    alt: "Residential Windows Qatar",
  },
  {
    title: "Commercial Windows",
    desc: "Durable solutions for offices, buildings and commercial spaces.",
    image: "/images/commercial-windows-qatar.webp",
    alt: "Commercial Windows Qatar",
  },
  {
    title: "Premium Finishes",
    desc: "Modern finishes designed to complement different architectural styles.",
    image: "/images/premium-window-finishes.webp",
    alt: "Premium Window Finishes Qatar",
  },
  {
    title: "Quality Materials",
    desc: "High-quality Aluminium and UPVC profiles for lasting performance.",
    image: "/images/quality-window-materials.webp",
    alt: "Quality Aluminium and UPVC Window Materials",
  },
];

const benefits = [
  {
    icon: "♧",
    title: "Energy Efficient",
    desc: "Helps reduce heat transfer and improve indoor comfort.",
  },
  {
    icon: "◖",
    title: "Noise Reduction",
    desc: "Helps create a quieter indoor environment.",
  },
  {
    icon: "☁",
    title: "Weather Resistant",
    desc: "Designed for demanding weather conditions.",
  },
  {
    icon: "✓",
    title: "Security & Safety",
    desc: "Strong and secure window system options.",
  },
  {
    icon: "✧",
    title: "Low Maintenance",
    desc: "Easy to clean and practical for everyday use.",
  },
];

const WindowsSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".windows-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSolutions = (e) => {
    e.preventDefault();
    const elem = document.getElementById("window-solutions");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="windows-page">
      <style>{`
        .windows-page {
            --primary: #5A0F2F;
            --primary-dark: #430921;
            --text: #171717;
            --muted: #666;
            --light: #faf8f8;
            --border: #e8e8e8;
            --white: #fff;

            font-family: Arial, Helvetica, sans-serif;
            color: var(--text);
            background: #fff;
            line-height: 1.6;
            overflow: hidden;
        }

        .windows-page * {
            box-sizing: border-box;
        }

        .windows-page img {
            width: 100%;
            display: block;
        }

        .windows-container {
            width: min(1200px, 92%);
            margin: auto;
        }

        /* =========================================================
           HERO CONTENT
        ========================================================= */

        .windows-hero {
            display: grid;
            grid-template-columns: 42% 58%;
            min-height: 550px;
            background: #f8f6f5;
        }

        .windows-hero-content {
            display: flex;
            align-items: center;
            padding: 70px 10%;
        }

        .windows-hero-text {
            max-width: 550px;
        }

        .windows-label {
            color: var(--primary);
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.8px;
            margin-bottom: 16px;
        }

        .windows-hero h1 {
            font-size: clamp(42px, 5vw, 68px);
            line-height: .98;
            margin: 0 0 24px;
            letter-spacing: -2px;
            font-weight: 700;
        }

        .windows-hero h1 span {
            color: var(--primary);
        }

        .windows-hero p {
            color: #555;
            font-size: 16px;
            max-width: 500px;
            margin-bottom: 28px;
        }

        .windows-hero-button {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: var(--primary);
            color: #fff;
            padding: 15px 25px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            transition: .4s ease;
            cursor: pointer;
        }

        .windows-hero-button:hover {
            background: var(--primary-dark);
            transform: translateY(-4px);
            box-shadow: 0 12px 25px rgba(90,15,47,.25);
        }

        .windows-hero-image {
            min-height: 550px;
            overflow: hidden;
        }

        .windows-hero-image img {
            height: 100%;
            object-fit: cover;
            transition: transform 1s ease;
        }

        .windows-hero-image:hover img {
            transform: scale(1.04);
        }

        /* =========================================================
           TRUST FEATURES
        ========================================================= */

        .windows-trust {
            border-bottom: 1px solid var(--border);
            background: #fff;
        }

        .windows-trust-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
        }

        .windows-trust-card {
            padding: 25px 12px;
            text-align: center;
            border-right: 1px solid var(--border);
            transition: .4s ease;
        }

        .windows-trust-card:last-child {
            border-right: none;
        }

        .windows-trust-card:hover {
            transform: translateY(-6px);
        }

        .windows-trust-icon {
            width: 48px;
            height: 48px;
            margin: 0 auto 12px;
            border: 1px solid var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            font-size: 20px;
        }

        .windows-trust-card h3 {
            font-size: 11px;
            margin: 0 0 5px;
        }

        .windows-trust-card p {
            color: var(--muted);
            font-size: 10px;
            margin: 0;
        }

        /* =========================================================
           SECTION TITLE
        ========================================================= */

        .windows-section {
            padding: 85px 0;
        }

        .windows-section-title {
            text-align: center;
            margin-bottom: 45px;
        }

        .windows-section-label {
            color: var(--primary);
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 8px;
        }

        .windows-section-label::before,
        .windows-section-label::after {
            content: "";
            display: inline-block;
            width: 30px;
            height: 2px;
            background: var(--primary);
            vertical-align: middle;
            margin: 0 10px;
        }

        .windows-section-title h2 {
            font-size: clamp(30px, 4vw, 45px);
            line-height: 1.1;
            margin: 0 0 12px;
        }

        .windows-section-title p {
            max-width: 720px;
            margin: auto;
            color: var(--muted);
            font-size: 15px;
        }

        /* =========================================================
           WINDOW PRODUCTS
        ========================================================= */

        .windows-product-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }

        .windows-product-card {
            background: #fff;
            border: 1px solid var(--border);
            box-shadow: 0 7px 25px rgba(0,0,0,.05);
            overflow: hidden;
            transition: .4s ease;
        }

        .windows-product-card:hover {
            transform: translateY(-9px);
            box-shadow: 0 18px 40px rgba(90,15,47,.14);
        }

        .windows-product-image {
            height: 230px;
            overflow: hidden;
        }

        .windows-product-image img {
            height: 100%;
            object-fit: cover;
            transition: .7s ease;
        }

        .windows-product-card:hover img {
            transform: scale(1.08);
        }

        .windows-product-content {
            padding: 22px 18px;
            text-align: center;
        }

        .windows-product-content h3 {
            font-size: 15px;
            margin: 0 0 10px;
        }

        .windows-product-content p {
            color: var(--muted);
            font-size: 12px;
            min-height: 55px;
            margin: 0;
        }

        .windows-product-link {
            display: inline-block;
            margin-top: 15px;
            color: var(--primary);
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
        }

        /* =========================================================
           WHY CHOOSE ANAM
        ========================================================= */

        .windows-why {
            background: #f8f6f5;
        }

        .windows-why-grid {
            display: grid;
            grid-template-columns: 43% 57%;
            min-height: 450px;
        }

        .windows-why-content {
            padding: 60px 55px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .windows-why-label {
            color: var(--primary);
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 10px;
        }

        .windows-why-content h2 {
            font-size: clamp(32px, 4vw, 48px);
            line-height: 1.05;
            margin: 0 0 28px;
        }

        .windows-why-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .windows-why-list li {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 14px;
            font-size: 13px;
        }

        .windows-check {
            width: 22px;
            height: 22px;
            min-width: 22px;
            background: var(--primary);
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
        }

        .windows-why-image {
            overflow: hidden;
        }

        .windows-why-image img {
            height: 100%;
            object-fit: cover;
            transition: .8s ease;
        }

        .windows-why-image:hover img {
            transform: scale(1.05);
        }

        /* =========================================================
           STATS
        ========================================================= */

        .windows-stats {
            background: var(--primary);
            color: #fff;
            padding: 35px 0;
        }

        .windows-stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }

        .windows-stat {
            text-align: center;
            border-right: 1px solid rgba(255,255,255,.25);
        }

        .windows-stat:last-child {
            border-right: none;
        }

        .windows-stat-number {
            font-size: 38px;
            font-weight: 800;
        }

        .windows-stat-title {
            font-size: 12px;
        }

        /* =========================================================
           APPLICATIONS
        ========================================================= */

        .windows-application-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }

        .windows-application-card {
            border: 1px solid var(--border);
            overflow: hidden;
            transition: .4s ease;
        }

        .windows-application-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(90,15,47,.12);
        }

        .windows-application-image {
            height: 170px;
            overflow: hidden;
        }

        .windows-application-image img {
            height: 100%;
            object-fit: cover;
            transition: .7s ease;
        }

        .windows-application-card:hover img {
            transform: scale(1.08);
        }

        .windows-application-content {
            padding: 20px;
        }

        .windows-application-content h3 {
            font-size: 14px;
            margin: 0 0 7px;
        }

        .windows-application-content p {
            color: var(--muted);
            font-size: 12px;
            margin: 0;
        }

        /* =========================================================
           BENEFITS
        ========================================================= */

        .windows-benefits {
            background: #fafafa;
        }

        .windows-benefits-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 1px;
            background: var(--border);
        }

        .windows-benefit {
            background: #fff;
            text-align: center;
            padding: 28px 15px;
        }

        .windows-benefit-icon {
            color: var(--primary);
            font-size: 28px;
            margin-bottom: 10px;
        }

        .windows-benefit h3 {
            font-size: 12px;
            margin: 0 0 6px;
        }

        .windows-benefit p {
            color: var(--muted);
            font-size: 10px;
            margin: 0;
        }

        /* =========================================================
           SEO CONTENT
        ========================================================= */

        .windows-seo {
            background: #fff;
        }

        .windows-seo-content {
            max-width: 900px;
            margin: auto;
        }

        .windows-seo-content h2 {
            font-size: 32px;
            margin: 0 0 15px;
        }

        .windows-seo-content h3 {
            color: var(--primary);
            font-size: 21px;
            margin: 30px 0 10px;
        }

        .windows-seo-content p {
            color: #555;
            font-size: 15px;
            margin: 0 0 15px;
        }

        .windows-seo-content strong {
            color: var(--primary);
        }

        /* =========================================================
           CTA
        ========================================================= */

        .windows-cta {
            background: var(--primary);
            color: #fff;
            padding: 55px 0;
        }

        .windows-cta-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 30px;
        }

        .windows-cta h2 {
            font-size: clamp(28px, 4vw, 42px);
            line-height: 1.05;
            margin: 0 0 10px;
        }

        .windows-cta p {
            color: rgba(255,255,255,.85);
            font-size: 14px;
            margin: 0;
        }

        .windows-cta-button {
            background: #fff;
            color: var(--primary);
            padding: 16px 25px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            white-space: nowrap;
            transition: .4s ease;
        }

        .windows-cta-button:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 25px rgba(0,0,0,.25);
        }

        /* =========================================================
           SCROLL ANIMATION
        ========================================================= */

        .windows-reveal {
            opacity: 0;
            transform: translateY(35px);
            transition: opacity .8s ease, transform .8s ease;
        }

        .windows-reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* =========================================================
           RESPONSIVE
        ========================================================= */

        @media(max-width:1050px) {
            .windows-trust-grid {
                grid-template-columns: repeat(3,1fr);
            }
            .windows-product-grid {
                grid-template-columns: repeat(2,1fr);
            }
            .windows-application-grid {
                grid-template-columns: repeat(2,1fr);
            }
            .windows-benefits-grid {
                grid-template-columns: repeat(3,1fr);
            }
        }

        @media(max-width:750px) {
            .windows-hero {
                grid-template-columns: 1fr;
            }
            .windows-hero-content {
                padding: 60px 6%;
            }
            .windows-hero-image {
                min-height: 350px;
            }
            .windows-trust-grid {
                grid-template-columns: repeat(2,1fr);
            }
            .windows-why-grid {
                grid-template-columns: 1fr;
            }
            .windows-why-content {
                padding: 55px 25px;
            }
            .windows-why-image {
                height: 350px;
            }
            .windows-stats-grid {
                grid-template-columns: repeat(2,1fr);
                gap: 25px 0;
            }
            .windows-stat:nth-child(2) {
                border-right: none;
            }
            .windows-benefits-grid {
                grid-template-columns: repeat(2,1fr);
            }
            .windows-cta-wrapper {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        @media(max-width:768px) {
            .windows-hero h1 {
                font-size: 34px;
                letter-spacing: -1px;
            }
            .windows-trust-grid {
                grid-template-columns: 1fr;
            }
            .windows-product-grid,
            .windows-application-grid {
                grid-template-columns: 1fr;
            }
            .windows-benefits-grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>

      {/* HERO */}
      <section className="windows-hero relative">
        <div className="windows-hero-content">
          <div className="windows-hero-text">
            <div className="windows-label anam-hero-eyebrow">Premium Window Solutions</div>
            <h1 className="anam-hero-title">
              Windows Providers <br />
              <span className="inline-block relative">
                In Doha Qatar
                <span className="anam-underline-bar block h-[5px] w-[140px] bg-[#5A0F2F] mt-2 rounded-full" />
              </span>
            </h1>
            <p>
              ANAM Qatar is a trusted{" "}
              <strong>Windows Provider in Doha Qatar</strong>, offering
              high-quality Aluminium and UPVC windows for residential and
              commercial projects.
            </p>
            <a
              href="#window-solutions"
              onClick={scrollToSolutions}
              className="windows-hero-button"
            >
              Explore Windows →
            </a>
          </div>
        </div>

        <div className="windows-hero-image relative">
          <img
            src="/images/windows-hero-qatar.webp"
            alt="Windows Providers in Doha Qatar"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
          <div className="absolute bottom-6 right-6 md:bottom-7 md:right-7 bg-[#5A0F2F] text-white px-5 py-3 shadow-2xl border border-white/15 backdrop-blur-sm z-10 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C9A86A] shadow-[0_0_10px_#C9A86A] animate-pulse" />
            <div>
              <div className="text-[10px] font-bold tracking-[0.15em] text-[#C9A86A]">Doha, Qatar</div>
              <div className="text-xs md:text-sm font-extrabold tracking-wide text-white">Aluminium & UPVC Windows</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST FEATURES */}
      <section className="windows-trust">
        <div className="windows-container">
          <div className="windows-trust-grid">
            {trustFeatures.map((item, idx) => (
              <div key={idx} className="windows-trust-card">
                <div className="windows-trust-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WINDOW COLLECTION */}
      <section className="windows-section" id="window-solutions">
        <div className="windows-container">
          <div className="windows-section-title windows-reveal">
            <div className="windows-section-label">Our Window Solutions</div>
            <h2>High Quality Windows for Every Need</h2>
            <p>
              Explore modern window systems designed for residential,
              commercial and architectural projects in Qatar.
            </p>
          </div>

          <div className="windows-product-grid">
            {windowProducts.map((prod, idx) => (
              <div key={idx} className="windows-product-card windows-reveal">
                <div className="windows-product-image">
                  <img src={prod.image} alt={prod.alt} loading="lazy" />
                </div>
                <div className="windows-product-content">
                  <h3>{prod.name}</h3>
                  <p>{prod.desc}</p>
                  <Link to={prod.link} className="windows-product-link">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ANAM */}
      <section className="windows-why">
        <div className="windows-why-grid">
          <div className="windows-why-content">
            <div className="windows-why-label">Why Choose ANAM Qatar?</div>
            <h2>Your Trusted Window Supplier in Qatar</h2>
            <ul className="windows-why-list">
              {whyChooseList.map((item, idx) => (
                <li key={idx}>
                  <span className="windows-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="windows-why-image">
            <img
              src="/images/premium-windows-qatar.webp"
              alt="Premium Window Supplier Qatar"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="windows-stats">
        <div className="windows-container">
          <div className="windows-stats-grid">
            {stats.map((st, idx) => (
              <div key={idx} className="windows-stat">
                <div className="windows-stat-number">{st.number}</div>
                <div className="windows-stat-title">{st.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="windows-section">
        <div className="windows-container">
          <div className="windows-section-title">
            <div className="windows-section-label">
              Window Solutions for Every Space
            </div>
            <h2>Perfect Windows for Every Application</h2>
            <p>
              Our window solutions are suitable for different residential and
              commercial environments.
            </p>
          </div>

          <div className="windows-application-grid">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="windows-application-card windows-reveal"
              >
                <div className="windows-application-image">
                  <img src={app.image} alt={app.alt} loading="lazy" />
                </div>
                <div className="windows-application-content">
                  <h3>{app.title}</h3>
                  <p>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="windows-section windows-benefits">
        <div className="windows-container">
          <div className="windows-section-title">
            <div className="windows-section-label">Key Benefits</div>
            <h2>Designed for Comfort & Performance</h2>
          </div>

          <div className="windows-benefits-grid">
            {benefits.map((item, idx) => (
              <div key={idx} className="windows-benefit">
                <div className="windows-benefit-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="windows-section windows-seo">
        <div className="windows-container">
          <div className="windows-seo-content">
            <h2>Windows Providers in Doha Qatar</h2>
            <p>
              ANAM Qatar is a trusted choice for customers searching for
              reliable <strong>Windows Providers in Doha Qatar</strong>. We
              offer modern window solutions for residential, commercial and
              architectural projects across Qatar.
            </p>

            <h3>Window Supplier Qatar</h3>
            <p>
              As a professional <strong>Window Supplier Qatar</strong>, ANAM
              provides Aluminium and UPVC window solutions in different styles,
              configurations and finishes to suit different project
              requirements.
            </p>

            <h3>Aluminium Windows Qatar</h3>
            <p>
              Our <strong>Aluminium Windows Qatar</strong> solutions are
              suitable for villas, homes, offices and commercial properties
              looking for modern and practical window systems.
            </p>

            <h3>UPVC Windows Qatar</h3>
            <p>
              Our <strong>UPVC Windows Qatar</strong> solutions provide a
              practical option for residential and commercial applications where
              low maintenance and modern design are important considerations.
            </p>

            <h3>Sliding Windows Qatar</h3>
            <p>
              <strong>Sliding Windows Qatar</strong> are suitable for spaces
              where smooth operation and efficient use of available space are
              important. They can be considered for residential and commercial
              interiors.
            </p>

            <h3>Casement Windows Qatar</h3>
            <p>
              <strong>Casement Windows Qatar</strong> provide a classic window
              configuration with opening functionality suitable for ventilation
              and different architectural applications.
            </p>

            <h3>Window Installation Doha</h3>
            <p>
              Professional installation is an important part of any window
              project. ANAM provides <strong>Window Installation Doha</strong>{" "}
              support for suitable residential and commercial projects.
            </p>

            <h3>Residential & Commercial Windows Qatar</h3>
            <p>
              ANAM provides <strong>Residential Windows Qatar</strong> and{" "}
              <strong>Commercial Windows Qatar</strong> solutions for villas,
              apartments, offices, buildings, showrooms, retail spaces and other
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="windows-cta">
        <div className="windows-container">
          <div className="windows-cta-wrapper">
            <div>
              <h2>
                Looking for Reliable
                <br />
                Windows Providers in Doha Qatar?
              </h2>
              <p>
                Contact ANAM Qatar today to discuss your project and find the
                right window solution.
              </p>
            </div>

            <Link to="/contact" className="windows-cta-button">
              Get In Touch →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WindowsSection;

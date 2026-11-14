import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const miniFeatures = [
  { icon: "✓", label: "Premium Quality" },
  { icon: "⚒", label: "Expert Installation" },
  { icon: "◉", label: "Reliable Support" },
  { icon: "✦", label: "Trusted Company" },
];

const partitionTypes = [
  {
    title: "Glass Partition Qatar",
    desc: "Elegant and modern glass partitions that bring natural light and a premium appearance to interior spaces.",
    image: "/images/glass-partition-qatar.webp",
    alt: "Glass Partition Qatar",
    link: "/products/partitions/glass-partition",
  },
  {
    title: "Gypsum Partition Qatar",
    desc: "High-quality gypsum partition solutions for flexible layouts and smooth finishes.",
    image: "/images/gypsum-partition-qatar.webp",
    alt: "Gypsum Partition Qatar",
    link: "/products/partitions/gypsum-partition",
  },
  {
    title: "Aluminium Partition Qatar",
    desc: "Durable aluminium partitions designed for strength, functionality and modern spaces.",
    image: "/images/aluminium-partition-qatar.webp",
    alt: "Aluminium Partition Qatar",
    link: "/products/partitions/aluminium-partitions",
  },
  {
    title: "Custom Partition Solutions",
    desc: "Tailored partition solutions designed around your specific space and requirements.",
    image: "/images/custom-partition-solutions.webp",
    alt: "Custom Partition Solutions Qatar",
    link: "/products/partitions/aluminium-partitions",
  },
];

const whyChooseCards = [
  {
    icon: "★",
    title: "High Quality Materials",
    desc: "We use quality materials for long-lasting results.",
  },
  {
    icon: "▣",
    title: "Custom Designs",
    desc: "Partition solutions designed to match your space.",
  },
  {
    icon: "⚒",
    title: "Expert Installation",
    desc: "Professional installation by experienced technicians.",
  },
  {
    icon: "◷",
    title: "On Time Delivery",
    desc: "We value your time and project schedule.",
  },
  {
    icon: "$",
    title: "Competitive Price",
    desc: "Quality partition solutions at competitive prices.",
  },
  {
    icon: "◉",
    title: "After Sales Support",
    desc: "Reliable support even after project completion.",
  },
];

const projects = [
  {
    title: "Office Partition Qatar",
    image: "/images/office-partition-qatar.webp",
    alt: "Office Partition Qatar",
  },
  {
    title: "Commercial Partition Qatar",
    image: "/images/commercial-partition-qatar.webp",
    alt: "Commercial Partition Qatar",
  },
  {
    title: "Residential Partition Qatar",
    image: "/images/residential-partition-qatar.webp",
    alt: "Residential Partition Qatar",
  },
  {
    title: "Interior Partition Doha",
    image: "/images/interior-partition-doha.webp",
    alt: "Interior Partition Doha",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "We understand your requirements and project expectations.",
  },
  {
    step: "02",
    title: "Planning & Design",
    desc: "We create the right partition solution for your space.",
  },
  {
    step: "03",
    title: "Installation",
    desc: "Our experts handle the installation professionally.",
  },
  {
    step: "04",
    title: "Quality Check",
    desc: "We ensure the highest quality standards.",
  },
  {
    step: "05",
    title: "Handover",
    desc: "Project delivery with complete satisfaction.",
  },
];

const PartitionsSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".partition-reveal");

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

  return (
    <div className="anam-partition-page">
      <style>{`
        .anam-partition-page {
            --anam-maroon: #5A0F2F;
            --anam-dark: #420820;
            --anam-light: #faf7f8;
            --anam-text: #171717;
            --anam-muted: #666;
            --anam-border: #e8e1e4;
            --anam-white: #fff;

            font-family: 'Raleway', sans-serif;
            color: var(--anam-text);
            line-height: 1.6;
            background: #fff;
        }

        .anam-partition-page * {
            box-sizing: border-box;
        }

        .anam-partition-page img {
            width: 100%;
            display: block;
        }

        .anam-container {
            width: min(1200px, 92%);
            margin: auto;
        }

        /* =========================================================
           HERO
        ========================================================= */

        .partition-hero {
            display: grid;
            grid-template-columns: 43% 57%;
            min-height: 560px;
            background: #faf7f5;
        }

        .partition-hero-content {
            display: flex;
            align-items: center;
            padding: 70px 9%;
        }

        .partition-hero-inner {
            max-width: 560px;
        }

        .partition-eyebrow {
            color: var(--anam-maroon);
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.8px;
            margin-bottom: 16px;
        }

        .partition-hero h1 {
            font-size: clamp(42px, 5vw, 68px);
            line-height: .98;
            letter-spacing: -2px;
            margin: 0 0 24px;
            font-weight: normal;
        }

        .partition-hero h1 span {
            color: var(--anam-maroon);
        }

        .partition-hero-description {
            color: #555;
            font-size: 15px;
            max-width: 510px;
            margin-bottom: 28px;
        }

        .partition-hero-button {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 15px 25px;
            background: var(--anam-maroon);
            color: #fff;
            text-decoration: none;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            transition: .4s ease;
        }

        .partition-hero-button:hover {
            background: var(--anam-dark);
            transform: translateY(-4px);
            box-shadow: 0 12px 28px rgba(90,15,47,.25);
        }

        .partition-hero-image {
            min-height: 560px;
            overflow: hidden;
        }

        .partition-hero-image img {
            height: 100%;
            object-fit: cover;
            transition: transform 1s ease;
        }

        .partition-hero-image:hover img {
            transform: scale(1.04);
        }

        /* =========================================================
           HERO BENEFITS
        ========================================================= */

        .partition-mini-features {
            display: flex;
            gap: 25px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        .partition-mini-feature {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 11px;
            font-weight: 600;
        }

        .partition-mini-icon {
            width: 28px;
            height: 28px;
            border: 1px solid var(--anam-maroon);
            color: var(--anam-maroon);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* =========================================================
           SECTION
        ========================================================= */

        .partition-section {
            padding: 80px 0;
        }

        .partition-section-title {
            text-align: center;
            margin-bottom: 45px;
        }

        .partition-label {
            color: var(--anam-maroon);
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 8px;
        }

        .partition-label::before,
        .partition-label::after {
            content: "";
            display: inline-block;
            width: 30px;
            height: 2px;
            background: var(--anam-maroon);
            vertical-align: middle;
            margin: 0 10px;
        }

        .partition-section-title h2 {
            font-size: clamp(30px, 4vw, 45px);
            line-height: 1.1;
            margin: 0 0 12px;
        }

        .partition-section-title p {
            max-width: 720px;
            margin: auto;
            color: var(--anam-muted);
            font-size: 14px;
        }

        /* =========================================================
           PARTITION TYPES
        ========================================================= */

        .partition-types {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 18px;
        }

        .partition-type-card {
            background: #fff;
            border: 1px solid var(--anam-border);
            box-shadow: 0 7px 25px rgba(0,0,0,.05);
            overflow: hidden;
            transition: .4s ease;
        }

        .partition-type-card:hover {
            transform: translateY(-9px);
            box-shadow: 0 18px 40px rgba(90,15,47,.13);
        }

        .partition-type-image {
            height: 220px;
            overflow: hidden;
        }

        .partition-type-image img {
            height: 100%;
            object-fit: cover;
            transition: .7s ease;
        }

        .partition-type-card:hover img {
            transform: scale(1.07);
        }

        .partition-type-content {
            padding: 22px 18px 25px;
            text-align: center;
        }

        .partition-type-content h3 {
            font-size: 15px;
            margin: 0 0 10px;
        }

        .partition-type-content p {
            color: var(--anam-muted);
            font-size: 12px;
            min-height: 55px;
            margin: 0;
        }

        .partition-more {
            display: inline-block;
            margin-top: 15px;
            color: var(--anam-maroon);
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
        }

        /* =========================================================
           WHY CHOOSE
        ========================================================= */

        .partition-why {
            background: var(--anam-maroon);
            color: #fff;
            padding: 65px 0;
        }

        .partition-why-title {
            text-align: center;
            margin-bottom: 40px;
        }

        .partition-why-title .partition-label {
            color: #fff;
        }

        .partition-why-title .partition-label::before,
        .partition-why-title .partition-label::after {
            background: #fff;
        }

        .partition-why-title h2 {
            font-size: 34px;
            margin: 0;
        }

        .partition-why-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 0;
        }

        .partition-why-card {
            padding: 15px 18px;
            text-align: center;
            border-right: 1px solid rgba(255,255,255,.3);
        }

        .partition-why-card:last-child {
            border-right: none;
        }

        .partition-why-icon {
            width: 52px;
            height: 52px;
            border: 1px solid rgba(255,255,255,.7);
            border-radius: 50%;
            margin: 0 auto 13px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 21px;
        }

        .partition-why-card h3 {
            font-size: 12px;
            margin: 0 0 7px;
        }

        .partition-why-card p {
            font-size: 10px;
            color: rgba(255,255,255,.8);
            margin: 0;
        }

        /* =========================================================
           PROJECTS
        ========================================================= */

        .partition-projects {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 18px;
        }

        .partition-project {
            overflow: hidden;
            border: 1px solid var(--anam-border);
            background: #fff;
            transition: .4s ease;
        }

        .partition-project:hover {
            transform: translateY(-7px);
            box-shadow: 0 15px 30px rgba(90,15,47,.12);
        }

        .partition-project-image {
            height: 190px;
            overflow: hidden;
        }

        .partition-project-image img {
            height: 100%;
            object-fit: cover;
            transition: .7s ease;
        }

        .partition-project:hover img {
            transform: scale(1.07);
        }

        .partition-project-title {
            text-align: center;
            padding: 15px 10px;
            font-size: 13px;
            font-weight: 700;
        }

        /* =========================================================
           PROJECT BUTTON
        ========================================================= */

        .partition-project-button {
            display: block;
            width: fit-content;
            margin: 35px auto 0;
            padding: 13px 28px;
            border: 1px solid var(--anam-maroon);
            color: var(--anam-maroon);
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            transition: .4s ease;
        }

        .partition-project-button:hover {
            background: var(--anam-maroon);
            color: #fff;
        }

        /* =========================================================
           PROCESS
        ========================================================= */

        .partition-process {
            background: #faf8f8;
        }

        .partition-process-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            position: relative;
        }

        .partition-process-grid::before {
            content: "";
            position: absolute;
            top: 37px;
            left: 10%;
            right: 10%;
            border-top: 1px dashed var(--anam-maroon);
        }

        .partition-process-step {
            position: relative;
            z-index: 2;
            text-align: center;
            padding: 0 15px;
        }

        .partition-step-number {
            width: 48px;
            height: 48px;
            margin: 0 auto 15px;
            background: var(--anam-maroon);
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 700;
            border: 6px solid #faf8f8;
        }

        .partition-process-step h3 {
            font-size: 12px;
            margin: 0 0 7px;
        }

        .partition-process-step p {
            font-size: 10px;
            color: var(--anam-muted);
            margin: 0;
        }

        /* =========================================================
           SEO CONTENT
        ========================================================= */

        .partition-seo {
            background: #fff;
        }

        .partition-seo-wrapper {
            max-width: 950px;
            margin: auto;
        }

        .partition-seo-wrapper h2 {
            font-size: 32px;
            margin: 0 0 15px;
        }

        .partition-seo-wrapper h3 {
            color: var(--anam-maroon);
            font-size: 21px;
            margin: 30px 0 10px;
        }

        .partition-seo-wrapper p {
            color: #555;
            font-size: 15px;
            margin: 0 0 15px;
        }

        .partition-seo-wrapper strong {
            color: var(--anam-maroon);
        }

        /* =========================================================
           CTA
        ========================================================= */

        .partition-cta {
            background: var(--anam-maroon);
            color: #fff;
            padding: 45px 0;
        }

        .partition-cta-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 30px;
        }

        .partition-cta h2 {
            font-size: clamp(27px, 4vw, 40px);
            line-height: 1.1;
            margin: 0 0 8px;
        }

        .partition-cta p {
            margin: 0;
            color: rgba(255,255,255,.85);
            font-size: 14px;
        }

        .partition-cta-button {
            background: #fff;
            color: var(--anam-maroon);
            padding: 15px 25px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            white-space: nowrap;
            transition: .4s ease;
        }

        .partition-cta-button:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 25px rgba(0,0,0,.25);
        }

        /* =========================================================
           ANIMATIONS
        ========================================================= */

        .partition-reveal {
            opacity: 0;
            transform: translateY(35px);
            transition: opacity .8s ease, transform .8s ease;
        }

        .partition-reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* =========================================================
           RESPONSIVE
        ========================================================= */

        @media(max-width:1050px) {
            .partition-types {
                grid-template-columns: repeat(2,1fr);
            }
            .partition-projects {
                grid-template-columns: repeat(2,1fr);
            }
            .partition-why-grid {
                grid-template-columns: repeat(3,1fr);
                gap: 25px 0;
            }
            .partition-why-card:nth-child(3) {
                border-right: none;
            }
        }

        @media(max-width:750px) {
            .partition-hero {
                grid-template-columns: 1fr;
            }
            .partition-hero-content {
                padding: 60px 6%;
            }
            .partition-hero-image {
                min-height: 350px;
            }
            .partition-why-grid {
                grid-template-columns: repeat(2,1fr);
            }
            .partition-why-card {
                border-bottom: 1px solid rgba(255,255,255,.25);
            }
            .partition-process-grid {
                grid-template-columns: 1fr;
                gap: 25px;
            }
            .partition-process-grid::before {
                display: none;
            }
            .partition-cta-wrapper {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        @media(max-width:500px) {
            .partition-hero h1 {
                font-size: 42px;
            }
            .partition-types,
            .partition-projects {
                grid-template-columns: 1fr;
            }
            .partition-why-grid {
                grid-template-columns: 1fr;
            }
            .partition-why-card {
                border-right: none;
            }
        }
      `}</style>

      {/* HERO */}
      <section className="partition-hero relative">
        <div className="partition-hero-content">
          <div className="partition-hero-inner">
            <div className="partition-eyebrow anam-hero-eyebrow">Premium Partition Solutions</div>
            <h1 className="anam-hero-title">
              Partition Services <br />
              <span className="inline-block relative">
                in Qatar
                <span className="anam-underline-bar block h-[5px] w-[140px] bg-[#5A0F2F] mt-2 rounded-full" />
              </span>
            </h1>

            <p className="partition-hero-description">
              ANAM Qatar provides high-quality partition solutions for offices,
              commercial spaces and residential projects with professional
              installation and modern designs.
            </p>

            <div className="partition-mini-features">
              {miniFeatures.map((feat, idx) => (
                <div key={idx} className="partition-mini-feature">
                  <span className="partition-mini-icon">{feat.icon}</span>
                  {feat.label}
                </div>
              ))}
            </div>

            <Link to="/contact" className="partition-hero-button">
              Get a Free Quote →
            </Link>
          </div>
        </div>

        <div className="partition-hero-image relative">
          <img
            src="/images/partition-services-qatar.webp"
            alt="Partition Services in Qatar"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
          <div className="absolute bottom-6 right-6 md:bottom-7 md:right-7 bg-[#5A0F2F] text-white px-5 py-3 shadow-2xl border border-white/15 backdrop-blur-sm z-10 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C9A86A] shadow-[0_0_10px_#C9A86A] animate-pulse" />
            <div>
              <div className="text-[10px] font-bold tracking-[0.15em] text-[#C9A86A]">Doha, Qatar</div>
              <div className="text-xs md:text-sm font-extrabold tracking-wide text-white">Glass & Gypsum Partitions</div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTITION SOLUTIONS */}
      <section className="partition-section">
        <div className="anam-container">
          <div className="partition-section-title partition-reveal">
            <div className="partition-label">Our Partition Solutions</div>
            <h2>Types of Partitions We Offer</h2>
            <p>
              Explore modern partition systems designed for offices, commercial
              properties, homes and interior spaces across Qatar.
            </p>
          </div>

          <div className="partition-types">
            {partitionTypes.map((type, idx) => (
              <div key={idx} className="partition-type-card partition-reveal">
                <div className="partition-type-image">
                  <img src={type.image} alt={type.alt} loading="lazy" />
                </div>
                <div className="partition-type-content">
                  <h3>{type.title}</h3>
                  <p>{type.desc}</p>
                  <Link to={type.link} className="partition-more">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ANAM */}
      <section className="partition-why">
        <div className="anam-container">
          <div className="partition-why-title">
            <div className="partition-label">Why Choose ANAM Qatar?</div>
            <h2>Quality Partition Solutions</h2>
          </div>

          <div className="partition-why-grid">
            {whyChooseCards.map((card, idx) => (
              <div key={idx} className="partition-why-card">
                <div className="partition-why-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="partition-section">
        <div className="anam-container">
          <div className="partition-section-title partition-reveal">
            <div className="partition-label">Our Work</div>
            <h2>Our Partition Projects</h2>
            <p>
              Explore partition solutions created for different residential and
              commercial environments.
            </p>
          </div>

          <div className="partition-projects">
            {projects.map((proj, idx) => (
              <div key={idx} className="partition-project partition-reveal">
                <div className="partition-project-image">
                  <img src={proj.image} alt={proj.alt} loading="lazy" />
                </div>
                <div className="partition-project-title">{proj.title}</div>
              </div>
            ))}
          </div>

          <Link to="/gallery" className="partition-project-button">
            View More Projects →
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="partition-section partition-process">
        <div className="anam-container">
          <div className="partition-section-title">
            <div className="partition-label">Our Process</div>
            <h2>How We Work</h2>
          </div>

          <div className="partition-process-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="partition-process-step">
                <div className="partition-step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="partition-section partition-seo">
        <div className="anam-container">
          <div className="partition-seo-wrapper">
            <h2>Partition Services in Qatar</h2>
            <p>
              ANAM Qatar provides professional{" "}
              <strong>Partition Services in Qatar</strong> for residential,
              commercial and interior projects. Our partition solutions help
              create functional, modern and visually appealing spaces while
              making better use of available floor areas.
            </p>

            <h3>Office Partition Qatar</h3>
            <p>
              Our <strong>Office Partition Qatar</strong> solutions are designed
              for businesses looking to create organized workspaces, meeting
              rooms, private offices and collaborative areas. We provide
              partition options that complement modern office interiors.
            </p>

            <h3>Glass Partition Qatar</h3>
            <p>
              <strong>Glass Partition Qatar</strong> solutions are ideal for
              offices and commercial interiors where natural light, openness
              and modern aesthetics are important. Glass partitions can create
              separate spaces without making interiors feel closed or restricted.
            </p>

            <h3>Gypsum Partition Qatar</h3>
            <p>
              Our <strong>Gypsum Partition Qatar</strong> solutions can help
              create flexible interior layouts with clean and seamless finishes.
              Gypsum partitions are suitable for offices, residential interiors
              and commercial spaces.
            </p>

            <h3>Aluminium Partition Qatar</h3>
            <p>
              <strong>Aluminium Partition Qatar</strong> systems offer a modern
              and practical option for offices, commercial buildings and
              interior applications. Aluminium frames can be combined with
              suitable panels or glazing according to project requirements.
            </p>

            <h3>Commercial Partition Qatar</h3>
            <p>
              ANAM provides <strong>Commercial Partition Qatar</strong>{" "}
              solutions for offices, retail stores, showrooms, hospitality
              spaces and other business environments. Our solutions are designed
              according to the functional and design requirements of each project.
            </p>

            <h3>Residential Partition Qatar</h3>
            <p>
              Our <strong>Residential Partition Qatar</strong> solutions are
              suitable for villas, apartments and modern homes. Partitions can be
              used to create separate rooms, workspaces, dressing areas and
              other functional spaces.
            </p>

            <h3>Interior Partition Doha</h3>
            <p>
              For customers searching for <strong>Interior Partition Doha</strong>{" "}
              solutions, ANAM offers different partition systems suitable for
              modern interior projects across Doha and Qatar.
            </p>

            <h3>Partition Installation Qatar</h3>
            <p>
              Proper installation is essential for achieving a clean finish and
              reliable performance. ANAM provides{" "}
              <strong>Partition Installation Qatar</strong> support for suitable
              residential and commercial projects.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="partition-cta">
        <div className="anam-container">
          <div className="partition-cta-wrapper">
            <div>
              <h2>Looking for Partition Services in Qatar?</h2>
              <p>
                Contact ANAM Qatar today and find the right partition solution for
                your space.
              </p>
            </div>

            <Link to="/contact" className="partition-cta-button">
              Contact Us Now →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartitionsSection;

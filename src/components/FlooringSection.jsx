import React, { useState } from "react";
import { Link } from "react-router-dom";

const FlooringSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flooring-custom-page">
      <style>{`
        .flooring-custom-page {
          font-family: Arial, Helvetica, sans-serif;
          background: #fff;
          color: #222;
          line-height: 1.7;
        }

        .flooring-custom-page * {
          box-sizing: border-box;
        }

        :root {
          --maroon: #5A0F2F;
          --maroon-dark: #3f0921;
          --gold: #c99a3e;
          --light: #f8f6f3;
          --border: #e8e3dd;
          --text: #444;
        }

        .flooring-custom-page .container {
          width: min(1180px, 92%);
          margin: auto;
        }

        /* =========================
           BREADCRUMB
        ========================= */
        .flooring-custom-page .breadcrumb {
          padding: 25px 0 10px;
          font-size: 13px;
          color: #777;
        }

        .flooring-custom-page .breadcrumb a {
          color: #777;
          text-decoration: none;
        }

        .flooring-custom-page .breadcrumb a:hover {
          color: var(--maroon);
        }

        .flooring-custom-page .breadcrumb span {
          color: var(--maroon);
          font-weight: 600;
        }

        /* =========================
           HERO
        ========================= */
        .flooring-custom-page .floor-hero {
          position: relative;
          min-height: 520px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #f6f2ed;
        }

        .flooring-custom-page .floor-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg,
              rgba(255, 255, 255, .98) 0%,
              rgba(255, 255, 255, .93) 40%,
              rgba(255, 255, 255, .20) 75%,
              rgba(255, 255, 255, 0) 100%),
            url("/images/flooring-qatar-hero.webp") center/cover no-repeat;
        }

        .flooring-custom-page .hero-content {
          position: relative;
          z-index: 2;
          width: 55%;
          padding: 70px 0;
        }

        .flooring-custom-page .hero-label {
          display: inline-block;
          color: var(--maroon);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .flooring-custom-page .hero-content h1 {
          font-size: 58px;
          line-height: 1.08;
          color: #202020;
          margin-bottom: 18px;
          font-weight: 800;
        }

        .flooring-custom-page .hero-content h1::after {
          content: "";
          display: block;
          width: 55px;
          height: 4px;
          background: var(--maroon);
          margin-top: 20px;
        }

        .flooring-custom-page .hero-content h2 {
          font-size: 24px;
          line-height: 1.35;
          max-width: 560px;
          margin-bottom: 20px;
          font-weight: 600;
          color: #222;
        }

        .flooring-custom-page .hero-content p {
          max-width: 600px;
          color: #555;
          font-size: 16px;
        }

        .flooring-custom-page .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 25px;
          font-size: 13px;
          color: #555;
        }

        /* =========================
           MAIN ARTICLE LAYOUT
        ========================= */
        .flooring-custom-page .main-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 310px;
          gap: 55px;
          padding: 70px 0;
        }

        .flooring-custom-page .article h2 {
          font-size: 32px;
          line-height: 1.25;
          color: #222;
          margin: 0 0 18px;
          font-weight: 700;
        }

        .flooring-custom-page .article h2::before {
          content: "";
          display: block;
          width: 40px;
          height: 3px;
          background: var(--maroon);
          margin-bottom: 12px;
        }

        .flooring-custom-page .article h3 {
          font-size: 22px;
          color: #222;
          margin: 35px 0 12px;
          font-weight: 700;
        }

        .flooring-custom-page .article p {
          font-size: 15.5px;
          color: #555;
          margin-bottom: 18px;
        }

        .flooring-custom-page .article strong {
          color: #333;
        }

        /* =========================
           FEATURE IMAGE
        ========================= */
        .flooring-custom-page .content-image {
          width: 100%;
          height: 350px;
          object-fit: cover;
          border-radius: 12px;
          margin: 25px 0 45px;
          display: block;
        }

        /* =========================
           BENEFITS
        ========================= */
        .flooring-custom-page .benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin: 30px 0 50px;
        }

        .flooring-custom-page .benefit-card {
          background: #faf9f7;
          border: 1px solid var(--border);
          padding: 24px 20px;
          border-radius: 8px;
          transition: .3s ease;
        }

        .flooring-custom-page .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, .08);
        }

        .flooring-custom-page .benefit-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #f1e8ec;
          color: var(--maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          font-weight: bold;
        }

        .flooring-custom-page .benefit-card h4 {
          font-size: 16px;
          margin-bottom: 7px;
          font-weight: 700;
          color: #222;
        }

        .flooring-custom-page .benefit-card p {
          font-size: 13px;
          margin: 0;
          color: #555;
        }

        /* =========================
           TYPES
        ========================= */
        .flooring-custom-page .floor-types {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin: 25px 0 50px;
        }

        .flooring-custom-page .floor-card {
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
          background: #fff;
          transition: .3s ease;
          display: flex;
          flex-direction: column;
        }

        .flooring-custom-page .floor-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, .10);
        }

        .flooring-custom-page .floor-card img {
          width: 100%;
          height: 170px;
          object-fit: cover;
          display: block;
        }

        .flooring-custom-page .floor-card-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .flooring-custom-page .floor-card h4 {
          font-size: 17px;
          margin-bottom: 7px;
          font-weight: 700;
          color: #222;
        }

        .flooring-custom-page .floor-card p {
          font-size: 13px;
          margin: 0 0 10px;
          color: #555;
          flex-grow: 1;
        }

        .flooring-custom-page .read-more {
          color: var(--maroon);
          font-size: 12px;
          font-weight: bold;
          text-decoration: none;
          display: inline-block;
        }

        /* =========================
           APPLICATION GRID
        ========================= */
        .flooring-custom-page .application-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin: 25px 0 50px;
        }

        .flooring-custom-page .application {
          text-align: center;
          padding: 20px 10px;
        }

        .flooring-custom-page .application-icon {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          border: 1px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 13px;
          color: var(--maroon);
          font-size: 20px;
        }

        .flooring-custom-page .application h4 {
          font-size: 16px;
          margin-bottom: 5px;
          font-weight: 700;
          color: #222;
        }

        .flooring-custom-page .application p {
          font-size: 13px;
          color: #555;
        }

        /* =========================
           INFO BOX
        ========================= */
        .flooring-custom-page .info-box {
          background: #f7f4f0;
          border-left: 4px solid var(--maroon);
          padding: 25px;
          margin: 30px 0;
          border-radius: 5px;
        }

        .flooring-custom-page .info-box h3 {
          margin-top: 0;
          margin-bottom: 10px;
          color: var(--maroon);
          font-size: 20px;
          font-weight: 700;
        }

        .flooring-custom-page .info-box p {
          margin-bottom: 0;
        }

        /* =========================
           PROCESS
        ========================= */
        .flooring-custom-page .process {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin: 25px 0 45px;
        }

        .flooring-custom-page .process-item {
          position: relative;
          background: #faf9f7;
          border: 1px solid var(--border);
          padding: 22px 18px;
          border-radius: 8px;
        }

        .flooring-custom-page .process-number {
          font-size: 28px;
          color: var(--maroon);
          font-weight: 800;
          margin-bottom: 8px;
        }

        .flooring-custom-page .process-item h4 {
          font-size: 16px;
          margin-bottom: 6px;
          font-weight: 700;
          color: #222;
        }

        .flooring-custom-page .process-item p {
          font-size: 13px;
          margin: 0;
          color: #555;
        }

        /* =========================
           COMPARISON
        ========================= */
        .flooring-custom-page .comparison {
          overflow-x: auto;
          margin: 25px 0 45px;
        }

        .flooring-custom-page .comparison table {
          width: 100%;
          border-collapse: collapse;
          min-width: 650px;
        }

        .flooring-custom-page .comparison th,
        .flooring-custom-page .comparison td {
          padding: 15px;
          border: 1px solid #ddd;
          text-align: left;
          font-size: 14px;
        }

        .flooring-custom-page .comparison th {
          background: var(--maroon);
          color: #fff;
        }

        .flooring-custom-page .comparison tr:nth-child(even) {
          background: #fafafa;
        }

        /* =========================
           SIDEBAR
        ========================= */
        .flooring-custom-page .sidebar {
          position: relative;
        }

        .flooring-custom-page .sidebar-box {
          background: #faf9f7;
          border: 1px solid var(--border);
          padding: 25px;
          border-radius: 10px;
          margin-bottom: 25px;
        }

        .flooring-custom-page .sidebar-box h3 {
          font-size: 18px;
          margin-bottom: 17px;
          font-weight: 700;
          color: #222;
        }

        .flooring-custom-page .toc {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .flooring-custom-page .toc li {
          border-bottom: 1px solid #e5e1dc;
          padding: 9px 0;
        }

        .flooring-custom-page .toc li:last-child {
          border-bottom: 0;
        }

        .flooring-custom-page .toc a {
          text-decoration: none;
          color: #555;
          font-size: 13px;
          transition: .2s;
          display: block;
        }

        .flooring-custom-page .toc a:hover {
          color: var(--maroon);
        }

        .flooring-custom-page .sidebar-cta {
          position: relative;
          min-height: 300px;
          border-radius: 10px;
          overflow: hidden;
          color: #fff;
          background:
            linear-gradient(rgba(20, 12, 10, .75), rgba(20, 12, 10, .8)),
            url("/images/flooring-cta.webp") center/cover;
          padding: 30px 25px;
          margin-bottom: 25px;
        }

        .flooring-custom-page .sidebar-cta small {
          color: #e5bf6a;
          font-weight: bold;
          letter-spacing: 1px;
          font-size: 12px;
          display: block;
        }

        .flooring-custom-page .sidebar-cta h3 {
          font-size: 25px;
          line-height: 1.2;
          margin: 12px 0;
          color: #fff;
          font-weight: 700;
        }

        .flooring-custom-page .sidebar-cta p {
          font-size: 13px;
          color: #eee;
          margin-bottom: 20px;
        }

        .flooring-custom-page .btn {
          display: inline-block;
          background: var(--maroon);
          color: #fff;
          padding: 12px 22px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 13px;
          font-weight: bold;
          border: 0;
          transition: .3s;
          cursor: pointer;
        }

        .flooring-custom-page .btn:hover {
          background: var(--maroon-dark);
          transform: translateY(-2px);
        }

        .flooring-custom-page .btn-gold {
          background: #c99a3e;
          color: #fff;
        }

        .flooring-custom-page .btn-gold:hover {
          background: #a97c29;
        }

        /* =========================
           RELATED POSTS
        ========================= */
        .flooring-custom-page .related-post {
          display: flex;
          gap: 12px;
          margin-bottom: 15px;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }

        .flooring-custom-page .related-post:last-child {
          margin-bottom: 0;
        }

        .flooring-custom-page .related-post img {
          width: 68px;
          height: 58px;
          object-fit: cover;
          border-radius: 6px;
          flex-shrink: 0;
        }

        .flooring-custom-page .related-post h4 {
          font-size: 13px;
          line-height: 1.3;
          margin-bottom: 3px;
          font-weight: 700;
          color: #222;
        }

        .flooring-custom-page .related-post p {
          font-size: 11px;
          color: #777;
          margin: 0;
        }

        /* =========================
           TAGS
        ========================= */
        .flooring-custom-page .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .flooring-custom-page .tags span {
          background: #eee9e4;
          padding: 6px 9px;
          border-radius: 4px;
          font-size: 11px;
          color: #555;
        }

        /* =========================
           FAQ
        ========================= */
        .flooring-custom-page .faq {
          margin-top: 30px;
        }

        .flooring-custom-page .faq-item {
          border-bottom: 1px solid #ddd;
        }

        .flooring-custom-page .faq-question {
          width: 100%;
          padding: 19px 0;
          border: 0;
          background: none;
          text-align: left;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          padding-right: 35px;
          color: #222;
        }

        .flooring-custom-page .faq-question::after {
          content: "+";
          position: absolute;
          right: 5px;
          color: var(--maroon);
          font-size: 22px;
          line-height: 1;
          top: 50%;
          transform: translateY(-50%);
        }

        .flooring-custom-page .faq-item.active .faq-question::after {
          content: "−";
        }

        .flooring-custom-page .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height .4s ease;
        }

        .flooring-custom-page .faq-item.active .faq-answer {
          max-height: 300px;
        }

        .flooring-custom-page .faq-answer p {
          padding-bottom: 18px;
          font-size: 14px;
          color: #555;
          margin: 0;
        }

        /* =========================
           FINAL CTA
        ========================= */
        .flooring-custom-page .final-cta {
          position: relative;
          overflow: hidden;
          padding: 75px 0;
          color: #fff;
          background:
            linear-gradient(rgba(25, 16, 12, .80), rgba(25, 16, 12, .88)),
            url("/images/flooring-qatar-commercial.webp") center/cover;
          margin-top: 40px;
        }

        .flooring-custom-page .final-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .flooring-custom-page .final-cta h2 {
          color: #fff;
          font-size: 38px;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .flooring-custom-page .final-cta h2::before {
          content: "";
          display: block;
          width: 45px;
          height: 3px;
          background: #c99a3e;
          margin-bottom: 15px;
        }

        .flooring-custom-page .final-cta p {
          color: #eee;
          max-width: 650px;
          margin: 0;
        }

        /* =========================
           RESPONSIVE
        ========================= */
        @media(max-width: 1000px) {
          .flooring-custom-page .hero-content {
            width: 65%;
          }

          .flooring-custom-page .hero-content h1 {
            font-size: 46px;
          }

          .flooring-custom-page .main-layout {
            grid-template-columns: 1fr;
          }

          .flooring-custom-page .sidebar {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .flooring-custom-page .sidebar-box {
            margin: 0;
          }

          .flooring-custom-page .sidebar-cta {
            min-height: 260px;
            margin: 0;
          }

          .flooring-custom-page .floor-types {
            grid-template-columns: repeat(2, 1fr);
          }

          .flooring-custom-page .benefit-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .flooring-custom-page .application-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .flooring-custom-page .process {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(max-width: 700px) {
          .flooring-custom-page .floor-hero {
            min-height: 620px;
          }

          .flooring-custom-page .floor-hero::before {
            background:
              linear-gradient(180deg,
                rgba(255, 255, 255, .96) 0%,
                rgba(255, 255, 255, .92) 55%,
                rgba(255, 255, 255, .25) 100%),
              url("/images/flooring-qatar-hero.webp") center/cover no-repeat;
          }

          .flooring-custom-page .hero-content {
            width: 100%;
            padding: 50px 0;
          }

          .flooring-custom-page .hero-content h1 {
            font-size: 40px;
          }

          .flooring-custom-page .hero-content h2 {
            font-size: 20px;
          }

          .flooring-custom-page .main-layout {
            padding: 45px 0;
            gap: 35px;
          }

          .flooring-custom-page .article h2 {
            font-size: 27px;
          }

          .flooring-custom-page .content-image {
            height: 240px;
          }

          .flooring-custom-page .benefit-grid,
          .flooring-custom-page .floor-types,
          .flooring-custom-page .application-grid,
          .flooring-custom-page .process {
            grid-template-columns: 1fr;
          }

          .flooring-custom-page .sidebar {
            display: block;
          }

          .flooring-custom-page .sidebar-box {
            margin-bottom: 20px;
          }

          .flooring-custom-page .final-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .flooring-custom-page .final-cta h2 {
            font-size: 30px;
          }
        }
      `}</style>

      {/* =========================
           HERO
      ========================= */}
      <section className="floor-hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-label">TOP-RATED FLOORING COMPANY IN DOHA</span>
            <h1>Best Flooring in Qatar</h1>
            <h2>
              #1 Rated Flooring Company in Doha, Qatar - SPC, Parquet, Vinyl & Wood
            </h2>
            <p>
              Looking for the best flooring in Qatar? ANAM Qatar is Doha's leading
              supplier and installer of luxury SPC flooring, parquet wood, vinyl tiles,
              and commercial carpet. Durable, waterproof, and designed for Qatar's climate.
            </p>
            <div className="hero-meta">
              <span>◷ Professional Installation</span>
              <span>◆ Premium European & SPC Materials</span>
              <span>✓ Residential & Commercial</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
           MAIN CONTENT
      ========================= */}
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> &nbsp;›&nbsp; <Link to="/">Products</Link> &nbsp;›&nbsp;
          <span>Best Flooring in Qatar</span>
        </div>

        <div className="main-layout">
          <main className="article">
            {/* INTRO */}
            <section id="flooring-qatar">
              <h2>Best Flooring in Qatar - Premium Solutions for Modern Interiors</h2>
              <p>
                The right flooring can completely transform the appearance,
                comfort and functionality of an interior. From modern villas
                and apartments to offices, hotels, retail spaces and
                commercial buildings, flooring plays an important role in
                creating a well-designed environment.
              </p>
              <p>
                Choosing <strong>flooring in Qatar</strong> is not only about
                selecting an attractive colour or pattern. The flooring
                material should also suit the space, expected usage,
                maintenance requirements, interior design and overall
                project requirements.
              </p>
              <p>
                At ANAM Qatar, we provide flooring solutions for different
                residential and commercial applications, helping customers
                create interiors that combine style, practicality and
                long-term value.
              </p>
            </section>

            <img loading="lazy" decoding="async"
              src="/images/flooring-solutions-qatar.webp"
              alt="Premium flooring solutions in Qatar"
              className="content-image"
            />

            {/* WHY FLOORING */}
            <section id="importance">
              <h2>Why Is Flooring Important for Interior Design?</h2>
              <p>
                Flooring is one of the largest visible surfaces in any room.
                Because of this, it has a major influence on the overall
                appearance, atmosphere and functionality of the space.
              </p>

              <div className="benefit-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">01</div>
                  <h4>Create Visual Appeal</h4>
                  <p>
                    Colours, patterns and textures can give a room a
                    distinctive and attractive appearance.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">02</div>
                  <h4>Define Interior Style</h4>
                  <p>
                    From modern to classic, flooring helps establish
                    the visual character of an interior.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">03</div>
                  <h4>Improve Functionality</h4>
                  <p>
                    The right material can support the space and its
                    daily usage requirements.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">04</div>
                  <h4>Complement Other Materials</h4>
                  <p>
                    Flooring works beautifully with walls, furniture,
                    doors, ceilings and cabinetry.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">05</div>
                  <h4>Support Long-Term Use</h4>
                  <p>
                    Durable flooring options can provide practical
                    value for everyday spaces.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">06</div>
                  <h4>Easy Maintenance</h4>
                  <p>
                    Suitable flooring choices can make cleaning and
                    routine maintenance easier.
                  </p>
                </div>
              </div>
            </section>

            {/* TYPES */}
            <section id="types">
              <h2>Types of Flooring in Qatar</h2>
              <p>
                Different spaces require different flooring solutions.
                Popular flooring options can be selected according to
                design, usage, maintenance and project requirements.
              </p>

              <div className="floor-types">
                <div className="floor-card">
                  <img loading="lazy" decoding="async"
                    src="/images/vinyl-flooring-qatar.webp"
                    alt="Vinyl flooring in Qatar"
                  />
                  <div className="floor-card-content">
                    <h4>Vinyl Flooring</h4>
                    <p>
                      Versatile, stylish and suitable for a wide
                      range of interior applications.
                    </p>
                    <Link to="/products/flooring/vinyl-flooring" className="read-more">
                      Explore More →
                    </Link>
                  </div>
                </div>

                <div className="floor-card">
                  <img loading="lazy" decoding="async"
                    src="/images/spc-flooring-qatar.webp"
                    alt="SPC flooring in Qatar"
                  />
                  <div className="floor-card-content">
                    <h4>SPC Flooring</h4>
                    <p>
                      Durable flooring designed for modern
                      residential and commercial interiors.
                    </p>
                    <Link to="/products/flooring/spc-flooring" className="read-more">
                      Explore More →
                    </Link>
                  </div>
                </div>

                <div className="floor-card">
                  <img loading="lazy" decoding="async"
                    src="/images/wooden-flooring-qatar.webp"
                    alt="Wooden flooring in Qatar"
                  />
                  <div className="floor-card-content">
                    <h4>Wooden Flooring</h4>
                    <p>
                      Natural-looking flooring that adds warmth,
                      elegance and character.
                    </p>
                    <Link to="/products/flooring/solid-wooden-flooring" className="read-more">
                      Explore More →
                    </Link>
                  </div>
                </div>

                <div className="floor-card">
                  <img loading="lazy" decoding="async"
                    src="/images/decorative-flooring-qatar.webp"
                    alt="Decorative flooring in Qatar"
                  />
                  <div className="floor-card-content">
                    <h4>Decorative Flooring</h4>
                    <p>
                      Unique patterns and premium finishes for
                      distinctive interiors.
                    </p>
                    <Link to="/products/flooring" className="read-more">
                      Explore More →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* RESIDENTIAL */}
            <section id="residential">
              <h2>Flooring for Residential Spaces</h2>
              <p>
                Residential flooring needs to balance appearance, comfort,
                maintenance and everyday use. The right flooring can create
                a consistent design language throughout a home.
              </p>

              <div className="application-grid">
                <div className="application">
                  <div className="application-icon">⌂</div>
                  <h4>Living Room</h4>
                  <p>Stylish and welcoming flooring for family spaces.</p>
                </div>

                <div className="application">
                  <div className="application-icon">▣</div>
                  <h4>Bedroom</h4>
                  <p>Comfortable flooring that complements relaxing interiors.</p>
                </div>

                <div className="application">
                  <div className="application-icon">◇</div>
                  <h4>Dining Area</h4>
                  <p>Practical flooring that connects with your interior style.</p>
                </div>

                <div className="application">
                  <div className="application-icon">⌂</div>
                  <h4>Villa</h4>
                  <p>Complete flooring solutions for modern villas.</p>
                </div>
              </div>
            </section>

            {/* COMMERCIAL */}
            <section id="commercial">
              <h2>Commercial Flooring in Qatar</h2>
              <p>
                Commercial spaces require flooring that creates a
                professional appearance while supporting regular foot
                traffic and day-to-day activities.
              </p>

              <div className="application-grid">
                <div className="application">
                  <div className="application-icon">▦</div>
                  <h4>Offices</h4>
                  <p>Professional flooring for modern workplaces.</p>
                </div>

                <div className="application">
                  <div className="application-icon">▤</div>
                  <h4>Hotels</h4>
                  <p>Elegant flooring designed to create premium impressions.</p>
                </div>

                <div className="application">
                  <div className="application-icon">☕</div>
                  <h4>Restaurants & Cafés</h4>
                  <p>Stylish and practical flooring solutions.</p>
                </div>

                <div className="application">
                  <div className="application-icon">▥</div>
                  <h4>Retail Stores</h4>
                  <p>Attractive flooring for customer-focused spaces.</p>
                </div>
              </div>
            </section>

            {/* MODERN IDEAS */}
            <section id="ideas">
              <h2>Modern Flooring Ideas for Qatar Interiors</h2>
              <p>
                Modern interior design often combines flooring with walls,
                furniture, lighting and ceiling elements to create a
                balanced visual experience.
              </p>

              <div className="info-box">
                <h3>Popular Design Approach</h3>
                <p>
                  Use natural wood tones for warmth, neutral shades for
                  minimalist interiors, darker flooring for contrast and
                  decorative finishes for statement areas.
                </p>
              </div>

              <p>
                Flooring can also be coordinated with{" "}
                <Link to="/wall-panels" style={{ color: "var(--maroon)", fontWeight: "bold" }}>
                  wall panels in Qatar
                </Link>
                , kitchen cabinetry,{" "}
                <Link to="/doors" style={{ color: "var(--maroon)", fontWeight: "bold" }}>
                  doors
                </Link>{" "}
                and{" "}
                <Link to="/ceiling-solutions" style={{ color: "var(--maroon)", fontWeight: "bold" }}>
                  ceiling solutions
                </Link>{" "}
                to create a complete interior design concept.
              </p>
            </section>

            {/* CHOOSING */}
            <section id="choosing">
              <h2>How to Choose the Right Flooring in Qatar</h2>
              <p>
                Selecting flooring should begin with understanding the
                purpose of the space. Consider the following factors before
                making a final decision.
              </p>

              <div className="process">
                <div className="process-item">
                  <div className="process-number">01</div>
                  <h4>Understand the Space</h4>
                  <p>
                    Identify whether the flooring is for residential,
                    office, retail or hospitality use.
                  </p>
                </div>

                <div className="process-item">
                  <div className="process-number">02</div>
                  <h4>Consider Usage</h4>
                  <p>
                    Think about expected foot traffic and daily usage.
                  </p>
                </div>

                <div className="process-item">
                  <div className="process-number">03</div>
                  <h4>Choose the Style</h4>
                  <p>
                    Select colours, textures and patterns that match
                    the interior concept.
                  </p>
                </div>

                <div className="process-item">
                  <div className="process-number">04</div>
                  <h4>Plan Installation</h4>
                  <p>
                    Proper preparation and installation help achieve a
                    clean finished appearance.
                  </p>
                </div>
              </div>
            </section>

            {/* INSTALLATION */}
            <section id="installation">
              <h2>Professional Flooring Installation in Qatar</h2>
              <p>
                Professional installation is an important part of achieving
                a quality flooring finish. The process can include site
                assessment, surface preparation, material planning,
                installation and final inspection.
              </p>
              <p>
                A properly planned flooring installation can help improve
                the visual consistency of the space while ensuring the
                selected flooring works effectively with the surrounding
                interior elements.
              </p>
            </section>

            {/* MISTAKES */}
            <section id="mistakes">
              <h2>Common Flooring Mistakes to Avoid</h2>
              <ul style={{ paddingLeft: "20px", marginBottom: "35px", color: "#555" }}>
                <li>Choosing flooring only based on appearance.</li>
                <li>Ignoring the intended use of the space.</li>
                <li>Selecting colours without considering the overall interior design.</li>
                <li>Not planning for maintenance requirements.</li>
                <li>Overlooking proper surface preparation.</li>
                <li>Using the same flooring solution without considering different room requirements.</li>
              </ul>
            </section>

            {/* WHY ANAM */}
            <section id="anam">
              <h2>Why Choose ANAM Qatar?</h2>
              <p>
                ANAM Qatar provides interior and building material
                solutions for residential and commercial projects.
                Flooring can be coordinated with other interior elements
                to create a consistent and practical design.
              </p>

              <div className="benefit-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">✓</div>
                  <h4>Quality-Focused Solutions</h4>
                  <p>
                    Flooring options selected with project requirements
                    and design objectives in mind.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">◆</div>
                  <h4>Modern Designs</h4>
                  <p>
                    Contemporary styles suitable for modern interiors.
                  </p>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon">01</div>
                  <h4>Residential & Commercial</h4>
                  <p>
                    Solutions for homes, villas, offices, hospitality
                    and retail environments.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2>Frequently Asked Questions About Flooring in Qatar</h2>
              <div className="faq">
                {[
                  {
                    q: "Which is the best flooring in Qatar for homes and luxury villas?",
                    a: "For homes and villas in Qatar, SPC (Stone Plastic Composite) flooring and engineered hardwood parquet are the top choices. SPC flooring is 100% waterproof, highly scratch-resistant, and withstands Qatar's hot and humid climate without warping. ANAM Qatar provides premium European and German-certified flooring collections.",
                  },
                  {
                    q: "What types of flooring does ANAM Qatar supply and install in Doha?",
                    a: "ANAM Qatar supplies and installs luxury SPC flooring, natural wood parquet, luxury vinyl tiles (LVT), laminate flooring, commercial carpet tiles, and outdoor WPC decking across Doha and all Qatar municipalities.",
                  },
                  {
                    q: "Is SPC flooring suitable for Qatar's hot and humid climate?",
                    a: "Yes, SPC flooring is engineered specifically for extreme weather and temperature fluctuations. It features a limestone-polymer core that prevents expansion, contraction, and moisture damage, making it ideal for air-conditioned villas and offices in Qatar.",
                  },
                  {
                    q: "Which areas in Qatar does ANAM provide flooring delivery and installation to?",
                    a: "ANAM Qatar provides complete turnkey flooring supply and installation across Doha, Lusail, The Pearl-Qatar, West Bay, Al Wakrah, Al Khor, Al Rayyan, and all surrounding areas in Qatar, including free site inspections and consultations.",
                  },
                  {
                    q: "How much does flooring cost per square meter in Qatar?",
                    a: "Flooring prices in Qatar typically range from QAR 45 to QAR 350 per square meter depending on the material (vinyl, SPC, laminate, or solid parquet wood) and installation requirements. Contact ANAM Qatar at +974 3008 1007 for a free measurement and tailored quote.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`faq-item ${activeFaq === idx ? "active" : ""}`}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => toggleFaq(idx)}
                    >
                      {item.q}
                    </button>
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* =========================
               SIDEBAR
          ========================= */}
          <aside className="sidebar">
            <div className="sidebar-box">
              <h3>Table of Contents</h3>
              <ul className="toc">
                <li>
                  <a href="#flooring-qatar" onClick={(e) => handleScroll(e, "flooring-qatar")}>
                    01 &nbsp; Flooring in Qatar
                  </a>
                </li>
                <li>
                  <a href="#importance" onClick={(e) => handleScroll(e, "importance")}>
                    02 &nbsp; Why Flooring Is Important
                  </a>
                </li>
                <li>
                  <a href="#types" onClick={(e) => handleScroll(e, "types")}>
                    03 &nbsp; Types of Flooring
                  </a>
                </li>
                <li>
                  <a href="#residential" onClick={(e) => handleScroll(e, "residential")}>
                    04 &nbsp; Residential Flooring
                  </a>
                </li>
                <li>
                  <a href="#commercial" onClick={(e) => handleScroll(e, "commercial")}>
                    05 &nbsp; Commercial Flooring
                  </a>
                </li>
                <li>
                  <a href="#ideas" onClick={(e) => handleScroll(e, "ideas")}>
                    06 &nbsp; Modern Flooring Ideas
                  </a>
                </li>
                <li>
                  <a href="#choosing" onClick={(e) => handleScroll(e, "choosing")}>
                    07 &nbsp; How to Choose
                  </a>
                </li>
                <li>
                  <a href="#installation" onClick={(e) => handleScroll(e, "installation")}>
                    08 &nbsp; Installation
                  </a>
                </li>
                <li>
                  <a href="#mistakes" onClick={(e) => handleScroll(e, "mistakes")}>
                    09 &nbsp; Common Mistakes
                  </a>
                </li>
                <li>
                  <a href="#anam" onClick={(e) => handleScroll(e, "anam")}>
                    10 &nbsp; Why Choose ANAM
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={(e) => handleScroll(e, "faq")}>
                    11 &nbsp; FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="sidebar-cta">
              <small>PREMIUM FLOORING SOLUTIONS</small>
              <h3>Transform Your Space with the Right Flooring</h3>
              <p>
                Get expert guidance and explore suitable flooring
                options for your home or business in Qatar.
              </p>
              <Link to="/contact" className="btn btn-gold">
                Contact Us →
              </Link>
            </div>

            <div className="sidebar-box">
              <h3>Related Articles</h3>
              <Link to="/wall-panels" className="related-post">
                <img loading="lazy" decoding="async"
                  src="/images/wall-panels-qatar.webp"
                  alt="Wall Panels in Qatar"
                />
                <div>
                  <h4>Wall Panels in Qatar</h4>
                  <p>Modern wall solutions</p>
                </div>
              </Link>

              <Link to="/wall-panels" className="related-post">
                <img loading="lazy" decoding="async"
                  src="/images/wpc-wall-panels-qatar.webp"
                  alt="WPC Wall Panels Qatar"
                />
                <div>
                  <h4>WPC Wall Panels in Qatar</h4>
                  <p>Durable and stylish</p>
                </div>
              </Link>

              <Link to="/doors" className="related-post">
                <img loading="lazy" decoding="async"
                  src="/images/doors-qatar.webp"
                  alt="Doors in Qatar"
                />
                <div>
                  <h4>Doors in Qatar</h4>
                  <p>Premium door solutions</p>
                </div>
              </Link>

              <Link to="/kitchen-wardrobe" className="related-post">
                <img loading="lazy" decoding="async"
                  src="/images/kitchen-cabinets-qatar.webp"
                  alt="Kitchen Cabinets Qatar"
                />
                <div>
                  <h4>Kitchen Cabinets Qatar</h4>
                  <p>Modern kitchen solutions</p>
                </div>
              </Link>
            </div>

            <div className="sidebar-box">
              <h3>Popular Tags</h3>
              <div className="tags">
                <span>Flooring Qatar</span>
                <span>Flooring Doha</span>
                <span>Vinyl Flooring</span>
                <span>SPC Flooring</span>
                <span>Wooden Flooring</span>
                <span>Commercial Flooring</span>
                <span>Residential Flooring</span>
                <span>Modern Flooring</span>
                <span>Flooring Supplier</span>
                <span>ANAM Qatar</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* =========================
           FINAL CTA
      ========================= */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta-inner">
            <div>
              <h2>Looking for Flooring in Qatar?</h2>
              <p>
                Explore flooring solutions from ANAM Qatar and find
                the right option for your space, style and project
                requirements.
              </p>
            </div>
            <Link to="/contact" className="btn btn-gold">
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlooringSection;

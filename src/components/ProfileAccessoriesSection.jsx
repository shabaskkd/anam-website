import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileAccessoriesSection = () => {
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

  const faqItems = [
    {
      q: "What are profiles used for?",
      a: "Profiles are used for framing, structural support, edge finishing, transitions and decorative applications across furniture, interiors and construction.",
    },
    {
      q: "What are profile accessories?",
      a: "Profile accessories are components such as connectors, brackets, end caps, fasteners and fittings used to install and finish profile systems.",
    },
    {
      q: "Where are aluminium profiles used in Qatar?",
      a: "Aluminium profiles can be used for doors, windows, furniture, partitions, ceilings, frames and various interior applications.",
    },
    {
      q: "Can profiles be used for kitchen cabinets?",
      a: "Yes. Furniture profiles can be used for kitchen cabinet frames, edges, doors, shelving and other furniture components.",
    },
    {
      q: "Are profiles suitable for wardrobes?",
      a: "Yes. Profiles can be incorporated into wardrobe frames, sliding systems, door edges and finishing applications.",
    },
    {
      q: "How do I choose the right profile?",
      a: "The correct profile depends on the application, dimensions, material, load requirements, design and compatible accessories.",
    },
    {
      q: "Where can I find Profile & Accessories in Qatar?",
      a: "ANAM Qatar provides profile and accessory solutions for furniture, interiors, architectural and commercial applications across Qatar.",
    },
  ];

  return (
    <div className="profile-accessories-custom-page">
      <style>{`
        .profile-accessories-custom-page {
          font-family: Arial, Helvetica, sans-serif;
          background: #fff;
          color: #242424;
          line-height: 1.7;
        }

        .profile-accessories-custom-page * {
          box-sizing: border-box;
        }

        :root {
          --maroon: #5A0F2F;
          --maroon-dark: #3e0920;
          --gold: #c99a3e;
          --light: #f8f6f3;
          --soft: #fbfaf8;
          --border: #e7e1dc;
          --text: #555;
          --dark: #202020;
        }

        .profile-accessories-custom-page .container {
          width: min(1180px, 92%);
          margin: auto;
        }

        /* =================================
           BREADCRUMB
        ================================= */
        .profile-accessories-custom-page .breadcrumb {
          padding: 24px 0 14px;
          font-size: 13px;
          color: #777;
        }

        .profile-accessories-custom-page .breadcrumb a {
          color: #777;
          text-decoration: none;
        }

        .profile-accessories-custom-page .breadcrumb a:hover {
          color: var(--maroon);
        }

        .profile-accessories-custom-page .breadcrumb span {
          color: var(--maroon);
          font-weight: 600;
        }

        /* =================================
           HERO
        ================================= */
        .profile-accessories-custom-page .pa-hero {
          position: relative;
          min-height: 510px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #f5f1ed;
        }

        .profile-accessories-custom-page .pa-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, .98) 0%,
              rgba(255, 255, 255, .94) 38%,
              rgba(255, 255, 255, .38) 70%,
              rgba(255, 255, 255, .04) 100%
            ),
            url("/images/profile-accessories-qatar-hero.webp") center/cover no-repeat;
        }

        .profile-accessories-custom-page .pa-hero-content {
          position: relative;
          z-index: 2;
          width: 58%;
          padding: 75px 0;
        }

        .profile-accessories-custom-page .pa-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--maroon);
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .profile-accessories-custom-page .pa-hero h1 {
          font-size: 56px;
          line-height: 1.08;
          color: var(--dark);
          font-weight: 800;
          margin-bottom: 20px;
        }

        .profile-accessories-custom-page .pa-hero h1::after {
          content: "";
          display: block;
          width: 55px;
          height: 4px;
          background: var(--maroon);
          margin-top: 20px;
        }

        .profile-accessories-custom-page .pa-hero h2 {
          font-size: 24px;
          line-height: 1.35;
          max-width: 620px;
          margin-bottom: 20px;
          font-weight: 600;
          color: #242424;
        }

        .profile-accessories-custom-page .pa-hero p {
          max-width: 650px;
          color: #555;
          font-size: 16px;
        }

        .profile-accessories-custom-page .hero-points {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 25px;
        }

        .profile-accessories-custom-page .hero-points span {
          font-size: 13px;
          font-weight: 600;
          color: #444;
        }

        /* =================================
           MAIN LAYOUT
        ================================= */
        .profile-accessories-custom-page .main-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 310px;
          gap: 55px;
          padding: 65px 0 75px;
        }

        .profile-accessories-custom-page .article h2 {
          font-size: 31px;
          line-height: 1.25;
          color: var(--dark);
          margin: 0 0 18px;
          font-weight: 700;
        }

        .profile-accessories-custom-page .article h2::before {
          content: "";
          display: block;
          width: 42px;
          height: 3px;
          background: var(--maroon);
          margin-bottom: 12px;
        }

        .profile-accessories-custom-page .article h3 {
          font-size: 22px;
          color: #252525;
          margin: 35px 0 12px;
          font-weight: 700;
        }

        .profile-accessories-custom-page .article p {
          font-size: 15.5px;
          color: var(--text);
          margin-bottom: 18px;
        }

        .profile-accessories-custom-page .article strong {
          color: #333;
        }

        /* =================================
           CONTENT IMAGE
        ================================= */
        .profile-accessories-custom-page .content-image {
          width: 100%;
          height: 350px;
          object-fit: cover;
          display: block;
          border-radius: 12px;
          margin: 25px 0 50px;
        }

        /* =================================
           FEATURE CARDS
        ================================= */
        .profile-accessories-custom-page .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 30px 0 50px;
        }

        .profile-accessories-custom-page .feature-card {
          background: #faf9f7;
          border: 1px solid var(--border);
          border-radius: 9px;
          padding: 24px 20px;
          transition: .35s ease;
        }

        .profile-accessories-custom-page .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 35px rgba(0, 0, 0, .08);
        }

        .profile-accessories-custom-page .feature-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f2e8ed;
          color: var(--maroon);
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .profile-accessories-custom-page .feature-card h4 {
          font-size: 16px;
          margin-bottom: 7px;
          font-weight: 700;
          color: #222;
        }

        .profile-accessories-custom-page .feature-card p {
          font-size: 13px;
          margin: 0;
          color: #555;
        }

        /* =================================
           PROFILE CARDS
        ================================= */
        .profile-accessories-custom-page .profile-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin: 30px 0 50px;
        }

        .profile-accessories-custom-page .profile-card {
          border: 1px solid var(--border);
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          transition: .35s ease;
          display: flex;
          flex-direction: column;
        }

        .profile-accessories-custom-page .profile-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 16px 35px rgba(0, 0, 0, .10);
        }

        .profile-accessories-custom-page .profile-card img {
          width: 100%;
          height: 185px;
          object-fit: cover;
          display: block;
        }

        .profile-accessories-custom-page .profile-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .profile-accessories-custom-page .profile-content h4 {
          font-size: 18px;
          color: #222;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .profile-accessories-custom-page .profile-content p {
          font-size: 13px;
          margin: 0;
          color: #555;
          flex-grow: 1;
        }

        /* =================================
           APPLICATIONS
        ================================= */
        .profile-accessories-custom-page .application-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin: 30px 0 50px;
        }

        .profile-accessories-custom-page .application {
          text-align: center;
          padding: 20px 12px;
          background: #faf9f7;
          border: 1px solid var(--border);
          border-radius: 8px;
          transition: transform .3s ease;
        }

        .profile-accessories-custom-page .application:hover {
          transform: translateY(-4px);
        }

        .profile-accessories-custom-page .application-icon {
          width: 56px;
          height: 56px;
          border: 1px solid #ddd;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 13px;
          color: var(--maroon);
          font-size: 20px;
          background: #fff;
        }

        .profile-accessories-custom-page .application h4 {
          font-size: 16px;
          margin-bottom: 5px;
          font-weight: 700;
          color: #222;
        }

        .profile-accessories-custom-page .application p {
          font-size: 13px;
          color: #555;
          margin: 0;
        }

        /* =================================
           CHECKLIST
        ================================= */
        .profile-accessories-custom-page .check-list {
          list-style: none;
          margin: 25px 0 40px;
          padding: 0;
        }

        .profile-accessories-custom-page .check-list li {
          position: relative;
          padding: 11px 0 11px 32px;
          border-bottom: 1px solid #eee;
          font-size: 15px;
          color: #555;
        }

        .profile-accessories-custom-page .check-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 10px;
          width: 21px;
          height: 21px;
          border-radius: 50%;
          background: #f1e6eb;
          color: var(--maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
        }

        /* =================================
           INFO BOX
        ================================= */
        .profile-accessories-custom-page .info-box {
          background: #f7f3ef;
          border-left: 4px solid var(--maroon);
          padding: 25px;
          border-radius: 5px;
          margin: 30px 0;
        }

        .profile-accessories-custom-page .info-box h3 {
          margin-top: 0;
          margin-bottom: 10px;
          color: var(--maroon);
          font-size: 19px;
          font-weight: 700;
        }

        .profile-accessories-custom-page .info-box p {
          margin: 0;
          color: #444;
          font-size: 15px;
        }

        /* =================================
           PROCESS
        ================================= */
        .profile-accessories-custom-page .process {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin: 30px 0 50px;
        }

        .profile-accessories-custom-page .process-item {
          padding: 22px 18px;
          background: #faf9f7;
          border: 1px solid var(--border);
          border-radius: 8px;
        }

        .profile-accessories-custom-page .process-number {
          font-size: 28px;
          color: var(--maroon);
          font-weight: 800;
          margin-bottom: 8px;
          line-height: 1;
        }

        .profile-accessories-custom-page .process-item h4 {
          font-size: 16px;
          margin-bottom: 7px;
          font-weight: 700;
          color: #222;
        }

        .profile-accessories-custom-page .process-item p {
          font-size: 13px;
          margin: 0;
          color: #555;
        }

        /* =================================
           SIDEBAR
        ================================= */
        .profile-accessories-custom-page .sidebar {
          position: relative;
        }

        .profile-accessories-custom-page .sidebar-box {
          background: #faf9f7;
          border: 1px solid var(--border);
          padding: 25px;
          border-radius: 10px;
          margin-bottom: 25px;
        }

        .profile-accessories-custom-page .sidebar-box h3 {
          font-size: 18px;
          margin-bottom: 18px;
          font-weight: 700;
          color: #222;
          padding-bottom: 8px;
          border-bottom: 2px solid var(--maroon);
        }

        .profile-accessories-custom-page .toc {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .profile-accessories-custom-page .toc li {
          border-bottom: 1px solid #e5e1dc;
          padding: 9px 0;
        }

        .profile-accessories-custom-page .toc li:last-child {
          border-bottom: 0;
        }

        .profile-accessories-custom-page .toc a {
          color: #555;
          text-decoration: none;
          font-size: 13px;
          transition: .25s;
          display: block;
        }

        .profile-accessories-custom-page .toc a:hover {
          color: var(--maroon);
          padding-left: 3px;
        }

        /* =================================
           SIDEBAR CTA
        ================================= */
        .profile-accessories-custom-page .sidebar-cta {
          min-height: 320px;
          padding: 30px 25px;
          border-radius: 10px;
          overflow: hidden;
          color: #fff;
          background:
            linear-gradient(
              rgba(35, 16, 23, .80),
              rgba(35, 16, 23, .90)
            ),
            url("/images/profile-hardware-qatar.webp") center/cover;
          margin-bottom: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .profile-accessories-custom-page .sidebar-cta small {
          color: #d4ad61;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .profile-accessories-custom-page .sidebar-cta h3 {
          color: #fff;
          font-size: 26px;
          line-height: 1.2;
          margin: 12px 0;
          font-weight: 700;
        }

        .profile-accessories-custom-page .sidebar-cta p {
          color: #eee;
          font-size: 13px;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        /* =================================
           RELATED
        ================================= */
        .profile-accessories-custom-page .related-post {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-bottom: 16px;
          text-decoration: none;
          color: inherit;
        }

        .profile-accessories-custom-page .related-post:last-child {
          margin-bottom: 0;
        }

        .profile-accessories-custom-page .related-post img {
          width: 68px;
          height: 58px;
          border-radius: 6px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .profile-accessories-custom-page .related-post h4 {
          font-size: 13px;
          line-height: 1.3;
          margin-bottom: 3px;
          font-weight: 700;
          color: #222;
        }

        .profile-accessories-custom-page .related-post p {
          font-size: 11px;
          color: #777;
          margin: 0;
        }

        /* =================================
           TAGS
        ================================= */
        .profile-accessories-custom-page .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .profile-accessories-custom-page .tags span {
          background: #eee8e4;
          padding: 6px 9px;
          border-radius: 4px;
          color: #555;
          font-size: 11px;
        }

        /* =================================
           FAQ
        ================================= */
        .profile-accessories-custom-page .faq {
          margin-top: 25px;
        }

        .profile-accessories-custom-page .faq-item {
          border-bottom: 1px solid #ddd;
        }

        .profile-accessories-custom-page .faq-question {
          width: 100%;
          border: 0;
          background: none;
          text-align: left;
          padding: 19px 35px 19px 0;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          color: #252525;
        }

        .profile-accessories-custom-page .faq-question::after {
          content: "+";
          position: absolute;
          right: 5px;
          top: 15px;
          font-size: 22px;
          color: var(--maroon);
        }

        .profile-accessories-custom-page .faq-item.active .faq-question::after {
          content: "−";
        }

        .profile-accessories-custom-page .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height .4s ease;
        }

        .profile-accessories-custom-page .faq-item.active .faq-answer {
          max-height: 300px;
        }

        .profile-accessories-custom-page .faq-answer p {
          padding-bottom: 18px;
          font-size: 14px;
          color: #555;
          margin: 0;
        }

        /* =================================
           BUTTON
        ================================= */
        .profile-accessories-custom-page .btn {
          display: inline-block;
          padding: 12px 22px;
          border-radius: 4px;
          text-decoration: none;
          background: var(--maroon);
          color: #fff;
          font-size: 13px;
          font-weight: bold;
          transition: .3s;
          cursor: pointer;
        }

        .profile-accessories-custom-page .btn:hover {
          background: var(--maroon-dark);
          transform: translateY(-2px);
        }

        .profile-accessories-custom-page .btn-gold {
          background: var(--gold);
        }

        .profile-accessories-custom-page .btn-gold:hover {
          background: #a87b28;
        }

        /* =================================
           FINAL CTA
        ================================= */
        .profile-accessories-custom-page .final-cta {
          position: relative;
          overflow: hidden;
          padding: 75px 0;
          color: #fff;
          background:
            linear-gradient(
              rgba(38, 17, 25, .84),
              rgba(38, 17, 25, .92)
            ),
            url("/images/profile-accessories-qatar-cta.webp") center/cover;
          margin-top: 40px;
        }

        .profile-accessories-custom-page .final-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .profile-accessories-custom-page .final-cta h2 {
          color: #fff;
          font-size: 38px;
          line-height: 1.2;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .profile-accessories-custom-page .final-cta h2::before {
          content: "";
          display: block;
          width: 45px;
          height: 3px;
          background: var(--gold);
          margin-bottom: 15px;
        }

        .profile-accessories-custom-page .final-cta p {
          max-width: 680px;
          color: #eee;
          margin: 0;
        }

        /* =================================
           RESPONSIVE
        ================================= */
        @media(max-width: 1000px) {
          .profile-accessories-custom-page .pa-hero-content {
            width: 68%;
          }

          .profile-accessories-custom-page .pa-hero h1 {
            font-size: 45px;
          }

          .profile-accessories-custom-page .main-layout {
            grid-template-columns: 1fr;
          }

          .profile-accessories-custom-page .sidebar {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .profile-accessories-custom-page .sidebar-box {
            margin-bottom: 0;
          }

          .profile-accessories-custom-page .feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .profile-accessories-custom-page .profile-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .profile-accessories-custom-page .application-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .profile-accessories-custom-page .process {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(max-width: 700px) {
          .profile-accessories-custom-page .pa-hero {
            min-height: 630px;
          }

          .profile-accessories-custom-page .pa-hero::before {
            background:
              linear-gradient(
                180deg,
                rgba(255, 255, 255, .96) 0%,
                rgba(255, 255, 255, .91) 55%,
                rgba(255, 255, 255, .30) 100%
              ),
              url("/images/profile-accessories-qatar-hero.webp") center/cover no-repeat;
          }

          .profile-accessories-custom-page .pa-hero-content {
            width: 100%;
            padding: 55px 0;
          }

          .profile-accessories-custom-page .pa-hero h1 {
            font-size: 39px;
          }

          .profile-accessories-custom-page .pa-hero h2 {
            font-size: 20px;
          }

          .profile-accessories-custom-page .main-layout {
            padding: 45px 0 55px;
          }

          .profile-accessories-custom-page .article h2 {
            font-size: 27px;
          }

          .profile-accessories-custom-page .content-image {
            height: 240px;
          }

          .profile-accessories-custom-page .feature-grid,
          .profile-accessories-custom-page .profile-grid,
          .profile-accessories-custom-page .application-grid,
          .profile-accessories-custom-page .process {
            grid-template-columns: 1fr;
          }

          .profile-accessories-custom-page .sidebar {
            display: block;
          }

          .profile-accessories-custom-page .sidebar-box {
            margin-bottom: 20px;
          }

          .profile-accessories-custom-page .final-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .profile-accessories-custom-page .final-cta h2 {
            font-size: 30px;
          }
        }
      `}</style>

      {/* =================================
           HERO
      ================================= */}
      <section className="pa-hero">
        <div className="container">
          <div className="pa-hero-content">
            <span className="pa-label">PROFILES & ACCESSORIES</span>
            <h1>Profile & Accessories in Qatar</h1>
            <h2>
              Quality Profiles & Fittings for Furniture, Interiors & Construction
            </h2>
            <p>
              Explore quality Profile & Accessories in Qatar for furniture,
              interiors, construction and commercial projects. Discover
              practical profiles, fittings and accessories for modern
              residential and commercial applications.
            </p>
            <div className="hero-points">
              <span>✓ Quality-Focused Solutions</span>
              <span>✓ Modern Profile Systems</span>
              <span>✓ Residential & Commercial</span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================
           MAIN CONTENT
      ================================= */}
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> &nbsp;›&nbsp;
          <Link to="/products/doors">Products</Link> &nbsp;›&nbsp;
          <span>Profile & Accessories in Qatar</span>
        </div>

        <div className="main-layout">
          {/* =================================
               ARTICLE
          ================================= */}
          <main className="article">
            {/* INTRO */}
            <section id="profile-qatar">
              <h2>Premium Profile & Accessories in Qatar</h2>
              <p>
                Profiles and accessories are important components in
                modern furniture, interior design and construction
                projects. They provide structural support, finishing
                details and practical connections while also contributing
                to the overall appearance of a project.
              </p>
              <p>
                At <strong>ANAM Qatar</strong>, we provide{" "}
                <strong>Profile & Accessories in Qatar</strong> for
                residential, commercial and interior applications. Our
                solutions are suitable for furniture manufacturing,
                cabinetry, partitions, ceilings, doors, windows and other
                architectural requirements.
              </p>
              <p>
                From functional profiles to finishing accessories,
                selecting the right products can help achieve a clean,
                precise and professional result.
              </p>
            </section>

            <img loading="lazy" decoding="async"
              src="/images/profile-accessories-qatar.webp"
              alt="Profile and accessories in Qatar"
              className="content-image"
            />

            {/* WHAT ARE PROFILES */}
            <section id="what-are">
              <h2>What Are Profiles & Accessories?</h2>
              <p>
                Profiles are specially designed sections used to create
                edges, frames, supports, transitions and finishing details
                in different construction and interior applications.
              </p>
              <p>
                Accessories are complementary components used with
                profiles to connect, fix, protect or finish an installation.
              </p>

              <div className="feature-grid">
                <div className="feature-card">
                  <div className="feature-icon">01</div>
                  <h4>Structural Support</h4>
                  <p>
                    Profiles can provide support for different
                    furniture and interior systems.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">02</div>
                  <h4>Clean Finishing</h4>
                  <p>
                    Profile systems help create precise edges and
                    professional transitions.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">03</div>
                  <h4>Edge Protection</h4>
                  <p>
                    Edge profiles can help protect exposed furniture
                    and interior edges.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">04</div>
                  <h4>Accurate Installation</h4>
                  <p>
                    Suitable fittings can support accurate alignment
                    during installation.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">05</div>
                  <h4>Design Flexibility</h4>
                  <p>
                    Different profiles and finishes allow flexible
                    interior design solutions.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">06</div>
                  <h4>Professional Appearance</h4>
                  <p>
                    Well-selected profiles can add a refined finish to
                    furniture and interiors.
                  </p>
                </div>
              </div>
            </section>

            {/* TYPES */}
            <section id="types">
              <h2>Types of Profiles & Accessories in Qatar</h2>
              <p>
                Different projects require different profile systems and
                accessories. The right selection depends on the
                application, material, dimensions, design and installation
                requirements.
              </p>

              <div className="profile-grid">
                <div className="profile-card">
                  <img loading="lazy" decoding="async"
                    src="/images/aluminium-profiles-qatar.webp"
                    alt="Aluminium profiles in Qatar"
                  />
                  <div className="profile-content">
                    <h4>Aluminium Profiles</h4>
                    <p>
                      Aluminium profiles can be used for frames,
                      furniture, partitions, doors, windows and
                      modern interior applications.
                    </p>
                  </div>
                </div>

                <div className="profile-card">
                  <img loading="lazy" decoding="async"
                    src="/images/furniture-profiles-qatar.webp"
                    alt="Furniture profiles in Qatar"
                  />
                  <div className="profile-content">
                    <h4>Furniture Profiles</h4>
                    <p>
                      Furniture profiles can provide neat edges and
                      refined finishes for cabinets, wardrobes,
                      kitchens and custom furniture.
                    </p>
                  </div>
                </div>

                <div className="profile-card">
                  <img loading="lazy" decoding="async"
                    src="/images/decorative-profiles-qatar.webp"
                    alt="Decorative profiles in Qatar"
                  />
                  <div className="profile-content">
                    <h4>Decorative Profiles</h4>
                    <p>
                      Decorative profiles can add visual details to
                      walls, ceilings, furniture and interior
                      features.
                    </p>
                  </div>
                </div>

                <div className="profile-card">
                  <img loading="lazy" decoding="async"
                    src="/images/edge-profiles-qatar.webp"
                    alt="Edge profiles in Qatar"
                  />
                  <div className="profile-content">
                    <h4>Edge Profiles</h4>
                    <p>
                      Edge profiles provide finishing and protection
                      along exposed edges and transitions.
                    </p>
                  </div>
                </div>

                <div className="profile-card">
                  <img loading="lazy" decoding="async"
                    src="/images/construction-profiles-qatar.webp"
                    alt="Construction profiles in Qatar"
                  />
                  <div className="profile-content">
                    <h4>Construction Profiles</h4>
                    <p>
                      Construction profiles can support different
                      building and interior applications.
                    </p>
                  </div>
                </div>

                <div className="profile-card">
                  <img loading="lazy" decoding="async"
                    src="/images/profile-fittings-qatar.webp"
                    alt="Profile fittings in Qatar"
                  />
                  <div className="profile-content">
                    <h4>Profile Fittings & Accessories</h4>
                    <p>
                      Connectors, brackets, end caps, fasteners and
                      other components support installation and
                      finishing.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ALUMINIUM */}
            <section id="aluminium">
              <h2>Aluminium Profiles in Qatar</h2>
              <p>
                Aluminium profiles are widely used in modern construction
                and interior applications because of their clean
                appearance and versatility.
              </p>

              <ul className="check-list">
                <li>Aluminium doors</li>
                <li>Aluminium windows</li>
                <li>Furniture frames</li>
                <li>Partitions</li>
                <li>Ceiling systems</li>
                <li>Display systems</li>
                <li>Cabinet structures</li>
                <li>Interior framing</li>
                <li>Commercial interiors</li>
              </ul>

              <div className="info-box">
                <h3>Selecting the Right Aluminium Profile</h3>
                <p>
                  The appropriate profile should be selected according
                  to the application, dimensions, installation method
                  and overall design requirements of the project.
                </p>
              </div>
            </section>

            {/* FURNITURE */}
            <section id="furniture">
              <h2>Furniture Profiles & Accessories in Qatar</h2>
              <p>
                Furniture profiles can provide both functionality and
                visual refinement to modern furniture.
              </p>

              <div className="application-grid">
                <div className="application">
                  <div className="application-icon">▣</div>
                  <h4>Kitchen Cabinets</h4>
                  <p>Profiles for cabinet frames, edges and finishing.</p>
                </div>

                <div className="application">
                  <div className="application-icon">□</div>
                  <h4>Wardrobes</h4>
                  <p>Profile solutions for wardrobe systems and doors.</p>
                </div>

                <div className="application">
                  <div className="application-icon">◇</div>
                  <h4>TV Units</h4>
                  <p>Profiles for modern furniture and display units.</p>
                </div>

                <div className="application">
                  <div className="application-icon">▤</div>
                  <h4>Office Furniture</h4>
                  <p>Functional profiles for modern workspaces.</p>
                </div>
              </div>
            </section>

            {/* KITCHEN & WARDROBE */}
            <section id="kitchen-wardrobe">
              <h2>Profiles for Kitchen & Wardrobe Projects</h2>
              <p>
                Modern kitchens and wardrobes often require carefully
                selected profiles and accessories for clean edges, frames
                and finishing.
              </p>

              <h3>Kitchen Applications</h3>
              <ul className="check-list">
                <li>Kitchen cabinet doors</li>
                <li>Drawer systems</li>
                <li>Cabinet edges</li>
                <li>Open shelving</li>
                <li>Aluminium frames</li>
                <li>Decorative elements</li>
              </ul>

              <h3>Wardrobe Applications</h3>
              <ul className="check-list">
                <li>Wardrobe frames</li>
                <li>Sliding systems</li>
                <li>Door edges</li>
                <li>Internal structures</li>
                <li>Handles and finishing elements</li>
              </ul>
            </section>

            {/* DOORS & WINDOWS */}
            <section id="doors-windows">
              <h2>Profiles for Doors & Windows</h2>
              <p>
                Profiles are an important component of many door and window
                systems. They can contribute to frame construction, door
                edges, window framing and finishing details.
              </p>

              <div className="feature-grid">
                <div className="feature-card">
                  <div className="feature-icon">01</div>
                  <h4>Frame Construction</h4>
                  <p>Profile systems can form important framing components.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">02</div>
                  <h4>Door Edges</h4>
                  <p>Profiles can provide clean and protected door edges.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">03</div>
                  <h4>Window Framing</h4>
                  <p>Profile systems support different window designs.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">04</div>
                  <h4>Sliding Systems</h4>
                  <p>Profiles can be integrated into sliding applications.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">05</div>
                  <h4>Finishing Details</h4>
                  <p>
                    Profiles can provide refined finishing around
                    architectural elements.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">06</div>
                  <h4>Hardware Integration</h4>
                  <p>
                    Compatible accessories can support installation
                    and functionality.
                  </p>
                </div>
              </div>
            </section>

            {/* INTERIOR */}
            <section id="interior">
              <h2>Profiles for Interior Projects</h2>
              <p>
                Profiles can be incorporated into a variety of interior
                applications to provide clean transitions, framing and
                finishing details.
              </p>

              <div className="application-grid">
                <div className="application">
                  <div className="application-icon">▥</div>
                  <h4>Wall Applications</h4>
                  <p>Edge protection, transitions and decorative wall details.</p>
                </div>

                <div className="application">
                  <div className="application-icon">⌁</div>
                  <h4>Ceiling Systems</h4>
                  <p>Framing, transitions and finishing details for ceiling installations.</p>
                </div>

                <div className="application">
                  <div className="application-icon">▤</div>
                  <h4>Partitions</h4>
                  <p>Profile systems for framing and finishing partition installations.</p>
                </div>

                <div className="application">
                  <div className="application-icon">◇</div>
                  <h4>Furniture</h4>
                  <p>Profiles for cabinets, wardrobes, shelving and custom furniture.</p>
                </div>
              </div>
            </section>

            {/* IMPORTANCE */}
            <section id="importance">
              <h2>Why Are Profiles & Accessories Important?</h2>
              <p>
                Choosing the correct profiles and accessories can influence
                the quality, functionality and appearance of the finished
                project.
              </p>

              <div className="feature-grid">
                <div className="feature-card">
                  <div className="feature-icon">✓</div>
                  <h4>Clean Finishing</h4>
                  <p>Profiles help create precise edges and professional transitions.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">✓</div>
                  <h4>Structural Support</h4>
                  <p>Suitable profiles can provide support for furniture and interior systems.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">✓</div>
                  <h4>Better Alignment</h4>
                  <p>Proper fittings can help maintain accurate positioning during installation.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">✓</div>
                  <h4>Edge Protection</h4>
                  <p>Edge profiles can help protect exposed edges from everyday wear.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">✓</div>
                  <h4>Design Flexibility</h4>
                  <p>Different profile shapes, materials and finishes offer design flexibility.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">✓</div>
                  <h4>Professional Appearance</h4>
                  <p>Well-selected profiles provide a refined finish to furniture and interior installations.</p>
                </div>
              </div>
            </section>

            {/* HOW TO CHOOSE */}
            <section id="choosing">
              <h2>How to Choose Profile & Accessories in Qatar</h2>
              <p>
                Before selecting a profile system, consider the specific
                requirements of your project.
              </p>

              <div className="process">
                <div className="process-item">
                  <div className="process-number">01</div>
                  <h4>Identify the Application</h4>
                  <p>
                    Determine whether the profile is for furniture,
                    doors, windows, ceilings or partitions.
                  </p>
                </div>

                <div className="process-item">
                  <div className="process-number">02</div>
                  <h4>Select the Material</h4>
                  <p>
                    Choose the appropriate material according to
                    functional and design requirements.
                  </p>
                </div>

                <div className="process-item">
                  <div className="process-number">03</div>
                  <h4>Check Dimensions</h4>
                  <p>
                    Ensure the profile dimensions match the intended
                    installation.
                  </p>
                </div>

                <div className="process-item">
                  <div className="process-number">04</div>
                  <h4>Match Accessories</h4>
                  <p>
                    Select compatible connectors, brackets, end caps
                    and other fittings.
                  </p>
                </div>
              </div>
            </section>

            {/* COMMERCIAL */}
            <section id="commercial">
              <h2>Profile Accessories for Commercial Projects</h2>
              <p>
                Commercial projects often require profiles and accessories
                for furniture, partitions, display systems and
                architectural finishing.
              </p>

              <div className="application-grid">
                <div className="application">
                  <div className="application-icon">▦</div>
                  <h4>Offices</h4>
                  <p>Profiles for workstations and office furniture.</p>
                </div>

                <div className="application">
                  <div className="application-icon">▤</div>
                  <h4>Hotels</h4>
                  <p>Profile solutions for hospitality interiors.</p>
                </div>

                <div className="application">
                  <div className="application-icon">▥</div>
                  <h4>Retail Stores</h4>
                  <p>Profiles for display and storage systems.</p>
                </div>

                <div className="application">
                  <div className="application-icon">◇</div>
                  <h4>Showrooms</h4>
                  <p>Profile systems for modern display areas.</p>
                </div>
              </div>
            </section>

            {/* RESIDENTIAL */}
            <section id="residential">
              <h2>Profile & Accessories for Residential Projects</h2>
              <p>
                Profiles can add practical and decorative value to
                residential interiors and furniture systems.
              </p>

              <div className="feature-grid">
                <div className="feature-card">
                  <div className="feature-icon">01</div>
                  <h4>Villas</h4>
                  <p>Profile solutions for modern villa interiors.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">02</div>
                  <h4>Apartments</h4>
                  <p>Practical profile applications for compact residential spaces.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">03</div>
                  <h4>Kitchens</h4>
                  <p>Profiles for cabinets, frames and finishing.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">04</div>
                  <h4>Wardrobes</h4>
                  <p>Profile systems for wardrobe structures and doors.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">05</div>
                  <h4>Living Rooms</h4>
                  <p>Profiles for TV units, storage and decorative furniture.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">06</div>
                  <h4>Home Offices</h4>
                  <p>Profile solutions for desks, shelving and storage.</p>
                </div>
              </div>
            </section>

            {/* SUPPLIER */}
            <section id="supplier">
              <h2>Profile & Accessories Supplier in Qatar</h2>
              <p>
                Finding a reliable{" "}
                <strong>Profile & Accessories Supplier in Qatar</strong> is
                important for achieving consistent quality across furniture,
                interior and construction projects.
              </p>
              <p>
                The selected profiles should match the project requirements,
                while accessories should be compatible with the chosen
                profile system.
              </p>
              <p>
                ANAM Qatar provides profile and accessory solutions for
                different residential, commercial and interior applications
                across Qatar.
              </p>

              <div className="info-box">
                <h3>Project-Specific Profile Solutions</h3>
                <p>
                  Whether you need profiles for furniture, kitchens,
                  wardrobes, partitions, ceilings, doors or windows,
                  choosing the right system is essential for achieving
                  the desired result.
                </p>
              </div>
            </section>

            {/* WHY ANAM */}
            <section id="anam">
              <h2>Why Choose ANAM Qatar?</h2>
              <p>
                ANAM Qatar provides interior and building material
                solutions for residential and commercial projects.
                Our profile and accessory solutions can support different
                furniture, architectural and interior requirements.
              </p>

              <div className="feature-grid">
                <div className="feature-card">
                  <div className="feature-icon">01</div>
                  <h4>Project-Focused Solutions</h4>
                  <p>
                    Products can be selected according to individual
                    project requirements.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">02</div>
                  <h4>Wide Applications</h4>
                  <p>
                    Suitable for furniture, kitchens, wardrobes,
                    doors, windows and interiors.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">03</div>
                  <h4>Modern Designs</h4>
                  <p>
                    Profile systems can complement contemporary
                    architectural and interior designs.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">04</div>
                  <h4>Practical Accessories</h4>
                  <p>
                    Compatible fittings can support installation and
                    professional finishing.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">05</div>
                  <h4>Interior Solutions</h4>
                  <p>
                    Profiles can be coordinated with other ANAM Qatar
                    interior products.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">06</div>
                  <h4>Residential & Commercial</h4>
                  <p>
                    Solutions for homes, villas, offices and
                    commercial environments.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2>
                Frequently Asked Questions About Profile & Accessories in Qatar
              </h2>
              <div className="faq">
                {faqItems.map((item, idx) => (
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

          {/* =================================
               SIDEBAR
          ================================= */}
          <aside className="sidebar">
            {/* TABLE OF CONTENTS */}
            <div className="sidebar-box">
              <h3>Table of Contents</h3>
              <ul className="toc">
                <li>
                  <a href="#profile-qatar" onClick={(e) => handleScroll(e, "profile-qatar")}>
                    01 &nbsp; Profile & Accessories
                  </a>
                </li>
                <li>
                  <a href="#what-are" onClick={(e) => handleScroll(e, "what-are")}>
                    02 &nbsp; What Are Profiles?
                  </a>
                </li>
                <li>
                  <a href="#types" onClick={(e) => handleScroll(e, "types")}>
                    03 &nbsp; Types of Profiles
                  </a>
                </li>
                <li>
                  <a href="#aluminium" onClick={(e) => handleScroll(e, "aluminium")}>
                    04 &nbsp; Aluminium Profiles
                  </a>
                </li>
                <li>
                  <a href="#furniture" onClick={(e) => handleScroll(e, "furniture")}>
                    05 &nbsp; Furniture Profiles
                  </a>
                </li>
                <li>
                  <a href="#kitchen-wardrobe" onClick={(e) => handleScroll(e, "kitchen-wardrobe")}>
                    06 &nbsp; Kitchen & Wardrobe
                  </a>
                </li>
                <li>
                  <a href="#doors-windows" onClick={(e) => handleScroll(e, "doors-windows")}>
                    07 &nbsp; Doors & Windows
                  </a>
                </li>
                <li>
                  <a href="#interior" onClick={(e) => handleScroll(e, "interior")}>
                    08 &nbsp; Interior Projects
                  </a>
                </li>
                <li>
                  <a href="#importance" onClick={(e) => handleScroll(e, "importance")}>
                    09 &nbsp; Why Profiles Matter
                  </a>
                </li>
                <li>
                  <a href="#choosing" onClick={(e) => handleScroll(e, "choosing")}>
                    10 &nbsp; How to Choose
                  </a>
                </li>
                <li>
                  <a href="#commercial" onClick={(e) => handleScroll(e, "commercial")}>
                    11 &nbsp; Commercial Projects
                  </a>
                </li>
                <li>
                  <a href="#residential" onClick={(e) => handleScroll(e, "residential")}>
                    12 &nbsp; Residential Projects
                  </a>
                </li>
                <li>
                  <a href="#supplier" onClick={(e) => handleScroll(e, "supplier")}>
                    13 &nbsp; Supplier in Qatar
                  </a>
                </li>
                <li>
                  <a href="#anam" onClick={(e) => handleScroll(e, "anam")}>
                    14 &nbsp; Why Choose ANAM
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={(e) => handleScroll(e, "faq")}>
                    15 &nbsp; FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* SIDEBAR CTA */}
            <div className="sidebar-cta">
              <div>
                <small>PROFILE & ACCESSORIES</small>
                <h3>Find the Right Profile for Your Project</h3>
                <p>
                  Explore profile systems and accessories for furniture,
                  kitchens, wardrobes, interiors and commercial projects
                  across Qatar.
                </p>
              </div>
              <Link to="/contact" className="btn btn-gold">
                Get a Quote →
              </Link>
            </div>

            {/* RELATED PRODUCTS */}
            <div className="sidebar-box">
              <h3>Related Products</h3>
              <Link to="/products/carpentry-accessories" className="related-post">
                <img loading="lazy" decoding="async"
                  src="/images/carpentry-accessories-qatar.webp"
                  alt="Carpentry Accessories Qatar"
                />
                <div>
                  <h4>Carpentry Accessories Qatar</h4>
                  <p>Furniture hardware</p>
                </div>
              </Link>

              <Link to="/kitchen-wardrobe" className="related-post">
                <img loading="lazy" decoding="async"
                  src="/images/kitchen-cabinets-qatar.webp"
                  alt="Premium Kitchen Cabinets Qatar"
                />
                <div>
                  <h4>Premium Kitchen Cabinets Qatar</h4>
                  <p>Modern kitchen solutions</p>
                </div>
              </Link>

              <Link to="/doors" className="related-post">
                <img loading="lazy" decoding="async"
                  src="/images/doors-qatar.webp"
                  alt="Doors in Qatar"
                />
                <div>
                  <h4>Doors in Qatar</h4>
                  <p>Door solutions</p>
                </div>
              </Link>

              <Link to="/windows" className="related-post">
                <img loading="lazy" decoding="async"
                  src="/images/windows-qatar.webp"
                  alt="Windows Providers in Doha Qatar"
                />
                <div>
                  <h4>Windows in Qatar</h4>
                  <p>Modern window solutions</p>
                </div>
              </Link>
            </div>

            {/* TAGS */}
            <div className="sidebar-box">
              <h3>Popular Tags</h3>
              <div className="tags">
                <span>Profile Qatar</span>
                <span>Aluminium Profiles</span>
                <span>Furniture Profiles</span>
                <span>Profile Supplier</span>
                <span>Profile Accessories</span>
                <span>Furniture Accessories</span>
                <span>Interior Profiles</span>
                <span>Construction Profiles</span>
                <span>Profile Fittings</span>
                <span>ANAM Qatar</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* =================================
           FINAL CTA
      ================================= */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta-inner">
            <div>
              <h2>Looking for Profile & Accessories in Qatar?</h2>
              <p>
                Explore quality profiles, fittings and accessories from
                ANAM Qatar for furniture, kitchens, wardrobes, interiors,
                doors, windows and commercial projects.
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

export default ProfileAccessoriesSection;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const miniFeatures = [
  { icon: "✓", label: "Premium Quality" },
  { icon: "⚒", label: "Expert Installation" },
  { icon: "◉", label: "Reliable Support" },
  { icon: "✦", label: "Trusted Company" },
];

const benefitsStrip = [
  {
    icon: "✦",
    title: "Modern Designs",
    desc: "Stylish ceilings for every space and need",
  },
  {
    icon: "◆",
    title: "Wide Range",
    desc: "Multiple materials and finishes",
  },
  {
    icon: "◖",
    title: "Acoustic Comfort",
    desc: "Improve sound quality and reduce noise",
  },
  {
    icon: "♨",
    title: "Fire & Moisture Resistant",
    desc: "Built for safety and long-lasting performance",
  },
  {
    icon: "✓",
    title: "Low Maintenance",
    desc: "Easy to clean and maintain",
  },
  {
    icon: "★",
    title: "Trusted Company",
    desc: "Serving homes and businesses in Qatar",
  },
];

const ceilingTypes = [
  {
    title: "Acoustic Ceilings",
    desc: "Designed to improve acoustic comfort, reduce unwanted noise and create more comfortable interior spaces.",
    image: "/images/acoustic-ceilings-qatar.webp",
    alt: "Acoustic Ceilings in Qatar",
    link: "/products/ceiling-solutions/acoustic-ceiling",
  },
  {
    title: "Aluminium Ceilings",
    desc: "Modern and durable ceiling systems for commercial buildings and contemporary interiors.",
    image: "/images/aluminium-ceilings-qatar.webp",
    alt: "Aluminium Ceilings in Qatar",
    link: "/products/ceiling-solutions/aluminium-ceiling",
  },
  {
    title: "Wooden Ceilings",
    desc: "Add warmth, texture and elegance to residential, hospitality and premium interior spaces.",
    image: "/images/wooden-ceilings-qatar.webp",
    alt: "Wooden Ceilings in Qatar",
    link: "/products/ceiling-solutions/wooden-ceiling",
  },
  {
    title: "Mineral Fibre Ceilings",
    desc: "Practical ceiling systems suitable for offices, retail environments and commercial spaces.",
    image: "/images/mineral-fibre-ceilings-qatar.webp",
    alt: "Mineral Fibre Ceilings in Qatar",
    link: "/products/ceiling-solutions/mineral-fibre-fibreglass-ceiling",
  },
  {
    title: "Fibreglass Ceilings",
    desc: "Durable and practical ceiling solutions for different interior and commercial environments.",
    image: "/images/fibreglass-ceilings-qatar.webp",
    alt: "Fibreglass Ceilings in Qatar",
    link: "/products/ceiling-solutions/mineral-fibre-fibreglass-ceiling",
  },
  {
    title: "PVC Gypsum Ceilings",
    desc: "Clean and modern ceiling finishes for residential and commercial interior applications.",
    image: "/images/pvc-gypsum-ceilings-qatar.webp",
    alt: "PVC Gypsum Ceilings in Qatar",
    link: "/products/ceiling-solutions/60x60-pvc-gypsum-ceiling",
  },
];

const whyChooseCards = [
  {
    icon: "♙",
    title: "Expert Team",
    desc: "Skilled professionals with project experience.",
  },
  {
    icon: "★",
    title: "Quality Materials",
    desc: "Quality materials selected for lasting results.",
  },
  {
    icon: "◆",
    title: "Custom Solutions",
    desc: "Ceiling solutions tailored to your requirements.",
  },
  {
    icon: "◷",
    title: "Timely Delivery",
    desc: "Project completion with attention to schedules.",
  },
  {
    icon: "$",
    title: "Competitive Pricing",
    desc: "Practical solutions at competitive prices.",
  },
  {
    icon: "◉",
    title: "After Sales Support",
    desc: "Reliable support after project completion.",
  },
];

const applications = [
  {
    title: "Commercial",
    desc: "Offices, buildings and commercial spaces",
    image: "/images/commercial-ceilings-qatar.webp",
    alt: "Commercial Ceiling Solutions Qatar",
  },
  {
    title: "Residential",
    desc: "Villas, apartments and modern homes",
    image: "/images/residential-ceilings-qatar.webp",
    alt: "Residential Ceiling Solutions Qatar",
  },
  {
    title: "Retail",
    desc: "Stores, showrooms and retail interiors",
    image: "/images/retail-ceilings-qatar.webp",
    alt: "Retail Ceiling Solutions Qatar",
  },
  {
    title: "Hospitality",
    desc: "Hotels, restaurants and hospitality spaces",
    image: "/images/hospitality-ceilings-qatar.webp",
    alt: "Hospitality Ceiling Solutions Qatar",
  },
];

const performanceBenefits = [
  {
    icon: "◖",
    title: "Acoustic Comfort",
    desc: "Help manage unwanted sound and improve acoustic comfort.",
  },
  {
    icon: "♨",
    title: "Fire Performance",
    desc: "Suitable ceiling options are available for safety-focused projects.",
  },
  {
    icon: "◆",
    title: "Durability",
    desc: "Ceiling systems designed for long-term interior performance.",
  },
  {
    icon: "✓",
    title: "Easy Maintenance",
    desc: "Practical solutions designed for easier maintenance.",
  },
  {
    icon: "✦",
    title: "Modern Appearance",
    desc: "Finishes that complement contemporary interiors.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "Understand your space, requirements and goals.",
  },
  {
    step: "02",
    title: "Planning & Design",
    desc: "Select suitable materials, finishes and design options.",
  },
  {
    step: "03",
    title: "Installation",
    desc: "Professional installation for a clean final finish.",
  },
  {
    step: "04",
    title: "Quality Check",
    desc: "Review the completed work against project requirements.",
  },
  {
    step: "05",
    title: "Handover",
    desc: "Complete the project and hand over the finished space.",
  },
];

const faqs = [
  {
    q: "What ceiling solutions does ANAM provide in Qatar?",
    a: "ANAM provides acoustic ceilings, aluminium ceilings, wooden ceilings, mineral fibre ceilings, fibreglass ceilings and PVC gypsum ceiling solutions for suitable residential and commercial projects.",
  },
  {
    q: "Where can ceiling solutions be used?",
    a: "Ceiling systems can be used in villas, apartments, offices, hotels, restaurants, retail stores, showrooms, reception areas and other residential and commercial spaces.",
  },
  {
    q: "Are acoustic ceilings suitable for offices?",
    a: "Yes. Acoustic ceiling systems can be suitable for offices, meeting rooms, conference rooms and other spaces where sound management and acoustic comfort are important.",
  },
  {
    q: "Are wooden ceilings suitable for villas?",
    a: "Wooden ceilings can be used in villas and residential interiors to create a warm, textured and premium architectural appearance.",
  },
  {
    q: "Do you provide PVC gypsum ceilings in Qatar?",
    a: "Yes. PVC gypsum ceiling solutions are available for suitable residential and commercial interior applications.",
  },
  {
    q: "Do you provide ceiling solutions across Qatar?",
    a: "ANAM provides ceiling solutions for suitable projects across Qatar, depending on project requirements and location.",
  },
];

const CeilingSolutionsSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".ceiling-reveal");

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

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="anam-ceiling-page">
      <style>{`
        /* =========================================================
           GLOBAL
        ========================================================= */

        .anam-ceiling-page {
            --maroon: #5A0F2F;
            --dark-maroon: #420820;
            --light-maroon: #7A294B;
            --black: #151515;
            --text: #333333;
            --muted: #707070;
            --light: #faf7f8;
            --border: #e9e3e5;
            --white: #ffffff;

            font-family: Arial, Helvetica, sans-serif;
            color: var(--black);
            background: #fff;
            line-height: 1.6;
            overflow: hidden;
        }

        .anam-ceiling-page *,
        .anam-ceiling-page *::before,
        .anam-ceiling-page *::after {
            box-sizing: border-box;
        }

        .anam-ceiling-page img {
            width: 100%;
            display: block;
        }

        .anam-ceiling-page a {
            text-decoration: none;
        }

        .ceiling-container {
            width: min(1200px, 92%);
            margin: auto;
        }

        /* =========================================================
           HERO - INNER PAGE
        ========================================================= */

        .ceiling-hero {
            display: grid;
            grid-template-columns: 44% 56%;
            min-height: 570px;
            background: #faf7f5;
        }

        .ceiling-hero-content {
            display: flex;
            align-items: center;
            padding: 70px 9%;
        }

        .ceiling-hero-inner {
            max-width: 560px;
        }

        .ceiling-eyebrow {
            color: var(--maroon);
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.8px;
            margin-bottom: 16px;
        }

        .ceiling-hero h1 {
            font-size: clamp(42px, 5vw, 68px);
            line-height: .98;
            letter-spacing: -2px;
            margin: 0 0 24px;
            font-weight: 700;
        }

        .ceiling-hero h1 span {
            color: var(--maroon);
        }

        .ceiling-hero-description {
            color: #555;
            font-size: 15px;
            max-width: 510px;
            margin: 0 0 28px;
        }

        .ceiling-hero-description strong {
            color: var(--maroon);
        }

        .ceiling-hero-features {
            display: flex;
            flex-wrap: wrap;
            gap: 18px;
            margin-bottom: 30px;
        }

        .ceiling-mini-feature {
            display: flex;
            align-items: center;
            gap: 7px;
            font-size: 11px;
            font-weight: 600;
        }

        .ceiling-mini-icon {
            width: 27px;
            height: 27px;
            border: 1px solid var(--maroon);
            color: var(--maroon);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .ceiling-button {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: var(--maroon);
            color: #fff;
            padding: 15px 25px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            transition: .4s ease;
        }

        .ceiling-button:hover {
            background: var(--dark-maroon);
            transform: translateY(-4px);
            box-shadow: 0 12px 28px rgba(90,15,47,.25);
        }

        .ceiling-hero-image {
            min-height: 570px;
            overflow: hidden;
        }

        .ceiling-hero-image img {
            height: 100%;
            object-fit: cover;
            transition: transform 1s ease;
        }

        .ceiling-hero-image:hover img {
            transform: scale(1.04);
        }

        /* =========================================================
           QUICK BENEFITS
        ========================================================= */

        .ceiling-benefits-strip {
            background: #fff;
            border-bottom: 1px solid var(--border);
        }

        .ceiling-benefits-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
        }

        .ceiling-benefit {
            text-align: center;
            padding: 25px 12px;
            border-right: 1px solid var(--border);
            transition: .4s ease;
        }

        .ceiling-benefit:last-child {
            border-right: none;
        }

        .ceiling-benefit:hover {
            transform: translateY(-6px);
        }

        .ceiling-benefit-icon {
            width: 47px;
            height: 47px;
            margin: 0 auto 10px;
            border: 1px solid var(--maroon);
            color: var(--maroon);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 19px;
        }

        .ceiling-benefit h3 {
            font-size: 11px;
            text-transform: uppercase;
            margin: 0 0 5px;
        }

        .ceiling-benefit p {
            color: var(--muted);
            font-size: 10px;
            margin: 0;
        }

        /* =========================================================
           COMMON SECTION
        ========================================================= */

        .ceiling-section {
            padding: 80px 0;
        }

        .ceiling-section-title {
            text-align: center;
            margin-bottom: 45px;
        }

        .ceiling-label {
            color: var(--maroon);
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 8px;
        }

        .ceiling-label::before,
        .ceiling-label::after {
            content: "";
            display: inline-block;
            width: 30px;
            height: 2px;
            background: var(--maroon);
            vertical-align: middle;
            margin: 0 10px;
        }

        .ceiling-section-title h2 {
            font-size: clamp(30px, 4vw, 44px);
            line-height: 1.1;
            margin: 0 0 12px;
        }

        .ceiling-section-title p {
            max-width: 750px;
            margin: auto;
            color: var(--muted);
            font-size: 14px;
        }

        /* =========================================================
           CEILING TYPES
        ========================================================= */

        .ceiling-types {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .ceiling-type-card {
            background: #fff;
            border: 1px solid var(--border);
            box-shadow: 0 7px 25px rgba(0,0,0,.05);
            overflow: hidden;
            transition: .45s ease;
        }

        .ceiling-type-card:hover {
            transform: translateY(-9px);
            box-shadow: 0 18px 40px rgba(90,15,47,.13);
        }

        .ceiling-type-image {
            height: 235px;
            overflow: hidden;
        }

        .ceiling-type-image img {
            height: 100%;
            object-fit: cover;
            transition: .7s ease;
        }

        .ceiling-type-card:hover .ceiling-type-image img {
            transform: scale(1.08);
        }

        .ceiling-type-content {
            padding: 23px 20px 25px;
            text-align: center;
        }

        .ceiling-type-content h3 {
            font-size: 16px;
            margin: 0 0 10px;
        }

        .ceiling-type-content p {
            color: var(--muted);
            font-size: 12px;
            min-height: 62px;
            margin: 0;
        }

        .ceiling-learn {
            display: inline-block;
            margin-top: 16px;
            color: var(--maroon);
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
        }

        /* =========================================================
           PRODUCT SEO CONTENT
        ========================================================= */

        .ceiling-product-info {
            margin-top: 55px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        .ceiling-info-box {
            background: var(--light);
            border-left: 4px solid var(--maroon);
            padding: 25px;
        }

        .ceiling-info-box h3 {
            font-size: 20px;
            margin: 0 0 10px;
        }

        .ceiling-info-box p {
            color: #555;
            font-size: 14px;
            margin: 0;
        }

        /* =========================================================
           WHY CHOOSE
        ========================================================= */

        .ceiling-why {
            background: var(--maroon);
            color: #fff;
            padding: 65px 0;
        }

        .ceiling-why-title {
            text-align: center;
            margin-bottom: 42px;
        }

        .ceiling-why-title .ceiling-label {
            color: #fff;
        }

        .ceiling-why-title .ceiling-label::before,
        .ceiling-why-title .ceiling-label::after {
            background: #fff;
        }

        .ceiling-why-title h2 {
            font-size: 34px;
            margin: 0;
        }

        .ceiling-why-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
        }

        .ceiling-why-card {
            text-align: center;
            padding: 15px;
            border-right: 1px solid rgba(255,255,255,.28);
        }

        .ceiling-why-card:last-child {
            border-right: none;
        }

        .ceiling-why-icon {
            width: 53px;
            height: 53px;
            margin: 0 auto 13px;
            border: 1px solid rgba(255,255,255,.75);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
        }

        .ceiling-why-card h3 {
            font-size: 12px;
            margin: 0 0 7px;
        }

        .ceiling-why-card p {
            color: rgba(255,255,255,.82);
            font-size: 10px;
            margin: 0;
        }

        /* =========================================================
           APPLICATIONS
        ========================================================= */

        .ceiling-applications {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 18px;
        }

        .ceiling-application {
            overflow: hidden;
            border: 1px solid var(--border);
            background: #fff;
            transition: .4s ease;
        }

        .ceiling-application:hover {
            transform: translateY(-7px);
            box-shadow: 0 15px 32px rgba(90,15,47,.12);
        }

        .ceiling-application-image {
            height: 190px;
            overflow: hidden;
        }

        .ceiling-application-image img {
            height: 100%;
            object-fit: cover;
            transition: .7s ease;
        }

        .ceiling-application:hover img {
            transform: scale(1.07);
        }

        .ceiling-application-content {
            text-align: center;
            padding: 17px 12px;
        }

        .ceiling-application-content h3 {
            font-size: 13px;
            margin: 0 0 5px;
        }

        .ceiling-application-content p {
            color: var(--muted);
            font-size: 11px;
            margin: 0;
        }

        /* =========================================================
           BENEFITS / PERFORMANCE
        ========================================================= */

        .ceiling-performance {
            background: #faf8f8;
        }

        .ceiling-performance-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 1px;
            background: var(--border);
        }

        .ceiling-performance-card {
            background: #fff;
            text-align: center;
            padding: 28px 15px;
        }

        .ceiling-performance-icon {
            color: var(--maroon);
            font-size: 27px;
            margin-bottom: 10px;
        }

        .ceiling-performance-card h3 {
            font-size: 12px;
            margin: 0 0 7px;
        }

        .ceiling-performance-card p {
            color: var(--muted);
            font-size: 10px;
            margin: 0;
        }

        /* =========================================================
           PROCESS
        ========================================================= */

        .ceiling-process {
            background: #fff;
        }

        .ceiling-process-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            position: relative;
        }

        .ceiling-process-grid::before {
            content: "";
            position: absolute;
            top: 28px;
            left: 10%;
            right: 10%;
            border-top: 1px dashed var(--maroon);
        }

        .ceiling-process-step {
            position: relative;
            z-index: 2;
            text-align: center;
            padding: 0 15px;
        }

        .ceiling-step-number {
            width: 56px;
            height: 56px;
            margin: 0 auto 15px;
            background: var(--maroon);
            color: #fff;
            border: 7px solid #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 700;
        }

        .ceiling-process-step h3 {
            font-size: 12px;
            margin: 0 0 7px;
        }

        .ceiling-process-step p {
            color: var(--muted);
            font-size: 10px;
            margin: 0;
        }

        /* =========================================================
           SEO CONTENT
        ========================================================= */

        .ceiling-seo {
            background: #fff;
        }

        .ceiling-seo-wrapper {
            max-width: 950px;
            margin: auto;
        }

        .ceiling-seo-wrapper h2 {
            font-size: 32px;
            margin: 0 0 15px;
        }

        .ceiling-seo-wrapper h3 {
            color: var(--maroon);
            font-size: 21px;
            margin: 32px 0 10px;
        }

        .ceiling-seo-wrapper p {
            color: #555;
            font-size: 15px;
            margin: 0 0 15px;
        }

        .ceiling-seo-wrapper ul {
            padding-left: 20px;
            margin-bottom: 20px;
        }

        .ceiling-seo-wrapper li {
            color: #555;
            margin-bottom: 7px;
        }

        .ceiling-seo-wrapper strong {
            color: var(--maroon);
        }

        /* =========================================================
           FAQ
        ========================================================= */

        .ceiling-faq {
            max-width: 900px;
            margin: auto;
        }

        .ceiling-faq-item {
            border: 1px solid var(--border);
            margin-bottom: 10px;
            background: #fff;
        }

        .ceiling-faq-question {
            padding: 18px 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            font-weight: 700;
        }

        .ceiling-faq-plus {
            color: var(--maroon);
            font-size: 20px;
            transition: .3s ease;
        }

        .ceiling-faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height .4s ease;
        }

        .ceiling-faq-item.active .ceiling-faq-answer {
            max-height: 200px;
        }

        .ceiling-faq-answer p {
            color: var(--muted);
            font-size: 13px;
            padding: 0 20px 18px;
            margin: 0;
        }

        .ceiling-faq-item.active .ceiling-faq-plus {
            transform: rotate(45deg);
        }

        /* =========================================================
           CTA
        ========================================================= */

        .ceiling-cta {
            background: var(--maroon);
            color: #fff;
            padding: 48px 0;
        }

        .ceiling-cta-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 30px;
        }

        .ceiling-cta h2 {
            font-size: clamp(27px, 4vw, 40px);
            line-height: 1.08;
            margin: 0 0 8px;
        }

        .ceiling-cta p {
            color: rgba(255,255,255,.85);
            font-size: 14px;
            margin: 0;
        }

        .ceiling-cta-button {
            background: #fff;
            color: var(--maroon);
            padding: 16px 27px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            white-space: nowrap;
            transition: .4s ease;
        }

        .ceiling-cta-button:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 25px rgba(0,0,0,.25);
        }

        /* =========================================================
           REVEAL ANIMATION
        ========================================================= */

        .ceiling-reveal {
            opacity: 0;
            transform: translateY(35px);
            transition: opacity .8s ease, transform .8s ease;
        }

        .ceiling-reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* =========================================================
           RESPONSIVE
        ========================================================= */

        @media(max-width:1050px) {
            .ceiling-benefits-grid {
                grid-template-columns: repeat(3,1fr);
            }
            .ceiling-types {
                grid-template-columns: repeat(2,1fr);
            }
            .ceiling-applications {
                grid-template-columns: repeat(2,1fr);
            }
            .ceiling-why-grid {
                grid-template-columns: repeat(3,1fr);
            }
            .ceiling-performance-grid {
                grid-template-columns: repeat(3,1fr);
            }
        }

        @media(max-width:750px) {
            .ceiling-hero {
                grid-template-columns: 1fr;
            }
            .ceiling-hero-content {
                padding: 60px 6%;
            }
            .ceiling-hero-image {
                min-height: 360px;
            }
            .ceiling-benefits-grid {
                grid-template-columns: repeat(2,1fr);
            }
            .ceiling-why-grid {
                grid-template-columns: repeat(2,1fr);
                gap: 20px 0;
            }
            .ceiling-why-card {
                border-bottom: 1px solid rgba(255,255,255,.25);
            }
            .ceiling-process-grid {
                grid-template-columns: 1fr;
                gap: 25px;
            }
            .ceiling-process-grid::before {
                display: none;
            }
            .ceiling-cta-wrapper {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        @media(max-width:768px) {
            .ceiling-hero h1 {
                font-size: 34px;
                letter-spacing: -1px;
            }
            .ceiling-types,
            .ceiling-applications,
            .ceiling-product-info {
                grid-template-columns: 1fr;
            }
            .ceiling-benefits-grid,
            .ceiling-why-grid,
            .ceiling-performance-grid {
                grid-template-columns: 1fr;
            }
            .ceiling-benefit,
            .ceiling-why-card {
                border-right: none;
            }
        }
      `}</style>

      {/* 1. HERO */}
      <section className="ceiling-hero relative">
        <div className="ceiling-hero-content">
          <div className="ceiling-hero-inner">
            <div className="ceiling-eyebrow anam-hero-eyebrow">Premium Ceiling Solutions</div>

            <h1 className="anam-hero-title">
              Ceiling Solutions <br />
              <span className="inline-block relative">
                In Qatar
                <span className="anam-underline-bar block h-[5px] w-[140px] bg-[#5A0F2F] mt-2 rounded-full" />
              </span>
            </h1>

            <p className="ceiling-hero-description">
              ANAM Qatar provides professional{" "}
              <strong>Ceiling Solutions in Qatar</strong>, including acoustic
              ceilings, aluminium ceilings, wooden ceilings, mineral fibre
              ceilings, fibreglass ceilings, and PVC gypsum ceilings for
              residential and commercial spaces.
            </p>

            <div className="ceiling-hero-features">
              {miniFeatures.map((feat, idx) => (
                <div key={idx} className="ceiling-mini-feature">
                  <span className="ceiling-mini-icon">{feat.icon}</span>
                  {feat.label}
                </div>
              ))}
            </div>

            <Link to="/contact" className="ceiling-button">
              Get a Free Quote →
            </Link>
          </div>
        </div>

        <div className="ceiling-hero-image relative">
          <img
            src="/images/ceiling-solutions-qatar.webp"
            alt="Ceiling Solutions in Qatar"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
          <div className="absolute bottom-6 right-6 md:bottom-7 md:right-7 bg-[#5A0F2F] text-white px-5 py-3 shadow-2xl border border-white/15 backdrop-blur-sm z-10 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C9A86A] shadow-[0_0_10px_#C9A86A] animate-pulse" />
            <div>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C9A86A]">Doha, Qatar</div>
              <div className="text-xs md:text-sm font-extrabold tracking-wide uppercase text-white">Ceiling Systems Specialists</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK BENEFITS */}
      <section className="ceiling-benefits-strip">
        <div className="ceiling-container">
          <div className="ceiling-benefits-grid">
            {benefitsStrip.map((b, idx) => (
              <div key={idx} className="ceiling-benefit">
                <div className="ceiling-benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TYPES OF CEILINGS */}
      <section className="ceiling-section">
        <div className="ceiling-container">
          <div className="ceiling-section-title ceiling-reveal">
            <div className="ceiling-label">Our Ceiling Solutions</div>
            <h2>Types of Ceilings We Offer</h2>
            <p>
              Explore our range of professional ceiling systems designed for
              residential, commercial, office, retail, hospitality and
              architectural applications.
            </p>
          </div>

          <div className="ceiling-types">
            {ceilingTypes.map((type, idx) => (
              <div key={idx} className="ceiling-type-card ceiling-reveal">
                <div className="ceiling-type-image">
                  <img src={type.image} alt={type.alt} loading="lazy" />
                </div>
                <div className="ceiling-type-content">
                  <h3>{type.title}</h3>
                  <p>{type.desc}</p>
                  <Link to={type.link} className="ceiling-learn">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* PRODUCT SUPPORT CONTENT */}
          <div className="ceiling-product-info">
            <div className="ceiling-info-box ceiling-reveal">
              <h3>Residential Ceiling Solutions</h3>
              <p>
                Our residential ceiling solutions are suitable for villas,
                apartments, living rooms, bedrooms, dining areas, home offices
                and other residential interiors across Qatar.
              </p>
            </div>

            <div className="ceiling-info-box ceiling-reveal">
              <h3>Commercial Ceiling Solutions</h3>
              <p>
                We provide ceiling options for offices, hotels, restaurants,
                retail stores, showrooms, reception areas and other commercial
                environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE ANAM */}
      <section className="ceiling-why">
        <div className="ceiling-container">
          <div className="ceiling-why-title">
            <div className="ceiling-label">Why Choose ANAM Qatar?</div>
            <h2>Quality Ceilings, Exceptional Service</h2>
          </div>

          <div className="ceiling-why-grid">
            {whyChooseCards.map((card, idx) => (
              <div key={idx} className="ceiling-why-card">
                <div className="ceiling-why-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. APPLICATIONS */}
      <section className="ceiling-section">
        <div className="ceiling-container">
          <div className="ceiling-section-title ceiling-reveal">
            <div className="ceiling-label">Applications</div>
            <h2>Ceiling Solutions for Every Space</h2>
            <p>
              Our ceiling systems can be used across residential, commercial,
              retail and hospitality environments.
            </p>
          </div>

          <div className="ceiling-applications">
            {applications.map((app, idx) => (
              <div key={idx} className="ceiling-application ceiling-reveal">
                <div className="ceiling-application-image">
                  <img src={app.image} alt={app.alt} loading="lazy" />
                </div>
                <div className="ceiling-application-content">
                  <h3>{app.title}</h3>
                  <p>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PERFORMANCE BENEFITS */}
      <section className="ceiling-section ceiling-performance">
        <div className="ceiling-container">
          <div className="ceiling-section-title">
            <div className="ceiling-label">Key Benefits</div>
            <h2>Designed for Comfort & Performance</h2>
          </div>

          <div className="ceiling-performance-grid">
            {performanceBenefits.map((perf, idx) => (
              <div key={idx} className="ceiling-performance-card">
                <div className="ceiling-performance-icon">{perf.icon}</div>
                <h3>{perf.title}</h3>
                <p>{perf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK */}
      <section className="ceiling-section ceiling-process">
        <div className="ceiling-container">
          <div className="ceiling-section-title">
            <div className="ceiling-label">Our Process</div>
            <h2>How We Deliver Ceiling Solutions</h2>
            <p>
              From understanding your requirements to final completion, we
              follow a structured project approach.
            </p>
          </div>

          <div className="ceiling-process-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="ceiling-process-step">
                <div className="ceiling-step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SEO CONTENT */}
      <section className="ceiling-section ceiling-seo">
        <div className="ceiling-container">
          <div className="ceiling-seo-wrapper">
            <h2>Ceiling Solutions in Qatar</h2>
            <p>
              ANAM Qatar provides professional{" "}
              <strong>Ceiling Solutions in Qatar</strong> for residential,
              commercial and interior projects. Our ceiling systems combine
              modern design, practical performance and suitable material
              options to create comfortable and visually appealing spaces.
            </p>

            <h3>Professional Ceiling Solutions Across Qatar</h3>
            <p>
              Choosing the right ceiling can improve the overall appearance and
              functionality of an interior. ANAM offers a range of ceiling
              systems suitable for different architectural requirements,
              interior styles and property types across Qatar.
            </p>

            <h3>Acoustic Ceilings in Qatar</h3>
            <p>
              <strong>Acoustic Ceilings in Qatar</strong> can help improve sound
              management within offices, meeting rooms, commercial spaces,
              hotels and other interiors. These ceiling systems are suitable for
              environments where acoustic comfort and reduced unwanted noise are
              important.
            </p>

            <h3>Aluminium Ceilings in Qatar</h3>
            <p>
              <strong>Aluminium Ceilings in Qatar</strong> offer a modern
              ceiling option for commercial and architectural interiors.
              Aluminium ceiling systems can provide a clean appearance and
              practical performance for offices, retail spaces and other
              commercial environments.
            </p>

            <h3>Wooden Ceilings in Qatar</h3>
            <p>
              <strong>Wooden Ceilings in Qatar</strong> can introduce warmth,
              texture and character into an interior. They are suitable for
              villas, hotels, restaurants, reception areas, showrooms and
              premium architectural spaces.
            </p>

            <h3>Mineral Fibre Ceilings in Qatar</h3>
            <p>
              <strong>Mineral Fibre Ceilings in Qatar</strong> are commonly
              considered for commercial interiors such as offices, retail
              spaces and other professional environments. They provide a
              practical ceiling solution where acoustic and maintenance
              considerations are important.
            </p>

            <h3>Fibreglass Ceilings in Qatar</h3>
            <p>
              <strong>Fibreglass Ceilings in Qatar</strong> provide another
              practical option for different commercial and interior
              applications. Depending on the product and project requirements,
              fibreglass ceiling systems can be considered where durability and
              moisture-related performance are important.
            </p>

            <h3>PVC Gypsum Ceilings in Qatar</h3>
            <p>
              <strong>PVC Gypsum Ceilings in Qatar</strong> provide clean and
              contemporary finishes for residential and commercial interiors.
              They can complement lighting, wall finishes, furniture and other
              interior elements.
            </p>

            <h3>Residential Ceiling Solutions</h3>
            <p>
              ANAM provides residential ceiling solutions for villas,
              apartments and homes. Ceiling systems can be used in living rooms,
              bedrooms, dining areas, corridors, home offices and other
              residential spaces.
            </p>

            <h3>Commercial Ceiling Solutions</h3>
            <p>
              Our <strong>Commercial Ceiling Solutions in Qatar</strong> are
              suitable for offices, hotels, restaurants, retail stores,
              showrooms, reception areas and commercial buildings. Different
              ceiling materials can be selected according to the design and
              functional requirements of the project.
            </p>

            <h3>Ceiling Solutions for Offices</h3>
            <p>
              Modern offices can benefit from ceiling systems that support
              acoustic comfort, lighting integration, maintenance and
              professional interior design. ANAM offers different ceiling
              options for open offices, meeting rooms, reception areas and
              corporate spaces.
            </p>

            <h3>Ceiling Solutions for Hotels & Hospitality</h3>
            <p>
              Hotels, restaurants and hospitality spaces often require ceilings
              that combine appearance with practical performance. Our ceiling
              options can be incorporated into lobbies, restaurants, reception
              areas, lounges, corridors and other hospitality interiors.
            </p>

            <h3>How to Choose the Right Ceiling</h3>
            <p>
              The right ceiling depends on the space, design concept, acoustic
              requirements, maintenance expectations, environment and project
              budget. ANAM can help you compare suitable ceiling materials and
              select an option that matches your project requirements.
            </p>

            <ul>
              <li>Consider the type and purpose of the space.</li>
              <li>Choose a ceiling material suitable for the environment.</li>
              <li>Consider acoustic requirements where necessary.</li>
              <li>
                Select finishes that complement your interior design.
              </li>
              <li>Consider maintenance and long-term performance.</li>
              <li>Coordinate ceiling design with the lighting plan.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="ceiling-section">
        <div className="ceiling-container">
          <div className="ceiling-section-title">
            <div className="ceiling-label">Frequently Asked Questions</div>
            <h2>Ceiling Solutions FAQs</h2>
          </div>

          <div className="ceiling-faq">
            {faqs.map((faq, idx) => {
              const isActive = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`ceiling-faq-item ${isActive ? "active" : ""}`}
                >
                  <div
                    className="ceiling-faq-question"
                    onClick={() => toggleFaq(idx)}
                  >
                    <span>{faq.q}</span>
                    <span className="ceiling-faq-plus">+</span>
                  </div>
                  <div className="ceiling-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="ceiling-cta">
        <div className="ceiling-container">
          <div className="ceiling-cta-wrapper">
            <div>
              <h2>Looking for Ceiling Solutions in Qatar?</h2>
              <p>
                Contact ANAM Qatar today to discuss your project and find the
                right ceiling solution for your space.
              </p>
            </div>

            <Link to="/contact" className="ceiling-cta-button">
              Contact Us Now →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CeilingSolutionsSection;

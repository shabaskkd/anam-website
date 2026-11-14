import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { productData } from "../data/productData";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ProductHero from "../components/ProductHero";

const findNodeAndAncestors = (nodes, targetSlug, ancestors = []) => {
  for (const node of nodes) {
    if (node.slug === targetSlug) {
      return { node, path: [...ancestors, node] };
    }
    if (node.categories) {
      const result = findNodeAndAncestors(node.categories, targetSlug, [...ancestors, node]);
      if (result) return result;
    }
  }
  return null;
};

const collectAllLeafItems = (nodes, term) => {
  let results = [];
  for (const node of nodes) {
    const nameMatch = node.name.toLowerCase().includes(term);
    const slugMatch = node.slug && node.slug.toLowerCase().includes(term);
    if (!node.categories) {
      if (nameMatch || slugMatch) {
        results.push(node);
      }
    } else {
      results.push(...collectAllLeafItems(node.categories, term));
    }
  }
  return results;
};

const ProductDetail = ({ overrideSlug }) => {
  const navigate = useNavigate();
  const params = useParams();
  const splat = overrideSlug || params["*"] || "";
  const segments = splat.split("/").filter(Boolean);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [splat]);

  // 1. Resolve path segments
  let resolvedNode = null;
  let resolvedPath = [];

  if (segments.length > 0) {
    let currentNodes = productData;
    let success = true;
    const pathAccumulator = [];

    for (const targetSlug of segments) {
      let match = currentNodes.find((n) => n.slug === targetSlug);

      if (!match) {
        const deepMatch = findNodeAndAncestors(currentNodes, targetSlug);
        if (deepMatch) {
          match = deepMatch.node;
          pathAccumulator.push(...deepMatch.path.slice(0, -1));
        }
      }

      if (match) {
        pathAccumulator.push(match);
        currentNodes = match.categories || [];
      } else {
        success = false;
        break;
      }
    }

    if (success && pathAccumulator.length > 0) {
      resolvedNode = pathAccumulator[pathAccumulator.length - 1];
      resolvedPath = pathAccumulator;
    } else {
      // Fallback: search the entire tree for the deepest slug
      const deepestSlug = segments[segments.length - 1];
      const matchResult = findNodeAndAncestors(productData, deepestSlug);
      if (matchResult) {
        resolvedNode = matchResult.node;
        resolvedPath = matchResult.path;
      }
    }
  }

  // 2. Material filter fallback ("upvc", "aluminum", "aluminium", "stainless-steel")
  let filterTerm = "";
  if (!resolvedNode && segments.length > 0) {
    const lastSegment = segments[segments.length - 1].toLowerCase();
    if (["upvc", "aluminum", "aluminium", "stainless-steel", "stainless"].includes(lastSegment)) {
      filterTerm = lastSegment === "aluminum" ? "aluminium" : lastSegment;
    }
  }

  const isCatalogOverview = segments.length === 0 && !overrideSlug;
  const isFilterView = Boolean(filterTerm);
  const matchedItems = isFilterView ? collectAllLeafItems(productData, filterTerm) : [];

  const product = isCatalogOverview
    ? {
      name: "Our Products & Architectural Solutions",
      description:
        "Explore our comprehensive range of premium flooring, wall panels, doors, partitions, ceiling systems, and bespoke interior materials in Qatar.",
      slug: "products",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      categories: productData,
    }
    : isFilterView
      ? {
        name: (filterTerm.charAt(0).toUpperCase() + filterTerm.slice(1).toLowerCase()) + " Products",
        description: `Discover our premium ${filterTerm} solutions, engineered for durability, modern aesthetics, and high performance.`,
        slug: segments[0],
        image:
          filterTerm === "upvc"
            ? "/images/upvc-products-hero-qatar.webp"
            : filterTerm === "aluminium"
              ? "/images/aluminium-products-hero-qatar.webp"
              : filterTerm === "stainless-steel" || filterTerm === "stainless"
                ? "/images/stainless-steel-products-hero-qatar.webp"
                : "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      }
      : (resolvedPath[0] || null);

  if (!product) {
    return (
      <Layout withBg>
        <div className="py-40 text-center font-bold text-2xl text-gray-800">
          Product Not Found
        </div>
      </Layout>
    );
  }

  const activeSubproduct = isCatalogOverview || isFilterView ? null : (resolvedPath.length > 1 ? resolvedNode : null);
  const data = isCatalogOverview
    ? { categories: productData }
    : isFilterView
      ? { categories: matchedItems }
      : (activeSubproduct ? activeSubproduct : product);

  return (
    <Layout withBg>
            {(!product.slug || product.slug === "products") && (
        <Helmet>
          <title>Architectural & Interior Products in Qatar | ANAM Qatar</title>
          <meta name="title" content="Architectural & Interior Products in Qatar | ANAM Qatar" />
          <meta name="description" content="Discover ANAM Qatar's complete range of architectural solutions, including premium flooring, wall panels, doors, windows, partitions, and ceiling solutions." />
          <meta name="keywords" content="Architectural Products Qatar, Interior Products Qatar, Flooring Qatar, Wall Panels Qatar, Doors Qatar, Windows Qatar, Partitions Qatar, ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/products" />
        </Helmet>
      )}
      {product.slug === "flooring" && (
        <Helmet>
          <title>Best Flooring in Qatar | #1 Flooring Company in Doha | ANAM Qatar</title>
          <meta name="title" content="Best Flooring in Qatar | #1 Flooring Company in Doha | ANAM Qatar" />
          <meta name="description" content="Looking for the best flooring in Qatar? ANAM Qatar is Doha's #1 supplier and installer of luxury SPC flooring, parquet wood, vinyl, and carpet tiles with warranty. Free site visit & quotation across Qatar." />
          <meta name="keywords" content="Best Flooring in Qatar, Flooring Qatar, Flooring Company Qatar, Flooring Supplier Qatar, Best Flooring Supplier Doha, Luxury SPC Flooring Qatar, Parquet Flooring Doha, Vinyl Flooring Qatar, Wooden Flooring Qatar, Commercial Flooring Qatar, Residential Flooring Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/flooring" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anamqatar.com/flooring" />
          <meta property="og:title" content="Best Flooring in Qatar | #1 Flooring Company in Doha | ANAM Qatar" />
          <meta property="og:description" content="Looking for the best flooring in Qatar? ANAM Qatar is Doha's #1 supplier and installer of luxury SPC flooring, parquet wood, vinyl, and carpet tiles with warranty. Free site visit & quotation across Qatar." />
          <meta property="og:image" content="https://anamqatar.com/images/flooring-qatar-hero.webp" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://anamqatar.com/flooring" />
          <meta name="twitter:title" content="Best Flooring in Qatar | #1 Flooring Company in Doha | ANAM Qatar" />
          <meta name="twitter:description" content="Looking for the best flooring in Qatar? ANAM Qatar is Doha's #1 supplier and installer of luxury SPC flooring, parquet wood, vinyl, and carpet tiles with warranty. Free site visit & quotation across Qatar." />
          <meta name="twitter:image" content="https://anamqatar.com/images/flooring-qatar-hero.webp" />

          {/* Structured Data for Google Ranking */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Product",
                  "@id": "https://anamqatar.com/flooring#product",
                  "name": "Best Flooring Solutions in Qatar",
                  "image": "https://anamqatar.com/images/flooring-qatar-hero.webp",
                  "description": "Premium luxury SPC flooring, parquet wood, vinyl, and carpet tiles supplied and installed across Doha, Qatar by ANAM Qatar.",
                  "brand": {
                    "@type": "Brand",
                    "name": "ANAM Qatar",
                    "logo": "https://anamqatar.com/apple-touch-icon.png"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "142",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "QAR",
                    "lowPrice": "45",
                    "highPrice": "350",
                    "offerCount": "25",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2027-12-31"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://anamqatar.com/flooring#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://anamqatar.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Products",
                      "item": "https://anamqatar.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Best Flooring in Qatar",
                      "item": "https://anamqatar.com/flooring"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://anamqatar.com/flooring#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Which is the best flooring in Qatar for homes and luxury villas?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For homes and villas in Qatar, SPC (Stone Plastic Composite) flooring and engineered hardwood parquet are the top choices. SPC flooring is 100% waterproof, highly scratch-resistant, and withstands Qatar's hot and humid climate without warping. ANAM Qatar provides premium European and German-certified flooring collections."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What types of flooring does ANAM Qatar supply and install in Doha?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ANAM Qatar supplies and installs luxury SPC flooring, natural wood parquet, luxury vinyl tiles (LVT), laminate flooring, commercial carpet tiles, and outdoor WPC decking across Doha and all Qatar municipalities."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is SPC flooring suitable for Qatar's hot and humid climate?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, SPC flooring is engineered specifically for extreme weather and temperature fluctuations. It features a limestone-polymer core that prevents expansion, contraction, and moisture damage, making it ideal for air-conditioned villas and offices in Qatar."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Which areas in Qatar does ANAM provide flooring delivery and installation to?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ANAM Qatar provides complete turnkey flooring supply and installation across Doha, Lusail, The Pearl-Qatar, West Bay, Al Wakrah, Al Khor, Al Rayyan, and all surrounding areas in Qatar, including free site inspections and consultations."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How much does flooring cost per square meter in Qatar?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Flooring prices in Qatar typically range from QAR 45 to QAR 350 per square meter depending on the material (vinyl, SPC, laminate, or solid parquet wood) and installation requirements. Contact ANAM Qatar at +974 3008 1007 for a free measurement and tailored quote."
                      }
                    }
                  ]
                }
              ]
            })}
          </script>
        </Helmet>
      )}
      {product.slug === "wall-panels" && (
        <Helmet>
          <title>Best Wall Panels in Qatar | #1 Wall Cladding Supplier in Doha | ANAM Qatar</title>
          <meta name="title" content="Best Wall Panels in Qatar | #1 Wall Cladding Supplier in Doha | ANAM Qatar" />
          <meta name="description" content="Looking for the best wall panels in Qatar? ANAM Qatar supplies & installs luxury SPC wall panels, WPC fluted cladding, UV marble sheets, and acoustic wooden slats with warranty. Free site visit in Doha." />
          <meta name="keywords" content="Best Wall Panels in Qatar, Wall Panels Qatar, Wall Cladding Supplier Doha, WPC Wall Panels Qatar, SPC Wall Panels Qatar, UV Marble Sheet Qatar, Decorative Wall Panels Doha, Fluted Wall Panels Qatar, Interior Wall Panels Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/wall-panels" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anamqatar.com/wall-panels" />
          <meta property="og:title" content="Best Wall Panels in Qatar | #1 Wall Cladding Supplier in Doha | ANAM Qatar" />
          <meta property="og:description" content="Looking for the best wall panels in Qatar? ANAM Qatar supplies & installs luxury SPC wall panels, WPC fluted cladding, UV marble sheets, and acoustic wooden slats with warranty. Free site visit in Doha." />
          <meta property="og:image" content="https://anamqatar.com/images/wall-panels-qatar.webp" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://anamqatar.com/wall-panels" />
          <meta name="twitter:title" content="Best Wall Panels in Qatar | #1 Wall Cladding Supplier in Doha | ANAM Qatar" />
          <meta name="twitter:description" content="Looking for the best wall panels in Qatar? ANAM Qatar supplies & installs luxury SPC wall panels, WPC fluted cladding, UV marble sheets, and acoustic wooden slats with warranty. Free site visit in Doha." />
          <meta name="twitter:image" content="https://anamqatar.com/images/wall-panels-qatar.webp" />

          {/* Structured Data for Google Ranking */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Product",
                  "@id": "https://anamqatar.com/wall-panels#product",
                  "name": "Best Wall Panels & Cladding in Qatar",
                  "image": "https://anamqatar.com/images/wall-panels-qatar.webp",
                  "description": "Premium luxury SPC wall panels, WPC fluted panels, UV marble sheets, and acoustic wood slats supplied and installed across Doha, Qatar by ANAM Qatar.",
                  "brand": {
                    "@type": "Brand",
                    "name": "ANAM Qatar",
                    "logo": "https://anamqatar.com/apple-touch-icon.png"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "118",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "QAR",
                    "lowPrice": "65",
                    "highPrice": "450",
                    "offerCount": "18",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2027-12-31"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://anamqatar.com/wall-panels#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://anamqatar.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Products",
                      "item": "https://anamqatar.com/products"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Best Wall Panels in Qatar",
                      "item": "https://anamqatar.com/wall-panels"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://anamqatar.com/wall-panels#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What are the best wall panels for homes and villas in Qatar?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For residences in Qatar, WPC fluted wall panels, SPC waterproof panels, and high-gloss UV marble sheets are the most popular choices. They resist heat and humidity, do not warp, and provide a luxurious modern interior aesthetic."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Are ANAM wall panels waterproof and termite-resistant?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, our SPC and WPC wall panels are 100% waterproof, mould-resistant, and completely termite-proof, making them ideal for living rooms, hallways, bathrooms, and commercial reception areas across Qatar."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does ANAM Qatar provide on-site wall panel installation in Doha?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, ANAM Qatar provides turnkey supply and professional installation across Doha, Lusail, The Pearl-Qatar, West Bay, Al Wakrah, and all surrounding municipalities with free measurement consultations."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How much do wall panels cost per square meter in Qatar?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Prices range between QAR 65 and QAR 450 per square meter depending on whether you choose UV marble sheets, SPC panels, or luxury acoustic wooden slats. Contact ANAM Qatar at +974 3008 1007 for exact pricing."
                      }
                    }
                  ]
                }
              ]
            })}
          </script>
        </Helmet>
      )}
      {product.slug === "doors" && (
        <Helmet>
          <title>Best Doors in Qatar | #1 Luxury Door Supplier in Doha | ANAM Qatar</title>
          <meta name="title" content="Best Doors in Qatar | #1 Luxury Door Supplier in Doha | ANAM Qatar" />
          <meta name="description" content="Looking for the best doors in Qatar? ANAM Qatar supplies and installs premium WPC doors, solid wooden doors, aluminium sliding doors, and UPVC doors for villas & offices across Qatar. Free quotation." />
          <meta name="keywords" content="Best Doors in Qatar, Doors Qatar, Door Supplier Qatar, Door Suppliers Doha, WPC Doors Qatar, Wooden Doors Qatar, Aluminium Doors Qatar, UPVC Doors Qatar, Interior Doors Qatar, Exterior Villa Doors Doha, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/doors" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anamqatar.com/doors" />
          <meta property="og:title" content="Best Doors in Qatar | #1 Luxury Door Supplier in Doha | ANAM Qatar" />
          <meta property="og:description" content="Looking for the best doors in Qatar? ANAM Qatar supplies and installs premium WPC doors, solid wooden doors, aluminium sliding doors, and UPVC doors for villas & offices across Qatar. Free quotation." />
          <meta property="og:image" content="https://anamqatar.com/images/doors-qatar.webp" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://anamqatar.com/doors" />
          <meta name="twitter:title" content="Best Doors in Qatar | #1 Luxury Door Supplier in Doha | ANAM Qatar" />
          <meta name="twitter:description" content="Looking for the best doors in Qatar? ANAM Qatar supplies and installs premium WPC doors, solid wooden doors, aluminium sliding doors, and UPVC doors for villas & offices across Qatar. Free quotation." />
          <meta name="twitter:image" content="https://anamqatar.com/images/doors-qatar.webp" />

          {/* Structured Data for Google Ranking */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Product",
                  "@id": "https://anamqatar.com/doors#product",
                  "name": "Best Doors Solutions in Qatar",
                  "image": "https://anamqatar.com/images/doors-qatar.webp",
                  "description": "High-quality WPC waterproof doors, natural solid wood doors, and modern aluminium entrance doors supplied and installed across Qatar by ANAM Qatar.",
                  "brand": {
                    "@type": "Brand",
                    "name": "ANAM Qatar",
                    "logo": "https://anamqatar.com/apple-touch-icon.png"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "135",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "QAR",
                    "lowPrice": "450",
                    "highPrice": "2800",
                    "offerCount": "22",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2027-12-31"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://anamqatar.com/doors#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://anamqatar.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Products",
                      "item": "https://anamqatar.com/products"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Best Doors in Qatar",
                      "item": "https://anamqatar.com/doors"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://anamqatar.com/doors#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Why are WPC doors recommended for villas in Qatar?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "WPC (Wood Plastic Composite) doors are 100% waterproof, fire-retardant, and termite-proof. Unlike traditional timber, they do not swell, crack, or peel in Qatar's high summer humidity and temperature."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can ANAM custom-size doors for luxury villas and offices?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, all our interior and exterior doors can be customized to non-standard heights (up to 3 meters), widths, hardware configurations, and finishes matching your architectural designs."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What door styles does ANAM Qatar supply in Doha?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We supply and install flush WPC doors, carved wooden doors, slimline aluminium glass sliding doors, UPVC casement doors, and pivot entrance doors with high-security multi-point locks."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the typical warranty on doors installed by ANAM?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ANAM Qatar provides comprehensive manufacturer warranties ranging from 5 to 10 years covering material durability, warping resistance, and installation craftsmanship."
                      }
                    }
                  ]
                }
              ]
            })}
          </script>
        </Helmet>
      )}
      {product.slug === "windows" && (
        <Helmet>
          <title>Best Windows in Qatar | #1 UPVC & Aluminium Windows Supplier Doha | ANAM Qatar</title>
          <meta name="title" content="Best Windows in Qatar | #1 UPVC & Aluminium Windows Supplier Doha | ANAM Qatar" />
          <meta name="description" content="Looking for high-performance windows in Qatar? ANAM Qatar specializes in soundproof, thermal-break aluminium windows and energy-efficient UPVC windows for villas and towers. Free site inspection." />
          <meta name="keywords" content="Best Windows in Qatar, Windows in Qatar, Window Supplier Doha, Aluminium Windows Qatar, UPVC Windows Qatar, Soundproof Windows Qatar, Thermal Break Windows Doha, Sliding Windows Qatar, Villa Windows Doha, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/windows" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anamqatar.com/windows" />
          <meta property="og:title" content="Best Windows in Qatar | #1 UPVC & Aluminium Windows Supplier Doha | ANAM Qatar" />
          <meta property="og:description" content="Looking for high-performance windows in Qatar? ANAM Qatar specializes in soundproof, thermal-break aluminium windows and energy-efficient UPVC windows for villas and towers. Free site inspection." />
          <meta property="og:image" content="https://anamqatar.com/images/windows-hero-qatar.webp" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://anamqatar.com/windows" />
          <meta name="twitter:title" content="Best Windows in Qatar | #1 UPVC & Aluminium Windows Supplier Doha | ANAM Qatar" />
          <meta name="twitter:description" content="Looking for high-performance windows in Qatar? ANAM Qatar specializes in soundproof, thermal-break aluminium windows and energy-efficient UPVC windows for villas and towers. Free site inspection." />
          <meta name="twitter:image" content="https://anamqatar.com/images/windows-hero-qatar.webp" />

          {/* Structured Data for Google Ranking */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Product",
                  "@id": "https://anamqatar.com/windows#product",
                  "name": "Best Windows Solutions in Qatar",
                  "image": "https://anamqatar.com/images/windows-hero-qatar.webp",
                  "description": "High-efficiency thermal break aluminium and multi-chamber UPVC windows for extreme heat insulation and soundproofing across Qatar by ANAM Qatar.",
                  "brand": {
                    "@type": "Brand",
                    "name": "ANAM Qatar",
                    "logo": "https://anamqatar.com/apple-touch-icon.png"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "98",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "QAR",
                    "lowPrice": "350",
                    "highPrice": "1800",
                    "offerCount": "16",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2027-12-31"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://anamqatar.com/windows#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://anamqatar.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Products",
                      "item": "https://anamqatar.com/products"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Best Windows in Qatar",
                      "item": "https://anamqatar.com/windows"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://anamqatar.com/windows#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Which windows provide the best heat and sound insulation in Qatar?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Double and triple glazed thermal-break aluminium and multi-chamber UPVC windows offer the highest insulation, significantly lowering air-conditioning bills and blocking outdoor dust and traffic noise."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What window styles does ANAM Qatar manufacture and install?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We supply sliding windows, tilt-and-turn European systems, casement windows, fixed panoramic picture windows, and arched architectural window units."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does ANAM handle window replacement for existing villas?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, our installation crews handle complete retrofitting, including clean removal of old frames, precision measurement, and airtight sealing with structural silicone."
                      }
                    }
                  ]
                }
              ]
            })}
          </script>
        </Helmet>
      )}
      {product.slug === "partitions" && (
        <Helmet>
          <title>Best Partitions in Qatar | #1 Glass & Office Partition Supplier Doha | ANAM Qatar</title>
          <meta name="title" content="Best Partitions in Qatar | #1 Glass & Office Partition Supplier Doha | ANAM Qatar" />
          <meta name="description" content="ANAM Qatar is Doha's top supplier and installer of modern glass partitions, aluminium office cubicles, and acoustic gypsum partitions for commercial spaces and villas across Qatar. Free consultation." />
          <meta name="keywords" content="Best Partitions in Qatar, Partition Services in Qatar, Glass Partition Qatar, Office Partition Doha, Aluminium Partition Qatar, Gypsum Partition Qatar, Commercial Partitions Doha, Acoustic Glass Partitions Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/partitions" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anamqatar.com/partitions" />
          <meta property="og:title" content="Best Partitions in Qatar | #1 Glass & Office Partition Supplier Doha | ANAM Qatar" />
          <meta property="og:description" content="ANAM Qatar is Doha's top supplier and installer of modern glass partitions, aluminium office cubicles, and acoustic gypsum partitions for commercial spaces and villas across Qatar. Free consultation." />
          <meta property="og:image" content="https://anamqatar.com/images/partition-services-qatar.webp" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://anamqatar.com/partitions" />
          <meta name="twitter:title" content="Best Partitions in Qatar | #1 Glass & Office Partition Supplier Doha | ANAM Qatar" />
          <meta name="twitter:description" content="ANAM Qatar is Doha's top supplier and installer of modern glass partitions, aluminium office cubicles, and acoustic gypsum partitions for commercial spaces and villas across Qatar." />
          <meta name="twitter:image" content="https://anamqatar.com/images/partition-services-qatar.webp" />

          {/* Structured Data for Google Ranking */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Product",
                  "@id": "https://anamqatar.com/partitions#product",
                  "name": "Best Partition Services in Qatar",
                  "image": "https://anamqatar.com/images/partition-services-qatar.webp",
                  "description": "Frameless toughened glass partitions, acoustic office cubicles, and drywall partitions supplied and installed across Qatar by ANAM Qatar.",
                  "brand": {
                    "@type": "Brand",
                    "name": "ANAM Qatar",
                    "logo": "https://anamqatar.com/apple-touch-icon.png"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "104",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "QAR",
                    "lowPrice": "180",
                    "highPrice": "750",
                    "offerCount": "14",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2027-12-31"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://anamqatar.com/partitions#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://anamqatar.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Products",
                      "item": "https://anamqatar.com/products"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Best Partitions in Qatar",
                      "item": "https://anamqatar.com/partitions"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://anamqatar.com/partitions#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What glass thickness is used for office glass partitions in Qatar?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We typically install 10mm or 12mm clear or frosted toughened safety glass with heavy-duty aluminium channels, delivering maximum durability, elegance, and safety."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How quickly can ANAM install commercial office partitions in Doha?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Standard projects can be measured, fabricated, and installed within 3 to 7 working days to minimize disruption to your business operations."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do your partitions offer acoustic soundproofing?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we provide double-glazed acoustic glass partitions and insulated gypsum systems rated for high decibel reduction, ensuring total executive privacy in conference rooms."
                      }
                    }
                  ]
                }
              ]
            })}
          </script>
        </Helmet>
      )}
      {product.slug === "curtain-and-blinds" && (
        <Helmet>
          <title>Curtain and Blinds Sale & Installation Qatar | Luxury Curtains | ANAM Qatar</title>
          <meta name="title" content="Curtain and Blinds Sale & Installation Qatar | Luxury Curtains | ANAM Qatar" />
          <meta name="description" content="ANAM Qatar offers professional curtain and blinds sell & installation services in Qatar. We supply and install blackout blinds, luxury curtains, motorized blinds, Roman blinds, Venetian blinds, vertical blinds, sunscreen blinds, curtain track & rail systems, and PVC strip curtains for residential and commercial spaces." />
          <meta name="keywords" content="Curtain and Blinds Sell & Installation Qatar, Curtains Qatar, Blinds Qatar, Luxury Curtains Qatar, Blackout Blinds Qatar, Motorized Blinds Qatar, Roman Blinds Qatar, Venetian Blinds Qatar, Vertical Blinds Qatar, Sunscreen Blinds Qatar, Curtain Track Qatar, Curtain Rail System Qatar, PVC Strip Curtain Qatar, Window Blinds Doha, Curtain Installation Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/products/curtains-and-blinds" />

          {/* Open Graph Tags */}
          <meta property="og:title" content="Curtain and Blinds Sale & Installation Qatar | Luxury Curtains | ANAM Qatar" />
          <meta property="og:description" content="Premium curtain and blinds solutions in Qatar including luxury curtains, blackout blinds, motorized blinds, Roman blinds, Venetian blinds, vertical blinds, sunscreen blinds, curtain tracks, rail systems, and PVC strip curtains." />
          <meta property="og:url" content="https://anamqatar.com/products/curtains-and-blinds" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="ANAM Qatar" />
          <meta property="og:image" content="https://anamqatar.com/images/curtains-blinds-qatar.webp" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Curtain and Blinds Sale & Installation Qatar | Luxury Curtains | ANAM Qatar" />
          <meta name="twitter:description" content="Professional curtain and blinds supply & installation services in Qatar. Luxury curtains, blackout blinds, motorized blinds, Roman blinds, Venetian blinds, vertical blinds, sunscreen blinds, curtain tracks, and PVC strip curtains." />
          <meta name="twitter:image" content="https://anamqatar.com/images/curtains-blinds-qatar.webp" />
        </Helmet>
      )}
      {product.slug === "kitchen-wardrobe" && (
        <Helmet>
          <title>Best Kitchen Cabinets & Wardrobes in Qatar | Custom Interiors Doha | ANAM Qatar</title>
          <meta name="title" content="Best Kitchen Cabinets & Wardrobes in Qatar | Custom Interiors Doha | ANAM Qatar" />
          <meta name="description" content="Looking for luxury kitchen cabinets and custom wardrobes in Qatar? ANAM Qatar designs, manufactures, and installs bespoke modular kitchens, walk-in closets, and wardrobe accessories with European hardware." />
          <meta name="keywords" content="Best Kitchen Cabinets in Qatar, Custom Wardrobes Qatar, Modular Kitchen Doha, Walk-in Closet Qatar, Kitchen Cupboards Qatar, Wardrobe Accessories Doha, Luxury Kitchens Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/kitchen-wardrobe" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anamqatar.com/kitchen-wardrobe" />
          <meta property="og:title" content="Best Kitchen Cabinets & Wardrobes in Qatar | Custom Interiors Doha | ANAM Qatar" />
          <meta property="og:description" content="Looking for luxury kitchen cabinets and custom wardrobes in Qatar? ANAM Qatar designs, manufactures, and installs bespoke modular kitchens, walk-in closets, and wardrobe accessories with European hardware." />
          <meta property="og:image" content="https://anamqatar.com/images/premium-kitchen-cabinets-qatar.webp" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://anamqatar.com/kitchen-wardrobe" />
          <meta name="twitter:title" content="Best Kitchen Cabinets & Wardrobes in Qatar | Custom Interiors Doha | ANAM Qatar" />
          <meta name="twitter:description" content="ANAM Qatar provides premium kitchen cabinets, custom wardrobes, and modular interior solutions across Qatar." />
          <meta name="twitter:image" content="https://anamqatar.com/images/premium-kitchen-cabinets-qatar.webp" />

          {/* Structured Data for Google Ranking */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Product",
                  "@id": "https://anamqatar.com/kitchen-wardrobe#product",
                  "name": "Best Kitchen Cabinets & Custom Wardrobes in Qatar",
                  "image": "https://anamqatar.com/images/premium-kitchen-cabinets-qatar.webp",
                  "description": "Bespoke German-standard modular kitchens, custom walk-in wardrobes, and luxury storage solutions designed and installed in Qatar by ANAM Qatar.",
                  "brand": {
                    "@type": "Brand",
                    "name": "ANAM Qatar",
                    "logo": "https://anamqatar.com/apple-touch-icon.png"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "112",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "QAR",
                    "lowPrice": "850",
                    "highPrice": "5500",
                    "offerCount": "15",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2027-12-31"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://anamqatar.com/kitchen-wardrobe#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://anamqatar.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Products",
                      "item": "https://anamqatar.com/products"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Best Kitchen Cabinets & Wardrobes in Qatar",
                      "item": "https://anamqatar.com/kitchen-wardrobe"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://anamqatar.com/kitchen-wardrobe#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What carcass and shutter materials are used for kitchens in Qatar?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We utilize moisture-resistant HMR (High Moisture Resistance) MDF, marine-grade plywood, acrylic shutters, and anti-fingerprint lacquer finishes engineered for long life in Qatar kitchens."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you offer free 3D design consultations for villas?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, our interior designers visit your property in Qatar, take precise laser measurements, and generate photorealistic 3D renders before manufacturing begins."
                      }
                    }
                  ]
                }
              ]
            })}
          </script>
        </Helmet>
      )}
      {product.slug === "solid-surface-for-interior" && (
        <Helmet>
          <title>Best Solid Surface (Corian Top) Fixing Work in Qatar | ANAM Qatar</title>
          <meta name="title" content="Best Solid Surface (Corian Top) Fixing Work in Qatar | ANAM Qatar" />
          <meta name="description" content="ANAM Qatar provides the best solid surface (Corian top) fixing work in Qatar, including fabrication, supply, and installation of kitchen countertops, vanity tops, reception counters, wall cladding, worktops, and custom solid surface solutions for residential and commercial projects." />
          <meta name="keywords" content="Best Solid Surface Fixing Work in Qatar, Corian Top Qatar, Corian Countertops Qatar, Solid Surface Qatar, Solid Surface Fabrication Qatar, Solid Surface Installation Qatar, Kitchen Countertop Qatar, Corian Kitchen Top Qatar, Vanity Top Qatar, Reception Counter Qatar, Corian Cladding Qatar, Acrylic Solid Surface Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/products/solid-surface-for-interior" />

          {/* Open Graph Tags */}
          <meta property="og:title" content="Best Solid Surface (Corian Top) Fixing Work in Qatar | ANAM Qatar" />
          <meta property="og:description" content="Professional solid surface (Corian top) fabrication and fixing services in Qatar. ANAM Qatar specializes in kitchen countertops, reception counters, vanity tops, wall cladding, and custom solid surface installations for homes and commercial spaces." />
          <meta property="og:url" content="https://anamqatar.com/products/solid-surface-for-interior" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="ANAM Qatar" />
          <meta property="og:image" content="https://anamqatar.com/images/solid-surface-qatar.webp" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Best Solid Surface (Corian Top) Fixing Work in Qatar | ANAM Qatar" />
          <meta name="twitter:description" content="ANAM Qatar offers premium Corian top fabrication, supply, and solid surface fixing work in Qatar for kitchens, bathrooms, reception counters, commercial interiors, and custom projects." />
          <meta name="twitter:image" content="https://anamqatar.com/images/solid-surface-qatar.webp" />
        </Helmet>
      )}
      {product.slug === "carpentry-accessories" && (
        <Helmet>
          <title>Carpentry Accessories in Qatar | Handles, Hinges & Locks | ANAM Qatar</title>
          <meta name="title" content="Carpentry Accessories in Qatar | Handles, Hinges & Locks | ANAM Qatar" />
          <meta name="description" content="Looking for premium carpentry accessories in Qatar? ANAM Qatar supplies high-quality handles, hinges, locks, and hardware accessories for residential, commercial, and industrial woodworking projects." />
          <meta name="keywords" content="Looking for premium carpentry accessories in Qatar? ANAM Qatar supplies high-quality handles, hinges, locks, and hardware accessories for residential, commercial, and industrial woodworking" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <link rel="canonical" href="https://anamqatar.com/products/carpentry-accessories" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Carpentry Accessories in Qatar | Handles, Hinges & Locks | ANAM Qatar" />
          <meta property="og:description" content="ANAM Qatar offers premium carpentry accessories including handles, hinges, locks, and furniture hardware for homes, offices, hotels, and commercial projects across Qatar." />
          <meta property="og:url" content="https://anamqatar.com/products/carpentry-accessories" />
          <meta property="og:site_name" content="ANAM Qatar" />
          <meta property="og:image" content="https://anamqatar.com/images/carpentry-accessories-qatar.webp" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Carpentry Accessories in Qatar | Handles, Hinges & Locks | ANAM Qatar" />
          <meta name="twitter:description" content="Premium handles, hinges, locks, and carpentry hardware solutions in Qatar." />
          <meta name="twitter:image" content="https://anamqatar.com/images/carpentry-accessories-qatar.webp" />
        </Helmet>
      )}
      {product.slug === "ceiling-solutions" && (
        <Helmet>
          <title>Best Ceiling Solutions in Qatar | Acoustic, Aluminium & Wooden Ceilings Doha | ANAM Qatar</title>
          <meta name="title" content="Best Ceiling Solutions in Qatar | Acoustic, Aluminium & Wooden Ceilings Doha | ANAM Qatar" />
          <meta name="description" content="ANAM Qatar provides best-in-class ceiling solutions in Qatar, including acoustic baffle ceilings, linear aluminium ceilings, 60x60 PVC gypsum tiles, and luxury wooden ceilings with certified installation." />
          <meta name="keywords" content="Best Ceiling Solutions in Qatar, Ceiling Solutions Qatar, Acoustic Ceilings Doha, Aluminium Ceiling Qatar, Wooden Ceiling Qatar, 60x60 Gypsum Tiles Qatar, Suspended Ceilings Doha, Commercial Ceilings Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/ceiling-solutions" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anamqatar.com/ceiling-solutions" />
          <meta property="og:title" content="Best Ceiling Solutions in Qatar | Acoustic, Aluminium & Wooden Ceilings Doha | ANAM Qatar" />
          <meta property="og:description" content="ANAM Qatar provides best-in-class ceiling solutions in Qatar, including acoustic baffle ceilings, linear aluminium ceilings, 60x60 PVC gypsum tiles, and luxury wooden ceilings with certified installation." />
          <meta property="og:image" content="https://anamqatar.com/images/ceiling-solutions-qatar.webp" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://anamqatar.com/ceiling-solutions" />
          <meta name="twitter:title" content="Best Ceiling Solutions in Qatar | Acoustic, Aluminium & Wooden Ceilings Doha | ANAM Qatar" />
          <meta name="twitter:description" content="ANAM Qatar provides professional ceiling solutions in Qatar including acoustic, aluminium, wooden, and PVC gypsum systems for villas and offices." />
          <meta name="twitter:image" content="https://anamqatar.com/images/ceiling-solutions-qatar.webp" />

          {/* Structured Data for Google Ranking */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Product",
                  "@id": "https://anamqatar.com/ceiling-solutions#product",
                  "name": "Best Ceiling Solutions in Qatar",
                  "image": "https://anamqatar.com/images/ceiling-solutions-qatar.webp",
                  "description": "Suspended acoustic ceilings, linear aluminium baffles, PVC gypsum 60x60 tiles, and decorative wood ceilings supplied across Qatar by ANAM Qatar.",
                  "brand": {
                    "@type": "Brand",
                    "name": "ANAM Qatar",
                    "logo": "https://anamqatar.com/apple-touch-icon.png"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "87",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "QAR",
                    "lowPrice": "45",
                    "highPrice": "320",
                    "offerCount": "19",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2027-12-31"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://anamqatar.com/ceiling-solutions#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://anamqatar.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Products",
                      "item": "https://anamqatar.com/products"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Best Ceiling Solutions in Qatar",
                      "item": "https://anamqatar.com/ceiling-solutions"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://anamqatar.com/ceiling-solutions#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Which ceilings are best for offices and retail stores in Qatar?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aluminium linear baffle ceilings and 60x60 cm PVC-faced gypsum tiles are ideal due to their durability, clean modern finish, easy access to overhead MEP services, and humidity resistance."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Are your PVC gypsum tiles sag and moisture-resistant?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, our PVC gypsum ceiling tiles feature an aluminum foil backing that prevents moisture absorption, sagging, and discolouration under air-conditioned environments in Qatar."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does ANAM Qatar supply acoustic ceilings for cinemas and auditoriums?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we provide mineral fibre, fibreglass, and micro-perforated wooden acoustic ceilings with certified NRC ratings up to 0.90 for sound absorption."
                      }
                    }
                  ]
                }
              ]
            })}
          </script>
        </Helmet>
      )}
      {product.slug === "profile-accessories" && (
        <Helmet>
          <title>Best Tile Profiles & Accessories in Qatar | Skirting & Trims Doha | ANAM Qatar</title>
          <meta name="title" content="Best Tile Profiles & Accessories in Qatar | Skirting & Trims Doha | ANAM Qatar" />
          <meta name="description" content="ANAM Qatar supplies premium architectural profiles, aluminium tile trims, stainless steel skirting, and stair nosings for interior fit-out projects across Doha and Qatar." />
          <meta name="keywords" content="Best Tile Profiles in Qatar, Profile Accessories Qatar, Aluminium Profiles Doha, Skirting Profiles Qatar, Stair Nosing Doha, Tile Trims Qatar, Stainless Steel Profiles Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/profile-accessories" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anamqatar.com/profile-accessories" />
          <meta property="og:title" content="Best Tile Profiles & Accessories in Qatar | Skirting & Trims Doha | ANAM Qatar" />
          <meta property="og:description" content="ANAM Qatar supplies premium architectural profiles, aluminium tile trims, stainless steel skirting, and stair nosings for interior fit-out projects across Doha and Qatar." />
          <meta property="og:image" content="https://anamqatar.com/images/profile-accessories-qatar-hero.webp" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://anamqatar.com/profile-accessories" />
          <meta name="twitter:title" content="Best Tile Profiles & Accessories in Qatar | Skirting & Trims Doha | ANAM Qatar" />
          <meta name="twitter:description" content="Explore quality profile and accessories in Qatar including aluminium tile trims, skirting profiles, and stair nosings from ANAM Qatar." />
          <meta name="twitter:image" content="https://anamqatar.com/images/profile-accessories-qatar-hero.webp" />

          {/* Structured Data for Google Ranking */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Product",
                  "@id": "https://anamqatar.com/profile-accessories#product",
                  "name": "Best Tile Profiles & Architectural Accessories in Qatar",
                  "image": "https://anamqatar.com/images/profile-accessories-qatar-hero.webp",
                  "description": "High-grade aluminium edge trims, stainless steel skirting, transition profiles, and anti-slip stair nosings supplied in Qatar by ANAM Qatar.",
                  "brand": {
                    "@type": "Brand",
                    "name": "ANAM Qatar",
                    "logo": "https://anamqatar.com/apple-touch-icon.png"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "76",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "QAR",
                    "lowPrice": "15",
                    "highPrice": "120",
                    "offerCount": "30",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2027-12-31"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://anamqatar.com/profile-accessories#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://anamqatar.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Products",
                      "item": "https://anamqatar.com/products"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Best Profiles & Accessories in Qatar",
                      "item": "https://anamqatar.com/profile-accessories"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://anamqatar.com/profile-accessories#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What finishes are available for tile profiles and skirting in Qatar?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We maintain extensive stock of brushed champagne gold, matte black, brushed rose gold, mirror chrome, and brushed silver finishes in various heights."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Are your stair nosings suitable for high-traffic commercial projects?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, our heavy-duty aluminium stair nosings with anti-slip rubber inserts meet international safety standards and withstand heavy footfall in hotels, malls, and offices."
                      }
                    }
                  ]
                }
              ]
            })}
          </script>
        </Helmet>
      )}
      {product.slug === "wood-materials" && (
        <Helmet>
          <title>Wood Materials in Qatar | MDF, HPL & Chipboard Supplier | ANAM Qatar</title>
          <meta name="title" content="Wood Materials in Qatar | MDF, HPL & Chipboard Supplier | ANAM Qatar" />
          <meta name="description" content="ANAM Qatar supplies premium wood materials in Qatar, including MDF boards, HPL sheets, and chipboards for furniture, cabinetry, wardrobes, kitchens, and interior projects." />
          <meta name="keywords" content="Wood Materials in Qatar, Wood Materials Qatar, MDF Qatar, MDF Boards Qatar, HPL Qatar, HPL Sheets Qatar, Chipboard Qatar, Chipboard Supplier Qatar, Wood Board Supplier Qatar, Furniture Materials Qatar, Interior Wood Materials Qatar, Carpentry Materials Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/products/wood-materials" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Wood Materials in Qatar | MDF, HPL & Chipboard Supplier | ANAM Qatar" />
          <meta property="og:description" content="Explore premium MDF boards, HPL sheets, and chipboards in Qatar from ANAM Qatar for furniture, carpentry, cabinetry, and interior applications." />
          <meta property="og:url" content="https://anamqatar.com/products/wood-materials" />
          <meta property="og:site_name" content="ANAM Qatar" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Wood Materials in Qatar | MDF, HPL & Chipboard Supplier | ANAM Qatar" />
          <meta name="twitter:description" content="ANAM Qatar supplies high-quality MDF, HPL, and chipboard materials for furniture, cabinetry, carpentry, and interior projects across Qatar." />
        </Helmet>
      )}
      {product.slug === "shades" && (
        <Helmet>
          <title>Shades Manufacturers in Qatar | HDPE, Kwik Span Shades & Modern Pergolas | ANAM Qatar</title>
          <meta name="title" content="Shades Manufacturers in Qatar | HDPE, Kwik Span Shades & Modern Pergolas | ANAM Qatar" />
          <meta name="description" content="ANAM Qatar is a trusted shades manufacturer in Qatar offering HDPE shades, Kwik Span shades, and modern pergolas for residential, commercial, parking, garden, and outdoor spaces." />
          <meta name="keywords" content="Shades Manufacturers in Qatar, Shade Manufacturer Qatar, Shades Qatar, HDPE Shades Qatar, HDPE Shade Supplier Qatar, Kwik Span Shades Qatar, Modern Pergola Qatar, Pergola Manufacturer Qatar, Car Parking Shades Qatar, Outdoor Shades Qatar, Garden Shades Qatar, Shade Installation Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/products/shades" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Shades Manufacturers in Qatar | HDPE, Kwik Span Shades & Modern Pergolas | ANAM Qatar" />
          <meta property="og:description" content="Explore premium HDPE shades, Kwik Span shades, and modern pergola solutions in Qatar from ANAM Qatar with professional manufacturing and installation services." />
          <meta property="og:url" content="https://anamqatar.com/products/shades" />
          <meta property="og:site_name" content="ANAM Qatar" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Shades Manufacturers in Qatar | HDPE, Kwik Span Shades & Modern Pergolas | ANAM Qatar" />
          <meta name="twitter:description" content="ANAM Qatar manufactures and installs HDPE shades, Kwik Span shades, and modern pergolas for residential and commercial outdoor spaces across Qatar." />
        </Helmet>
      )}
      {product.slug === "fencing" && (
        <Helmet>
          <title>Fencing Products in Qatar | WPC, PVC & Chain Link Fencing | ANAM Qatar</title>
          <meta name="title" content="Fencing Products in Qatar | WPC, PVC & Chain Link Fencing | ANAM Qatar" />
          <meta name="description" content="ANAM Qatar supplies durable fencing products in Qatar, including WPC fencing, PVC fencing, and PVC-coated chain link fencing for villas, gardens, commercial properties, and outdoor spaces." />
          <meta name="keywords" content="Fencing Products in Qatar, Fencing Qatar, WPC Fencing Qatar, PVC Fencing Qatar, PVC Coated Chain Link Fencing Qatar, Chain Link Fence Qatar, Fence Supplier Qatar, Fencing Contractor Qatar, Villa Fencing Qatar, Garden Fencing Qatar, Commercial Fencing Qatar, Fence Installation Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/products/fencing" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Fencing Products in Qatar | WPC, PVC & Chain Link Fencing | ANAM Qatar" />
          <meta property="og:description" content="Explore durable WPC fencing, PVC fencing, and PVC-coated chain link fencing solutions for residential and commercial properties in Qatar." />
          <meta property="og:url" content="https://anamqatar.com/products/fencing" />
          <meta property="og:site_name" content="ANAM Qatar" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Fencing Products in Qatar | WPC, PVC & Chain Link Fencing | ANAM Qatar" />
          <meta name="twitter:description" content="ANAM Qatar supplies and installs WPC, PVC, and PVC-coated chain link fencing for villas, gardens, and commercial spaces across Qatar." />
        </Helmet>
      )}
      {(product.slug === "upvc" || filterTerm === "upvc") && (
        <Helmet>
          <title>UPVC Products in Qatar | UPVC Doors & Windows | ANAM Qatar</title>
          <meta name="title" content="UPVC Products in Qatar | UPVC Doors & Windows | ANAM Qatar" />
          <meta name="description" content="ANAM Qatar provides high-quality UPVC products in Qatar, including durable UPVC doors and windows for villas, apartments, offices, and commercial spaces." />
          <meta name="keywords" content="UPVC Products in Qatar, UPVC Products Qatar, UPVC Doors Qatar, UPVC Door Supplier Qatar, UPVC Windows Qatar, UPVC Window Supplier Qatar, UPVC Doors and Windows Qatar, UPVC Supplier Doha, UPVC Installation Qatar, Residential UPVC Doors Qatar, Commercial UPVC Windows Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/products/upvc" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="UPVC Products in Qatar | UPVC Doors & Windows | ANAM Qatar" />
          <meta property="og:description" content="Explore durable and high-quality UPVC doors and windows in Qatar from ANAM Qatar for residential and commercial properties." />
          <meta property="og:url" content="https://anamqatar.com/products/upvc" />
          <meta property="og:site_name" content="ANAM Qatar" />
          <meta property="og:image" content="https://anamqatar.com/images/upvc-products-hero-qatar.webp" />
          <meta property="og:locale" content="en_QA" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="UPVC Products in Qatar | UPVC Doors & Windows | ANAM Qatar" />
          <meta name="twitter:description" content="ANAM Qatar supplies and installs high-quality UPVC doors and windows for villas, apartments, offices, and commercial spaces across Qatar." />
          <meta name="twitter:image" content="https://anamqatar.com/images/upvc-products-hero-qatar.webp" />
        </Helmet>
      )}
      {(product.slug === "aluminum" || product.slug === "aluminium" || filterTerm === "aluminium") && (
        <Helmet>
          <title>Best Aluminium Company in Qatar | Doors, Windows & Partitions | ANAM</title>
          <meta name="title" content="Best Aluminium Company in Qatar | Doors, Windows & Partitions | ANAM" />
          <meta name="description" content="ANAM is a trusted aluminium company in Qatar offering modern aluminium doors, windows, partitions, and ceiling solutions with professional supply and installation." />
          <meta name="keywords" content="Best Aluminium Company in Qatar, Aluminium Company Qatar, Aluminium Company Doha, Aluminium Products Qatar, Aluminium Doors Qatar, Aluminium Windows Qatar, Aluminium Partitions Qatar, Aluminium Ceiling Qatar, Aluminium Door Supplier Qatar, Aluminium Window Supplier Qatar, Aluminium Fabrication Qatar, Aluminium Installation Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/products/aluminum" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Best Aluminium Company in Qatar | Doors, Windows & Partitions | ANAM" />
          <meta property="og:description" content="Explore modern aluminium doors, windows, partitions, and ceiling solutions in Qatar with professional supply, fabrication, and installation services from ANAM." />
          <meta property="og:url" content="https://anamqatar.com/products/aluminum" />
          <meta property="og:site_name" content="ANAM Qatar" />
          <meta property="og:image" content="https://anamqatar.com/images/aluminium-products-hero-qatar.webp" />
          <meta property="og:locale" content="en_QA" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Best Aluminium Company in Qatar | Doors, Windows & Partitions | ANAM" />
          <meta name="twitter:description" content="ANAM Qatar supplies and installs premium aluminium doors, windows, partitions, and ceiling systems for residential and commercial properties." />
          <meta name="twitter:image" content="https://anamqatar.com/images/aluminium-products-hero-qatar.webp" />
        </Helmet>
      )}
      {(product.slug === "stainless-steel" || product.slug === "stainless" || filterTerm === "stainless-steel" || filterTerm === "stainless") && (
        <Helmet>
          <title>Stainless Steel Sheet Suppliers in Qatar | ANAM Qatar</title>
          <meta name="title" content="Stainless Steel Sheet Suppliers in Qatar | ANAM Qatar" />
          <meta name="description" content="ANAM Qatar is a trusted stainless steel sheet supplier in Qatar, offering durable stainless steel products for construction, interior, commercial, and industrial applications." />
          <meta name="keywords" content="Stainless Steel Sheet Suppliers in Qatar, Stainless Steel Supplier Qatar, Stainless Steel Sheets Qatar, Stainless Steel Company Qatar, Stainless Steel Products Qatar, SS Sheet Supplier Doha, Stainless Steel Fabrication Qatar, Stainless Steel Installation Qatar, Stainless Steel Materials Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/products/stainless-steel" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Stainless Steel Sheet Suppliers in Qatar | ANAM Qatar" />
          <meta property="og:description" content="Explore durable stainless steel sheets and products in Qatar from ANAM Qatar for construction, interior, commercial, and industrial projects." />
          <meta property="og:url" content="https://anamqatar.com/products/stainless-steel" />
          <meta property="og:site_name" content="ANAM Qatar" />
          <meta property="og:image" content="https://anamqatar.com/images/stainless-steel-products-hero-qatar.webp" />
          <meta property="og:locale" content="en_QA" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Stainless Steel Sheet Suppliers in Qatar | ANAM Qatar" />
          <meta name="twitter:description" content="ANAM Qatar supplies high-quality stainless steel sheets and products for construction, commercial, interior, and industrial applications across Qatar." />
          <meta name="twitter:image" content="https://anamqatar.com/images/stainless-steel-products-hero-qatar.webp" />
        </Helmet>
      )}
      <main>
        <>
            {/* Top Hero Section */}
            {!activeSubproduct ? (
              <ProductHero
                title={product.name}
                categoryTag={`Premium ${product.name} Solutions`}
                description={
                  product.description ||
                  `ANAM Qatar provides high-quality ${product.name.toLowerCase()} solutions for residential and commercial spaces across Qatar.`
                }
                image={product.image}
                badgeTitle={`${product.name} Specialists`}
                badgeSubtitle="Doha, Qatar"
                ctaText={`Explore ${product.name}`}
                ctaLink="#product-categories"
              />
            ) : (
              /* Subproduct Breadcrumb Hero */
              <section
                className="relative h-[50vh] min-h-[380px] flex items-center px-6 md:px-10 bg-cover bg-center bg-gray-900"
                style={{
                  backgroundImage: `url(${activeSubproduct?.image ||
                    product.image ||
                    "https://plus.unsplash.com/premium_photo-1683129627035-e5a145c3d705"
                    })`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#5a0f2f]/90 via-black/40 to-black/20" />
                <div className="z-10 max-w-7xl mx-auto w-full absolute bottom-10 text-center left-1/2 -translate-x-1/2 px-4">
                  {(activeSubproduct || isFilterView) && (
                    <button
                      onClick={() => {
                        if (isFilterView) {
                          navigate("/");
                        } else {
                          const parentSegments = segments.slice(0, -1);
                          navigate(`/products/${parentSegments.join("/")}`);
                        }
                      }}
                      className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C9A86A] bg-black/40 px-4 py-2 border border-[#C9A86A]/40 backdrop-blur-sm cursor-pointer hover:bg-black/60 transition"
                    >
                      ← Back to {isFilterView ? "Home" : "Categories"}
                    </button>
                  )}
                  <h1 className="anam-hero-title !text-white text-center">
                    {activeSubproduct ? activeSubproduct.name : product.name}
                  </h1>
                  <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mt-2 leading-relaxed">
                    {activeSubproduct
                      ? activeSubproduct.description
                      : product.description}
                  </p>
                </div>
              </section>
            )}

            {/* Content */}
            <section
              id={product.slug === "flooring" ? "flooring-categories" : "product-categories"}
              className="py-20 px-6 bg-[#f9f4ef]"
            >
              <div className="max-w-7xl mx-auto">
                {/* 🔙 Back Button */}
                <h2 className="anam-section-title mb-10">
                  {isFilterView
                    ? `${product.name}`
                    : activeSubproduct
                      ? `${activeSubproduct.name} Products`
                      : "Product Categories"}
                </h2>

                {activeSubproduct && (!data?.categories || data.categories.length === 0) ? (
                  <div className="space-y-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white p-8 md:p-12 shadow-sm border border-gray-100">
                      <div className="overflow-hidden rounded-lg">
                        <img loading="lazy" decoding="async"
                          src={activeSubproduct.image || "/placeholder.jpg"}
                          alt={activeSubproduct.alt || activeSubproduct.name}
                          title={activeSubproduct.title || activeSubproduct.name}
                          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-sm"
                        />
                      </div>
                      <div className="space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 inline-block">
                          {product.name}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                          {activeSubproduct.name}
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed">
                          {activeSubproduct.alt || activeSubproduct.description || `Premium quality ${activeSubproduct.name.toLowerCase()} supplied and professionally installed across Qatar by ANAM Trading & Contracting.`}
                        </p>

                        {/* Specifications */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                          {activeSubproduct.thickness && (
                            <div className="bg-[#faf7f5] p-4 rounded-md">
                              <span className="text-xs text-gray-400 block uppercase font-semibold">Thickness</span>
                              <span className="text-sm font-bold text-gray-800 mt-1 block">{activeSubproduct.thickness}</span>
                            </div>
                          )}
                          {activeSubproduct.warranty && (
                            <div className="bg-[#faf7f5] p-4 rounded-md">
                              <span className="text-xs text-gray-400 block uppercase font-semibold">Warranty</span>
                              <span className="text-sm font-bold text-gray-800 mt-1 block">{activeSubproduct.warranty}</span>
                            </div>
                          )}
                          {activeSubproduct.wearLayer && (
                            <div className="bg-[#faf7f5] p-4 rounded-md">
                              <span className="text-xs text-gray-400 block uppercase font-semibold">Wear Layer</span>
                              <span className="text-sm font-bold text-gray-800 mt-1 block">{activeSubproduct.wearLayer}</span>
                            </div>
                          )}
                          <div className="bg-[#faf7f5] p-4 rounded-md">
                            <span className="text-xs text-gray-400 block uppercase font-semibold">Availability</span>
                            <span className="text-sm font-bold text-gray-800 mt-1 block">In Stock / Doha</span>
                          </div>
                          <div className="bg-[#faf7f5] p-4 rounded-md">
                            <span className="text-xs text-gray-400 block uppercase font-semibold">Installation</span>
                            <span className="text-sm font-bold text-gray-800 mt-1 block">Turnkey Service</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                          <a
                            href="/contact"
                            className="bg-primary text-white px-8 py-3.5 font-bold hover:bg-black transition uppercase text-xs tracking-widest shadow-md inline-flex items-center"
                          >
                            Request a Quote ↗
                          </a>
                          <a
                            href="https://wa.me/97430081007"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white px-8 py-3.5 font-bold hover:bg-[#1faa53] transition uppercase text-xs tracking-widest shadow-md inline-flex items-center gap-2"
                          >
                            Inquire via WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Related options in this product category */}
                    {product?.categories && product.categories.filter((c) => c.slug !== activeSubproduct.slug).length > 0 && (
                      <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">
                          Other {product.name} Options
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                          {product.categories
                            .filter((c) => c.slug !== activeSubproduct.slug)
                            .map((sibling) => (
                              <div
                                key={sibling.slug}
                                onClick={() => navigate(`/products/${product.slug}/${sibling.slug}`)}
                                className="bg-white p-4 shadow-sm border border-gray-100 transition hover:shadow-lg cursor-pointer group"
                              >
                                <div className="overflow-hidden h-[200px]">
                                  <img loading="lazy" decoding="async"
                                    src={sibling.image || "/placeholder.jpg"}
                                    alt={sibling.alt || sibling.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                                <h4 className="text-md font-bold text-gray-900 mt-3 group-hover:text-primary transition-colors">
                                  {sibling.name}
                                </h4>
                                <span className="text-xs text-primary font-semibold mt-2 inline-block">
                                  View Details →
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {data?.categories?.map((prod) => (
                        <div
                          key={prod.slug || prod.name}
                          onClick={() => {
                            if (!prod.slug) return;
                            if (isCatalogOverview) {
                              navigate(`/products/${prod.slug}`);
                            } else if (segments.length > 0) {
                              navigate(`/products/${segments.join("/")}/${prod.slug}`);
                            } else if (overrideSlug) {
                              navigate(`/products/${overrideSlug}/${prod.slug}`);
                            } else {
                              navigate(`/products/${product.slug}/${prod.slug}`);
                            }
                          }}
                          className="bg-white p-4 shadow-sm border border-gray-100 transition hover:shadow-lg cursor-pointer group flex flex-col justify-between"
                        >
                          <div>
                            <div className="overflow-hidden h-[220px] bg-gray-100 rounded">
                              <img loading="lazy" decoding="async"
                                src={prod.image || "/placeholder.jpg"}
                                alt={prod.alt || prod.name}
                                title={prod.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mt-4 group-hover:text-primary transition-colors">
                              {prod.name}
                            </h3>
                          </div>
                          <div className="mt-3 pt-2 border-t border-gray-50 flex items-center justify-between">
                            <span className="text-xs text-primary font-bold tracking-wide group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                              {prod.categories ? "Explore Options →" : "View Specifications →"}
                            </span>
                          </div>

                          {/* Specs only for final items */}
                          {activeSubproduct && (
                            <div className="space-y-2 mt-4 text-sm">
                              {prod.thickness && (
                                <p>
                                  <strong>Thickness:</strong> {prod.thickness}
                                </p>
                              )}
                              {prod.warranty && (
                                <p>
                                  <strong>Warranty:</strong> {prod.warranty}
                                </p>
                              )}
                              {prod.wearLayer && (
                                <p>
                                  <strong>Wear Layer:</strong> {prod.wearLayer}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center">
                      <Link to="/contact" className="mt-10 inline-block bg-primary text-white px-10 py-4 font-bold hover:bg-black transition uppercase text-sm tracking-widest shadow-lg">
                        Request a Quote ↗
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </section>

            {data?.applications && (
              <section className="bg-primary py-16 px-6 text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="w-full md:w-2/3">
                    <h2 className="anam-section-title !text-white tracking-tight">
                      Ideal Applications
                    </h2>
                    <div className="flex flex-wrap gap-4 mt-4">
                      {product.applications.map((app, i) => (
                        <span
                          key={i}
                          className="bg-white/10 px-4 py-2 border border-white/20 text-sm font-bold uppercase tracking-widest"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full md:w-auto text-left md:text-right">
                    <p className="text-white/70 italic mb-2">
                      Need professional advice?
                    </p>
                    <a
                      href="https://wa.me/97430081007"
                      className="text-xl font-bold bg-white py-2 px-4 inline-block mt-4 text-black hover:bg-black hover:text-white"
                    >
                      Speak to an Expert
                    </a>
                  </div>
                </div>
              </section>
            )}
            {data.features && data.benefits && (
              <section className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Features List */}
                    <div className="bg-white p-10 border-t-4 border-primary shadow-sm">
                      <h3 className="anam-h3 !mt-0 mb-6 tracking-tight">
                        Key Features
                      </h3>
                      <ul className="space-y-4">
                        {data.features.map((feat, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <span className="w-2 h-2 bg-primary shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits List */}
                    <div className="bg-white p-10 border-t-4 border-black shadow-sm">
                      <h3 className="anam-h3 !mt-0 mb-6 tracking-tight">
                        Key Benefits
                      </h3>
                      <ul className="space-y-4">
                        {data.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <span className="w-2 h-2 bg-black shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </>
      </main>
    </Layout>
  );
};

export default ProductDetail;

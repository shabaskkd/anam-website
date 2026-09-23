import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { productData } from "../data/productData";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import WallPanelsSection from "../components/WallPanelsSection";
import DoorsSection from "../components/DoorsSection";
import WindowsSection from "../components/WindowsSection";
import PartitionsSection from "../components/PartitionsSection";
import CeilingSolutionsSection from "../components/CeilingSolutionsSection";
import KitchenWardrobeSection from "../components/KitchenWardrobeSection";
import FlooringHero from "../components/FlooringHero";
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
        name: filterTerm.toUpperCase() + " Products",
        description: `Discover our premium ${filterTerm} solutions, engineered for durability, modern aesthetics, and high performance.`,
        slug: segments[0],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
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
      {product.slug === "wall-panels" && (
        <Helmet>
          <title>Wall Panels in Qatar: Top Wall Cladding Supplier</title>
          <meta name="title" content="Wall Panels in Qatar: Top Wall Cladding Supplier" />
          <meta name="description" content="ANAM Qatar provides premium wall panels, wall cladding and decorative wall panels for residential and commercial spaces in Qatar." />
          <meta name="keywords" content="Wall Panels in Qatar, Wall Cladding Supplier Doha, Wall Cladding Qatar, Decorative Wall Panels Qatar, Interior Wall Panels Doha, ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/wall-panels" />

          {/* Open Graph / Facebook / WhatsApp */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anamqatar.com/wall-panels" />
          <meta property="og:title" content="Wall Panels in Qatar: Top Wall Cladding Supplier" />
          <meta property="og:description" content="ANAM Qatar provides premium wall panels, wall cladding and decorative wall panels for residential and commercial spaces in Qatar." />
          <meta property="og:image" content="https://anamqatar.com/images/wall-panels-qatar.webp" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://anamqatar.com/wall-panels" />
          <meta name="twitter:title" content="Wall Panels in Qatar: Top Wall Cladding Supplier" />
          <meta name="twitter:description" content="ANAM Qatar provides premium wall panels, wall cladding and decorative wall panels for residential and commercial spaces in Qatar." />
          <meta name="twitter:image" content="https://anamqatar.com/images/wall-panels-qatar.webp" />
        </Helmet>
      )}
      {product.slug === "doors" && (
        <Helmet>
          <title>Doors in Qatar | Premium Door Supplier|</title>
          <meta name="title" content="Doors in Qatar | Premium Door Supplier|" />
          <meta name="description" content="ANAM Qatar provides premium wooden, aluminium, WPC and UPVC doors for residential and commercial spaces across Qatar with modern designs and professional installation." />
          <meta name="keywords" content="Doors in Qatar, Door Supplier Qatar, Door Suppliers Doha, Wooden Doors Qatar, Aluminium Doors Qatar, WPC Doors Qatar, UPVC Doors Qatar, Interior Doors Qatar, Exterior Doors Qatar, Premium Doors Qatar, Modern Doors Qatar, Residential Doors Qatar, Commercial Doors Qatar, Door Installation Qatar, ANAM" />
          <meta name="author" content="ANAM" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/doors" />

          {/* Open Graph / Facebook / WhatsApp */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anamqatar.com/doors" />
          <meta property="og:title" content="Doors in Qatar | Premium Door Supplier|" />
          <meta property="og:description" content="ANAM Qatar provides premium wooden, aluminium, WPC and UPVC doors for residential and commercial spaces across Qatar with modern designs and professional installation." />
          <meta property="og:image" content="https://anamqatar.com/images/doors-qatar.webp" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://anamqatar.com/doors" />
          <meta name="twitter:title" content="Doors in Qatar | Premium Door Supplier|" />
          <meta name="twitter:description" content="ANAM Qatar provides premium wooden, aluminium, WPC and UPVC doors for residential and commercial spaces across Qatar with modern designs and professional installation." />
          <meta name="twitter:image" content="https://anamqatar.com/images/doors-qatar.webp" />
        </Helmet>
      )}
      {product.slug === "windows" && (
        <Helmet>
          <title>Windows Providers in Doha Qatar | Premium Window Supplier</title>
          <meta name="title" content="Windows Providers in Doha Qatar | Premium Window Supplier" />
          <meta name="description" content="ANAM Qatar is a trusted Windows Provider in Doha Qatar, offering high-quality Aluminium and UPVC windows for residential and commercial projects with expert installation." />
          <meta name="keywords" content="Windows Providers in Doha Qatar, Window Supplier Qatar, Aluminium Windows Qatar, UPVC Windows Qatar, Sliding Windows Qatar, Casement Windows Qatar, Window Installation Doha, Commercial Windows Qatar, Residential Windows Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/windows" />

          {/* Open Graph Tags */}
          <meta property="og:title" content="Windows Providers in Doha Qatar | Premium Window Supplier" />
          <meta property="og:description" content="ANAM Qatar is a trusted Windows Provider in Doha Qatar. High-quality UPVC windows and aluminium windows for residential and commercial spaces." />
          <meta property="og:url" content="https://anamqatar.com/windows" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="ANAM Qatar" />
          <meta property="og:image" content="https://anamqatar.com/images/windows-hero-qatar.webp" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Windows Providers in Doha Qatar | Premium Window Supplier" />
          <meta name="twitter:description" content="ANAM Qatar is a trusted Windows Provider in Doha Qatar, offering durable UPVC windows and aluminium windows with expert installation." />
          <meta name="twitter:image" content="https://anamqatar.com/images/windows-hero-qatar.webp" />
        </Helmet>
      )}
      {product.slug === "partitions" && (
        <Helmet>
          <title>Partition Services in Qatar | Office & Glass Partitions</title>
          <meta name="title" content="Partition Services in Qatar | Office & Glass Partitions" />
          <meta name="description" content="ANAM Qatar provides professional Partition Services in Qatar. High-quality glass, gypsum, and aluminium partitions for offices, commercial spaces, and residential interiors." />
          <meta name="keywords" content="Partition Services in Qatar, Office Partition Qatar, Glass Partition Qatar, Gypsum Partition Qatar, Aluminium Partition Qatar, Commercial Partition Qatar, Residential Partition Qatar, Interior Partition Doha, Partition Installation Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/products/partitions" />

          {/* Open Graph Tags */}
          <meta property="og:title" content="Partition Services in Qatar | Office & Glass Partitions" />
          <meta property="og:description" content="ANAM Qatar provides professional Partition Services in Qatar for offices, commercial spaces, and homes with expert installation." />
          <meta property="og:url" content="https://anamqatar.com/products/partitions" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="ANAM Qatar" />
          <meta property="og:image" content="https://anamqatar.com/images/partition-services-qatar.webp" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Partition Services in Qatar | Office & Glass Partitions" />
          <meta name="twitter:description" content="ANAM Qatar offers glass, gypsum, and aluminium partition services in Qatar for modern office and residential interiors." />
          <meta name="twitter:image" content="https://anamqatar.com/images/partition-services-qatar.webp" />
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
          <title>Premium Kitchen Cabinets, Wardrobes & Interiors in Qatar | ANAM Qatar</title>
          <meta name="title" content="Premium Kitchen Cabinets, Wardrobes & Interiors in Qatar | ANAM Qatar" />
          <meta name="description" content="ANAM Qatar offers premium kitchen cabinets, wardrobes, and interior solutions in Qatar with modern designs, quality materials, and professional installation for homes, villas, and apartments." />
          <meta name="keywords" content="Premium Kitchen Cabinets Qatar, Wardrobes Qatar, Interiors Qatar, Kitchen Cabinets in Qatar, Kitchen Wardrobe Qatar, Custom Wardrobes Qatar, Modular Kitchen Cabinets Qatar, Interior Solutions Qatar, Kitchen Cabinets Doha, Wardrobe Installation Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/kitchen-wardrobe" />

          {/* Open Graph Tags */}
          <meta property="og:title" content="Premium Kitchen Cabinets, Wardrobes & Interiors in Qatar | ANAM Qatar" />
          <meta property="og:description" content="Get stylish kitchen cabinets, custom wardrobes, and premium interior solutions in Qatar from ANAM Qatar with expert design and installation services." />
          <meta property="og:url" content="https://anamqatar.com/kitchen-wardrobe" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="ANAM Qatar" />
          <meta property="og:image" content="https://anamqatar.com/images/premium-kitchen-cabinets-qatar.webp" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Premium Kitchen Cabinets, Wardrobes & Interiors in Qatar | ANAM Qatar" />
          <meta name="twitter:description" content="ANAM Qatar provides premium kitchen cabinets, wardrobes, and interiors in Qatar for modern residential spaces." />
          <meta name="twitter:image" content="https://anamqatar.com/images/premium-kitchen-cabinets-qatar.webp" />
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
          <title>Ceiling Solutions in Qatar | Acoustic, Aluminium, Wooden & PVC Gypsum Ceilings | ANAM Qatar</title>
          <meta name="title" content="Ceiling Solutions in Qatar | Acoustic, Aluminium, Wooden & PVC Gypsum Ceilings | ANAM Qatar" />
          <meta name="description" content="ANAM Qatar provides professional Ceiling Solutions in Qatar, including acoustic ceilings, aluminium ceilings, wooden ceilings, mineral fibre ceilings, fibreglass ceilings, and PVC gypsum ceilings for residential and commercial spaces." />
          <meta name="keywords" content="Professional ceiling solutions including acoustic ceilings, aluminium ceilings, wooden ceilings, mineral fibre ceilings, fibreglass ceilings, and PVC gypsum ceilings across Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <link rel="canonical" href="https://anamqatar.com/products/ceiling-solutions" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ceiling Solutions in Qatar | Acoustic, Aluminium, Wooden & PVC Gypsum Ceilings | ANAM Qatar" />
          <meta property="og:description" content="ANAM Qatar provides professional Ceiling Solutions in Qatar, including acoustic ceilings, aluminium ceilings, wooden ceilings, mineral fibre ceilings, fibreglass ceilings, and PVC gypsum ceilings." />
          <meta property="og:url" content="https://anamqatar.com/products/ceiling-solutions" />
          <meta property="og:site_name" content="ANAM Qatar" />
          <meta property="og:image" content="https://anamqatar.com/images/ceiling-solutions-qatar.webp" />
          <meta property="og:locale" content="en_QA" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Ceiling Solutions in Qatar | Acoustic, Aluminium, Wooden & PVC Gypsum Ceilings | ANAM Qatar" />
          <meta name="twitter:description" content="ANAM Qatar provides professional Ceiling Solutions in Qatar for homes, offices and commercial projects." />
          <meta name="twitter:image" content="https://anamqatar.com/images/ceiling-solutions-qatar.webp" />
        </Helmet>
      )}
      {product.slug === "profile-accessories" && (
        <Helmet>
          <title>Profile & Accessories in Qatar | Decorative Profiles, Skirting & Tile Finishing | ANAM Qatar</title>
          <meta name="title" content="Profile & Accessories in Qatar | Decorative Profiles, Skirting & Tile Finishing | ANAM Qatar" />
          <meta name="description" content="ANAM Qatar offers premium profile & accessories in Qatar, including interior decorative profiles & moldings, skirting profiles, stair step nosing & safety profiles, and tile finishing profiles for residential and commercial projects." />
          <meta name="keywords" content="Profile & Accessories in Qatar, Profile Accessories Qatar, Decorative Profiles Qatar, Interior Decorative Profiles Qatar, Interior Decorative Moldings Qatar, Skirting Profile Qatar, Stair Step Nosing Qatar, Safety Profile Qatar, Tile Finishing Profile Qatar, Aluminium Tile Trim Qatar, Tile Edge Profile Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/products/profile-accessories" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Profile & Accessories in Qatar | Decorative Profiles, Skirting & Tile Finishing | ANAM Qatar" />
          <meta property="og:description" content="Discover premium profile & accessories in Qatar, including decorative profiles, skirting profiles, stair nosing, safety profiles, and tile finishing profiles from ANAM Qatar." />
          <meta property="og:url" content="https://anamqatar.com/products/profile-accessories" />
          <meta property="og:site_name" content="ANAM Qatar" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Profile & Accessories in Qatar | Decorative Profiles, Skirting & Tile Finishing | ANAM Qatar" />
          <meta name="twitter:description" content="ANAM Qatar supplies premium decorative profiles, skirting profiles, stair step nosing, safety profiles, and tile finishing profiles across Qatar." />
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

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="UPVC Products in Qatar | UPVC Doors & Windows | ANAM Qatar" />
          <meta name="twitter:description" content="ANAM Qatar supplies and installs high-quality UPVC doors and windows for villas, apartments, offices, and commercial spaces across Qatar." />
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

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Best Aluminium Company in Qatar | Doors, Windows & Partitions | ANAM" />
          <meta name="twitter:description" content="ANAM Qatar supplies and installs premium aluminium doors, windows, partitions, and ceiling systems for residential and commercial properties." />
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

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Stainless Steel Sheet Suppliers in Qatar | ANAM Qatar" />
          <meta name="twitter:description" content="ANAM Qatar supplies high-quality stainless steel sheets and products for construction, commercial, interior, and industrial applications across Qatar." />
        </Helmet>
      )}
      <main>
        {product.slug === "kitchen-wardrobe" && !activeSubproduct ? (
          <KitchenWardrobeSection />
        ) : product.slug === "windows" && !activeSubproduct ? (
          <WindowsSection />
        ) : product.slug === "partitions" && !activeSubproduct ? (
          <PartitionsSection />
        ) : product.slug === "ceiling-solutions" && !activeSubproduct ? (
          <CeilingSolutionsSection />
        ) : product.slug === "wall-panels" && !activeSubproduct ? (
          <WallPanelsSection />
        ) : product.slug === "doors" && !activeSubproduct ? (
          <DoorsSection />
        ) : (
          <>
            {/* Top Hero Section */}
            {!activeSubproduct ? (
              product.slug === "flooring" ? (
                <FlooringHero />
              ) : (
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
                  ctaLink={product.slug === "flooring" ? "#flooring-categories" : "#product-categories"}
                />
              )
            ) : (
              /* Subproduct Breadcrumb Hero */
              <section
                className="relative h-[50vh] min-h-[380px] flex items-center px-6 md:px-10 bg-cover bg-center bg-gray-900"
                style={{
                  backgroundImage: `url(${
                    activeSubproduct?.image ||
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
                  <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
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
                <h2 className="text-4xl font-bold mb-10">
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
                    <img
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
                              <img
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
                          <img
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
                  <button className="mt-10 bg-primary text-white px-10 py-4 font-bold hover:bg-black transition uppercase text-sm tracking-widest shadow-lg">
                    Request a Quote ↗
                  </button>
                </div>
              </>
            )}
          </div>
        </section>

        {data?.applications && (
          <section className="bg-primary py-16 px-6 text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="w-1/2">
                    <h2 className="text-3xl font-bold uppercase tracking-tighter">
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
                  <div className="text-right">
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
                      <h3 className="text-2xl font-bold mb-6 text-gray-900 uppercase tracking-tight">
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
                      <h3 className="text-2xl font-bold mb-6 text-gray-900 uppercase tracking-tight">
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
        )}
      </main>
    </Layout>
  );
};

export default ProductDetail;

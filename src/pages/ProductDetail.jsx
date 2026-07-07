import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { productData } from "../data/productData";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

const ProductDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const splat = params["*"] || "";
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

  const isFilterView = Boolean(filterTerm);
  const matchedItems = isFilterView ? collectAllLeafItems(productData, filterTerm) : [];

  const product = isFilterView
    ? {
        name: filterTerm.toUpperCase() + " Products",
        description: `Discover our premium ${filterTerm} solutions, engineered for durability, modern aesthetics, and high performance.`,
        slug: segments[0],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      }
    : (resolvedPath[0] || null);

  if (!product) {
    return (
      <div className="py-40 text-center font-bold text-2xl">
        Product Not Found
      </div>
    );
  }

  const activeSubproduct = isFilterView ? null : (resolvedPath.length > 1 ? resolvedNode : null);
  const data = isFilterView ? { categories: matchedItems } : (activeSubproduct ? activeSubproduct : product);

  return (
    <Layout withBg>
      {product.slug === "wall-panels" && (
        <Helmet>
          <title>Wall Panels in Qatar: Top Wall Cladding Supplier | ANAM</title>
          <meta name="title" content="Wall Panels in Qatar: Top Wall Cladding Supplier | ANAM" />
          <meta name="description" content="Looking for premium wall panels in Qatar? ANAM is a trusted wall cladding supplier in Doha, offering modern decorative wall panels for homes, offices, and commercial spaces." />
          <meta name="keywords" content="Wall Panels in Qatar, Wall Cladding Supplier Doha, Wall Cladding Qatar, Decorative Wall Panels Qatar, Interior Wall Panels Doha, ANAM Qatar" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/wall-panels" />

          {/* Open Graph / Facebook / WhatsApp */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anamqatar.com/wall-panels" />
          <meta property="og:title" content="Wall Panels in Qatar: Top Wall Cladding Supplier | ANAM" />
          <meta property="og:description" content="Discover premium wall panels and wall cladding solutions in Qatar with ANAM. Stylish, durable, and modern wall panel designs for residential and commercial interiors." />
          <meta property="og:image" content="https://anamqatar.com/images/wall-panels-qatar.webp" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://anamqatar.com/wall-panels" />
          <meta name="twitter:title" content="Wall Panels in Qatar: Top Wall Cladding Supplier | ANAM" />
          <meta name="twitter:description" content="ANAM offers premium wall panels in Qatar with modern wall cladding solutions for homes, offices, and commercial spaces in Doha." />
          <meta name="twitter:image" content="https://anamqatar.com/images/wall-panels-qatar.webp" />
        </Helmet>
      )}
      {product.slug === "doors" && (
        <Helmet>
          <title>Doors in Qatar | Premium Door Supplier | ANAM</title>
          <meta name="title" content="Doors in Qatar | Premium Door Supplier | ANAM" />
          <meta name="description" content="ANAM is a leading door supplier in Qatar, offering premium wooden doors, aluminium doors, WPC doors, UPVC doors, and interior & exterior door solutions for residential and commercial projects." />
          <meta name="keywords" content="Doors in Qatar, Door Supplier Qatar, Door Suppliers Doha, Wooden Doors Qatar, Aluminium Doors Qatar, WPC Doors Qatar, UPVC Doors Qatar, Interior Doors Qatar, Exterior Doors Qatar, Premium Doors Qatar, Modern Doors Qatar, Residential Doors Qatar, Commercial Doors Qatar, Door Installation Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/doors" />

          {/* Open Graph / Facebook / WhatsApp */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anamqatar.com/doors" />
          <meta property="og:title" content="Doors in Qatar | Premium Door Supplier | ANAM" />
          <meta property="og:description" content="Discover premium doors in Qatar from ANAM. We supply wooden, aluminium, WPC, and UPVC doors for homes, villas, offices, and commercial projects with professional installation." />
          <meta property="og:image" content="https://anamqatar.com/images/doors-qatar.webp" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://anamqatar.com/products/doors" />
          <meta name="twitter:title" content="Doors in Qatar | Premium Door Supplier | ANAM" />
          <meta name="twitter:description" content="ANAM offers premium doors in Qatar, including wooden, aluminium, WPC, and UPVC doors with expert installation for residential and commercial spaces." />
          <meta name="twitter:image" content="https://anamqatar.com/images/doors-qatar.webp" />
        </Helmet>
      )}
      {product.slug === "windows" && (
        <Helmet>
          <title>Windows Providers in Doha Qatar | Premium Window Supplier | ANAM</title>
          <meta name="title" content="Windows Providers in Doha Qatar | Premium Window Supplier | ANAM" />
          <meta name="description" content="ANAM is a trusted windows provider in Doha, Qatar, offering premium aluminium windows, UPVC windows, sliding windows, and custom window solutions for residential and commercial projects." />
          <meta name="keywords" content="Windows Providers in Doha Qatar, Window Supplier Qatar, Aluminium Windows Qatar, UPVC Windows Qatar, Sliding Windows Qatar, Casement Windows Qatar, Window Installation Doha, Commercial Windows Qatar, Residential Windows Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/products/windows" />

          {/* Open Graph / Facebook / WhatsApp */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anamqatar.com/products/windows" />
          <meta property="og:title" content="Windows Providers in Doha Qatar | Premium Window Supplier | ANAM" />
          <meta property="og:description" content="Discover premium aluminium, UPVC, sliding, and custom windows in Doha, Qatar. ANAM provides high-quality window solutions with expert installation for homes and commercial projects." />
          <meta property="og:image" content="https://anamqatar.com/images/windows-qatar.webp" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://anamqatar.com/products/windows" />
          <meta name="twitter:title" content="Windows Providers in Doha Qatar | Premium Window Supplier | ANAM" />
          <meta name="twitter:description" content="ANAM supplies premium aluminium, UPVC, and sliding windows in Doha, Qatar with professional installation for residential and commercial projects." />
          <meta name="twitter:image" content="https://anamqatar.com/images/windows-qatar.webp" />
        </Helmet>
      )}
      {product.slug === "partitions" && (
        <Helmet>
          <title>Partition Services in Qatar | Office & Glass Partitions | ANAM</title>
          <meta name="title" content="Partition Services in Qatar | Office & Glass Partitions | ANAM" />
          <meta name="description" content="ANAM provides professional partition services in Qatar, including office partitions, glass partitions, gypsum partitions, aluminium partitions, and custom partition solutions." />
          <meta name="keywords" content="Partition Services in Qatar, Office Partition Qatar, Glass Partition Qatar, Gypsum Partition Qatar, Aluminium Partition Qatar, Commercial Partition Qatar, Residential Partition Qatar, Interior Partition Doha, Partition Installation Qatar, ANAM Qatar" />
          <meta name="author" content="ANAM" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://anamqatar.com/products/partitions" />

          {/* Open Graph / Facebook / WhatsApp */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anamqatar.com/products/partitions" />
          <meta property="og:title" content="Partition Services in Qatar | Office & Glass Partitions | ANAM" />
          <meta property="og:description" content="Transform interiors with ANAM's partition services in Qatar, including office, glass, gypsum, and aluminium partitions with expert installation." />
          <meta property="og:image" content="https://anamqatar.com/images/partition-services-qatar.webp" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://anamqatar.com/products/partitions" />
          <meta name="twitter:title" content="Partition Services in Qatar | Office & Glass Partitions | ANAM" />
          <meta name="twitter:description" content="ANAM offers premium partition services in Qatar with office, glass, gypsum, and aluminium partition solutions." />
          <meta name="twitter:image" content="https://anamqatar.com/images/partition-services-qatar.webp" />
        </Helmet>
      )}
      <main>
        {/* Hero Section */}
        <section
          className="relative h-[60vh] flex items-center px-10 bg-cover bg-center bg-gray-900"
          style={{
            backgroundImage: `url(${activeSubproduct?.image ||
              product.image ||
              "https://plus.unsplash.com/premium_photo-1683129627035-e5a145c3d705"
              })`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#5a0f2f]/80 to-transparent" />
          <div className="z-10 max-w-7xl mx-auto w-full absolute bottom-12 text-center left-1/2 -translate-x-1/2">
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
                className="mb-6 text-sm font-bold text-white cursor-pointer"
              >
                ← Back to {isFilterView ? "Home" : "Categories"}
              </button>
            )}
            <h1 className="text-white text-5xl md:text-7xl font-bold capitalize">
              {activeSubproduct ? activeSubproduct.name : product.name}
            </h1>
            <p className="text-white text-lg max-w-2xl mt-2">
              {activeSubproduct
                ? activeSubproduct.description
                : product.description}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6 bg-[#f9f4ef]">
          <div className="max-w-7xl mx-auto">
            {/* 🔙 Back Button */}

            <h2 className="text-4xl font-bold mb-10">
              {isFilterView
                ? `${product.name}`
                : activeSubproduct
                ? `${activeSubproduct.name} Products`
                : "Product Categories"}
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data?.categories?.map((prod) => (
                <div
                  key={prod.slug}
                  onClick={() => {
                    if (prod.categories) {
                      navigate(`/products/${segments.join("/")}/${prod.slug}`);
                    }
                  }}
                  className={`bg-white p-4 shadow-sm border border-gray-100 transition hover:shadow-lg ${
                    prod.categories ? "cursor-pointer" : ""
                  }`}
                >
                  <img
                    src={prod.image || "/placeholder.jpg"}
                    alt={prod.name}
                    className="w-full h-[250px] object-cover"
                  />

                  <h3 className="text-lg font-bold text-gray-900 mt-4">
                    {prod.name}
                  </h3>

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
                  href="https://wa.me/yournumber"
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
      </main>
    </Layout>
  );
};

export default ProductDetail;

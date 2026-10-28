import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsappButton";
import DownloadButton from "./components/Download";

// Lazy-loaded page components for fast initial bundle and optimal performance
const Home = lazy(() => import("./pages/Home"));
const AboutSection = lazy(() => import("./pages/About"));
const ProjectsPage = lazy(() => import("./pages/Projects"));
const ContactUs = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const BlogSection = lazy(() => import("./components/BlogSection"));
const CareerPage = lazy(() => import("./pages/Careers"));
const ServicesPage = lazy(() => import("./components/Service"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-8 h-8 border-4 border-[#800020] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products/*" element={<ProductDetail />} />
          <Route path="/flooring" element={<ProductDetail overrideSlug="flooring" />} />
          <Route path="/wall-panels" element={<ProductDetail overrideSlug="wall-panels" />} />
          <Route path="/doors" element={<ProductDetail overrideSlug="doors" />} />
          <Route path="/windows" element={<ProductDetail overrideSlug="windows" />} />
          <Route path="/partitions" element={<ProductDetail overrideSlug="partitions" />} />
          <Route path="/ceiling-solutions" element={<ProductDetail overrideSlug="ceiling-solutions" />} />
          <Route path="/kitchen-wardrobe" element={<ProductDetail overrideSlug="kitchen-wardrobe" />} />
          <Route path="/profile-accessories" element={<ProductDetail overrideSlug="profile-accessories" />} />
          <Route path="/upvc" element={<ProductDetail overrideSlug="upvc" />} />
          <Route path="/aluminum" element={<ProductDetail overrideSlug="aluminum" />} />
          <Route path="/aluminium" element={<ProductDetail overrideSlug="aluminium" />} />
          <Route path="/stainless-steel" element={<ProductDetail overrideSlug="stainless-steel" />} />
          <Route path="/fencing" element={<ProductDetail overrideSlug="fencing" />} />
          <Route path="/shades" element={<ProductDetail overrideSlug="shades" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {/* whatsapp & download icon */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-2 items-center">
        <DownloadButton />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;

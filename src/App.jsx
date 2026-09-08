import { BrowserRouter, Route, Routes } from "react-router-dom";

import BlogSection from "./components/BlogSection";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsappButton";
import AboutSection from "./pages/About";
import BlogDetail from "./pages/BlogDetail";
import CareerPage from "./pages/Careers";
import ContactUs from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ProjectsPage from "./pages/Projects";
import DownloadButton from "./components/Download";
import ServicesPage from "./components/Service";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

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
        <Route path="/wall-panels" element={<ProductDetail overrideSlug="wall-panels" />} />
        <Route path="/doors" element={<ProductDetail overrideSlug="doors" />} />
        <Route path="/windows" element={<ProductDetail overrideSlug="windows" />} />
        <Route path="/partitions" element={<ProductDetail overrideSlug="partitions" />} />
        <Route path="/ceiling-solutions" element={<ProductDetail overrideSlug="ceiling-solutions" />} />
        <Route path="/kitchen-wardrobe" element={<ProductDetail overrideSlug="kitchen-wardrobe" />} />
      </Routes>

      {/* whatsapp icon */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-2 items-center">
        <DownloadButton />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;

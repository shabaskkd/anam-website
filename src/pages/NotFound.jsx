import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Home, PhoneCall } from "lucide-react";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout withBg>
      <Helmet>
        <title>404 - Page Not Found | ANAM Qatar</title>
        <meta
          name="description"
          content="The page you are looking for might have been moved or does not exist. Explore ANAM Qatar premium architectural solutions."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="min-h-[70vh] flex items-center justify-center py-24 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="anam-hero-eyebrow justify-center">
            Error 404 • Resource Missing
          </span>

          <h1 className="anam-hero-title">
            Page Not <span>Found</span>
          </h1>

          <p className="anam-lead-p mx-auto">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let us guide you back to our architectural solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-black transition-colors shadow-md"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-gray-900 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Explore Services
            </Link>

            <a
              href="https://wa.me/97430081007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-[#20ba5a] transition-colors shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}

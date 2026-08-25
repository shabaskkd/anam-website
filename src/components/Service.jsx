import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import Layout from "./Layout";
import { serviceDetails } from "../data/serviceData";

export default function ServicesPage() {
  return (
    <Layout>
      <Helmet>
        <title>Services | ANAM Trading & Contracting Qatar</title>
        <meta
          name="description"
          content="Explore general contracting, turnkey construction, renovation and fit-out, civil and MEP works, acoustic solutions, and landscape design and development by ANAM Qatar."
        />
        <meta
          name="keywords"
          content="general contracting Qatar, fit-out Qatar, MEP works Qatar, acoustic solutions Qatar, landscape design Doha, turnkey construction Qatar"
        />
        <link rel="canonical" href="https://anamqatar.com/services" />
      </Helmet>

      <section className="w-full bg-[#fbf9f8] text-[#171717]">
        {/* HERO BANNER */}
        <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden bg-primary">
          <img
            src="/images/wall-panel-1.webp"
            alt="ANAM Qatar Services"
            className="w-full h-full object-cover opacity-35 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent flex items-center justify-center text-center px-6">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                Turnkey & Fit-out Excellence
              </div>
              <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight uppercase leading-tight">
                Our Services & Contracting Solutions
              </h1>
              <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Over 30 years of total expertise delivering architectural excellence, general contracting, turnkey fit-out, and premium interior & exterior solutions across Qatar.
              </p>
            </div>
          </div>
        </div>

        {/* SERVICES GRID SECTION */}
        <div className="max-w-7xl mx-auto py-20 px-6 md:px-12">
          <div className="text-center mb-16 space-y-3">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              Tailored Architectural Execution
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 uppercase">
              Comprehensive Contracting Capabilities
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map((service, index) => (
              <div
                key={service.slug || index}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                      Service {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-normal">
                      {service.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHY WORK WITH US STRIP */}
        <div className="bg-primary text-white py-16 px-6 md:px-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wider text-base mb-1">Quality Assurance</h4>
                <p className="text-white/75 text-xs leading-relaxed">Compliant with strict Qatar building standards and high durability requirements.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wider text-base mb-1">On-Time Delivery</h4>
                <p className="text-white/75 text-xs leading-relaxed">Structured project scheduling, milestone tracking, and efficient execution.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wider text-base mb-1">End-to-End Support</h4>
                <p className="text-white/75 text-xs leading-relaxed">From initial brief and material selection to final handover and maintenance support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="py-20 px-6 md:px-12 bg-white text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-gray-900">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
              Speak to our contracting and engineering experts to discuss specifications, site visits, and competitive quotations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-black transition-colors inline-flex items-center gap-3 shadow-lg text-sm"
              >
                Contact Us Today
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/97430081007"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-green-700 transition-colors inline-flex items-center gap-3 shadow-lg text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                WhatsApp Expert
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

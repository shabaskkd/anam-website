import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import { getServiceBySlug } from "../data/serviceData";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <Layout withBg>
        <div className="py-40 text-center px-6">
          <p className="font-bold text-2xl mb-4">Service not found</p>
          <Link to="/services" className="text-primary underline">
            Back to all services
          </Link>
        </div>
      </Layout>
    );
  }

  const pageTitle = `${service.name} in Qatar | Best Contracting Solutions Doha - ANAM Qatar`;
  const pageDescription = `${service.tagline} ANAM Trading & Contracting provides expert ${service.name.toLowerCase()} in Doha, Lusail, and throughout Qatar. Professional craftsmanship since 2012.`;
  const pageUrl = `https://anamqatar.com/services/${service.slug}`;

  return (
    <Layout withBg>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content={`${service.name.toLowerCase()} Qatar, best ${service.name.toLowerCase()} Doha, general contracting Qatar, interior fit out Doha, ANAM services Qatar`}
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={service.image} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.name,
          "serviceType": service.name,
          "description": service.tagline,
          "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "ANAM Trading & Contracting",
            "url": "https://anamqatar.com",
            "telephone": "+974-5032-5050",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Doha",
              "addressCountry": "QA"
            }
          },
          "areaServed": {
            "@type": "Country",
            "name": "Qatar"
          }
        })}</script>
      </Helmet>

      <main>
        <section
          className="relative h-[60vh] min-h-[420px] flex items-center px-10 bg-cover bg-center bg-gray-900"
          style={{
            backgroundImage: `url(${service.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#5a0f2f]/90 via-black/50 to-black/30" />
          <div className="z-10 max-w-7xl mx-auto w-full absolute bottom-12 text-center left-1/2 -translate-x-1/2 px-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-bold uppercase tracking-widest mb-3">
              ANAM Qatar Specialized Service
            </span>
            <h1 className="anam-hero-title !text-white text-center">
              {service.name}
            </h1>
            <p className="anam-lead-p !text-white/90 text-center mx-auto mt-2 max-w-2xl">
              {service.tagline}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 bg-[#f9f4ef]">
          <div className="max-w-3xl mx-auto">
            <h2 className="anam-section-title mb-8">
              About This Service
            </h2>
            <div className="space-y-4">
              {service.paragraphs.map((paragraph, i) => (
                <p key={i} className="anam-body-p">{paragraph}</p>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link
                to="/contact"
                className="inline-block bg-primary text-white px-10 py-4 font-bold hover:bg-black transition uppercase text-sm tracking-widest shadow-lg text-center"
              >
                Request a quote
              </Link>
              <Link
                to="/services"
                className="inline-block border-2 border-gray-900 text-gray-900 px-10 py-4 font-bold hover:bg-gray-900 hover:text-white transition uppercase text-sm tracking-widest text-center"
              >
                View all services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ServiceDetail;

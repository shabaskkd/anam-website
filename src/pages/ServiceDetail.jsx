import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
        </div>
      </Layout>
    );
  }

  return (
    <Layout withBg>
      <main>
        <section
          className="relative h-[60vh] flex items-center px-10 bg-cover bg-center bg-gray-900"
          style={{
            backgroundImage: `url(${service.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#5a0f2f]/80 to-transparent" />
          <div className="z-10 max-w-7xl mx-auto w-full absolute bottom-12 text-center left-1/2 -translate-x-1/2 px-4">
            <h1 className="anam-hero-title !text-white text-center">
              {service.name}
            </h1>
            <p className="anam-lead-p !text-white/90 text-center mx-auto mt-3">
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

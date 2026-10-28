import React, { useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <Layout withBg>
      <Helmet>
        <title>Contact Us | ANAM Trading & Contracting Qatar</title>
        <meta
          name="description"
          content="Get in touch with ANAM Trading & Contracting in Doha, Qatar. Request a quote or speak to our architectural and engineering specialists."
        />
        <meta
          name="keywords"
          content="contact ANAM Qatar, architectural contracting Doha, flooring inquiry Qatar, fit-out quote Doha"
        />
        <link rel="canonical" href="https://anamqatar.com/contact" />
      </Helmet>

      <div className="bg-[#fff] min-h-screen flex items-center justify-center p-6 md:px-12 !pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Information */}
          <div className="space-y-8">
            <div>
              <span className="anam-hero-eyebrow">Connect With Us</span>
              <h1 className="anam-hero-title mb-4">
                Get In — <br />
                <span>Touch With Us</span>
              </h1>
            </div>

            <p className="anam-lead-p max-w-md">
              We’re here to help! Whether you have a question about our
              services, need assistance with your project, or want to request a quote,
              our team in Doha is ready to assist you.
            </p>

            <div className="space-y-6 pt-4">
              <div>
                <p className="text-sm font-semibold text-gray-500 tracking-wider">
                  Email:
                </p>
                <a
                  href="mailto:info@anamqatar.com"
                  className="text-xl font-medium text-gray-900 mt-1 hover:text-primary transition-colors block"
                >
                  info@anamqatar.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 tracking-wider">
                  Phone:
                </p>
                <a
                  href="tel:+97430081007"
                  className="text-xl font-medium text-gray-900 mt-1 hover:text-primary transition-colors block"
                >
                  +974 30081007
                </a>
              </div>

              <p className="text-sm text-gray-500">
                Available Saturday to Thursday, 8:00 AM - 6:00 PM AST (GMT+3)
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="anam-h3 !mt-2">Thank You, {formData.firstName}!</h3>
                <p className="anam-lead-p mx-auto max-w-md">
                  Your message has been received. Our architectural consulting team in Doha will review your request and get back to you within 24 business hours.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <a
                    href={`https://wa.me/97430081007?text=${encodeURIComponent(
                      `Hello ANAM Qatar, I am ${formData.firstName} ${formData.lastName}. ${formData.message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#20ba5a] transition-colors"
                  >
                    Continue on WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ firstName: "", lastName: "", email: "", message: "" });
                    }}
                    className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Enter your first name..."
                      className="w-full bg-[#f4f4f4] border-none p-4 text-sm focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Enter your last name..."
                      className="w-full bg-[#f4f4f4] border-none p-4 text-sm focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address..."
                    className="w-full bg-[#f4f4f4] border-none p-4 text-sm focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">
                    How Can We Help You? *
                  </label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your message or project requirements..."
                    className="w-full bg-[#f4f4f4] border-none p-6 text-sm focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-primary text-white font-semibold hover:bg-black flex items-center transition-colors duration-300"
                  >
                    Submit
                    <span className="block ml-2">
                      <LuArrowRight />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;

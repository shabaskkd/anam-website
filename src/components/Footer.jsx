import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IMAGES } from "../utils/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram size={18} />,
      name: "Instagram",
      href: "https://www.instagram.com/anamtrading/",
    },
    {
      icon: <FaFacebookF size={18} />,
      name: "Facebook",
      href: "https://www.facebook.com/anamtradingandcontracting/",
    },
    {
      icon: <FaYoutube size={18} />,
      name: "YouTube",
      href: "https://www.youtube.com/@AnamTradingandContracting",
    },
    {
      icon: <FaLinkedin size={18} />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/anam-trading-and-contracting-doha/",
    },
  ];

  return (
    <footer
      className="relative bg-[#5a0f2f] text-white pt-12 overflow-hidden pb-6"
      style={{
        fontFamily:
          "Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 w-32 md:w-40">
              <img
                loading="lazy"
                decoding="async"
                src={IMAGES.logo_white}
                alt="Anam Trading & Contracting Logo"
                className="w-full h-auto"
                width="160"
                height="60"
              />
            </div>
            <p className="text-white/95 text-[14.5px] leading-relaxed max-w-sm font-normal">
              We Transform Your Vision Into Beautifully Crafted Spaces with
              precision and over 10 years of architectural excellence.
            </p>
            <div className="text-white/90 text-[13.5px] leading-relaxed font-normal">
              Street No.3083, Bld No. 136, Zone No. 91, <br />
              Logistic Park, Birkat Al Awamer, <br />
              Doha, Qatar
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:pl-16">
            <h4 className="text-xs font-bold tracking-[0.18em] mb-6 text-white/85 uppercase">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 text-[14px] inline-block font-normal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6 lg:text-right">
            <h4 className="text-xs font-bold tracking-[0.18em] mb-2 text-white/85 uppercase">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <a
                href="tel:+97430081007"
                className="text-2xl md:text-3xl font-bold text-white hover:text-amber-200 transition-colors block"
              >
                +974 30081007
              </a>
              <a
                href="mailto:info@anamqatar.com"
                className="text-[14px] text-white/90 hover:text-white transition-colors block"
              >
                info@anamqatar.com
              </a>
            </div>

            <div className="flex gap-3 lg:justify-end pt-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow ANAM Qatar on ${social.name}`}
                  className="bg-white/15 p-2.5 rounded-full text-white hover:bg-white hover:text-[#5a0f2f] transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center justify-center w-9 h-9"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/70 text-[12px] tracking-[0.12em] font-normal uppercase">
          <p>© 2026 Anam Trading & Contracting. All Rights Reserved.</p>
          <p className="text-[11.5px] text-white/60 normal-case tracking-normal">
            Doha, Qatar • Premium Architectural & Fitout Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

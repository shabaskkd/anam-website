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
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CAREERS", path: "/careers" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram size={20} />,
      name: "Instagram",
      href: "https://www.instagram.com/anamtrading/",
    },
    {
      icon: <FaFacebookF size={20} />,
      name: "Facebook",
      href: "https://www.facebook.com/anamtradingandcontracting/",
    },
    {
      icon: <FaYoutube size={22} />,
      name: "YouTube",
      href: "https://www.youtube.com/@AnamTradingandContracting",
    },
    {
      icon: <FaLinkedin size={20} />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/anam-trading-and-contracting-doha/",
    },
  ];

  return (
    <footer className="relative bg-primary text-white pt-12 overflow-hidden pb-4">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-10">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 w-32 md:w-40">
              <img
                src={IMAGES.logo_white}
                alt="Anam Logo"
                className="w-full h-auto"
              />
            </div>
            <p className="text-white/90 font-medium leading-relaxed max-w-sm">
              We Transform Your Vision Into Beautifully Crafted Spaces with
              precision and over 10 years of architectural excellence.
            </p>
            <div className="text-white/80 text-sm leading-loose">
              Street No.3083, Bld No. 136, Zone No. 91, <br />
              Logistic Park, Birkat Al Awamer, <br />
              Doha, Qatar
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:pl-20">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white/50">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-white hover:pl-2 transition-all duration-300 font-medium text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8 lg:text-right">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-2 text-white/50">
              Get in Touch
            </h4>
            <div className="space-y-2">
              <a
                href="tel:+97430081007"
                className="text-3xl font-bold hover:opacity-80 transition-opacity block font-sans"
              >
                +974 30081007
              </a>
              <a
                href="mailto:info@anamqatar.com"
                className="text-sm font-medium hover:text-black transition-colors block"
              >
                info@anamqatar.com
              </a>
            </div>

            <div className="flex gap-4 lg:justify-end pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                >
                  {React.cloneElement(social.icon, { size: 18 })}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t text-xs border-white/10 pt-4 flex flex-col md:row justify-between items-center gap-4 text-white/40 tracking-[0.2em] font-bold uppercase">
          <p>© 2026 Anam Trading & Contracting. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

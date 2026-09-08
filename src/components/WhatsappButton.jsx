import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/97430081007"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="z-[9999] group flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white h-16 w-16 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
    >
      <FaWhatsapp size={30} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;

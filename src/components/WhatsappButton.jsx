import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/yournumber"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: -10, backgroundColor: "#000" }}
      className="z-[9999] group -rotate-90 hover:opacity-60 transtion flex items-center justify-center gap-3 bg-[#25D366] text-white h-16 w-16 rounded-full shadow-xl transition-colors duration-300"
    >
      <FaWhatsapp size={24} className="rotate-90" />
    </a>
  );
};

export default WhatsAppButton;

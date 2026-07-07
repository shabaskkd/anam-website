import React, { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import gsap from "gsap";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const SideDrawer = ({ isOpen, onClose }) => {
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.3,
      });
      gsap.to(drawerRef.current, { x: 0, duration: 0.8, ease: "power4.out" });
      gsap.fromTo(
        contentRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.4 }
      );
    } else {
      gsap.to(drawerRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power4.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        visibility: "hidden",
        duration: 0.3,
      });
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={overlayRef}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 z-[60] opacity-0 invisible"
      />

      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#120808] z-[100] translate-x-full shadow-2xl overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <MdClose size={24} />
        </button>

        <div ref={contentRef} className="p-8 md:p-12 mt-16">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-white leading-tight mb-12">
            We Shape Interior Designs, <br />
            <span className="text-gray-400">
              Crafting Timeless and Inspiring Spaces
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 ">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden group"
              >
                <img
                  src={`https://picsum.photos/400/400?random=${i}`}
                  alt="Gallery"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end">
            <Link to="/gallery">
              <button className="flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium mb-16">
                View Gallery <LuArrowRight />
              </button>
            </Link>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 mb-12">
            <a
              href="tel:+97499999999"
              className="block text-white hover:text-gray-400 transition-colors"
            >
              +974 9999 99 999
            </a>
            <p className="text-white hover:text-gray-400 max-w-[250px]">
              5609 E Sprague Ave, Spokane Valley, WA 99212, USA
            </p>
          </div>

          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;

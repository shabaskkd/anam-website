import React, { useState, useMemo } from "react";
import { ChevronDown, Menu, X, Search, ArrowRight } from "lucide-react";
import { IMAGES } from "../utils/assets";
import { Link, useNavigate } from "react-router-dom";
import { serviceMegaMenuItems, serviceItemToSlug } from "../data/serviceData";

const megaMenuItems = [
  [
    "Flooring",
    "Wall Panels",
    "Doors",
    "Windows",
    "Partitions",
    "Ceiling Solutions",
    "Carpentry Accessories",
  ],
  [
    "Profile & Accessories",
    "Kitchen & Wardrobe",
    "Wood Materials",
    "Solid Surface for Interior",
    "Curtain and Blinds",
    "Shades",
    "Fencing",
  ],
  ["UPVC", "Aluminum", "Stainless Steel"],
];

const Header = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredResults = useMemo(() => {
    if (!searchQuery) return [];
    return megaMenuItems
      .flat()
      .filter((item) => item?.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 8);
  }, [searchQuery]);

  const handleClickProducts = (item) => {
    const route = item
      .toLowerCase()
      .replace(/&/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
    navigate(`/products/${route}`);
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleClickService = (item) => {
    const route = serviceItemToSlug(item);
    navigate(`/services/${route}`);
    setIsServiceMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CAREERS", path: "/careers" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-primary">
      <div className="max-w-[1280px] mx-auto h-[70px] md:h-[90px] flex items-center justify-between relative">
        {/* Logo Section */}
        <div
          className={`flex items-center gap-3 shrink-0 ${isSearchOpen ? "hidden md:flex" : "flex"}`}
        >
          <div className="w-20 md:w-[180px]">
            <Link to={"/"}>
              <img
                src={IMAGES.logo_white}
                alt="Logo"
                className="w-full h-auto"
              />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 h-full">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[13px] font-bold tracking-widest hover:opacity-70 transition-opacity text-white"
            >
              {link.name}
            </Link>
          ))}

          {/* Products Dropdown */}
          <div
            className="h-full flex items-center relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-[13px] font-bold tracking-widest text-white hover:opacity-70 transition-colors h-full uppercase">
              PRODUCTS{" "}
              <ChevronDown
                size={14}
                className={
                  isMegaMenuOpen
                    ? "rotate-180 transition-transform"
                    : "transition-transform"
                }
              />
            </button>

            {isMegaMenuOpen && (
              <div className="absolute left-1/2 top-full w-[80vw] max-w-2xl bg-[#f9f4ef] shadow-2xl border border-gray-100 p-10 grid grid-cols-3 gap-8 animate-in fade-in slide-in-from-top-2 z-50 transform -translate-x-1/2">
                {megaMenuItems.map((column, colIdx) => (
                  <ul key={colIdx} className="space-y-3">
                    {column.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => handleClickProducts(item)}
                        className="group cursor-pointer"
                      >
                        <span className="text-[14px] text-gray-500 hover:text-black hover:pl-3 transition-all duration-300 block border-l-2 border-transparent hover:border-primary">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="h-full flex items-center relative"
            onMouseEnter={() => setIsServiceMenuOpen(true)}
            onMouseLeave={() => setIsServiceMenuOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-[13px] font-bold tracking-widest text-white hover:opacity-70 transition-colors h-full uppercase">
              SERVICES{" "}
              <ChevronDown
                size={14}
                className={
                  isServiceMenuOpen
                    ? "rotate-180 transition-transform"
                    : "transition-transform"
                }
              />
            </button>

            {isServiceMenuOpen && (
              <div className="absolute left-1/2 top-full w-[580px] bg-[#f9f4ef] shadow-2xl border border-gray-100 p-10 grid grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-2 z-50 transform -translate-x-1/2">
                {serviceMegaMenuItems.map((col, colIdx) => (
                  <ul key={colIdx} className="space-y-3">
                    <li className="mb-4">
                      <span className="text-[11px] font-black uppercase tracking-widest text-gray-800">
                        {col.heading}
                      </span>
                    </li>
                    {col.items.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => handleClickService(item)}
                        className="group cursor-pointer"
                      >
                        <span className="text-[14px] text-gray-500 hover:text-black hover:pl-3 transition-all duration-300 block border-l-2 border-transparent hover:border-primary">
                          {item}
                        </span>
                      </li>
                    ))}
                    {col.items.length === 0 && (
                      <li
                        onClick={() => handleClickService(col.heading)}
                        className="group cursor-pointer"
                      >
                        <span className="text-[14px] text-gray-500 hover:text-black hover:pl-3 transition-all duration-300 block border-l-2 border-transparent hover:border-primary">
                          View All
                        </span>
                      </li>
                    )}
                  </ul>
                ))}
              </div>
            )}
          </div>

          {/* Remaining nav links (skip SERVICES since it's now a dropdown) */}
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[13px] font-bold text-white tracking-widest hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search Overlay */}
        <div
          className={`absolute inset-0 bg-[#5a0f2f] z-50 flex flex-col transition-all duration-300 ${isSearchOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
        >
          <div className="flex items-center px-6 md:px-10 h-full border-b border-gray-100">
            <Search size={22} className="text-white" color="#fff" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full h-full px-4 md:px-6 outline-none text-lg md:text-xl text-white placeholder:text-gray-300 font-light"
              autoFocus={isSearchOpen}
            />
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery("");
              }}
              className="p-2 text-white hover:bg-gray-100 hover:text-black "
            >
              <X size={24} />
            </button>
          </div>

          {searchQuery && (
            <div className="bg-white absolute left-0 top-full w-full shadow-2xl max-h-[60vh] overflow-y-auto border-t border-gray-100">
              <div className="max-w-4xl mx-auto py-6 px-6 md:px-10">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
                  Results
                </p>
                {filteredResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {filteredResults.map((result, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          handleClickProducts(result);
                          setIsSearchOpen(false);
                        }}
                        className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 group transition-colors text-left w-full"
                      >
                        <span className="text-sm font-bold text-gray-900">
                          {result}
                        </span>
                        <ArrowRight
                          size={16}
                          className="text-gray-300 group-hover:text-black transition-all group-hover:translate-x-1"
                        />
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 py-10 text-center italic">
                    No products found matching "{searchQuery}"
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed inset-0 bg-black/50 z-[100] transition-opacity lg:hidden ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={`absolute left-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-xl flex flex-col transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <img src={IMAGES.logo} alt="Logo" className="w-20" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-black"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6">
              <nav className="flex flex-col gap-6">
                {navLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-bold tracking-widest text-black"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Products Accordion */}
                <div>
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="flex items-center justify-between w-full text-sm font-bold tracking-widest text-black"
                  >
                    PRODUCTS{" "}
                    <ChevronDown
                      size={18}
                      className={mobileProductsOpen ? "rotate-180" : ""}
                    />
                  </button>
                  <div
                    className={`mt-4 space-y-4 overflow-hidden transition-all duration-300 ${mobileProductsOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {megaMenuItems.flat().map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleClickProducts(item)}
                        className="block w-full text-left text-[12px] text-gray-500 hover:text-primary pl-4 border-l border-gray-100 py-1"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-sm font-bold tracking-widest text-black"
                  >
                    SERVICES{" "}
                    <ChevronDown
                      size={18}
                      className={mobileServicesOpen ? "rotate-180" : ""}
                    />
                  </button>
                  <div
                    className={`mt-4 space-y-4 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {serviceMegaMenuItems.map((col, colIdx) => (
                      <div key={colIdx}>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-4 mb-2">
                          {col.heading}
                        </p>
                        {col.items.map((item, i) => (
                          <button
                            key={i}
                            onClick={() => handleClickService(item)}
                            className="block w-full text-left text-[12px] text-gray-500 hover:text-primary pl-4 border-l border-gray-100 py-1"
                          >
                            {item}
                          </button>
                        ))}
                        {col.items.length === 0 && (
                          <button
                            onClick={() => handleClickService(col.heading)}
                            className="block w-full text-left text-[12px] text-gray-500 hover:text-primary pl-4 border-l border-gray-100 py-1"
                          >
                            View All
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Remaining links (skip SERVICES index 2) */}
                {navLinks.slice(3).map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-bold tracking-widest text-black"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Right Action Tray */}
        <div className="flex items-center">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="cursor-pointer p-2 md:p-4 bg-gray-100/20 hover:text-black transition-colors text-white border-l md:border border-gray-100/30 hover:bg-white"
          >
            <Search size={20} />
          </button>
          <button
            className="lg:hidden p-2 -ml-2 text-white ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

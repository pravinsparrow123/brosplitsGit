"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const brandName = process.env.NEXT_PUBLIC_BRAND_NAME;
  const brandLogo = process.env.NEXT_PUBLIC_BRAND_LOGO;

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" }, // handled separately
    { href: "/pricing", label: "Pricing" },
    { href: "/contact-us", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-md shadow-lg" : "bg-black"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          {brandLogo && (
            <img src={brandLogo} alt="Logo" className="h-8 w-8 object-contain" />
          )}
          <span className="text-white font-bold text-xl">{brandName}</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <li
                key="services"
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <span className="cursor-pointer flex items-center gap-1">
                  Services
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-52 bg-white/80 backdrop-blur-md text-black rounded-xl shadow-lg py-2 z-50"
                    >
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/services/personal-training">1-on-1 Training</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/services/group-training">Group Training</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/services/nutrition">Nutrition Plans</Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-indigo-400 transition ${
                    pathname === link.href ? "text-indigo-400" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

     <AnimatePresence>
  {isMobileOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-black/95 text-white px-4 py-6 space-y-4 text-center"
    >
      {navLinks.map((link) =>
        link.label === "Services" ? (
          <div key="services" className="text-white">
            <button
              onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
              className="w-full flex justify-center items-center gap-2 font-semibold text-lg"
            >
              Services
              <svg
                className={`w-5 h-5 transition-transform ${
                  isServicesOpenMobile ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {isServicesOpenMobile && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-2 space-y-2"
                >
                  <Link href="/services/personal-training" onClick={() => setIsMobileOpen(false)}>
                    <span className="block py-2 rounded hover:bg-white/10">1-on-1 Training</span>
                  </Link>
                  <Link href="/services/group-training" onClick={() => setIsMobileOpen(false)}>
                    <span className="block py-2 rounded hover:bg-white/10">Group Training</span>
                  </Link>
                  <Link href="/services/nutrition" onClick={() => setIsMobileOpen(false)}>
                    <span className="block py-2 rounded hover:bg-white/10">Nutrition Plans</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileOpen(false)}
            className={`block font-semibold text-lg ${
              pathname === link.href ? "text-indigo-400" : ""
            }`}
          >
            {link.label}
          </Link>
        )
      )}
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
}

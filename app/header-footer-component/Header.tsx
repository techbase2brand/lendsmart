"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function LendSmartHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Modern Menu Icon
  const Menu = ((
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H21M3 6H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ));

  // Modern Close Icon
  const X = ((
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ));

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(()=> {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="w-full overflow-visible">
      <div className={`bg-white transition-all duration-300 ${isSticky ? "fixed top-0 left-0 w-full z-50 shadow-lg" : "relative"}`}>
        <div className="bg-[#F4F4F4] border-y border-gray-300 px-4">
          <div className="max-w-[1440px] mx-auto relative flex min-h-[70px] items-center justify-between py-2">
            {/* Logo */}
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/LendSmart-Mortgages-Logo- 2.png" alt="LendSmart Mortgages" width={200} height={70} className="" priority />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center flex-1 gap-8 text-[14px] font-normal text-black">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-[#1380d4] hover:underline transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop WhatsApp Button */}
            <div className="absolute right-0 hidden md:block lg:right-1">
              <a href="https://wa.me/61413208624" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-[#3f7416] hover:bg-[#0781c3] px-4 py-2 text-[13px] font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg active:scale-95">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#25D366] text-white">
                  <Image src="/icon.png" alt="" width={30} height={30} className="object-contain" />
                </span>
                <span className="hidden lg:inline">Chat With Us</span>
                <span className="lg:hidden">Chat</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="z-30 flex h-12 w-12 items-center justify-end rounded-full text-black bg-white/10 backdrop-blur-sm border border-white/20 md:hidden transition-all active:scale-95"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? X : Menu}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu - Slide from TOP */}
        <div 
          className={`md:hidden fixed h-full inset-x-0 z-[100] transition-all duration-500 ease-in-out ${
            mobileOpen ? "top-0 visible opacity-100" : "-top-full invisible opacity-0"
          }`}
        >
          {/* Drawer Content */}
          <div className="relative w-full bg-gradient-to-b from-[#2d5010] to-[#1a3006] shadow-2xl overflow-y-auto h-full max-h-full">
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-3 border-b border-white/20">
              <div className="text-white font-semibold text-lg opacity-0">Menu</div>
              <button 
                onClick={() => setMobileOpen(false)} 
                className="p-2 text-white hover:bg-white/10 rounded-full transition-all duration-200 active:scale-95"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6L18 18" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col px-0  gap-1">
              {navLinks.map((item, index) => (
                <li 
                  key={item.label}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  className={`transform transition-all duration-300 ${
                    mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                  }`}
                >
                  <Link 
                    href={item.href} 
                    className="group flex items-center py-2 text-[14px] font-normal text-white/90 hover:text-white border-b border-white/10 hover:bg-white/10  px-4 transition-all duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="transform transition-transform duration-200 group-hover:translate-x-2">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* WhatsApp Button */}
            <div className="px-6 pt-6 pb-8">
              <a 
                href="https://wa.me/61413208624" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-white py-3 text-[14px] font-semibold text-[#2d5010] shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={() => setMobileOpen(false)}
              >
                <Image src="/icon.png" alt="WhatsApp" width={24} height={24} className="object-contain" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Footer / Contact Info */}
            <div className="px-6 py-4 border-t border-white/20 mt-4">
              <p className="text-white text-xs text-center">
                <span className="block pb-2">Need help? Call us at</span>
                <span className="text-white text-sm font-medium">+61 413 208 624</span>
              </p>
            </div>
          </div>
        </div>

        {/* Backdrop Overlay */}
        {mobileOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-[90] transition-opacity duration-500"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
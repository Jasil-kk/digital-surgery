"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowButton from "./ArrowButton";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Businesses", path: "/businesses" },
    { name: "About Us", path: "/about" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full h-20 flex items-center fixed top-0 left-0 px-[5%] sm:px-[8%] z-50 text-white bg-[#ffffff0a] backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/">
          <Image
            src={"/images/svg/logo.svg"}
            alt="Logo"
            width={130}
            height={55}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 lg:gap-10 text-base font-normal">
            {/* Businesses with dropdown */}
            <li className="relative group pb-1">
              <div
                className={`flex items-center gap-2 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#70CAEF] after:transition-all duration-300 ${
                  pathname.startsWith("/products") ||
                  pathname.startsWith("/solutions")
                    ? "after:w-full text-[#70CAEF] font-semibold"
                    : "after:w-0 hover:after:w-full"
                }`}
              >
                <span>Businesses</span>
                <Image
                  src={"/images/svg/arrow-bottom.svg"}
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </div>

              {/* Dropdown */}
              <ul className="absolute left-0 top-full mt-3 w-40 py-2 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {[
                  { name: "Products", path: "/products" },
                  { name: "Solutions", path: "/solutions" },
                ].map((sub) => (
                  <li
                    key={sub.name}
                    className={`px-4 py-2 flex items-center justify-between hover:text-[#70CAEF] font-medium transition-colors ${
                      pathname === sub.path ? "text-[#70CAEF]" : ""
                    }`}
                  >
                    <Link href={sub.path}>{sub.name}</Link>
                    <Image
                      src={"/images/svg/arrow-right-black.svg"}
                      alt="Arrow"
                      width={20}
                      height={20}
                    />
                  </li>
                ))}
              </ul>
            </li>

            {/* Other menu items */}
            {navItems.slice(1).map((item) => (
              <li
                key={item.name}
                className={`relative cursor-pointer pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#70CAEF] after:transition-all duration-300 ${
                  pathname === item.path
                    ? "after:w-full text-[#70CAEF] font-semibold"
                    : "after:w-0 hover:after:w-full"
                }`}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <ArrowButton label="Enquire Now" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            <Image
              src={"/images/svg/cross.svg"}
              alt="Menu"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src={"/images/svg/hamburger.svg"}
              alt="Close"
              width={20}
              height={20}
            />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute left-0 top-full w-full bg-[#0b0b0b]/95 backdrop-blur-xl text-white transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col text-center gap-4 py-6">
          <li>
            <details className="group">
              <summary className="flex items-center justify-center gap-2 cursor-pointer font-medium">
                Businesses
                <Image
                  src={"/images/svg/arrow-bottom.svg"}
                  alt="Arrow"
                  width={18}
                  height={18}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/products" onClick={() => setMobileOpen(false)}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" onClick={() => setMobileOpen(false)}>
                    Solutions
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          {navItems.slice(1).map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className={`${
                  pathname === item.path
                    ? "text-[#70CAEF] font-semibold"
                    : "hover:text-[#70CAEF]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          <div className="pt-4 flex justify-center">
            <ArrowButton label="Enquire Now" />
          </div>
        </ul>
      </div>
    </header>
  );
}

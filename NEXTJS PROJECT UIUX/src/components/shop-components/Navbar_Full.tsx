"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiInstagram,
  FiYoutube,
  FiFacebook,
  FiTwitter,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar_Full = () => {
  const [menuOpen, toggleMenu] = useState(false);

  // Function to toggle menu
  const handleMenuToggle = () => toggleMenu((prevState) => !prevState);

  return (
    <header className="overflow-hidden">
      {/* Top Bar */}
      <section className="hidden lg:flex bg-[#252B42] py-4">
        <div className="container mx-auto flex justify-between items-center text-white text-sm">
          {/* Contact Info */}
          <div className="flex gap-6">
            <span className="flex gap-1 items-center">
              <FiPhone />
              <a href="tel:2255550118">(225) 555-0118</a>
            </span>
            <span className="flex gap-1 items-center">
              <FiMail />
              <a href="mailto:michelle.rivera@example.com">
                michelle.rivera@example.com
              </a>
            </span>
          </div>

          {/* Promo Message */}
          <p className="hidden md:block">Follow Us and get a chance to win 80% off</p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <p className="hidden md:block">Follow Us:</p>
            {[
              { href: "https://www.instagram.com", icon: <FiInstagram /> },
              { href: "https://www.youtube.com", icon: <FiYoutube /> },
              { href: "https://www.facebook.com", icon: <FiFacebook /> },
              { href: "https://www.twitter.com", icon: <FiTwitter /> },
            ].map(({ href, icon }, idx) => (
              <Link key={idx} href={href} target="_blank" rel="noopener noreferrer">
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md border-b-2 border-[#E5E5E5]">
        <div className="container mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1>

          {/* Action Buttons */}
          <div className="md:hidden flex gap-4 items-center">
            <FiSearch className="text-2xl text-[#252B42] cursor-pointer" />
            <FiShoppingCart className="text-2xl text-[#252B42] cursor-pointer" />
            <button onClick={handleMenuToggle} aria-label="Toggle menu">
              {menuOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
            </button>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-[#737373]">
            {[
              { text: "Home", href: "#" },
              { text: "Shop", href: "/product" },
              { text: "About", href: "/about" },
              { text: "Blog", href: "#blog" },
              { text: "Contact", href: "/contact" },
              { text: "Pages", href: "/pages" },
            ].map(({ text, href }, idx) => (
              <li key={idx} className="relative group">
                <Link href={href} className="hover:text-[#23A6F0] transition-all">
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex gap-4 text-[#23A6F0] items-center">
            <button className="text-sm font-medium">Login/Register</button>
            <FiSearch className="text-lg" />
            <FiShoppingCart className="text-lg" />
            <FiHeart className="text-lg" />
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col gap-6 p-6 text-[20px] text-[#737373]">
              {[
                { text: "Home", href: "/" },
                { text: "Product", href: "/product" },
                { text: "Pricing", href: "/about" },
                { text: "Contact", href: "/contact" },
              ].map(({ text, href }, idx) => (
                <li key={idx}>
                  <Link href={href} className="hover:text-[#23A6F0] transition-all">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar_Full;

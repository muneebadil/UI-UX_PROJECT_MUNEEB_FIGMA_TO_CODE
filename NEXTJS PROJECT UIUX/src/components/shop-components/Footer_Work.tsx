import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer_Work = () => {
  return (
    <footer className="bg-white mt-10 py-6">
      <div className="bg-[#FAFAFA] py-12 px-10 flex items-center justify-between mx-auto max-w-screen-xl">
        {/* Brand Name */}
        <h2 className="text-[#252B42] font-bold text-[24px]">Bandage</h2>

        {/* Social Icons */}
        <div className="flex gap-6">
          {[
            { href: "#", label: "Facebook", icon: FaFacebookF },
            { href: "#", label: "Instagram", icon: FaInstagram },
            { href: "#", label: "Twitter", icon: FaTwitter },
          ].map(({ href, label, icon: Icon }, index) => (
            <Link key={index} href={href} aria-label={label} className="text-[#23A6F0] hover:opacity-75">
              <Icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>

      <div className="container px-4 mx-auto mt-10 max-w-[1200px]">
        <div className="flex flex-wrap lg:flex-nowrap gap-6 justify-between">
          {/* Sections Array */}
          {[
            {
              title: "Company Info",
              links: ["About Us", "Carrier", "We are hiring", "Blog"],
            },
            {
              title: "Legal",
              links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Compliance"],
            },
            {
              title: "Features",
              links: ["Business Marketing", "User Analytics", "Live Chat", "Unlimited Support"],
            },
            {
              title: "Resources",
              links: ["iOS & Android", "Watch a Demo", "Customers", "API"],
            },
          ].map(({ title, links }, index) => (
            <div key={index} className="flex-1 min-w-[120px]">
              <h3 className="font-bold text-[#252B42] text-[16px] mb-2">{title}</h3>
              <ul className="space-y-1 text-[#737373] text-[14px] font-bold">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link href="#" className="hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe Section */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-bold text-[#252B42] text-[16px] mb-2">Get In Touch</h3>
            <div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border rounded-l-md text-[14px] focus:outline-none"
                />
                <button className="bg-[#23A6F0] hover:bg-blue-400 text-white px-4 py-2 rounded-r-md text-[14px]">
                  Subscribe
                </button>
              </div>
              <p className="text-[#737373] text-[12px] mt-2">Lore ipsum dolor Amit</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-9 mt-16 bg-[#FAFAFA] text-left">
          <p className="text-[#737373] font-bold text-[14px]">
            Made With Love By Muhammad Muneeb Adil. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer_Work;

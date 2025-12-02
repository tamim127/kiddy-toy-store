import {
  Dribbble,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#4e3369] to-[#8c035c] max-w-screen">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#3ca2fa] text-3xl font-extrabold"></span>
              <span className=" text-white text-3xl font-bold">KiddyToy</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              KiddyToy is a local online kids’ toy store bringing joy,
              creativity, and fun to every family.
            </p>
          </div>
          <div>
            <h4 className=" text-white text-lg font-semibold mb-6">About Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/our-story" className="hover:text-[#3ca2fa] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/meet-team" className="hover:text-[#3ca2fa] transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-[#3ca2fa] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#3ca2fa] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className=" text-white text-lg font-semibold mb-6">
              Helpful Links
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/faq" className="hover:text-[#3ca2fa] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-[#3ca2fa] transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#3ca2fa] transition-colors relative"
                >
                  Live Chat
                  <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#3ca2fa] animate-pulse"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="  text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#3ca2fa]" />
                <a
                  href="mailto:hello@toyTopia.com"
                  className="hover:text-[#3ca2fa] transition-colors"
                >
                  hello@kiddytoy.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#3ca2fa]" />
                <a
                  href="tel:+8801234567890"
                  className="hover:text-[#3ca2fa] transition-colors"
                >
                  +880 1234 567 890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-[#3ca2fa]" />
                <span className="hover:text-[#3ca2fa] transition-colors">
                  Rajshahi, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
        <hr className="border-t border-1 border-gray-600 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[#3ca2fa] transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#3ca2fa] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-[#3ca2fa] transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Dribbble"
              className="hover:text-[#3ca2fa] transition-colors"
            >
              <Dribbble size={20} />
            </a>
            <a
              href="#"
              aria-label="Website"
              className="hover:text-[#3ca2fa] transition-colors"
            >
              <Globe size={20} />
            </a>
          </div>
          <p className="text-center md:text-left">
            &copy; 2025 KiddyToy. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

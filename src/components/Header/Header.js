"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Mail, User, Phone } from "lucide-react";
import Link from "next/link";

const AboutMeModal = dynamic(() => import("../AboutMeModal/AboutMeModal"), {
  ssr: false,
});

const RegistrationModal = dynamic(
  () => import("../RegisterModal/RegisterModal"),
  {
    ssr: false,
  }
);

import Logo from "../../../public/images/logo.svg";
import ScrollShadowWrapper from "../ScrollShadowWrapper/ScrollShadowWrapper";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false);

  const handleLinkClick = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <React.Fragment>
      <ScrollShadowWrapper>
        <div className="flex justify-between items-center py-0 w-full gap-x-4">
          <Image className="h-9 cursor-pointer" alt="Logo" src={Logo} />

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
            {[
              ["#pradzia", "Pradžia"],
              ["#paslaugos", "Paslaugos"],
              ["#kainos", "Kainos"],
              ["#atsiliepimai", "Atsiliepimai"],
              ["#kontaktai", "Kontaktai"],
            ].map(([href, label]) => (
              <li
                key={href}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <Link
                  href={href}
                  className="text-gray-800 transition-colors duration-300"
                >
                  {label}
                </Link>
                <span className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex" />
              </li>
            ))}
          </ul>
          {/* Desktop register button */}
          <div className="hidden lg:flex items-center gap-x-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-sm bg-black text-white shadow-sm cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Registracija</span>
            </button>
            {/* About Me Button */}
            <button
              onClick={() => setIsAboutMeModalOpen(true)}
              className="flex items-center outline-none gap-2 px-4 py-2 rounded-sm border border-gray-300 text-gray-700 hover:bg-gray-100 shadow-sm cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <User className="w-5 h-5" />
              <span>Apie mane</span>
            </button>
            <a
              href="tel:+37067977969"
              className="flex items-center gap-2 text-gray-800 transition-colors duration-300 hover:text-black text-sm"
            >
              <Phone className="w-5 h-5" />
              +370 (679) 77 969
            </a>
          </div>
          <div className="flex items-center gap-x-6 lg:hidden">
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
            >
              Registracija
            </button>
            {/* Mobile burger */}
            <button
              className="lg:hidden focus:outline-none z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="text-black" size={27} />
              ) : (
                <Menu className="text-black" size={27} />
              )}
            </button>
          </div>
        </div>
      </ScrollShadowWrapper>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#fafafa] z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg p-6`}
      >
        <ul className="flex flex-col gap-y-6 mt-18 font-semibold text-lg">
          {[
            ["#pradzia", "Pradžia"],
            ["#paslaugos", "Paslaugos"],
            ["#kainos", "Kainos"],
            ["#atsiliepimai", "Atsiliepimai"],
            ["#kontaktai", "Kontaktai"],
          ].map(([href, label]) => (
            <li key={href}>
              <button
                onClick={() => handleLinkClick(href)}
                className="text-left w-full text-gray-800 hover:text-black transition"
              >
                {label}
              </button>
            </li>
          ))}
          <a
            href="tel:+37067977969"
            className="flex items-center gap-2 text-gray-800 transition-colors duration-300 hover:text-black text-sm"
          >
            <Phone className="w-5 h-5" />
            +370 (679) 77 969
          </a>
        </ul>
      </div>
      {/* Overlay when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white/30 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      {isModalOpen && (
        <RegistrationModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        />
      )}
      {isAboutMeModalOpen && (
        <AboutMeModal
          isOpen={isAboutMeModalOpen}
          onRequestClose={() => setIsAboutMeModalOpen(false)}
        />
      )}
    </React.Fragment>
  );
}

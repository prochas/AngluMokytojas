"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/images/logo.svg";
import ScrollShadowWrapper from "../ScrollShadowWrapper/ScrollShadowWrapper";
import RegistrationModal from "../RegisterModal/RegisterModal";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="container mx-auto flex justify-between items-center py-0">
          <Image className="h-9 cursor-pointer" alt="Logo" src={Logo} />

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
            {[
              ["#apie-mane", "Apie mane"],
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
          <button
            className="hidden relative lg:inline-block px-4 py-2 font-medium group cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-[#fafafa] border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-[#fafafa] flex items-center gap-x-3 cursor-pointer">
              Registracija
            </span>
          </button>
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
            ["#apie-mane", "Apie mane"],
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
        </ul>
      </div>
      {/* Overlay when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      {isModalOpen && (
        <RegistrationModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        />
      )}
    </React.Fragment>
  );
}

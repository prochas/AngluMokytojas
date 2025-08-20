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

import Logo from "../../../public/images/logo-speako.svg";
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
          <a className="flex items-start gap-x-2" href="#pradzia">
            <Image
              className="flex items-start gap-x-2 transform transition-transform duration-300 hover:rotate-[16deg]"
              alt="Logo"
              src={Logo}
            />
            <div className="flex flex-col">
              <span
                className="text-black"
                style={{
                  lineHeight: "10px",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Anglų
              </span>
              <span
                className="text-black"
                style={{ fontSize: "16px", fontWeight: "500" }}
              >
                Mokytojas
              </span>
            </div>
          </a>
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
              className="bg-[#451af5] w-full lg:w-[160px] transition-all duration-300 text-[#fafafa] outline-none cursor-pointer flex items-center justify-center gap-x-2 font-medium hover:scale-105 hover:bg-[#2700d7]"
              style={{ padding: "8px 20px", borderRadius: "8px" }}
            >
              <Mail className="w-5 h-5" />
              <span>Registracija</span>
            </button>
            {/* About Me Button */}
            <button
              onClick={() => setIsAboutMeModalOpen(true)}
              className="flex gap-x-2 items-center outline-none w-full lg:w-[150px] cursor-pointer bg-[#451af514] transition-all duration-300 rounded font-medium hover:scale-105 text-[#451af5] hover:bg-[#451af526]"
              style={{ padding: "8px 20px", borderRadius: "8px" }}
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
              className="bg-[#451af5] text-[#fafafa] py-2 px-4 outline-none rounded hover:bg-[#2700d7] transition"
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
        className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
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
          <button
            onClick={() => setIsAboutMeModalOpen(true)}
            className="flex gap-x-2 items-center outline-none cursor-pointer bg-[#451af514] transition-all duration-300 rounded font-medium hover:scale-105 text-[#451af5] hover:bg-[#451af526]"
            style={{ padding: "8px 20px", borderRadius: "8px", width: "55%" }}
          >
            <User className="w-5 h-5" />
            <span>Apie mane</span>
          </button>
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

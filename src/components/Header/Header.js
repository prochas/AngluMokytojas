"use client";

import React, { useState } from "react";

import Logo from "../../../public/images/logo.svg";

import ScrollShadowWrapper from "../ScrollShadowWrapper/ScrollShadowWrapper";

import Image from "next/image";
import Link from "next/link";
import RegistrationModal from "../RegisterModal/RegisterModal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <React.Fragment>
      <ScrollShadowWrapper>
        <div className="container mx-auto flex justify-between items-center">
          <Image className="h-9 cursor-pointer" alt="Logo" src={Logo} />
          <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
            <li className="group hover:scale-105 transition-transform duration-300">
              <Link
                href="#apie-mane"
                className="text-gray-800  transition-colors duration-300"
              >
                Apie mane
              </Link>
              <span className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex" />
            </li>
            <li className="group hover:scale-105 transition-transform duration-300">
              <Link
                href="#paslaugos"
                className="text-gray-800 transition-colors duration-300"
              >
                Paslaugos
              </Link>
              <span className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex" />
            </li>
            <li className="group hover:scale-105 transition-transform duration-300">
              <Link
                href="#kainos"
                className="text-gray-800  transition-colors duration-300"
              >
                Kainos
              </Link>
              <span className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex" />
            </li>
            <li className="group hover:scale-105 transition-transform duration-300">
              <Link
                href="#atsiliepimai"
                className="text-gray-800 transition-colors duration-300"
              >
                Atsiliepimai
              </Link>
              <span className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex" />
            </li>
            <li className="group hover:scale-105 transition-transform duration-300">
              <Link
                href="#kontaktai"
                className="text-gray-800 transition-colors duration-300 "
              >
                Kontaktai
              </Link>
              <span className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex" />
            </li>
          </ul>
          <button
            className="hidden relative lg:inline-block px-4 py-2 font-medium group"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-[#fafafa] border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-[#fafafa] flex items-center gap-x-3  cursor-pointer">
              Registracija
            </span>
          </button>
        </div>
      </ScrollShadowWrapper>
      {isModalOpen && (
        <RegistrationModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        />
      )}
    </React.Fragment>
  );
}

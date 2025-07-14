import React from "react";

import Logo from "../../../public/images/logo.svg";

import ScrollShadowWrapper from "../ScrollShadowWrapper/ScrollShadowWrapper";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <ScrollShadowWrapper>
      <div className="container mx-auto flex justify-between items-center">
        <Image className="h-9 cursor-pointer" alt="Logo" src={Logo} />
        <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
          <li className="group">
            <Link
              href="/"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              Apie mane
            </Link>
            <span className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex" />
          </li>
          <li className="group">
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              Paslaugos
            </Link>
            <span className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex" />
          </li>
          <li className="group">
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              Kainos
            </Link>
            <span className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex" />
          </li>
          <li className="group">
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              Atsiliepimai
            </Link>
            <span className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex" />
          </li>
          <li className="group">
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              Kontaktai
            </Link>
            <span className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex" />
          </li>
        </ul>
        <Link
          className="hidden relative lg:inline-block px-4 py-2 font-medium group"
          href="/"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white flex items-center gap-x-3">
            Registracija
          </span>
        </Link>
      </div>
    </ScrollShadowWrapper>
  );
}

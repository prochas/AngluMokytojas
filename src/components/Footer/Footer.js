import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";

function Footer() {
  return (
    <footer className="bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16">
      <Image
        className="invert h-5 lg:h-9 cursor-pointer"
        alt="Logo"
        src={Logo}
      />
      <div className="text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3">
        <p>© 2025 Anglų kalbos pamokos</p>
        <p>
          Sukurta su{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jūsų Vardas
          </a>
        </p>
        <p>
          Visos teisės saugomos.{" "}
          <a className="text-blue-500 hover:underline" href="/privacy-policy">
            Privatumo politika
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo-v14.svg";

function Footer() {
  return (
    <footer className="bg-[#451af5] px-5 lg:px-28 py-6 flex items-center justify-between mt-8 lg:mt-16">
      <a href="#pradzia">
        <Image
          className="cursor-pointer max-w-[120px] sm:max-w-[150px] h-auto"
          alt="Logo"
          src={Logo}
        />
      </a>
      <div className="text-[#fafafa] lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3">
        <p>Copyright © 2025 anglumokytojas.lt</p>
      </div>
    </footer>
  );
}

export default Footer;

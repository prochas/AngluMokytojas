"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import CheckIcon from "../../../public/images/check-icon.svg";
import Herov2 from "../../../public/images/aboutme-hero.svg";
import RegisterIcon from "../../../public/images/register-icon.svg";

const RegistrationModal = dynamic(
  () => import("../RegisterModal/RegisterModal"),
  {
    ssr: false,
  }
);

const AboutMeModal = dynamic(() => import("../AboutMeModal/AboutMeModal"), {
  ssr: false,
});

const features = [
  "Lankstus tvarkaraštis – nuotoliniu būdu",
  "Aiški ir kokybiška mokomoji medžiaga",
  "Pagalba ruošiantis VBE, kontroliniams darbams ir tarpinėms patikroms",
  "Pamokos visų amžiaus grupių mokiniams – nuo vaikų iki suaugusiųjų",
  "Mokymasis, kuris motyvuoja – įtraukiantys metodai ir šiuolaikiškas požiūris",
];

function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false);

  return (
    <React.Fragment>
      <section
        id="pradzia"
        className="flex justify-between py-0 lg:py-14 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse scroll-mt-20 gap-0 lg:gap-6"
      >
        <div className="lg:w-[55%] text-gray-900 w3-animate-left">
          <h1 className="font-extrabold text-3xl lg:text-5xl leading-[1.2] lg:leading-[1.15] lg:mt-0 mt-4 text-black">
            Anglų kalbos pamokos, kurios įkvepia mokytis ir duoda tikrus
            rezultatus
          </h1>
          <h2 className="text-lg lg:text-2xl mt-4 leading-relaxed text-gray-900">
            Dirbu pagal veiksmingą sistemą, lavinančią anglų kalbos įgūdžius.{" "}
            <strong>Kiekvienam mokiniui skiriu individualų dėmesį.</strong>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 border border-gray-200 rounded-xl p-4 transition bg-[#fbfaff]"
              >
                <Image
                  src={CheckIcon}
                  width={30}
                  height={30}
                  alt="check icon"
                />
                <p className="text-gray-800 text-base lg:text-lg">{feature}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-5 mt-8 w-full lg:mb-0 mb-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#451af5] w-full lg:w-[300px] transition-all outline-none duration-300 text-[#fafafa] cursor-pointer flex items-center justify-center gap-x-2 font-semibold hover:scale-105 hover:bg-[#2700d7]"
              style={{ padding: "14px 20px", borderRadius: "10px" }}
            >
              <span>Registruotis į pamokas</span>
              <Image
                src={RegisterIcon}
                alt="Register Icon"
                width={17}
                height={17}
              />
            </button>
            <button
              className="outline-none w-full lg:w-[170px] cursor-pointer bg-[#451af514] transition-all duration-300 rounded font-semibold hover:scale-105 text-[#451af5] hover:bg-[#451af526]"
              style={{ padding: "14px 20px", borderRadius: "10px" }}
              onClick={() => setIsAboutMeModalOpen(true)}
            >
              Apie mane
            </button>
          </div>
        </div>
        <div className="lg:w-[35%] w-full w3-animate-right">
          <Image
            className="h-auto w-full"
            src={Herov2}
            alt="hero"
            priority
            fetchPriority="high"
            width={500}
            height={500}
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </section>
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

export default AboutMe;

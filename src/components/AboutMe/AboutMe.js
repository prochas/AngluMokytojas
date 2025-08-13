"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Hero from "../../../public/images/hero-vector.svg";
import { CheckCircle } from "lucide-react";

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
        className="flex justify-between py-14 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse scroll-mt-20 gap-0 lg:gap-6"
      >
        <div className="lg:w-[55%] text-gray-900 w3-animate-left">
          <h1 className="font-extrabold text-3xl lg:text-5xl leading-[1.2] lg:leading-[1.15] lg:mt-0 mt-4">
            Anglų kalbos pamokos, kurios įkvepia mokytis ir duoda tikrus
            rezultatus
          </h1>
          <h2 className="text-lg lg:text-2xl mt-4 leading-relaxed">
            Dirbu pagal veiksmingą sistemą, lavinančią anglų kalbos įgūdžius.{" "}
            <strong>Kiekvienam mokiniui skiriu individualų dėmesį.</strong>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-md transition"
              >
                <CheckCircle className="w-6 h-6 shrink-0 text-green-600 mt-1" />
                <p className="text-gray-800 text-base lg:text-lg">{feature}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-5 mt-8 w-full">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-black w-full lg:w-[300px] transition-all duration-300 text-[#fafafa] px-3 py-3 cursor-pointer rounded flex items-center justify-center gap-x-3 font-semibold hover:scale-105"
            >
              Registruotis į pamokas
            </button>
            <button
              className="border border-gray-300 outline-none w-full lg:w-[200px] text-gray-800 px-4 py-2 transition-all duration-300 py-3 px-3 rounded hover:bg-gray-100 font-semibold hover:scale-105"
              style={{ cursor: "pointer" }}
              onClick={() => setIsAboutMeModalOpen(true)}
            >
              Apie mane
            </button>
          </div>
        </div>
        <div className="lg:w-[45%] w-full w3-animate-right">
          <Image
            className="h-auto w-full"
            src={Hero}
            alt="hero"
            priority
            fetchPriority="high"
            width={800}
            height={700}
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

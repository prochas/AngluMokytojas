"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Hero from "../../../public/images/hero-vector.svg";
import gsap from "gsap";
import { CheckCircle } from "lucide-react";

const RegistrationModal = dynamic(
  () => import("../RegisterModal/RegisterModal"),
  {
    ssr: false,
  }
);

const features = [
  "Pamokos pritaikytos A1–C1 lygiams",
  "Ruošimas egzaminams: VBE, PUPP",
  "Nuosekli pažangos stebėsena ir grįžtamasis ryšys",
  "Lankstus tvarkaraštis – nuotoliniu būdu",
  "Dėmesys kalbėjimo, rašymo ir supratimo įgūdžiams",
];

function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <React.Fragment>
      <section
        ref={sectionRef}
        className="flex justify-between py-14 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse"
      >
        <div ref={textRef} className="lg:w-[50%] text-gray-900">
          <h1 className="font-extrabold text-3xl lg:text-5xl leading-[1.2] lg:leading-[1.15]">
            Anglų kalba kiekvienam – lengvai ir aiškiai
          </h1>
          <h2 className="text-lg lg:text-2xl mt-4 leading-relaxed">
            Dirbu pagal aiškią sistemą, padedančią lavinti kalbėjimo, rašymo ir
            supratimo įgūdžius bei ruoštis egzaminams.{" "}
            <strong>Kiekvienas mokinys gauna individualų dėmesį.</strong>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="flex items-start gap-3 bg-white border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-md transition"
              >
                <CheckCircle className="text-green-600 mt-1" size={24} />
                <p className="text-gray-800 text-base lg:text-lg">{feature}</p>
              </div>
            ))}
          </div>
          <div ref={buttonRef} className="mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-black w-[300px] transition-all duration-300 text-[#fafafa] px-3 py-3 rounded flex items-center justify-center gap-x-3 font-semibold cursor-pointer hover:scale-105"
            >
              Registruotis į pamokas
            </button>
          </div>
        </div>
        <div ref={imageRef} className="lg:w-[50%] w-full">
          <Image className="h-full w-full" src={Hero} alt="hero" />
        </div>
      </section>
      {isModalOpen && (
        <RegistrationModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        />
      )}
    </React.Fragment>
  );
}

export default AboutMe;

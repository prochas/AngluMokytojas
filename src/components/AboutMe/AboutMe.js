"use client"; // Important for Next.js App Router to run animations on the client

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Hero from "../../../public/images/hero-vector.svg";
import gsap from "gsap";

function AboutMe() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

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
    }, sectionRef);

    return () => ctx.revert(); // Cleanup animation context
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse"
    >
      <div ref={textRef} className="lg:w-[50%]">
        <h1 className="font-bold text-gray-900 lg:text-5xl">
          Anglų kalbos pamokos, kurios duoda rezultatą – tiek mokykloje, tiek
          egzamine.
        </h1>
        <h2 className="text-gray-900 text-sm lg:text-base mt-5">
          Esu anglų kalbos korepetitorius, turintis 8 metų patirtį ir didelę
          aistrą kalboms bei mokymui. Man 25 metai, laisvai kalbu keturiomis
          kalbomis – lietuvių, anglų, rusų ir ispanų. Kalbos visada buvo mano
          stiprybė ir pomėgis, o šis susidomėjimas išaugo į profesinį kelią,
          kuriuo einu nuo mokyklos laikų.
        </h2>
        <h2 className="text-gray-900 text-sm lg:text-base mt-5">
          2017 m. baigiau West Nottingham Academy vidurinę mokyklą Jungtinėse
          Amerikos Valstijose. Mokslai užsienyje man ne tik suteikė puikų
          akademinį pasirengimą, bet ir leido panirti į autentišką kalbinę
          aplinką – tai neįkainojama patirtis, kuria dalinuosi su savo mokiniais
          iki šiol.
        </h2>
        <h2 className="text-gray-900 text-sm lg:text-base mt-5">
          Man svarbu ne tik perteikti žinias, bet ir motyvuoti, įkvėpti, padėti
          mokiniui suprasti, kodėl mokytis anglų kalbos verta ir kaip tai gali
          atverti naujas galimybes. Dirbu atsakingai, kryptingai,
          prisitaikydamas prie kiekvieno mokinio tempo, lygio ir tikslų – ar tai
          būtų egzaminai, studijos užsienyje, ar tiesiog noras sklandžiau
          kalbėti angliškai.
        </h2>
        <h2 className="text-gray-900 text-sm lg:text-base mt-5">
          Būdamas sportininkas, esu įpratęs siekti rezultato – tai atsispindi ir
          mano mokyme: struktūra, nuoseklumas, aiškumas ir pozityvi motyvacija.
          Mokymasis su manimi – tai bendradarbiavimas, paremtas pasitikėjimu,
          pastangomis ir bendru tikslu.
        </h2>
        <h2 className="text-gray-900 text-sm lg:text-base mt-5">
          Pamokos vyksta nuotoliniu būdu – lanksčiai, patogiai ir efektyviai.
        </h2>
      </div>
      <div ref={imageRef} className="lg:w-[50%] w-full">
        <Image className="h-full w-full" src={Hero} alt="hero" />
      </div>
    </section>
  );
}

export default AboutMe;

"use client";

import React from "react";
import Image from "next/image";

import Close from "../../../public/images/delete.png";
import AboutMeImg from "../../../public/images/about-me-v3.jpeg";

import Modal from "react-modal";

export default function AboutMeModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Registration Modal"
      ariaHideApp={false}
      overlayClassName="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
      className="bg-white w-full sm:w-[95%] max-w-6xl h-[650px] lg:h-[600px] p-6 sm:p-9 rounded-lg sm:rounded-lg shadow-lg outline-none relative flex flex-col"
    >
      <button
        onClick={onRequestClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
      >
        <Image src={Close} alt="Close" className="w-7 h-7" />
      </button>
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Image */}
          <div className="flex justify-center md:justify-start lg:items-start items-center">
            <Image
              src={AboutMeImg}
              alt="About Me"
              className="rounded-lg object-cover w-[200px] h-[260px] md:w-[300px] md:h-[400px]"
            />
          </div>
          {/* Text */}
          <div className="flex-1">
            <p className="text-gray-800 mb-6 text-lg lg:text-left text-justify">
              Esu anglų kalbos korepetitorius, turintis 8 metų patirtį ir didelę
              aistrą kalboms bei mokymui. Man 25 metai, laisvai kalbu keturiomis
              kalbomis – lietuvių, anglų, rusų ir ispanų. Kalbos visada buvo
              mano stiprybė ir pomėgis, o šis susidomėjimas išaugo į profesinį
              kelią, kuriuo einu nuo mokyklos laikų.
            </p>
            <p className="text-gray-800 text-lg lg:text-left text-justify">
              2017 m. baigiau West Nottingham Academy vidurinę mokyklą
              Jungtinėse Amerikos Valstijose. Mokslai užsienyje man ne tik
              suteikė puikų akademinį pasirengimą, bet ir leido panirti į
              autentišką kalbinę aplinką – tai neįkainojama patirtis, kuria
              dalinuosi su savo mokiniais iki šiol.
            </p>
            <p className="text-gray-800 mt-6 text-lg lg:text-left text-justify">
              Man svarbu ne tik perteikti žinias, bet ir motyvuoti, įkvėpti,
              padėti mokiniui suprasti, kodėl mokytis anglų kalbos verta ir kaip
              tai gali atverti naujas galimybes. Dirbu atsakingai, kryptingai,
              prisitaikydamas prie kiekvieno mokinio tempo, lygio ir tikslų – ar
              tai būtų egzaminai, studijos užsienyje, ar tiesiog noras
              sklandžiau kalbėti angliškai.
            </p>
            <p className="text-gray-800 mt-6 text-lg lg:text-left text-justify">
              Būdamas sportininkas, esu įpratęs siekti rezultato – tai
              atsispindi ir mano mokyme: struktūra, nuoseklumas, aiškumas ir
              pozityvi motyvacija. Mokymasis su manimi – tai bendradarbiavimas,
              paremtas pasitikėjimu, pastangomis ir bendru tikslu.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

"use client";

import React from "react";
import Image from "next/image";

import Close from "../../../public/images/delete.png";
import AboutMeImg from "../../../public/images/aboutmev2.jpg";

import Modal from "react-modal";

export default function AboutMeModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Registration Modal"
      ariaHideApp={false}
      overlayClassName="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
      className="bg-white p-9 rounded-lg shadow-lg w-[95%] max-w-6xl py-8 outline-none relative"
    >
      <button
        onClick={onRequestClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
      >
        <Image src={Close} alt="Close" className="w-7 h-7" />
      </button>
      <div className="flex gap-8">
        <Image
          src={AboutMeImg}
          alt="About Me"
          className="w-full h-auto rounded-lg"
          style={{
            maxHeight: "500px",
            width: "300px",
            objectFit: "cover",
            height: "500px",
            borderRadius: "8px",
          }}
        />
        <div className="flex-1">
          <p className="text-gray-800 mb-6 text-lg">
            Esu anglų kalbos korepetitorius, turintis 8 metų patirtį ir didelę
            aistrą kalboms bei mokymui. Man 25 metai, laisvai kalbu keturiomis
            kalbomis – lietuvių, anglų, rusų ir ispanų. Kalbos visada buvo mano
            stiprybė ir pomėgis, o šis susidomėjimas išaugo į profesinį kelią,
            kuriuo einu nuo mokyklos laikų.
          </p>
          <p className="text-gray-800 text-lg">
            2017 m. baigiau West Nottingham Academy vidurinę mokyklą Jungtinėse
            Amerikos Valstijose. Mokslai užsienyje man ne tik suteikė puikų
            akademinį pasirengimą, bet ir leido panirti į autentišką kalbinę
            aplinką – tai neįkainojama patirtis, kuria dalinuosi su savo
            mokiniais iki šiol.
          </p>
          <p className="text-gray-800 mt-6 text-lg">
            Man svarbu ne tik perteikti žinias, bet ir motyvuoti, įkvėpti,
            padėti mokiniui suprasti, kodėl mokytis anglų kalbos verta ir kaip
            tai gali atverti naujas galimybes. Dirbu atsakingai, kryptingai,
            prisitaikydamas prie kiekvieno mokinio tempo, lygio ir tikslų – ar
            tai būtų egzaminai, studijos užsienyje, ar tiesiog noras sklandžiau
            kalbėti angliškai.
          </p>
          <p className="text-gray-800 mt-6 text-lg">
            Būdamas sportininkas, esu įpratęs siekti rezultato – tai atsispindi
            ir mano mokyme: struktūra, nuoseklumas, aiškumas ir pozityvi
            motyvacija. Mokymasis su manimi – tai bendradarbiavimas, paremtas
            pasitikėjimu, pastangomis ir bendru tikslu.
          </p>
        </div>
      </div>
    </Modal>
  );
}

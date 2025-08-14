"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const RegistrationModal = dynamic(
  () => import("../RegisterModal/RegisterModal"),
  {
    ssr: false,
  }
);

import ServiceOneImg from "../../../public/images/service-first.svg";
import ServiceTwoImg from "../../../public/images/service-two.svg";
import ServiceThreeImg from "../../../public/images/service-three.svg";
import ServiceFourImg from "../../../public/images/service-fourth.svg";

import Image from "next/image";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    {
      title: "1–4 klasių mokiniams",
      description:
        "Pamokos skirtos anglų kalbos pagrindų formavimui: žodyno kaupimui, tarimo lavinimui, garsų ir raidžių pažinimui, bei kalbos struktūros pradmenims. Dirbama žaismingai ir vaiko amžių atitinkančiais metodais, kad mokymasis būtų motyvuojantis ir įtraukiantis.",
      img: ServiceTwoImg,
      buttonText: "Sužinoti daugiau",
    },
    {
      title: "5–10 klasių mokiniams",
      description:
        "Pamokos orientuotos į gramatikos gilininimą, skaitymo ir rašymo įgūdžių tobulinimą, žodyno plėtrą, klausymo supratimą bei šnekamosios kalbos lavinimą. Padedu ruoštis pamokoms, kontroliniams darbams, atsiskaitymams ir tarpiniams patikrinimams. Dėmesys skiriamas tiek akademiniams rezultatams, tiek praktiniam kalbos vartojimui.",
      img: ServiceOneImg,
      buttonText: "Sužinoti daugiau",
    },
    {
      title: "11–12 klasių mokiniams",
      description:
        "Ruošimas Valstybinio anglų kalbos brandos egzamino (VBE) abiem dalims pagal atnaujintą egzaminų sistemą. Vienuoliktokams teikiama pagalba ruošiantis pirmajai egzamino daliai, kuri apima skaitymo ir klausymo užduotis. Dvyliktokams skiriamas dėmesys antrajai egzamino daliai – kalbėjimo ir rašymo įgūdžių lavinimui.",
      img: ServiceThreeImg,
      buttonText: "Sužinoti daugiau",
    },
    {
      title: "Suaugusiesiems",
      description:
        "Individualios anglų kalbos pamokos suaugusiesiems, pritaikytos pagal asmeninius poreikius ir tikslus. Mokymasis gali būti orientuotas į kalbos vartojimą profesinėje aplinkoje, kelionėse ar kasdienėse situacijose. Dėmesys skiriamas žodyno plėtrai, kalbėjimo laisvumui, pasitikėjimo ugdymui bei aiškiai ir taisyklingai kalbai tiek žodžiu, tiek raštu.",
      img: ServiceFourImg,
      buttonText: "Sužinoti daugiau",
    },
  ];

  return (
    <React.Fragment>
      <section
        id="paslaugos"
        className="bg-white w-full py-8 lg:py-16 relative scroll-mt-10 px-5 lg:px-28"
      >
        <h2 className="text-2xl lg:text-4xl text-center text-black font-bold lg:mt-0 mt-8">
          Paslaugos
        </h2>
        <div className="container max-w-[1650px] mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {data.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border-white transition-transform duration-300 ease-in-out bg-[#fbfaff] border-1 flex flex-col lg:flex-row gap-4 items-center lg:items-start"
              style={{ border: "1px solid #0000000d" }}
            >
              <Image
                src={service.img}
                alt={service.title}
                className="w-50 h-50 object-cover"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold mb-2 lg:text-left text-center text-black">
                  {service.title}
                </h3>
                <p className="text-black lg:text-left text-justify mb-4">
                  {service.description}
                </p>
                <button
                  className="outline-none w-full lg:w-[170px] cursor-pointer bg-[#451af514] transition-all duration-300 rounded font-semibold hover:scale-105 text-[#451af5] hover:bg-[#451af526] py-[12px] px-[14px] lg:py-[8px] lg:px-[10px]"
                  style={{ borderRadius: "10px" }}
                  onClick={() => setIsModalOpen(true)}
                >
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
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
};

export default Services;

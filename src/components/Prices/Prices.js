"use client";

import React, { useState } from "react";
import Image from "next/image";
import RegistrationModal from "../RegisterModal/RegisterModal";

import Calendar from "../../../public/images/calendar.svg";
import Price from "../../../public/images/price.svg";
import Info from "../../../public/images/info.svg";

import FirstLessonsImg from "../../../public/images/first-lessons.svg";
import SecondLessonsImg from "../../../public/images/second-lessons.svg";
import ThirdLessonsImg from "../../../public/images/third-lessons.svg";

function Prices() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    {
      name: "Bazinis",
      title: "4 pamokos",
      description: "Mėnesio planas",
      price: "100 €",
      img: FirstLessonsImg,
      subDescription: "Vienos 60 min. pamokos kaina 25 €",
    },
    {
      name: "Standartinis",
      title: "8 pamokos",
      description: "Mėnesio planas",
      price: "190 €",
      img: SecondLessonsImg,
      subDescription: "Vienos 60 min. pamokos kaina tik 23.75 €",
    },
    {
      name: "Premium",
      title: "12 pamokų",
      description: "Mėnesio planas",
      price: "275 €",
      img: ThirdLessonsImg,
      subDescription: "Vienos 60 min. pamokos kaina tik 22.90 €",
    },
  ];

  return (
    <React.Fragment>
      <section
        id="kainos"
        className="border-white flex flex-col pt-5 pb-5 pb-14 lg:pb-14 lg-pt-12 z-[1] flex flex-col flex-1 w-full max-w-[1280px] px-5 lg:px-10 relative mx-auto scroll-mt-12"
      >
        <h2 className="text-2xl lg:text-4xl text-center text-black font-bold lg:mb-0 mb-8">
          Kainos
        </h2>
        <div className="flex flex-col gap-y-6 md:grid md:gap-x-6 md:gap-y-6 md:grid-rows-[auto] md:grid-cols-3 md:auto-cols-fr">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-x-7 gap-y-7 border border-[#0000000d] rounded-[24px] bg-[#fbfaff] p-6 lg:mt-8 mt-0"
            >
              <div className="flex flex-col gap-x-7 gap-y-7">
                <div className="flex flex-col gap-x-4 gap-y-4">
                  <div className="flex flex-col justify-start items-stretch gap-x-3 gap-y-3">
                    <div className="flex justify-between items-center gap-x-6 gap-y-6 mb-2">
                      <div className="flex justify-center items-center rounded-[6px] bg-[#451af514] text-[#451af5] text-center pt-[6px] pr-[10px] pb-[5px] pl-[10px]">
                        <span className="font-bold text-sm">{item.name}</span>
                      </div>
                      {index === 1 && (
                        <div className="flex justify-center items-center rounded-[6px] bg-[#06792a14] text-[#06792a] text-center pt-[6px] pr-[10px] pb-[5px] pl-[10px]">
                          <span className="font-bold text-sm">
                            5% Nuolaida!
                          </span>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="flex justify-center items-center rounded-[6px] bg-[#06792a14] text-[#06792a] text-center pt-[6px] pr-[10px] pb-[5px] pl-[10px]">
                          <span className="font-bold text-sm">
                            8% Nuolaida!
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-black text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-x-4 gap-y-0">
                <div className="flex items-center gap-x-3 border-b border-[#0000000d] pb-3">
                  <Image
                    src={Calendar}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                  <p className="text-sm text-black">{item.description}</p>
                </div>
                <div className="flex items-center gap-x-3 border-b border-[#0000000d] pb-3 pt-3">
                  <Image src={Price} alt={item.title} width={24} height={24} />
                  <p className="text-lg font-bold text-black">{item.price}</p>
                </div>
                <div className="flex items-center gap-x-3 border-b border-[#0000000d] pb-3 pt-3">
                  <Image src={Info} alt={item.title} width={24} height={24} />
                  <p className="text-sm text-black">{item.subDescription}</p>
                </div>
              </div>
              <div className="flex justify-center items-center border border-[#0000000d] rounded-[12px] bg-white p-6">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="object-contain"
                  style={{ maxWidth: "200px", height: "auto" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="container mx-auto mt-8 flex justify-center px-5 lg:px-12">
          <button
            onClick={() => setIsModalOpen(true)}
            className="outline-none w-full lg:w-[250px] cursor-pointer bg-[#451af514] transition-all duration-300 rounded font-semibold hover:scale-105 text-[#451af5] hover:bg-[#451af526]"
            style={{ padding: "14px 20px", borderRadius: "10px" }}
          >
            Registruotis!
          </button>
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

export default Prices;

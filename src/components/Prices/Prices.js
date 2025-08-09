"use client";

import React, { useState } from "react";
import Image from "next/image";
import OpenBook from "../../../public/images/open-book.png";
import BookStack from "../../../public/images/book-stack-v2.png";
import Books from "../../../public/images/books.png";
import RegistrationModal from "../RegisterModal/RegisterModal";

function Prices() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    {
      title: "1 pamoka per savaitę",
      description: "Mėnesio planas",
      price: "100 €",
      img: OpenBook,
      subDescription: "Vienos 60 min. pamokos kaina tik 25 €",
    },
    {
      title: "2 pamokos per savaitę",
      description: "Mėnesio planas",
      price: "190 €",
      img: Books,
      subDescription: "Vienos 60 min. pamokos kaina tik 23.75 €",
    },
    {
      title: "3 pamokos per savaitę",
      description: "Mėnesio planas",
      price: "275 €",
      img: BookStack,
      subDescription: "Vienos 60 min. pamokos kaina tik 22.90 €",
    },
  ];

  return (
    <React.Fragment>
      <section id="kainos" className="bg-[#FAFAFA] w-full my-8 pb-5 scroll-mt-25">
        <h2 className="text-2xl lg:text-4xl text-center text-black font-bold">
          Kainos
        </h2>
        <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 lg:px-12">
          {data.map((price, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative border-none"
              style={{
                backgroundColor:
                  index === 0 ? "#F3F4F6" : index === 2 ? "#E5E7EB" : "#F3F4F6",
              }}
            >
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-[#fab400] text-[#fafafa] text-sm font-bold px-3 py-1 rounded-bl-sm rounded-br-sm rounded-tl-sm rounded-tr-lg">
                  5% nuolaida!
                </div>
              )}
              {index === 2 && (
                <div className="absolute top-0 right-0 bg-[#f87171] text-[#fafafa] text-sm font-bold px-3 py-1 rounded-bl-sm rounded-br-sm rounded-tl-sm rounded-tr-lg">
                  8% nuolaida!
                </div>
              )}
              <div className="flex justify-center mb-4">
                <Image
                  src={price.img}
                  alt={price.title}
                  width={100}
                  height={100}
                />
              </div>
              <h3
                className="text-xl lg:text-2xl font-bold mb-2 text-center"
                style={{
                  color:
                    index === 0
                      ? "#1F2937"
                      : index === 1
                      ? "#111827"
                      : "#1F2937",
                }}
              >
                {price.title}
              </h3>
              <p
                className="text-sm lg:text-base font-medium text-center"
                style={{
                  color:
                    index === 0
                      ? "#374151"
                      : index === 1
                      ? "#4B5563"
                      : "#374151",
                }}
              >
                {price.description}
              </p>
              <p
                className="text-lg lg:text-xl font-bold mt-4 text-center"
                style={{
                  color:
                    index === 0
                      ? "#111827"
                      : index === 1
                      ? "#1F2937"
                      : "#111827",
                }}
              >
                {price.price}
              </p>
              <p
                className="text-xs lg:text-sm mt-2 font-medium text-center"
                style={{
                  color:
                    index === 0
                      ? "#6B7280"
                      : index === 1
                      ? "#9CA3AF"
                      : "#6B7280",
                }}
              >
                {price.subDescription}
              </p>
            </div>
          ))}
        </div>
        <div className="container mx-auto mt-8 flex justify-center px-5 lg:px-12">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black w-full lg:w-[200px] transition-all duration-300 text-[#fafafa] px-3 py-3 rounded flex items-center justify-center gap-x-3 font-medium cursor-pointer hover:scale-105 font-bold"
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

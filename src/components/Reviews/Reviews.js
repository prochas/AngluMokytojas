"use client";

import React, { useState, useEffect } from "react";
import Quote from "../../../public/images/quotes.png";
import Image from "next/image";

import BgCover from "../../../public/images/bg-cover.png";

function Reviews() {
  const data = [
    {
      name: "Austėja V.",
      review:
        "Kartu su sese ruošėmės anglų kalbos egzaminui pas šį nuostabų korepetitorių. Nuo pat pirmos pamokos mokytis buvo ne tik naudinga, bet ir smagu. Mokytojas visada rūpinosi, kad viską gerai suprastume, ir pritaikydavo pamokas prie mūsų lygio bei tempo. Dėl jo pagalbos į egzaminą ėjome pasitikėdamos savimi ir puikiai pasiruošusios. Esame labai dėkingos už kantrybę, palaikymą ir gerą nuotaiką viso pasiruošimo metu. Nuoširdžiai rekomenduojame visiems, ieškantiems šilto, išmanaus ir atsidavusio anglų kalbos mokytojo!",
      date: "2025-07-21",
      image: Quote,
    },
    {
      name: "Rita G.",
      review:
        "Kadangi Justinas puikus sportininkas, todėl ir visose srityse, net ir anglų kalbos lavinime yra atsakingas, konkretus, motyvuotas, motyvuojantis, oreantuotas 5 tikslą, dinamiškas ir žinoma pedagogiškas. Labai noriu su juo lavinti ir toliau anglų kalbos žinias ir rekomenduoju!",
      date: "2024-10-15",
      image: Quote,
    },
    {
      name: "Sonata N.",
      review:
        "Su Justinu bendradarbiaujame jau antrus metus ir labai džiaugiamės, kad pasirinkome būtent jį. Mokytojas puikiai suprato sūnui kylančius sunkumus ir juos išsprendė. Taip pat ypač smagu ir naudinga iš mokytojo gauti tokią išsamią informaciją kaip sekasi pamokose, kuria linkme judama ir kas laukia toliau. Bendravimas su Justinu yra paprastas ir operatyvus, viską yra labai lengva suderinti. Tikrai drąsiai rekomenduoju.",
      date: "2023-09-20",
      image: Quote,
    },
    {
      name: "Donatas S.",
      review:
        "Labai kompetetingas mokytojas. Lengvai supranta jaunimą ir puikiai su jais randa bendrą kalbą. Mokomoji medžiaga yra pateikiama itin paprastai ir turi kantrybės tą pačią medžiagą paaiškinti kelis kartus. Kol suradome Justiną pakeitėme kelis korepetitorius, nes laikas bėgo, o rezultato nebuvo. Sūnus su Justinu jaučiasi labai drąsiai ir visiškai nejaučia gėdos, jei suklysta darydamas užduotis. Labai juo patenkinti, rekomenduojame.",
      date: "2023-09-04",
      image: Quote,
    },
    {
      name: "Rita",
      review:
        "Mokantis bendrauti ir išmanatis savo darbą,sūnus labai džiaugiasi jo pamokomis ,o tėvai rezultatais.",
      date: "2023-08-25",
      image: Quote,
    },
    {
      name: "Berta S.",
      review:
        "Iš savo patirties galime pasakyti, kad Justinas iš ties puikus mokytojas. Dukra mokosi dar nepilnai metus, bet ir per tokį sąlyginai nedidelį laiką rezultatas akivaizdus. Džiugu matyti, kad Justinas iš ties visada pasiruošia pamokoms, moko iš širdies ir neatmestinai.",
      date: "2023-08-15",
      image: Quote,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 3; // Number of visible items in the carousel

  useEffect(() => {
    const interval = setInterval(() => {
      moveRight();
    }, 5000); // Automatically scroll every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveRight = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (data.length - visibleItems + 1)
    );
  };

  const moveLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - visibleItems : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#0f0f0f] w-full my-8 py-8 lg:my-16 lg:py-16">
      <h2 className="text-2xl lg:text-4xl text-center text-[#fafafa] font-bold">
        Atsiliepimai
      </h2>
      <div className="carousel overflow-hidden relative flex items-center justify-center p-6 rounded-lg shadow-lg mt-8">
        <button
          className="carousel-button left text-[#E5E7EB] hover:text-gray-800 text-2xl font-bold px-4 absolute left-0 z-10"
          onClick={moveLeft}
        >
          {"<"}
        </button>
        <div
          className="carousel-track flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
            width: `${(data.length / visibleItems) * 100}%`,
          }}
        >
          {data.map((item, index) => (
            <div key={index} className="carousel-item flex-shrink-0 w-1/3 px-4">
              <div
                className="review bg-[#FAFAFA] p-4 rounded-lg shadow-md flex items-start"
                style={{ minHeight: "250px" }}
              >
                <Image
                  src={item.image}
                  alt="Quote"
                  className="w-11 h-11 mr-4"
                  style={{ alignSelf: "flex-start" }}
                />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <small className="text-gray-400">{item.date}</small>
                  <p className="text-gray-600 mt-2">{item.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-button right text-[#E5E7EB] hover:text-gray-800 text-2xl font-bold px-4 absolute right-0 z-10"
          onClick={moveRight}
        >
          {">"}
        </button>
      </div>
      <div className="container mx-auto mt-8 flex justify-center">
        <a
          href="https://paslaugos.lt/justinas-mk557"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#fafafa] w-[200px] transition-all w-[250px] duration-300 text-black px-3 py-3 rounded flex items-center justify-center gap-x-3 font-medium cursor-pointer hover:scale-105 font-bold"
        >
          Peržiūrėti visus atsiliepimus!
        </a>
      </div>
    </section>
  );
}

export default Reviews;

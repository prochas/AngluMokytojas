"use client";

import React from "react";
import Quote from "../../../public/images/quotes.png";
import Image from "next/image";
import ServicesBG from "../../../public/images/services-background-v2.png";

import styles from "./styles.module.scss";

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

  const repeated = [...data, ...data];

  return (
    <section
      className="bg-[#0f0f0f] w-full my-8 py-8 lg:my-16 lg:py-16 overflow-hidden"
      style={{
        backgroundImage: `url(${ServicesBG.src})`,
        backgroundSize: "contain",
      }}
    >
      <h2 className="text-2xl lg:text-4xl text-center text-[#fafafa] font-bold">
        Atsiliepimai
      </h2>
      <div className="mt-8 group relative overflow-hidden">
        <div className={`${styles.scrollTrack} ${styles.paused}`}>
          {repeated.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] sm:w-[320px] lg:w-[600px] mx-4 p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: "#F3F4F6" }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={review.image}
                  alt="Quote"
                  width={40}
                  height={40}
                  className="mr-5"
                />
                <h3 className="text-xl font-bold text-black">{review.name}</h3>
              </div>
              <p className="text-sm lg:text-base text-gray-800 mb-4">
                {review.review}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString("lt-LT", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto flex mt-10 justify-center">
        <a
          href="https://paslaugos.lt/justinas-mk557"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#fafafa] w-[250px] transition-all duration-300 text-black px-3 py-3 rounded flex items-center justify-center gap-x-3 font-medium cursor-pointer hover:scale-105 font-bold"
        >
          Peržiūrėti visus atsiliepimus!
        </a>
      </div>
    </section>
  );
}

export default Reviews;

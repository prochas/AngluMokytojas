import React from "react";

import FirstServiceImg from "../../../public/images/first-photo.png";
import SecondServiceImg from "../../../public/images/second-photo-v2.png";
import ThirdServiceImg from "../../../public/images/third-photo.png";
import FourthServiceImg from "../../../public/images/fourth-photo-v2.png";

import Image from "next/image";

const Services = () => {
  const data = [
    {
      title: "5-8 kl. mokiniams​​",
      description:
        "Pagrindinių rašybos ir skyrybos taisyklių kartojimas, literatūros analizė, teksto kūrimo pagrindai.",
      img: FirstServiceImg,
    },
    {
      title: "Stojantiems į gimnaziją",
      description:
        "Pasiruošimas stojimui į geriausias Lietuvos gimnazijas. Gimnazijų standartus atitinkančios kalbos taikymo užduotys, unikalūs teksto suvokimai, teksto kūrimo užduotys.",
      img: SecondServiceImg,
    },
    {
      title: "Laikantiems PUPP",
      description:
        "Pasiruošimas 10 kl. lietuvių k. PUPP egzaminui: kalbos taikymo užduotys, įvairūs teksto suvokimai, pagalba rašant rašinį ar kalbėjimą.",
      img: ThirdServiceImg,
    },
    {
      title: "11-12 kl. mokiniams",
      description:
        "Pasiruošimas valstybiniam lietuvių k. ir literatūros egzaminui: teksto interpretavimas, privalomosios literatūros analizė, rašinio struktūros pagrindai.",
      img: FourthServiceImg,
    },
  ];

  return (
    <section className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
      <h2 className="text-2xl lg:text-4xl text-center text-white font-bold">
        Paslaugos
      </h2>
      <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {data.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-101 hover:bg-[rgb(39,39,42)] border-1 flex gap-4 items-start"
          >
            <Image
              src={service.img}
              alt={service.title}
              className="w-40 h-40 object-cover"
            />
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-white">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

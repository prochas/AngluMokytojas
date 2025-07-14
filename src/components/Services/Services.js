import React from "react";

const Services = () => {
  const data = [
    {
      title: "5-8 kl. mokiniams​​",
      description:
        "Pagrindinių rašybos ir skyrybos taisyklių kartojimas, literatūros analizė, teksto kūrimo pagrindai.",
    },
    {
      title: "Stojantiems į gimnaziją",
      description:
        "Pasiruošimas stojimui į geriausias Lietuvos gimnazijas. Gimnazijų standartus atitinkančios kalbos taikymo užduotys, unikalūs teksto suvokimai, teksto kūrimo užduotys.",
    },
    {
      title: "Laikantiems PUPP",
      description:
        "Pasiruošimas 10 kl. lietuvių k. PUPP egzaminui: kalbos taikymo užduotys, įvairūs teksto suvokimai, pagalba rašant rašinį ar kalbėjimą.",
    },
    {
      title: "11-12 kl. mokiniams",
      description:
        "Pasiruošimas valstybiniam lietuvių k. ir literatūros egzaminui: teksto interpretavimas, privalomosios literatūros analizė, rašinio struktūros pagrindai.",
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
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-1"
          >
            <h3 className="text-xl font-bold mb-2 text-white">
              {service.title}
            </h3>
            <p className="text-white">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

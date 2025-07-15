import React from "react";
import Image from "next/image";
import OpenBook from "../../../public/images/open-book.png";
import BookStack from "../../../public/images/book-stack-v2.png";
import Books from "../../../public/images/books.png";

function Prices() {
  const data = [
    {
      title: "4 pamokos",
      description: "Mėnesio planas",
      price: "108 €",
      img: OpenBook,
      subDescription: "Vienos 60 min. pamokos kaina tik 27 €",
    },
    {
      title: "6 pamokos",
      description: "Mėnesio planas",
      price: "162 €",
      img: Books,
      subDescription: "Vienos 60 min. pamokos kaina tik 27 €",
    },
    {
      title: "8 pamokos",
      description: "Mėnesio planas",
      price: "204 €",
      img: BookStack,
      subDescription: "Vienos 60 min. pamokos kaina tik 25.5 €",
    },
  ];

  return (
    <section className="bg-white w-full my-8 pb-8 lg:mb-16 lg:pb-16">
      <h2 className="text-2xl lg:text-4xl text-center text-black font-bold">
        Kainos
      </h2>
      <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
        {data.map((price, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-1 relative"
            style={{
              backgroundColor:
                index === 0 ? "#F3F4F6" : index === 1 ? "#E5E7EB" : "#F3F4F6",
            }}
          >
            {index === 1 && (
              <div className="absolute top-0 right-0 bg-[#fab400] text-white text-sm font-bold px-3 py-1 rounded-bl-sm rounded-br-sm rounded-tl-sm rounded-tr-lg">
                Populiariausias
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
                  index === 0 ? "#1F2937" : index === 1 ? "#111827" : "#1F2937",
              }}
            >
              {price.title}
            </h3>
            <p
              className="text-sm lg:text-base font-medium text-center"
              style={{
                color:
                  index === 0 ? "#374151" : index === 1 ? "#4B5563" : "#374151",
              }}
            >
              {price.description}
            </p>
            <p
              className="text-lg lg:text-xl font-bold mt-4 text-center"
              style={{
                color:
                  index === 0 ? "#111827" : index === 1 ? "#1F2937" : "#111827",
              }}
            >
              {price.price}
            </p>
            <p
              className="text-xs lg:text-sm mt-2 font-medium text-center"
              style={{
                color:
                  index === 0 ? "#6B7280" : index === 1 ? "#9CA3AF" : "#6B7280",
              }}
            >
              {price.subDescription}
            </p>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-8 flex justify-center">
        <button className="bg-black w-[200px] transition-all duration-300 text-white px-3 py-3 rounded flex items-center justify-center gap-x-3 font-medium cursor-pointer hover:scale-105 font-bold">
          Registruotis!
        </button>
      </div>
    </section>
  );
}

export default Prices;

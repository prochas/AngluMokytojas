"use client";

import React, { useState, useEffect } from "react";
import Quote from "../../../public/images/quote.svg";

function Reviews() {
  const data = [
    {
      name: "Jonas",
      review: "Puikus mokytojas, labai padėjo pasiruošti egzaminams!",
      date: "2023-10-01",
    },
    {
      name: "Laura",
      review: "Labai aiškiai ir suprantamai dėsto, rekomenduoju!",
      date: "2023-09-15",
    },
    {
      name: "Tomas",
      review: "Pamokos buvo įdomios ir naudingos, ačiū!",
      date: "2023-08-20",
    },
    {
      name: "Ema",
      review:
        "Puikus pasiruošimas PUPP egzaminui, labai džiaugiuosi rezultatais!",
      date: "2023-07-10",
    },
    {
      name: "Mantas",
      review: "Gera mokymo medžiaga ir profesionalus požiūris.",
      date: "2023-06-05",
    },
    {
      name: "Mantas",
      review: "Gera mokymo medžiaga ir profesionalus požiūris.",
      date: "2023-06-05",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moveRight();
    }, 5000); // Automatically scroll every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const moveLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
      <h2 className="text-2xl lg:text-4xl text-center text-white font-bold">
        Atsiliepimai
      </h2>
      <div className="carousel overflow-hidden relative flex items-center justify-center p-6 rounded-lg shadow-lg mt-8">
        <button
          className="carousel-button left text-gray-600 hover:text-gray-800 text-2xl font-bold px-4 absolute left-0 z-10"
          onClick={moveLeft}
        >
          {"<"}
        </button>
        <div
          className="carousel-track flex transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${currentIndex * 33.33}%)`,
            width: `${data.length * 33.33}%`,
          }}
        >
          {data.map((item, index) => (
            <div key={index} className="carousel-item flex-shrink-0 w-1/3 px-4">
              <div
                className="review bg-white p-4 rounded-lg shadow-md"
                style={{ minHeight: "250px" }}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 mt-2">{item.review}</p>
                <small className="text-gray-400 mt-4 block">{item.date}</small>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-button right text-gray-600 hover:text-gray-800 text-2xl font-bold px-4 absolute right-0 z-10"
          onClick={moveRight}
        >
          {">"}
        </button>
      </div>
    </section>
  );
}

export default Reviews;

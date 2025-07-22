"use client";

import React, { useState, useEffect } from "react";
import Quote from "../../../public/images/quotes.png";
import Image from "next/image";

import BgCover from "../../../public/images/bg-cover.png";

function Reviews() {
  const data = [
    {
      name: "Jonas",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non ex a odio tristique egestas ac quis nisi. Proin commodo ultrices sollicitudin. Pellentesque nec magna id est consequat feugiat. Phasellus sed suscipit orci, quis vulputate ligula. Etiam suscipit ultrices magna, a aliquet odio sodales sit amet.",
      date: "2023-10-01",
      image: Quote,
    },
    {
      name: "Laura",
      review:
        "Nam feugiat est ut dapibus condimentum. Vivamus volutpat, dui ut posuere mattis, enim nibh malesuada metus, eu fringilla orci orci ut mi. Curabitur vitae euismod turpis. Nam magna justo, pretium in ultricies id, ultricies at quam. Maecenas interdum auctor magna vitae luctus.",
      date: "2023-09-15",
      image: Quote,
    },
    {
      name: "Tomas",
      review:
        "Donec consequat faucibus tristique. Phasellus vel pretium tellus, ac molestie augue. Nam nec consequat nisl, nec dignissim nibh. ",
      date: "2023-08-20",
      image: Quote,
    },
    {
      name: "Ema",
      review:
        "Puikus pasiruošimas PUPP egzaminui, labai džiaugiuosi rezultatais!",
      date: "2023-07-10",
      image: Quote,
    },
    {
      name: "Mantas",
      review:
        "Pellentesque cursus dolor ac commodo sodales. Duis rutrum gravida quam. Vivamus fermentum, nisl non accumsan varius, leo purus dictum justo, ut iaculis ipsum nunc dignissim tellus.",
      date: "2023-06-05",
      image: Quote,
    },
    {
      name: "Mantas",
      review:
        "Donec sit amet elit sapien. In vulputate commodo mauris, eget sodales velit cursus nec. Morbi ultricies ante aliquet elit porttitor, eu ultricies nunc volutpat. Nullam suscipit enim ac eros dapibus volutpat",
      date: "2023-06-05",
      image: Quote,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 3; // Number of visible items in the carousel

  useEffect(() => {
    const interval = setInterval(() => {
      moveRight();
    }, 3000); // Automatically scroll every 3 seconds
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
    <section
      className="bg-[#0f0f0f] w-full my-8 py-8 lg:my-16 lg:py-16"
    >
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
        <button className="bg-[#fafafa] w-[200px] transition-all w-[250px] duration-300 text-black px-3 py-3 rounded flex items-center justify-center gap-x-3 font-medium cursor-pointer hover:scale-105 font-bold">
          Peržiūrėti visus atsiliepimus!
        </button>
      </div>
    </section>
  );
}

export default Reviews;

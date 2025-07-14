import React from "react";
function Prices() {
  const data = [
    {
      title: "4 pamokos",
      description: "Mėnesio planas",
      price: "108 €",
      subDescription: "Vienos 60 min. pamokos kaina tik 27 €",
    },
    {
      title: "6 pamokos",
      description: "Mėnesio planas",
      price: "162 €",
      subDescription: "Vienos 60 min. pamokos kaina tik 27 €",
    },
    {
      title: "8 pamokos",
      description: "Mėnesio planas",
      price: "204 €",
      subDescription: "Vienos 60 min. pamokos kaina tik 25.5 €",
    },
  ];

  return (
    <section className="bg-white w-full my-8 pb-8 lg:mb-16 lg:pb-16">
      <h2 className="text-2xl lg:text-4xl text-center text-black font-bold">
        Kainos
      </h2>
      <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((price, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-1"
          >
            <h3 className="text-xl font-semibold mb-2 text-black font-bold">
              {price.title}
            </h3>
            <p className="text-gray-700 font-bold">{price.description}</p>
            <p className="text-2xl font-bold mt-4 text-black font-bold">
              {price.price}
            </p>
            <p className="text-gray-500 mt-2 font-bold">
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

import React from "react";

import FirstServiceImg from "../../../public/images/first-photo.png";
import SecondServiceImg from "../../../public/images/second-photo-v2.png";
import ThirdServiceImg from "../../../public/images/third-photo.png";
import FourthServiceImg from "../../../public/images/fourth-photo-v2.png";
import ServicesBG from "../../../public/images/services-background-v2.png";

import Image from "next/image";

const Services = () => {
  const data = [
    {
      title: "1–4 klasių mokiniams",
      description:
        "Pamokos skirtos anglų kalbos pagrindų formavimui: žodyno kaupimui, tarimo lavinimui, garsų ir raidžių pažinimui, bei kalbos struktūros pradmenims. Dirbama žaismingai ir vaiko amžių atitinkančiais metodais, kad mokymasis būtų motyvuojantis ir įtraukiantis.",
      img: FirstServiceImg,
    },
    {
      title: "5–10 klasių mokiniams",
      description:
        "Pamokos orientuotos į gramatikos gilininimą, skaitymo ir rašymo įgūdžių tobulinimą, žodyno plėtrą, klausymo supratimą bei šnekamosios kalbos lavinimą. Padedu ruoštis pamokoms, kontroliniams darbams, atsiskaitymams ir tarpiniams patikrinimams. Dėmesys skiriamas tiek akademiniams rezultatams, tiek praktiniam kalbos vartojimui.",
      img: SecondServiceImg,
    },
    {
      title: "11–12 klasių mokiniams",
      description:
        "Ruošimas Valstybinio anglų kalbos brandos egzamino (VBE) abiem dalims pagal atnaujintą egzaminų sistemą. Vienuoliktokams teikiama pagalba ruošiantis pirmajai egzamino daliai, kuri apima skaitymo ir klausymo užduotis. Dvyliktokams skiriamas dėmesys antrajai egzamino daliai – kalbėjimo ir rašymo įgūdžių lavinimui. Pamokose sistemingai dirbama su visomis egzamino dalimis, ugdoma kalbinė kompetencija ir atsakomybė už pasiruošimo procesą.",
      img: ThirdServiceImg,
    },
    {
      title: "Suaugusiesiems",
      description:
        "Individualios anglų kalbos pamokos suaugusiesiems, pritaikytos pagal asmeninius poreikius ir tikslus. Mokymasis gali būti orientuotas į kalbos vartojimą profesinėje aplinkoje, kelionėse ar kasdienėse situacijose. Dėmesys skiriamas žodyno plėtrai, kalbėjimo laisvumui, pasitikėjimo ugdymui bei aiškiai ir taisyklingai kalbai tiek žodžiu, tiek raštu.",
      img: FourthServiceImg,
    },
  ];

  return (
    <section
      className="bg-[#0f0f0f] w-full my-8 py-8 lg:my-16 lg:py-16 relative"
      style={{
        backgroundImage: `url(${ServicesBG.src})`,
        backgroundSize: "contain",
      }}
    >
      <h2 className="text-2xl lg:text-4xl text-center text-white font-bold">
        Paslaugos
      </h2>
      <div className="container max-w-[1650px] mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {data.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg border-white transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-101 bg-[rgb(39,39,42)] border-1 flex gap-4 items-start"
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

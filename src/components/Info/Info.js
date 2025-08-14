import React from "react";
import Image from "next/image";
import InfoOne from "../../../public/images/info-one.svg";
import InfoTwo from "../../../public/images/info-two.svg";
import InfoThree from "../../../public/images/info-three.svg";
import InfoFour from "../../../public/images/info-four.svg";

const Info = () => {
  const infoBlock = [
    {
      img: InfoOne,
      title: "9/10",
      description: "Mokinių pagerina anglų kalbos vidurkį",
    },
    {
      img: InfoTwo,
      title: "8+",
      description: "Metai mokymo patirties",
    },
    {
      img: InfoFour,
      title: "81%",
      description: "Ilgalaikių klientų",
    },
        {
      img: InfoThree,
      title: "5000+",
      description: "Sėkmingai pravestų pamokų",
    },
  ];

  return (
    <section className="border-t border-b border-[#0000000d] bg-[#00000005] flex flex-col pt-5 lg:pb-14 pb-5 lg:pt-12">
      <div className="z-[1] flex flex-col flex-1 w-full max-w-[1280px] lg:px-10 px-5 relative mx-auto">
        <div
          className="grid gap-x-0 gap-y-0 grid-rows-[auto] grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr] auto-cols-fr w-full 
                max-md:flex max-md:flex-col max-md:divide-y max-md:divide-[#0000001a]"
        >
          {infoBlock.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col justify-start items-center px-6 gap-x-6 gap-y-3 lg:gap-y-6 lg:py-0 py-5">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={45}
                  height={45}
                  sizes="(max-width: 768px) 50px, 35px"
                  className="w-[50px] h-[50px] md:w-[35px] md:h-[35px] sm:w-[50px] sm:h-[50px]"
                />
                <span className="text-[32px] lg:text-[56px] leading-[112%] text-black">
                  {item.title}
                </span>
                <p className="text-md text-center text-[#000000b3] font-semibold">
                  {item.description}
                </p>
              </div>
              {index < infoBlock.length - 1 && (
                <div className="border-l border-[#0000001a]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;

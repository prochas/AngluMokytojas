"use client"; // Important for Next.js App Router to run animations on the client

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Hero from "../../../public/images/hero-vector.svg";
import gsap from "gsap";

function AboutMe() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup animation context
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse"
    >
      <div ref={textRef} className="lg:w-[50%]">
        <h1 className="font-bold text-gray-900 lg:text-5xl">
          Anglų kalbos mokytojas, kuris padės jums išmokti anglų kalbą!
        </h1>
        <h2 className="text-[#71717A] text-sm lg:text-base mt-5">
          Sveiki, esu Justinas Leganovič!
        </h2>
        <h2 className="text-[#71717A] text-sm lg:text-base mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra
          diam ipsum, at rhoncus lacus tincidunt ut. Phasellus imperdiet nibh in
          turpis eleifend feugiat. Nunc ligula ipsum, euismod in elit a, euismod
          cursus neque. Fusce tincidunt semper ex, at gravida eros. Quisque id
          vulputate nisl, ut auctor magna. Etiam porttitor erat vel nibh tempor,
          vitae sagittis eros tincidunt. Curabitur maximus et neque eget
          commodo. Quisque dui dolor, fringilla rhoncus sem a, maximus mollis
          erat. Morbi laoreet nisl vitae diam interdum venenatis. Pellentesque
          venenatis nibh id ante mollis dignissim. Ut metus metus, posuere at
          condimentum in, commodo eu orci. Sed sed metus vitae ante mattis
          posuere. Vestibulum tempor elementum odio a consequat. Vestibulum
          molestie risus odio, eget posuere sem tempus vel.
        </h2>
      </div>
      <div ref={imageRef} className="lg:w-[50%] w-full">
        <Image className="h-full w-full" src={Hero} alt="hero" />
      </div>
    </section>
  );
}

export default AboutMe;

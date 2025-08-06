"use client";

import React, { useState } from "react";
import PhoneIcon from "../../../public/images/phone.svg";
import EmailIcon from "../../../public/images/email.svg";
import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Žinutė išsiųsta sėkmingai!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Nepavyko išsiųsti žinutės. Bandykite dar kartą.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Įvyko klaida siunčiant žinutę.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="kontaktai"
      className="bg-[#FAFAFA] w-full mb-8 pb-8 lg:mb-16 lg:pb-16 scroll-mt-20 px-5 lg:px-12"
    >
      <h2 className="text-2xl lg:text-4xl text-center text-black font-bold">
        Kontaktai
      </h2>
      <div className="container mx-auto mt-8 flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row">
        <div className="lg:w-[40%]">
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-3 lg:space-y-5"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border-2 px-5 py-3 border-black rounded placeholder:text-gray-700 text-sm w-full text-gray-900"
              placeholder="Vardas"
              type="text"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border-2 px-5 py-3 border-black rounded placeholder:text-gray-700 text-sm w-full text-gray-900"
              placeholder="El. paštas"
              type="email"
              required
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="border-2 px-5 py-3 border-black rounded placeholder:text-gray-700 text-sm w-full text-gray-900"
              placeholder="Tel. numeris"
              type="tel"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="border-2 px-5 py-3 border-black rounded placeholder:text-gray-700 text-sm w-full text-gray-900"
              placeholder="Žinutė"
              rows="6"
              style={{ resize: "none" }}
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-black w-full transition-all duration-300 text-[#fafafa] px-3 py-3 rounded flex items-center justify-center gap-x-3 font-medium cursor-pointer hover:scale-105 font-bold"
            >
              {loading ? "Siunčiama..." : "Siųsti žinutę"}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2">
          <div className="font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3 text-gray-900">
            <h2>Susisiekite su manimi!</h2>
          </div>
          <p className="text-lg lg:text-md mt-4 leading-relaxed text-gray-900">
            Jei turite klausimų, pageidavimų ar norite sužinoti daugiau apie
            mano teikiamas paslaugas, nedvejodami susisiekite su manimi. Aš
            mielai atsakysiu į jūsų klausimus ir padėsiu rasti geriausią
            sprendimą jūsų anglų kalbos mokymosi poreikiams!
          </p>
          <div className="font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4 text-gray-900">
            <a className="flex items-center gap-2 group text-lg lg:text-md">
              <Image src={EmailIcon} alt="email icon" width={20} height={50} />
              Youremail@gmail.com
            </a>
            <a className="flex items-center gap-2 group text-lg lg:text-md">
              <Image src={PhoneIcon} alt="phone icon" width={20} height={50} />
              +370 123 45678
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;

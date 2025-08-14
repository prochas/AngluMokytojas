"use client";

import React, { useState } from "react";
import PhoneIcon from "../../../public/images/phone.svg";
import EmailIcon from "../../../public/images/email.svg";
import Image from "next/image";

import { toast } from "react-toastify";
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
    <section id="kontaktai" className="bg-white flex flex-col pt-12 pb-14 px-5 lg:px-0">
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
              className="border-1 px-5 py-3 border-[#0000000d] rounded placeholder:text-gray-900 text-sm w-full text-gray-900 bg-[#fbfaff] outline-none"
              placeholder="Vardas"
              type="text"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border-1 px-5 py-3 border-[#0000000d] rounded placeholder:text-gray-900 text-sm w-full text-gray-900 bg-[#fbfaff] outline-none"
              placeholder="El. paštas"
              type="email"
              required
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="border-1 px-5 py-3 border-[#0000000d] rounded placeholder:text-gray-900 text-sm w-full text-gray-900 bg-[#fbfaff] outline-none"
              placeholder="Tel. numeris"
              type="tel"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="border-1 px-5 py-3 border-[#0000000d] rounded placeholder:text-gray-900 text-sm w-full text-gray-900 bg-[#fbfaff] outline-none"
              placeholder="Žinutė"
              rows="6"
              style={{ resize: "none" }}
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#451af5] w-full transition-all duration-300 text-[#fafafa] cursor-pointer flex items-center justify-center gap-x-2 font-semibold hover:scale-105 hover:bg-[#2700d7]"
              style={{ padding: "12px 17px", borderRadius: "10px" }}
            >
              {loading ? "Siunčiama..." : "Siųsti žinutę"}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2">
          <div className="font-extrabold text-2xl lg:text-5xl mt-14 lg:mt-0 space-y-1 lg:space-y-3 text-gray-900">
            <h2>Susisiekite su manimi!</h2>
          </div>
          <p className="text-lg lg:text-md mt-4 leading-relaxed text-gray-900">
            Jei turite klausimų, pageidavimų ar norite sužinoti daugiau apie
            mano teikiamas paslaugas, nedvejodami parašykite ar paskambinkite.
            Mielai atsakysiu į jūsų klausimus ir padėsiu rasti geriausią
            sprendimą jūsų anglų kalbos mokymosi poreikiams!
          </p>
          <div className="font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4 text-gray-900">
            <a
              href="mailto:info@anglumokytojas.lt"
              className="flex items-center gap-2 group text-lg lg:text-md"
            >
              <Image src={EmailIcon} alt="email icon" width={20} height={50} />
              info@anglumokytojas.lt
            </a>
            <a
              href="tel:+37067977969"
              className="flex items-center gap-2 group text-lg lg:text-md"
            >
              <Image src={PhoneIcon} alt="phone icon" width={20} height={50} />
              +370 (679) 77 969
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;

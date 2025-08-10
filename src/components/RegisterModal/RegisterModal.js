import React, { useState } from "react";
import Image from "next/image";

import Close from "../../../public/images/delete.png";

import Modal from "react-modal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegistrationModal({ isOpen, onRequestClose }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
      onRequestClose(); // Close the modal after submission
    }
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Registration Modal"
        ariaHideApp={false}
        overlayClassName="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
        className="bg-white w-full sm:w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-lg sm:rounded-lg shadow-lg outline-none relative"
      >
        <h2 className="text-xl font-semibold mb-4 text-[#111827]">
          Greitai su jumis susisieksime ir aptarsime geriausias mokymosi
          galimybes!
        </h2>
        <p className="text-gray-600 mb-6">
          Užpildykite formą žemiau – atsakysime per 24 valandas.
        </p>
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <Image src={Close} alt="Close" className="w-6 h-6" />
        </button>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
      </Modal>
    </React.Fragment>
  );
}

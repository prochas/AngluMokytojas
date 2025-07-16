import React from "react";
import Image from "next/image";

import Close from "../../../public/images/delete.png";

import Modal from "react-modal";

export default function RegistrationModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Registration Modal"
      ariaHideApp={false}
      overlayClassName="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
      className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl outline-none relative"
    >
      <h2 className="text-xl font-semibold mb-4 text-[#111827]">
        Mielai susisieksime ir suteiksime geriausią lietuvių k. pamokų
        pasiūlymą!
      </h2>
      <p className="text-gray-600 mb-6">
        Užpildykite formą žemiau ir mes su jumis susisieksime per 24 valandas.
      </p>
      <button
        onClick={onRequestClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
      >
        <Image src={Close} alt="Close" className="w-6 h-6" />
      </button>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Vardas"
          className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
        />
        <input
          type="email"
          placeholder="El. paštas"
          className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
        />
        <input
          type="tel"
          placeholder="Telefono numeris"
          className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full"
        />
        <button
          type="submit"
          className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Siųsti
        </button>
      </form>
    </Modal>
  );
}

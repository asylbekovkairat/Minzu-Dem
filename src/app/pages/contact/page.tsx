"use client";
import { Metadata } from "next";
import React, { useState } from "react";
import { sendEmail } from "src/services/email";

const metadata: Metadata = {
  title: "Minzu Dem | Contact Me",
};

const Contact = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [message, setMessage] = useState<string>();

  const handleSubmit = () => {
    const data = { name, email, phoneNumber, message };

    sendEmail(data, resetForm);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <section className="container mt-[55px] max-w-[1000px] mx-auto mobile:mt-11">
      <p className="mb-7 mx-auto max-w-[1200px]">
        You're welcome to contact us with any inquiry. For questions regarding
        your order, please include your order number.
      </p>
      <form className="grid grid-cols-2 gap-5 max-w-[1200px] mx-auto mobile:mb-20">
        <div className="flex flex-col mobile:col-span-2">
          <label>Name</label>
          <input
            className="px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="flex flex-col mobile:col-span-2">
          <label>Email</label>
          <input
            className="px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="flex flex-col col-span-2">
          <label>Phone number</label>
          <input
            className="px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm"
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="flex flex-col col-span-2">
          <label>Message</label>
          <textarea
            className="min-h-52 px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>

        <button
          className="max-w-32 uppercase rounded-s-none rounded-e-sm px-[18px] py-[10px] bg-[#3a3a3a] text-white font-bold tracking-[0.15em]"
          type="button"
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;

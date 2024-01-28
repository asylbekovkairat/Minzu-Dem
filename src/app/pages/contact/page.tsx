"use client";
import { Metadata } from "next";
import React, { RefObject, useState } from "react";
import { sendContactRequest } from "src/services/email";
import { sendNotification } from "src/services/notification";

const metadata: Metadata = {
  title: "Minzu Dem | Contact Me",
};

const Contact = () => {
  const formRef = React.createRef<HTMLFormElement>();

  const handleSubmit = async (event: any) => {
    event?.preventDefault();
    const isRequestSent = await sendContactRequest(formRef.current);
    if (isRequestSent) {
      event.target.reset();
      const response = await sendNotification("kairat", "as@mail.com");
      console.log(response);
    }
  };

  return (
    <div className="container">
      <section className="mt-[75px] max-w-[1000px] mx-auto mobile:mt-11">
        <p className="mb-7 mx-auto max-w-[1200px]">
          You're welcome to contact us with any inquiry. For questions regarding
          your order, please include your order number.
        </p>
        <form
          className="grid grid-cols-2 gap-5 max-w-[1200px] mx-auto mobile:mb-20"
          ref={formRef as unknown as RefObject<HTMLFormElement>}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mobile:col-span-2">
            <label>Name</label>
            <input
              className="px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm"
              type="text"
              name="from_name"
            />
          </div>
          <div className="flex flex-col mobile:col-span-2">
            <label>Email</label>
            <input
              className="px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm"
              type="email"
              name="from_email"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label>Phone number</label>
            <input
              className="px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm"
              type="text"
              name="phone"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label>Message</label>
            <textarea
              className="min-h-52 px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm"
              name="message"
            />
          </div>

          <button
            className="max-w-32 uppercase rounded-s-none rounded-e-sm px-[18px] py-[10px] bg-[#3a3a3a] text-white font-bold tracking-[0.15em]"
            type="submit"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

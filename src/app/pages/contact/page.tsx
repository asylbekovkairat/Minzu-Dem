import React from "react";

const Contact = () => {
  return (
    <section className="mt-[55px]">
      <p className="mb-7">
        You're welcome to contact us with any inquiry. For questions regarding
        your order, please include your order number.
      </p>
      <form className="grid grid-cols-2 gap-5">
        <div className="flex flex-col mobile:col-span-2">
          <label>Name</label>
          <input
            className="px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm"
            type="text"
          />
        </div>
        <div className="flex flex-col mobile:col-span-2">
          <label>Email</label>
          <input
            className="px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm"
            type="text"
          />
        </div>
        <div className="flex flex-col col-span-2">
          <label>Phone number</label>
          <input
            className="px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm"
            type="text"
          />
        </div>
        <div className="flex flex-col col-span-2">
          <label>Message</label>
          <textarea className="min-h-52 px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm" />
        </div>

        <button
          className="max-w-32 uppercase rounded-s-none rounded-e-sm px-[18px] py-[10px] bg-[#3a3a3a] text-white font-bold tracking-[0.15em]"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;

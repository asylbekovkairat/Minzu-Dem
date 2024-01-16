"use client";
import React from "react";
import Link from "next/link";
// import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
// import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
// import { Applepay } from "@styled-icons/simple-icons/Applepay";
// import { Visa } from "@styled-icons/boxicons-logos/Visa";
// import styled from "styled-components";

// const InstagramIcon = styled(Instagram)`
//   width: 25px;
// `;
// const EmailOutlineIcon = styled(EmailOutline)`
//   width: 25px;
// `;
// const ApplePayIcon = styled(Applepay)`
// width: 30px;
// `;
// const VisaIcon = styled(Visa)`
//   width: 30px;
//   color: rgb(20, 38, 136);
// `;

const Footer = () => {
  return (
    <footer className="flex flex-col mt-[100px]">
      <section className="flex justify-between mb-16">
        <Link href={"/"}>
          <h1 className="text-4xl font-normal">Minzu Dem</h1>
        </Link>
        <div className="flex flex-col items-start gap-5">
          <p className="font-bold">Be notified when new items drop</p>
          <div className="flex">
            <input
              className="grow-[9999] w-[500px] basis-60 px-[18px] py-[9px] bg-white border-[#ccc] border-2 rounded-sm border-r-0 rounded-e-none"
              type="text"
              placeholder="Email address"
            />
            <button className="uppercase rounded-s-none rounded-e-sm px-[18px] py-[10px] bg-[#3a3a3a] text-white font-bold tracking-[0.15em]">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[12px]">
          {/* <ApplePayIcon />
          <VisaIcon /> */}
        </div>

        <div className="flex items-center gap-5">
          <Link className="link" href={"/pages/return-and-refund-policy"}>
            Return & Refund Policy
          </Link>
          <Link className="link" href={"/pages/return-and-refund-policy"}>
            Terms of Service
          </Link>
        </div>

        <div className="flex items-center gap-[12px]">
          {/* <Link href="https://www.instagram.com/minzu.13/" target="_blank">
            <InstagramIcon />
          </Link>
          <EmailOutlineIcon /> */}
        </div>
      </div>

      <p className="text-[#333232] text-right mt-[20px] text-[13px]">
        &copy; {new Date().getFullYear()}, Minzu Dem Developed by qameious
      </p>
    </footer>
  );
};

export default Footer;

"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { MdOutlineEmail as EmailOutlineIcon } from "react-icons/md";
import { SiApplepay as ApplePayIcon } from "react-icons/si";
import { LiaCcVisa as VisaIcon } from "react-icons/lia";

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
          <ApplePayIcon size={35} />
          <VisaIcon size={35} color="rgb(20, 38, 136)" />
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
          <Link href="https://www.instagram.com/minzu.13/" target="_blank">
            <InstagramIcon size={25} />
          </Link>
          <EmailOutlineIcon size={25} />
        </div>
      </div>

      <p className="text-[#333232] text-right mt-[20px] text-[13px]">
        &copy; {new Date().getFullYear()}, Minzu Dem Developed by qameious
      </p>
    </footer>
  );
};

export default Footer;

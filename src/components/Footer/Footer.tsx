"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { MdOutlineEmail as EmailOutlineIcon } from "react-icons/md";
import { SiApplepay as ApplePayIcon } from "react-icons/si";
import { LiaCcVisa as VisaIcon } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="container flex flex-col mt-[100px] mb-7">
      <section className="flex justify-between mb-16 gap-10 md:flex-col">
        <div className="flex flex-col items-start gap-5">
          <p className="font-bold">Be notified when new items drop</p>
          <div className="flex md:w-full mobile:flex-col">
            <input
              className="mobile:mb-2 grow-[9999] w-[500px] px-[18px] py-[9px] bg-white border-[#ccc] border-2 rounded-sm mobileMin:border-r-0 rounded-e-none lg:w-[350px] md:w-full"
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
        {/* <div className="flex items-center gap-[12px]">
          <ApplePayIcon size={35} />
          <VisaIcon size={35} color="rgb(20, 38, 136)" />
        </div> */}

        <div className="flex items-center gap-[12px]">
          <Link href="https://www.instagram.com/minzu.13/" target="_blank">
            <InstagramIcon size={25} />
          </Link>
          <EmailOutlineIcon size={25} />
        </div>
      </div>
      <div className="flex justify-between items-center mt-[25px] middle:flex-col gap-3">
        <div className="flex items-center gap-5">
          <Link
            className="link middle:text-sm"
            href={"/pages/return-and-refund-policy"}
          >
            Return & Refund Policy
          </Link>
          <Link
            className="link middle:text-sm"
            href={"/pages/return-and-refund-policy"}
          >
            Terms of Service
          </Link>
        </div>
        <p className="text-[#333232] text-right text-[13px]">
          &copy; {new Date().getFullYear()}, Minzu Dem Developed by qameious
        </p>
      </div>
    </footer>
  );
};

export default Footer;

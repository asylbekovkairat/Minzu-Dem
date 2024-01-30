"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { MdOutlineEmail as EmailOutlineIcon } from "react-icons/md";

const Footer = () => {
  return (
    <div className="container">
      <footer className="flex flex-col mt-[100px] mb-7 mobile:mb-10 mobile:mt-20">
        <span className="bg-[#3a3a3a] h-[1px] mb-6 mt-20" />
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-[12px]">
            <Link href="https://www.instagram.com/minzudem/" target="_blank">
              <InstagramIcon size={25} />
            </Link>
            <Link href="mailto:minzudem@gmail.com">
              <EmailOutlineIcon size={25} />
            </Link>
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
    </div>
  );
};

export default Footer;

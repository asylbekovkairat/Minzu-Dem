"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LiaShoppingBagSolid as ShoppingBagIcon } from "react-icons/lia";
import { RxHamburgerMenu as MenuIcons } from "react-icons/rx";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between h-[150px]">
      <Link href={"/"}>
        <h1 className="text-4xl font-normal">Minzu Dem</h1>
      </Link>
      <nav className="flex items-center gap-4 tablet:hidden">
        <Link
          className={`link text-xl tracking-wider font-normal uppercase ${
            !pathname.includes("bio") &&
            !pathname.includes("contact") &&
            "border-b border-black"
          }`}
          href={"/"}
        >
          Paintings
        </Link>
        <Link
          className={`link text-xl tracking-wider font-normal uppercase ${
            pathname.includes("bio") && "border-b border-black"
          }`}
          href={"/pages/bio"}
        >
          BIO
        </Link>
        <Link
          className={`link text-xl tracking-wider font-normal uppercase ${
            pathname.includes("contact") && "border-b border-black"
          }`}
          href={"/pages/contact"}
        >
          Contact Me
        </Link>
      </nav>

      <div className="flex items-center gap-5">
        <p>EN</p>
        <ShoppingBagIcon size={25} />
        <div className="hidden tablet:block">
          <MenuIcons size={25} />
        </div>
      </div>
    </header>
  );
};

export default Header;

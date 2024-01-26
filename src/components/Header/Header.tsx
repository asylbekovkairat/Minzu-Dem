"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LiaShoppingBagSolid as ShoppingBagIcon } from "react-icons/lia";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);
  return (
    <>
      <header className="container flex items-center justify-between h-[150px] mobile:h-[100px]">
        <Link
          className="flex items-center mobile:justify-between mobile:w-[62%]"
          href={"/"}
        >
          <img
            className="w-[130px] mobile:w-[72px]"
            src="/logo.svg"
            alt="logo"
          />
          <h1 className="text-2xl font-normal uppercase">Minzu</h1>
        </Link>
        <nav className="flex items-center gap-4 tablet:hidden">
          <Link
            className={`link text-xl tracking-wider font-normal uppercase ${
              !pathname.includes("bio") &&
              !pathname.includes("contact") &&
              !pathname.includes("painting-detail") &&
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

        <div className="flex items-center gap-5 hidden mobile:block">
          <p className="hidden">EN</p>
          <ShoppingBagIcon className="hidden" size={25} />
          <div className="hidden tablet:block">
            <div
              className={`menuBtn ${isOpen ? "active" : ""}`}
              onClick={toggleMobileMenu}
            >
              <span className={"bar"}></span>
              <span className={"bar"}></span>
              <span className={"bar"}></span>
            </div>
          </div>
        </div>
      </header>
      {isOpen && (
        <section
          className={`menu ${
            isOpen ? "active" : ""
          } fixed z-10 w-full h-[30vh] flex justify-center`}
          onClick={(event) => {
            event.preventDefault();
            closeMenu();
          }}
        >
          <nav
            className={`content ${
              isOpen ? "active" : ""
            } flex flex-col items-center justify-center gap-3`}
            onClick={(event) => event.stopPropagation()}
          >
            <Link
              className={`link text-xl tracking-wider font-normal uppercase ${
                !pathname.includes("bio") &&
                !pathname.includes("contact") &&
                !pathname.includes("painting-detail") &&
                "border-b border-black"
              }`}
              href={"/"}
              onClick={closeMenu}
            >
              Paintings
            </Link>
            <Link
              className={`link text-xl tracking-wider font-normal uppercase ${
                pathname.includes("bio") && "border-b border-black"
              }`}
              href={"/pages/bio"}
              onClick={closeMenu}
            >
              BIO
            </Link>
            <Link
              className={`link text-xl tracking-wider font-normal uppercase ${
                pathname.includes("contact") && "border-b border-black"
              }`}
              href={"/pages/contact"}
              onClick={closeMenu}
            >
              Contact Me
            </Link>
          </nav>
        </section>
      )}
    </>
  );
};

export default Header;

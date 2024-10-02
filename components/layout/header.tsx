"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import ToggleButton from "../toggle-button";
import HeaderButton from "../button/header-button";
import HeaderImage from "@/public/images/header_image.webp";
import Modal from "../modal";
import { handleScroll } from "@/helpers/utils";
import { usePathname } from "next/navigation";

function Header() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIsChecked(!isChecked);
    localStorage.setItem("isChecked", JSON.stringify(!isChecked));
  };

  useEffect(() => {
    const storedIsChecked = localStorage.getItem("isChecked");
    if (storedIsChecked !== null) {
      setIsChecked(JSON.parse(storedIsChecked));
    }
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    hamburger?.addEventListener("click", toggleMenu);

    return () => {
      hamburger?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <>
      <header className="dark:bg-gulf-blue  bg-gray-100 fixed top-0 w-full z-50">
        <nav className="flex flex-wrap items-center justify-between p-4 lg:px-20">
          <div>
            <Link href={"/"}>
              <Image
                src={HeaderImage}
                className="dark:bg-white w-[150px] lg:w-[200px]"
                alt="header-image"
                width={200}
                height={45}
                priority={false}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <div className="lg:hidden sm:gap-4 w-[4rem] justify-between items-center my-4 flex">
              <ToggleButton isChecked={isChecked} handleChange={handleChange} />
            </div>
            <button ref={hamburgerRef} id="hamburger">
              <Image
                className={`toggle block dark:bg-white ${
                  isMenuOpen ? "hidden" : "block"
                }`}
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width={40}
                height={40}
                alt="icon"
                priority={false}
              />
              <Image
                className={`toggle ${
                  isMenuOpen ? "block" : "hidden"
                } dark:bg-white`}
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width={40}
                height={40}
                alt="icon"
                priority={false}
                onClick={toggleMenu}
              />
            </button>
          </div>
          <div
            className={`toggle w-full lg:w-auto flex-col lg:flex-row lg:flex items-center justify-between gap-8 text-bold mt-5 md:mt-0 md:border-none ${
              isMenuOpen ? "flex animate-slideDown" : "hidden lg:flex"
            } ${!isMenuOpen && "animate-slideUp lg:animate-none"}`}
          >
            <Link
              href="/"
              className="block text-[18px] text-center dark:text-white"
              onClick={closeMenu}
            >
              Home
            </Link>
            {isHomePage && (
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("about");
                  closeMenu();
                }}
                className="block text-[18px] text-center dark:text-white"
                href={""}
              >
                About Us
              </Link>
            )}

            <div className="lg:flex sm:gap-4 w-[4rem] justify-between items-center my-4 hidden">
              <ToggleButton isChecked={isChecked} handleChange={handleChange} />
            </div>
            <HeaderButton
              text="Contact Us"
              onClick={() => setModalOpen(true)}
            />
          </div>
          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </nav>
      </header>
    </>
  );
}

export default Header;

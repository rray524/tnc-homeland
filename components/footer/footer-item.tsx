"use client";
import { handleScroll } from "@/helpers/utils";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "../modal";
const handleClick = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  link: string,
  setModalOpen: (isOpen: boolean) => void
) => {
  if (link === "contact") {
    e.preventDefault();
    setModalOpen(true);
  } else if (link !== "/") {
    e.preventDefault();
    handleScroll(link);
  }
};

interface Item {
  name: string;
  link: string;
}

interface FooterItemProps {
  title: string;
  items: Item[];
}

const FooterItem: React.FC<FooterItemProps> = ({ title, items }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="">
      <h1 className="text-[20px] font-semibold my-5 dark:text-white">
        {title}
      </h1>

      <ul className="flex flex-col space-y-2 w-[9rem] mx-auto md:mx-0">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              onClick={(e) => handleClick(e, item.link, setModalOpen)}
              href={item.link}
              className="text-[17px] text-gray-600 dark:text-gray-200 py-1"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default FooterItem;

import { truncateText } from "@/helpers/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface InsightCardProps {
  image: string | StaticImageData;
  content: string;
  heading: string;
  road: string;
  link: string;
}

const InsightCard: React.FC<InsightCardProps> = ({
  image,
  content,
  heading,
  road,
  link,
}) => {
  return (
    <Link href={link} target="_blank">
      <div className="border bg-white shadow-lg w-full sm:w-auto transform transition-transform hover:scale-105 duration-1000 dark:bg-gulf-blue dark:border-white">
        <div className="h-[250px] overflow-hidden">
          <Image
            src={image}
            alt="card"
            className="w-full h-full object-cover object-center hover:scale-125 duration-1000"
            priority={false}
          />
        </div>

        <h5 className="my-3 text-[20px] mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
          {truncateText(content, 60)}
        </h5>

        <div className="flex justify-between items-center p-4">
          <p className="my-2 text-[18px] text-yellow-500 font-semibold dark:text-gray-400">
            {heading}
          </p>
          <h1 className="text-gray-500 dark:text-gray-200">{road}</h1>
        </div>
      </div>
    </Link>
  );
};

export default InsightCard;

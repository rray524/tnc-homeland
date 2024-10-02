"use client";
import React from "react";
import FooterContactInfo from "../footer/footer-contact-info";
import FooterItem from "../footer/footer-item";
import FooterSocialLinks from "../footer/footer-social-link";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const usefulLinks = isHomePage
    ? [
        { name: "Feature", link: "featured" },
        { name: "About Us", link: "about" },
        { name: "FAQ", link: "faq" },
        { name: "Contact Us", link: "contact" },
      ]
    : [{ name: "Contact Us", link: "contact" }];

  const mainMenu = isHomePage
    ? [
        { name: "Home", link: "/" },
        { name: "New Listing", link: "new-listing" },
        { name: "Testimonial", link: "testimonial" },
        { name: "Blog", link: "blog" },
      ]
    : [
        { name: "Home", link: "/" },
        { name: "Property Details", link: "property-details" },
      ];
  return (
    <div className="bg-gray-100 dark:bg-gulf-blue">
      <div className="flex flex-col max-w-[1320px] mx-auto sm:flex-row">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center md:text-left px-4 md:px-2 my-10 gap-6">
          <FooterContactInfo />
          <FooterItem title="Useful Link" items={usefulLinks} />
          <FooterItem title="Main Menu" items={mainMenu} />
          <FooterSocialLinks />
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="h-[1px] bg-gray-500 border-0 w-[100%] max-w-[1250px]" />
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <h1 className="text-[16px] p-5 md:mx-20 text-gray-600 dark:text-white">
          Copyright © 2024 TNC Homeland - Powered by Simbanic
        </h1>
        <p className="text-[16px] p-5 md:mx-20 text-gray-600 dark:text-white">
          All Rights Reserved | Licensing
        </p>
      </div>
    </div>
  );
};

export default Footer;

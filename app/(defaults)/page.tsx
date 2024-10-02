"use client";
import React, { useEffect } from "react";
import HomePage from "./pages/home";
import AOS from "aos";
import "aos/dist/aos.css";

const MainPage = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default MainPage;

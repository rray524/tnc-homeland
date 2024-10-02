import React from "react";
import Banner from "./contents/banner-section";
import ServiceCards from "./contents/service-section";
import AboutUs from "./contents/about-section";
import CTASection from "./contents/cta-section";
import FeatureSection from "./contents/feature-section";
import TestimonialSsection from "./contents/testimonial-section";
import FAQSection from "./contents/faq-section";
import RecentSoldProperties from "./contents/sold-properties";
import PropertyListing from "./contents/all-properties";
import BlogSection from "./contents/blog-section";
import CalculatorSection from "./contents/calculator-section/calculator-section";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ServiceCards />
      <AboutUs />
      <CTASection />
      <FeatureSection />
      <TestimonialSsection />
      <PropertyListing />
      <RecentSoldProperties />
      <FAQSection />
      <CalculatorSection />
      <BlogSection />
    </div>
  );
};

export default HomePage;

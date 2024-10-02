import React from "react";
import InsightCard from "./component";
import { InsightData } from "@/data/insight-data";
import SectionTitle from "@/components/section-title";

const BlogSection: React.FC = () => {
  return (
    <div className="max-w-[1320px] mx-auto my-10" id="blog">
      <div className="my-5">
        <SectionTitle
          title="LATEST NEWS"
          subtitle={`Insights and Tips for Buying and Selling Property - TNC Homeland Blog`}
          titleClass="text-[18px] text-yellow-500 font-bold text-center"
          subtitleClass="md:text-[36px] text-[23px] font-semibold text-center dark:text-white w-[70%] mx-auto"
        />
      </div>
      <div className="max-w-[1320px] grid grid-cols-1 gap-[50px] content-center sm:text-center sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6">
        {InsightData.map((card, index) => (
          <InsightCard
            key={index}
            image={card.image}
            content={card.contant}
            heading={card.heading}
            road={card.road}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;

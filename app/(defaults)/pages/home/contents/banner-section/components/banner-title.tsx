import React from "react";

interface FeaturedCardProps {
  title: string;
  subtitle: string;
  description?: string;
  titleClass?: string;
  subtitleClass?: string;
  additionalTitleClass?: string;
  descriptionClass?: string;
  titleAnimation?: string;
  descriptionAnimation?: string;
  subtitleAnimation?: string;
}

const BannerTitle: React.FC<FeaturedCardProps> = ({
  title,
  subtitle,
  description,
  titleClass = "text-[16px] text-yellow-500 font-semibold",
  subtitleClass = "text-[30px] sm:text-[40px] font-semibold dark:text-white",
  descriptionClass = "text-[15px] sm:text-[18px] my-5 dark:text-gray-500",
  titleAnimation,
  descriptionAnimation,
  subtitleAnimation,
}) => {
  return (
    <div>
      <h2 className={titleClass} data-aos={titleAnimation}>
        {title}
      </h2>
      <p className={subtitleClass} data-aos={subtitleAnimation}>
        {subtitle}
      </p>
      {description && (
        <p className={descriptionClass} data-aos={descriptionAnimation}>
          {description}
        </p>
      )}
    </div>
  );
};

export default BannerTitle;

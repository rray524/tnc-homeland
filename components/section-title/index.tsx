import React from "react";

interface FeaturedCardProps {
  title: string;
  subtitle: string;

  description?: string;
  titleClass?: string;
  subtitleClass?: string;
  additionalTitleClass?: string;
  descriptionClass?: string;
}

const SectionTitle: React.FC<FeaturedCardProps> = ({
  title,
  subtitle,
  description,
  titleClass = "text-[16px] text-yellow-500 font-semibold",
  subtitleClass = "text-[30px] sm:text-[40px] font-semibold dark:text-white",
  descriptionClass = "text-[15px] sm:text-[18px] my-5 dark:text-gray-500",
}) => {
  return (
    <div>
      <p className={titleClass}>{title}</p>
      <h2 className={subtitleClass}>{subtitle}</h2>
      {description && <p className={descriptionClass}>{description}</p>}
    </div>
  );
};

export default SectionTitle;

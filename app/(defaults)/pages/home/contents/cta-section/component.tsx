import React from "react";

interface CTAsectionTitleProps {
  text: string;
}

const CTAsectionTitle: React.FC<CTAsectionTitleProps> = ({ text }) => {
  return (
    <h1 className="text-white text-4xl lg:text-5xl my-3 font-bold sm:text-5xl text-center sm:text-left">
      {text}
    </h1>
  );
};

export default CTAsectionTitle;

interface CTAsectionSubtitleProps {
  text: string;
}

export const CTAsectionSubtitle: React.FC<CTAsectionSubtitleProps> = ({
  text,
}) => {
  return (
    <h2 className="text-white text-2xl lg:text-3xl text-center sm:text-left">
      {text}
    </h2>
  );
};

import React from "react";

type BriefProperties = {
  heading: React.ReactNode;
  paragraph: React.ReactNode;
};

const Brief: React.FC<BriefProperties> = ({ heading, paragraph }) => {
  return (
    <div className="mx-6 sm:mx-0 max-w-3xl">
      <h1 className="text-4xl sm:text-5xl font-bold text-zinc-800 tracking-tighter">
        {heading}
      </h1>
      <p className="text-base text-zinc-700 mt-6">{paragraph}</p>
    </div>
  );
};

export default Brief;

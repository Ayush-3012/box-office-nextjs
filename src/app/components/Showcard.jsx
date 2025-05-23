"use client";

import ShowSingleCard from "./ShowSingleCard";

const Showcard = ({ shows }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center">
        {shows?.map((item, index) => (
          <ShowSingleCard
            key={index}
            show={item.show}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Showcard;

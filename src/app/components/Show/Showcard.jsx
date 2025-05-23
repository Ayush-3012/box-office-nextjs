"use client";

import ShowSingleCard from "../Show/ShowSingleCard";

const Showcard = ({ shows, fromSavedShows = false }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center">
        {shows?.map((item, index) => (
          <ShowSingleCard
            key={index}
            show={fromSavedShows ? item : item.show}
            index={index}
            fromSavedShows={fromSavedShows}
          />
        ))}
      </div>
    </>
  );
};

export default Showcard;

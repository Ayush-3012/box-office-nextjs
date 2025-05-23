"use client";

import Fetch from "../components/Fetch";
import Navbar from "../components/Navbar";

const LikedShows = () => {
  return (
    <div className="px-4 m-4 rounded-xl overflow-y-scroll h-[95%] bg-slate-700">
      <div className="flex justify-center items-center flex-col gap-4 p-2">
        <Navbar />
        <Fetch />
      </div>
      <div className="flex mx-2">
        <h1 className="text-4xl underline px-4 tracking-wider py-2 text-white font-serif">
          Liked Shows
        </h1>
      </div>
      <div className="mx-6"></div>
    </div>
  );
};

export default LikedShows;

"use client";

import Navbar from "./components/Navbar";
import Fetch from "./components/Fetch";

const HomePage = () => {
  return (
    <>
      <div className="px-4 m-4 rounded-xl overflow-y-scroll h-[95%] bg-slate-700">
        <div className="flex justify-center items-center flex-col gap-4 p-2">
          <Navbar />
          <Fetch />
        </div>
      </div>
    </>
  );
};

export default HomePage;

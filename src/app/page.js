"use client";

import Navbar from "./components/Navbar";
import Fetch from "./components/Fetch";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4 p-2">
        <Navbar />
        <Fetch />
      </div>
    </>
  );
};

export default HomePage;

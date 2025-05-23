"use client";

import Navbar from "./components/Navbar";
import Fetch from "./components/Fetch";
import { useState } from "react";
import Loader from "./components/partials/Loader";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="flex justify-center items-center flex-col gap-4 p-2">
          <Navbar />
          <Fetch setLoading={setLoading} />
        </div>
      )}
    </>
  );
};

export default HomePage;

"use client";

import { Reuleaux } from "ldrs/react";
import "ldrs/react/Reuleaux.css";

const Loader = () => {
  return (
    <>
      <div className="flex items-center h-96 justify-center">
        <Reuleaux
          size="150"
          stroke="5"
          strokeLength="0.15"
          bgOpacity="0.1"
          speed="0.8"
          color="white"
        />
      </div>
    </>
  );
};

export default Loader;

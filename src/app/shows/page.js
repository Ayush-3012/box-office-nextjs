"use client";

import Link from "next/link";
import Showcard from "../components/Showcard";
import { useSelector } from "react-redux";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const ShowPage = () => {
  const { shows } = useSelector((state) => state.shows);

  return (
    <>
      <div className="flex flex-col relative items-center justify-center">
        <div className="bg-purple-300 rounded-lg px-2 absolute group left-2 hover:scale-125 duration-100 transition-all top-2">
          <Link href="/">
            <IoArrowBackCircleSharp className="text-4xl group-hover:scale-110" />
          </Link>
        </div>
        {shows.length > 0 && (
          <div className="flex mx-2 flex-col items-center justify-center my-2">
            <h1 className="text-4xl underline my-4 px-4 tracking-wider py-2 text-white font-serif">
              Found Shows
            </h1>
            <Showcard shows={shows} />
          </div>
        )}
      </div>
    </>
  );
};

export default ShowPage;

"use client";

import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setShows } from "@/store/showSlice";
import { useEffect } from "react";
import ShowSingleCard from "./ShowSingleCard";

const ShowClient = ({ shows, fromSavedShows = false }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShows(shows));
  }, [shows]);

  const { shows: reduxShows } = useSelector((state) => state.shows);

  return (
    <>
      <div className="flex flex-col relative items-center justify-center">
        <div className="bg-purple-300 rounded-lg px-2 absolute group left-2 hover:scale-125 duration-100 transition-all top-2">
          <Link href="/">
            <IoArrowBackCircleSharp className="text-4xl group-hover:scale-110" />
          </Link>
        </div>
        {reduxShows.length > 0 ? (
          <div className="flex mx-2 flex-col my-2">
            <h1 className="text-4xl underline mt-4 px-4 py-2 text-white font-serif">
              Found Shows
            </h1>

            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center">
                {reduxShows?.map((item, index) => (
                  <ShowSingleCard
                    key={index}
                    show={fromSavedShows ? item : item.show}
                    index={index}
                    fromSavedShows={fromSavedShows}
                  />
                ))}
              </div>
            </>
          </div>
        ) : (
          <div className="flex flex-col w-full h-full items-center justify-center my-8">
            <h1 className="text-4xl my-8 font-mono text-fuchsia-500 animate-bounce">
              Nothing to display in shows
            </h1>
            <Link
              href="/"
              className="rounded-lg p-4 bg-emerald-400 hover:bg-rose-400 text-fuchsia-700 hover:scale-x-110 duration-150 transition-all"
            >
              Return to Home page
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowClient;

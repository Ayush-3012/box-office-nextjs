"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setShows } from "@/store/showSlice";
import Showcard from "../components/Show/Showcard";

const LikedShows = () => {
  const dispatch = useDispatch();
  const { shows } = useSelector((state) => state.shows);

  useEffect(() => {
    const allFavShows = localStorage.getItem("FavShows");
    allFavShows && dispatch(setShows(JSON.parse(allFavShows)));
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4 p-2">
        <Navbar />
      </div>
      <div className="flex mx-2">
        <h1 className="text-4xl underline px-4 tracking-wider py-2 text-white font-serif">
          Liked Shows
        </h1>
      </div>
      {shows.length > 0 && (
        <div className="mx-6">
          <Showcard shows={shows} fromSavedShows={true} />
        </div>
      )}
    </>
  );
};

export default LikedShows;

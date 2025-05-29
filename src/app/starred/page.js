"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShows } from "@/store/showSlice";
import ShowSingleCard from "../components/Show/ShowSingleCard";

const LikedShows = () => {
  const dispatch = useDispatch();
  const { shows } = useSelector((state) => state.shows);
  const fromSavedShows = true;

  useEffect(() => {
    const allFavShows = localStorage.getItem("FavShows");
    allFavShows && dispatch(setShows(JSON.parse(allFavShows)));
  }, [dispatch]);

  return (
    <>
      <div className="flex mx-2">
        <h1 className="text-4xl underline px-4 tracking-wider py-2 text-white font-serif">
          Liked Shows
        </h1>
      </div>
      {shows?.length > 0 && (
        <div className="mx-6">
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
        </div>
      )}
    </>
  );
};

export default LikedShows;

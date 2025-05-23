"use client";

import Link from "next/link";
import ShowInfo from "./ShowInfo";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { setShows } from "@/store/showSlice";

const ShowSingleCard = ({
  show,
  index,
  fromSavedShows = false,
}) => {
  const dispatch = useDispatch();

  const updateFavorite = async (e, show) => {
    e.preventDefault();
    const stored = localStorage.getItem("FavShows");
    let allFavShows = stored ? JSON.parse(stored) : [];

    const alreadyFavShows = allFavShows.some((s) => s.id === show.id);

    if (alreadyFavShows) {
      allFavShows = allFavShows.filter((s) => s.id !== show.id);
      enqueueSnackbar("Show Removed from favourite", { variant: "error" });
    } else {
      allFavShows.push(show);
      enqueueSnackbar("Show Added to favourite", { variant: "success" });
    }

    localStorage.setItem("FavShows", JSON.stringify(allFavShows));
    fromSavedShows && dispatch(setShows(allFavShows));
  };

  const imgUrl = show?.image
    ? show?.image?.medium
    : "https://demofree.sirv.com/nope-not-here.jpg";

  return (
    <Link
      href={`/shows/${show.id}`}
      className="bg-slate-800 relative cursor-pointer font-serif rounded-2xl hover:shadow-[1px_1px_20px_rgb(52,211,153)] hover:-translate-y-3 transition ease-in-out duration-300"
    >
      <div className="flex absolute right-0 justify-evenly py-1 group">
        <MdFavoriteBorder className="text-5xl text-emerald-400 group-hover:hidden cursor-pointer" />
        <MdFavorite
          className="hidden group-hover:block text-5xl text-emerald-500 hover:text-emerald-500 hover:scale-110 transition duration-200 ease-in-out cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            updateFavorite(e, show);
          }}
        />
      </div>
      <h4 className="text-white text-2xl text-center">{index + 1}.</h4>
      <div className="flex justify-center mb-2">
        <img
          src={imgUrl}
          className="rounded-2xl shadow-[1px_1px_15px_rgb(256,256,256)]"
        />
      </div>
      <ShowInfo
        name={show.name}
        type={show.type}
        language={show.language}
        summary={show.summary}
      />
    </Link>
  );
};

export default ShowSingleCard;

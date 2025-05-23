"use client";

import Link from "next/link";
import ShowInfo from "./ShowInfo";

const ShowSingleCard = ({ show, index }) => {
  const imgUrl = show.image
    ? show.image.medium
    : "https://demofree.sirv.com/nope-not-here.jpg";

  return (
    <Link
      href={`/shows/${show.id}`}
      className="bg-slate-800 cursor-pointer font-serif rounded-2xl hover:shadow-[1px_1px_20px_rgb(52,211,153)] hover:-translate-y-3 transition ease-in-out duration-300"
    >
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

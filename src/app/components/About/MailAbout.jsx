"use client";

/* eslint-disable react/prop-types */
import { PiMicrophoneBold, PiFilmSlateBold, PiLinkBold } from "react-icons/pi";
import Link from "next/link";
import { MdTypeSpecimen, MdStarRate } from "react-icons/md";

const MainAbout = ({
  name,
  rating,
  type,
  language,
  summary,
  genres,
  officialSite,
}) => {
  return (
    <>
      <div className="flex gap-4 flex-col p-5 flex-1">
        <div className="flex items-center justify-evenly max-sm:flex-col">
          <div className="flex gap-2 px-2 items-center">
            <PiFilmSlateBold className="text-emerald-400 text-4xl" />
            <h2 className="my-1 pr-4 text-4xl text-fuchsia-400 font-serif ">
              {name}
            </h2>
          </div>
          <div className="flex gap-1 px-2 items-center">
            <MdStarRate className="text-yellow-200 text-3xl hover:text-yellow-400 " />
            <h2 className="text-2xl text-emerald-400">{rating}</h2>
          </div>
        </div>
        <div className="flex items-center justify-evenly max-sm:flex-col">
          <div className="flex items-center justify-center pr-4 gap-2 ">
            <MdTypeSpecimen className="text-emerald-400 text-3xl" />
            <h2 className="text-xl text-fuchsia-300">{type}</h2>
          </div>
          <div className="flex items-center justify-center gap-2">
            <PiMicrophoneBold className="text-emerald-400 text-3xl" />
            <h2 className="text-xl text-fuchsia-300">{language}</h2>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span
            className="font-seif text-xl text-white"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
          <span className="text-xl text-emerald-300 flex flex-wrap gap-1">
            Genres:
            {genres?.map((genre) => (
              <span
                className="mx-1 text-lg hover:bg-emerald-600 duration-150 transition-all rounded-lg bg-fuchsia-600 text-white px-2"
                key={genre}
              >
                {genre}
              </span>
            ))}
          </span>
          <span>
            <Link
              href={`${officialSite}`}
              target="_blank"
              className="italic font-medium text-emerald-300 w-fit text-lg hover:underline hover:text-fuchsia-300 hover:not-italic hover:scale-105 transition duration-200 ease-in-out flex"
            >
              <PiLinkBold className="text-3xl" />
              More About
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default MainAbout;

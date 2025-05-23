"use client";

import Cast from "./Cast";
import Details from "./Details";
import MainAbout from "./MailAbout";
import Seasons from "./Seasons";

const ShowDetails = ({ showDetails }) => {
  const imgUrl = showDetails.image
    ? showDetails.image.medium
    : "https://demofree.sirv.com/nope-not-here.jpg";

  const rating = showDetails.rating ? showDetails.rating.average : "N/A";
  const { seasons, cast } = showDetails._embedded ? showDetails._embedded : "";

  return (
    <>
      <div className="flex flex-col max-sm:w-full my-10 bg-slate-800 rounded-xl w-[80%] p-4 mx-auto relative max-md:w-[90%]">
        <div className="flex justify-evenly items-center gap-5 max-md:flex-col max-md:gap-2">
          <div className="px-10 py-5 mb-2">
            <img
              src={imgUrl}
              className="rounded-ss-xl hover:scale-110 duration-150 transition-all rounded-ee-xl shadow-[1px_1px_20px_rgb(256,256,256)]"
            />
          </div>
          <MainAbout
            name={showDetails.name}
            type={showDetails.type}
            rating={rating}
            language={showDetails.language}
            summary={showDetails.summary}
            genres={showDetails.genres}
            officialSite={showDetails.officialSite}
          />
        </div>
        <hr />
        <Details
          status={showDetails.status}
          premiered={showDetails.premiered}
        />
        <hr />
        <Seasons seasons={seasons} />
        <hr />
        <Cast cast={cast} />
      </div>
    </>
  );
};

export default ShowDetails;

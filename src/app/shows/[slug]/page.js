import ShowDetails from "@/app/components/About/ShowDetails";
import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const ShowInfo = async ({ params }) => {
  const { slug } = await params;
  let showDetails = {};

  try {
    const res = await fetch(
      `https://api.tvmaze.com/shows/${slug}?embed[]=seasons&embed[]=cast`
    );
    showDetails = await res.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <div className="px-4 m-4 rounded-xl overflow-y-scroll h-[95%] bg-slate-700 max-md:px-0 max-md:m-0">
        <div className="bg-purple-300 rounded-lg px-2 absolute group left-6 hover:scale-125 duration-100 transition-all top-7 max-md:top-4 max-md:left-4 max-sm:top-2 max-sm:left-2">
          <Link href="/">
            <IoArrowBackCircleSharp className="text-4xl group-hover:scale-110" />
          </Link>
        </div>
        <ShowDetails showDetails={showDetails} />
      </div>
    </>
  );
};

export default ShowInfo;

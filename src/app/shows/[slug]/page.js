"use client";

import ShowDetails from "@/app/components/About/ShowDetails";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Loader from "@/app/components/partials/Loader";

const ShowInfo = () => {
  const { slug } = useParams();
  const [showDetails, setShowDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.tvmaze.com/shows/${slug}?embed[]=seasons&embed[]=cast`
        );
        setShowDetails(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [slug]);

  return (
    <>
      <div className="px-4 m-4 rounded-xl overflow-y-scroll h-[95%] bg-slate-700 max-md:px-0 max-md:m-0">
        <div className="bg-purple-300 rounded-lg px-2 absolute group left-6 hover:scale-125 duration-100 transition-all top-7 max-md:top-4 max-md:left-4 max-sm:top-2 max-sm:left-2">
          <Link href="/">
            <IoArrowBackCircleSharp className="text-4xl group-hover:scale-110" />
          </Link>
        </div>
        {loading && <Loader />}
        {!loading && <ShowDetails showDetails={showDetails} />}
      </div>
    </>
  );
};

export default ShowInfo;

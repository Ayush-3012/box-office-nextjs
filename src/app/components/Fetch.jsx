"use client";

import { setShows } from "@/store/showSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Fetch = ({ setLoading }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${query}`
      );
      dispatch(setShows(res.data));
      setQuery("");
      router.push("/shows");
    } catch (err) {
      console.error("Error fetching shows", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        className={`flex flex-col gap-2 items-center `}
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Search For Shows..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="focus:shadow-md focus:shadow-emerald-400 w-80 bg-white rounded-lg outline-none px-3 py-2 max-md:w-72 max-sm:w-56"
          fdprocessedid="0xgysm"
        />
        <button
          type="submit"
          className="text-lg px-4 py-1 my-2 bg-blue-400 hover:bg-red-300 hover:scale-110 transition ease-in-out cursor-pointer duration-200 hover:text-white rounded-md"
          fdprocessedid="4oholc"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Fetch;

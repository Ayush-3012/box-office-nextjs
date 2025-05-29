import ShowClient from "../components/Show/ShowClient";

const ShowPage = async ({ searchParams }) => {
  const { query } = await searchParams;
  let shows = [];
  if (query.trim()) {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    shows = await res.json();
  }

  return <ShowClient shows={shows} />;
};

export default ShowPage;

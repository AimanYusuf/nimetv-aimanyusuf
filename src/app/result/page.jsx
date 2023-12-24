"use client";

import AnimeList from "@/components/animeList/AnimeList";
import Header from "@/components/animeList/Header";
import { fetchApi } from "@/lib/Api-libs";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const params = useSearchParams();
  const query = params.get("q");
  const [animeSearch, setAnimesearch] = useState([]);

  const fetchData = async () => {
    const data = await fetchApi("anime", `q=${query}`);
    setAnimesearch(data);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const decodedQuery = decodeURIComponent(query || "");

  return (
    <section className="mx-auto py-10">
      <div className="container">
        <Header title={`Result of '${decodedQuery}'`} />
        <AnimeList api={animeSearch} />
      </div>
    </section>
  );
};

export default Page;

"use client";

import AnimeList from "@/components/animeList/AnimeList";
import Header from "@/components/utils/Header";
import Pagination from "@/components/utils/pagination";
import { fetchApi } from "@/lib/Api-libs";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const data = await fetchApi("top/anime", `page=${page}`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <section className="container">
      <Header title={`Popular Anime Page #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        setPage={setPage}
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
      />
    </section>
  );
};

export default Page;

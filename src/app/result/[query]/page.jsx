import AnimeList from "@/components/animeList/AnimeList";
import Header from "@/components/animeList/Header";
import { fetchApi } from "@/lib/Api-libs";

export const metadata = {
  title: "Search anime..",
  description: "Explore your favorite anime.",
};

const Page = async ({ params }) => {
  const animeSearch = await fetchApi("anime", `q=${params.query}`);

  const decodedQuery = decodeURIComponent(params.query || "");

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

import Header from "@/components/animeList/Header";
import AnimeList from "@/components/animeList/AnimeList";
import { fetchApi, fetchNestedAnime } from "@/lib/Api-libs";

export default async function Home() {
  const topAnime = await fetchApi("top/anime", "limit=12");
  let recomendAnime = await fetchNestedAnime("recommendations/anime", "entry");

  const startRandom = Math.floor(
    Math.random() * (recomendAnime.length - 12) + 0
  );

  recomendAnime = { data: recomendAnime.slice(startRandom, startRandom + 12) };

  return (
    <div className="container">
      <section className="py-5">
        <Header
          title={"Pupular anime"}
          linkHref={"/popular"}
          linkTitle={"More"}
        />
        <AnimeList api={topAnime} />
      </section>
      <section className="py-5">
        <Header title={"Anime Recommendations"} />
        <AnimeList api={recomendAnime} />
      </section>
    </div>
  );
}

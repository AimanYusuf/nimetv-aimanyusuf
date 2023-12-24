import BackButton from "@/components/utils/BackButton";
import YoutubePlayer from "@/components/utils/YoutubePlayer";
import { fetchApi } from "@/lib/Api-libs";
import Image from "next/image";
import Link from "next/link";
import { BiStar } from "react-icons/bi";
import { FiArrowUp, FiThumbsUp } from "react-icons/fi";

const AnimeDetail = async ({ params }) => {
  const detailAnime = await fetchApi(`anime/${params.mal_id}`);

  return (
    <section className="container py-10">
      <BackButton />
      <div className="w-full ">
        {detailAnime.status === 404 ? (
          <div className="w-full h-full py-40  flex justify-center items-center flex-col">
            <h1 className="font-medium text-2xl text-white mb-5">
              404 | Not Found
            </h1>
            <Link href={"/"} className="underline text-slate-500 text-xs">
              Back to your prevent page
            </Link>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-5">
            <div className="w-full md:w-1/4">
              <Image
                className="rounded-md"
                src={detailAnime.data.images.webp.large_image_url}
                width={900}
                height={1600}
              />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-5">
                {detailAnime.data.title}
              </h1>
              <div className="flex gap-4 mb-5 flex-wrap">
                <div className="rounded-md border px-10 py-2 text-white text-center">
                  <div className="flex gap-1 text-[#FFAD49] items-center">
                    <BiStar
                      src="./star.svg"
                      alt="star"
                      width={20}
                      height={20}
                      className="object-contain "
                    />{" "}
                    <span className="font-bold text-sm">Score</span>
                  </div>
                  <span className="text-sm">
                    {detailAnime.data.score || "N/A"}
                  </span>
                </div>
                <div className="rounded-md border px-10 py-2 text-white text-center">
                  <div className="flex gap-1 text-green-500 items-center">
                    <FiArrowUp
                      src="./star.svg"
                      alt="star"
                      width={20}
                      height={20}
                      className="object-contain "
                    />{" "}
                    <span className="font-bold text-sm">Rank</span>
                  </div>
                  <span className="text-sm">
                    {detailAnime.data.rank || "N/A"}
                  </span>
                </div>
                <div className="rounded-md border px-10 py-2 text-white text-center">
                  <div className="flex gap-1 text-blue-500 items-center">
                    <FiThumbsUp
                      src="./star.svg"
                      alt="star"
                      width={20}
                      height={20}
                      className="object-contain "
                    />{" "}
                    <span className="font-bold text-sm">Popularity</span>
                  </div>
                  <span className="text-sm">
                    {detailAnime.data.popularity || "N/A"}
                  </span>
                </div>
              </div>
              <p className="text-sm text-white leading-relaxed">
                {detailAnime.data.synopsis || "N/A"}
              </p>
            </div>
            <YoutubePlayer youtubeId={detailAnime.data.trailer.youtube_id} />
          </div>
        )}
      </div>
    </section>
  );
};

export default AnimeDetail;

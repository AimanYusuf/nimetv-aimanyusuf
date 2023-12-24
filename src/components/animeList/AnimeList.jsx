"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiStar } from "react-icons/bi";
import { RiMovie2Line } from "react-icons/ri";

const AnimeList = ({ api, loadingStatus }) => {
  return (
    <div className="grid gap-2 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 md:gap-10 grid-cols-2">
      {api.length < 0 ? (
        <div>Not Found</div>
      ) : (
        api.data?.map((data) => (
          <Link href={`/anime/${data.mal_id}`} key={data.mal_id}>
            <div className="relative max-w-48 h-72">
              <Image
                src={data.images.webp.image_url}
                className="bg-cover rounded-2xl mx-auto"
                alt={data.title}
                width={900}
                height={1600}
              />
            </div>
            <div className="py-4 flex flex-col gap-3">
              <div className="flex justify-between items-center gap-1">
                <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
                  {data.title}
                </h2>
                <div className="py-1 px-2 bg-[#161921] rounded-md">
                  <p className="text-white text-sm font-bold capitalize">
                    {data.type || null}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex flex-row gap-2 items-center">
                  <RiMovie2Line
                    src="./episodes.svg"
                    alt="episodes"
                    width={20}
                    height={20}
                    className="object-contain text-red-500"
                  />
                  <p className="text-base text-white font-bold">
                    {data.episodes || null}
                  </p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <BiStar
                    src="./star.svg"
                    alt="star"
                    width={20}
                    height={20}
                    className="object-contain text-[#FFAD49]"
                  />
                  <p className="text-base font-bold text-[#FFAD49]">
                    {data.score || null}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default AnimeList;

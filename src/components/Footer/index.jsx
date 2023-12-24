import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-5 ">
      <div className="container">
        <div className="w-full flex justify-between items-center mb-5">
          <Link href="/" className="flex items-center ">
            <Image
              src={"/logo.png"}
              alt="logo nime tv"
              width={140}
              height={40}
            />
          </Link>
          <div className="flex-col flex sm:flex-row gap-3">
            <Link
              href={"/popular"}
              className="font-medium text-slate-400 hover:underline"
            >
              Popular Anime
            </Link>
            <Link
              href={"/popular"}
              className="font-medium text-slate-400 hover:underline"
            >
              Recommendations Anime
            </Link>
          </div>
        </div>
        <hr className="border-gray-500" />
        <div className="text-center text-white pt-5">
          <span className="text-sm text-slate-400">
            © 2023 NimeTv™. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

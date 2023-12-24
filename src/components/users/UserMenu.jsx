"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import CollectionMenu from "./CollectionMenu";
import Link from "next/link";

const UserMenu = ({ data }) => {
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab");

  return (
    <>
      <div className="flex text-white font-medium gap-5 justify-center">
        <Link
          href={"/users/profile?tab=collections"}
          className={`${tab === "collections" ? "border-b-2" : null} py-1`}
        >
          Collections
        </Link>
        <Link
          className={`${tab === "comments" ? "border-b-2" : null} py-1`}
          href={"/users/profile?tab=comments"}
        >
          Comments
        </Link>
      </div>
      {tab === "collections" ? <CollectionMenu /> : null}
    </>
  );
};

export default UserMenu;

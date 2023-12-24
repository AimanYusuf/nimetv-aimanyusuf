"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FiLogOut, FiUser } from "react-icons/fi";

const UserButton = ({ user }) => {
  const [profileActive, setProfileActive] = useState(false);

  return (
    <div className="relative">
      <div
        className="rounded-full overflow-hidden cursor-pointer"
        onClick={() => setProfileActive((prev) => !prev)}
      >
        <Image
          src={user.image}
          alt={user.name}
          width={40}
          height={40}
          className="bg-cover"
        />
      </div>
      {profileActive ? (
        <div className="p-2 w-48 bg-white rounded-md absolute mt-2 right-0">
          <Link
            className="px-4 py-2 hover:bg-slate-200 rounded-md flex gap-5 items-center"
            href={"/users/profile?tab=collections"}
            onClick={() => setProfileActive(false)}
          >
            <FiUser className="inline w-4 h-4" />
            <span>Profile</span>
          </Link>
          <Link
            className="px-4 py-2 hover:bg-slate-200 rounded-md flex gap-5 items-center"
            href={"/api/auth/signout"}
          >
            <FiLogOut className="inline w-4 h-4" />
            <span>Sign Out</span>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default UserButton;

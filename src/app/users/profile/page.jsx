import React from "react";
import { authUserSession } from "@/lib/auth-libs";
import Image from "next/image";
import UserMenu from "@/components/users/UserMenu";

const Page = async () => {
  const user = await authUserSession();

  return (
    <section className="container py-10">
      <div className="flex flex-col items-center mb-10">
        <Image
          src={user.image}
          alt={user.name}
          width={200}
          height={200}
          className="rounded-full mb-5"
        />
        <h1 className="font-bold text-xl text-white">{user.name}</h1>
      </div>
      <UserMenu />
    </section>
  );
};

export default Page;

import Link from "next/link";
import SearchInput from "../SearchInput";
import Image from "next/image";
import UserButton from "../utils/UserButton";
import { authUserSession } from "@/lib/auth-libs";

const Navbar = async () => {
  const user = await authUserSession();

  return (
    <nav className="bg-gray-900 sticky top-0 right-0 left-0 z-50 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center ">
          <Image src={"/logo.png"} alt="logo nime tv" width={140} height={40} />
        </Link>
        <div className="flex gap-4 items-center">
          <SearchInput />
          {user ? (
            <UserButton user={user} />
          ) : (
            <Link
              href={"/api/auth/signin"}
              className="px-4 py-2 bg-blue-500 rounded-md text-sm font-medium text-white"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

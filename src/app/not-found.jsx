"use client";

import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full py-40  flex justify-center items-center flex-col">
      <h1 className="font-medium text-2xl text-white mb-5">404 | Not Found</h1>
      <button
        onClick={() => router.back()}
        className="underline text-slate-500 text-xs"
      >
        Back to your prevent page <FiArrowRight className="inline" />
      </button>
    </div>
  );
};

export default Page;

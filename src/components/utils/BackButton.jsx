"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="w-full mb-5 max-w-5xl mx-auto">
      <button
        onClick={() => router.back()}
        className="text-white flex justify-center items-center hover:underline"
      >
        <FiArrowLeft className="w-4 h-4 inline" />
        <span className="ms-2">Back</span>
      </button>
    </div>
  );
};

export default BackButton;

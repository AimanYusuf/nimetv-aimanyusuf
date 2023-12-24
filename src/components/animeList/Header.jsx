import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between mb-5">
      <h1 className="font-bold text-white text-2xl">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-white flex items-center gap-2 hover:underline"
        >
          <span className="font-medium text-sm">{linkTitle}</span>
          <FiArrowRight className="inline w-4 h-4" />
        </Link>
      ) : null}
    </div>
  );
};

export default Header;

import React from "react";

const Header = ({ title }) => {
  return (
    <div className="py-5 flex justify-center">
      <h3 className="text-white font-bold text-2xl">{title}</h3>
    </div>
  );
};

export default Header;

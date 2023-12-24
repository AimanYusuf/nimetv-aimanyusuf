import React from "react";

const UserMenu = () => {
  return (
    <div className="flex text-white font-medium gap-5 justify-center">
      <button className="py-1 border-b-2">Posts</button>
      <button>Comments</button>
      <button>Bookmark</button>
    </div>
  );
};

export default UserMenu;

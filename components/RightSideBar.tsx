import React from "react";
import Avatar from "./Avatar";

const RightSideBar = () => {
  return (
    <div className="hidden lg:w-3/12 xl:w-3/12 h-screen lg:flex flex-col p-16 gap-24 items-center">
      <div className="flex ">
        <Avatar></Avatar>
      </div>
    </div>
  );
};

export default RightSideBar;

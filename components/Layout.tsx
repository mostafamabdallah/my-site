import React from "react";
import SideBar from "./SideBar";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-row h-screen">
      <SideBar></SideBar>
      <div className="bg-pageBackground rounded-tl-[80px] lg:w-9/12 xl:w-10/12 p-6 md:p-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;

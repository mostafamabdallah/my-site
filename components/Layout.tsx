import React from "react";
import SideBar from "./SideBar";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-row h-screen">
      <SideBar></SideBar>
      <div>{children}</div>
    </div>
  );
};

export default Layout;

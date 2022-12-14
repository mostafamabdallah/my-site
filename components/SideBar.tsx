import Image from "next/image";
import React from "react";
import logo from "../public/vercel.svg";
import SideBarLink from "./SideBarLink";
import { siteLinks } from "../data/links";

const SideBar = () => {
  return (
    <div className="hidden lg:w-3/12 xl:w-2/12 border-2 border-red-500 h-screen lg:flex flex-col p-16 gap-24">
      <div className="flex">
        <Image className="w-full" src={logo} alt={""}></Image>
      </div>
      <div className="flex flex-col gap-12">
        {siteLinks.map((el, i) => {
          return (
            <SideBarLink
              key={i}
              icon={el.icon}
              name={el.name}
              url={el.url}
            ></SideBarLink>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;

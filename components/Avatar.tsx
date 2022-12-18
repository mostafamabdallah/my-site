import Image from "next/image";
import React from "react";
import avatar from "../assets/avatar.jpg";

const Avatar = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-full w-4/12 relative"
        src={avatar}
        alt={"avatar"}
      ></Image>
      <h3 className="text-white text-center w-full font-semibold mt-2">
        Mostafa
      </h3>
      <p className="text-sm text-white mt-2">mostafa@mostafa.design</p>
    </div>
  );
};

export default Avatar;

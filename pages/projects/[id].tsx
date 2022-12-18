import {
  faHeart,
  faSave,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import pic from "../../assets/project1.webp";
import ProjectCard from "../../components/ProjectCard";
import Rating from "../../components/Rating";
import SideBarLink from "../../components/SideBarLink";

const singleProject = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <Head>
          <title>projext-1</title>
        </Head>
        <div className="w-full lg:w-4/12 flex items-center justify-center">
          <Image className="w-10/12" src={pic} alt={""}></Image>
        </div>
        <div className="w-full lg:w-8/12 border-2 border-[#c7c7c712] rounded-xl flex-col mt-5 lg:mt-0 ">
          <div className="p-10 ">
            <div className="flex flex-row items-start justify-between">
              <div className="flex flex-col">
                <h1 className="text-white text-lg font-bold">
                  Blad Beadrded Boss
                </h1>
                <p className="text-gray-400 font-bold text-sm py-2">
                  By: <span>mostafa magmoud </span> | <span>Feb 2020</span>
                </p>
                <Rating rating={4}></Rating>
                <div className="flex flex-row my-3 gap-2 flex-w">
                  <span className="bg-primary px-2 py-1 text-white font-bold rounded-md">
                    ReactJS
                  </span>
                  <span className="bg-primary px-2 py-1 text-white font-bold rounded-md">
                    TailwindCSS
                  </span>
                  <span className="bg-primary px-2 py-1 text-white font-bold rounded-md">
                    NextJS
                  </span>
                </div>
                <p className="text-white text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  illo amet reiciendis quibusdam culpa, vel enim corporis quo
                  libero, iste architecto molestias! Aspernatur, delectus
                  laborum nisi nesciunt laboriosam architecto eum.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-b-xl flex flex-row text-xs md:text-sm flex-wrap bg-[#9098d80f]">
            <div className="flex justify-center border-r border-white p-5 w-4/12 md:w-3/12">
              <SideBarLink name={"View"} icon={faSave} url={""}></SideBarLink>
            </div>
            <div className="flex justify-center border-r border-white  p-5 w-4/12 md:w-3/12">
              <SideBarLink name={"Like"} icon={faHeart} url={""}></SideBarLink>
            </div>
            <div className="flex justify-center border-r border-white  p-5 w-4/12 md:w-3/12 ">
              <SideBarLink name={"Share"} icon={faShare} url={""}></SideBarLink>
            </div>
            <div className="flex justify-center p-5 bg-forth text-white font-semibold rounded-bl-lg md:rounded-bl-none rounded-br-lg w-full md:w-3/12">
              <Link href={""}>Hire Me</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </>
  );
};

export default singleProject;

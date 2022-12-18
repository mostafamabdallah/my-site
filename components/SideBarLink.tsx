import { faHome, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { SiteLink } from "../data/links";

const SideBarLink = ({ name, icon, url }: SiteLink) => {
  return (
    <Link
      className="flex flex-row text-secondary items-center gap-3  font-semibold hover:text-white"
      href={url}
    >
      <FontAwesomeIcon className="text-xl flex w-4/12 justify-start items-start" icon={icon}></FontAwesomeIcon>
      <span>{name}</span>
    </Link>
  );
};

export default SideBarLink;

import {
  IconDefinition,
  faHome,
  faGrip,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export type SiteLink = {
  name: string;
  icon: IconDefinition;
  url: string;
};

export const siteLinks: SiteLink[] = [
  {
    name: "Home",
    icon: faHome,
    url: "/",
  },
  {
    name: "About",
    icon: faInfoCircle,
    url: "/",
  },
  {
    name: "Projects",
    icon: faGrip,
    url: "/",
  },
];

import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Marco AG",
  DESCRIPTION: "Marco AG Blog",
  EMAIL: "hi@marcoag.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to Marco AG Space",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A digital record of my reflections",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Open Source Projects",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://linkedin.com/in/marcoagg",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/marco-ag",
  },
  {
    NAME: "YouTube",
    HREF: "https://youtube.com/@marco-aag",
  },
  {
    NAME: "Website",
    HREF: "https://marcoag.com",
  },
];

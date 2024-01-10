import React from "react";
import { parseArgs } from "util";

export const links = [
  {
    name: "home",
    hash: "/",
    hidden: false,
  },
  {
    name: "about",
    hash: "/about",
    hidden: false,
  },
  {
    name: "projects",
    hash: "/projects",
    hidden: false,
  },
  {
    name: "experience",
    hash: "/experience",
    hidden: false,
  },
  {
    name: "blog",
    hash: "/blog",
    hidden: false,
  },
  {
    name: "contact",
    hash: "/contact",
    hidden: false,
  },
] as const;

export const projects = [] as const;

export const experiences = [] as const;

export const blogs = [] as const;

export const skills = [] as const;

export const socials = {
  linkedin: "https://www.linkedin.com/in/stevensikorski/",
  github: "https://github.com/stevensikorski",
} as const;

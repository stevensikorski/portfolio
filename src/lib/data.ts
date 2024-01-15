import React from "react";

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
    name: "contact",
    hash: "/contact",
    hidden: false,
  },
] as const;

export const projects = [
  {
    name: "Polish Cultural Club",
    description: "Currently involved in developing the website for the Polish Cultural Club.",
    image: "PolishCulturalClub.png",
    url: "https://hcpolishclub.org/",
    link: "hcpolishclub.org",
  },
  {
    name: "Maze Solver",
    description: "Navigation program for mazes using depth first search.",
    image: "MazeSolver.png",
    url: "https://github.com/stevensikorski/maze-solver",
    link: "github.com/stevensikorski",
  },
  {
    name: "Password Generator",
    description: "Desktop application for password generation. Purpose-built for macOS.",
    image: "PasswordGenerator.png",
    url: "https://github.com/stevensikorski/password-generator",
    link: "github.com/stevensikorski",
  },
  {
    name: "ASLearn",
    description: "Hackathon project made with a team of four for HackNYU 2022.",
    image: "ASLearn.png",
    url: "https://arshs1.github.io/ASLearn/",
    link: "github.io/ASLearn",
  },
  {
    name: "Monte Carlo Algorithm",
    description: "Estimation of the irrational number pi by utilizing the Monte Carlo Algorithm.",
    image: "EstimatePi.png",
    url: "https://github.com/stevensikorski/estimate-pi",
    link: "github.com/stevensikorski",
  },
  {
    name: "macos-system-info",
    description: "Application to monitor system information on macOS based systems.",
    image: "SystemInfo.png",
    url: "https://github.com/stevensikorski/macos-system-info",
    link: "github.com/stevensikorski",
  },
] as const;

export const experiences = [
  {
    title: "Software Engineering",
    description: "Over the course of months, I collaborated closely with three Polish Cultural Club board members, gathering their ideas and requirements, to develop a website, resulting in a substantial improvement in the club's online presence and providing a platform for organizing, promoting, and increasing club engagement.",
    organization: "Polish Cultural Club",
    location: "New York, NY",
    date: "Dec. 2023 - Present",
  },
  {
    title: "Web Development",
    description: "Led the development of the STEMKasa chat messaging platform, connecting students with AI tutors, while collaborating with a team of 8 interns to enhance the STEMKasa learning platform.",
    organization: "STEMKasa Learning Center",
    location: "New York, NY",
    date: "Jun. 2023 - Aug. 2023",
  },
] as const;

export const socials = {
  linkedin: "https://www.linkedin.com/in/stevensikorski/",
  github: "https://github.com/stevensikorski",
} as const;

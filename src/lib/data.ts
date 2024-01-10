import React from "react";
import PolishCulturalClubImg from "../../public/PolishCulturalClub.png";
import MazeSolverImg from "../../public/MazeSolver.png";
import PasswordGeneratorImg from "../../public/PasswordGenerator.png";
import ASLearnImg from "../../public/ASLearn.png";
import EstimatePiImg from "../../public/EstimatePi.png";
import SystemInfoImg from "../../public/SystemInfo.png";

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

export const projects = [
  {
    title: "Polish Cultural Club",
    description: "Currently involved in developing the website for the Polish Cultural Club.",
    image: PolishCulturalClubImg,
    projectURL: "https://hcpolishclub.com/",
    shortenedURL: "hcpolishclub.com",
  },
  {
    title: "Maze Solver",
    description: "Navigation program for mazes using depth first search.",
    image: MazeSolverImg,
    projectURL: "https://github.com/stevensikorski/maze-solver",
    shortenedURL: "github.com/stevensikorski",
  },
  {
    title: "Password Generator",
    description: "Desktop application for password generation. Purpose-built for macOS.",
    image: PasswordGeneratorImg,
    projectURL: "https://github.com/stevensikorski/password-generator",
    shortenedURL: "github.com/stevensikorski",
  },
  {
    title: "ASLearn",
    description: "Hackathon project made with a team of four for HackNYU 2022.",
    image: ASLearnImg,
    projectURL: "https://github.com/stevensikorski/ASLearn",
    shortenedURL: "github.com/stevensikorski",
  },
  {
    title: "Monte Carlo Algorithm to Estimate Pi",
    description: "Estimation of the irrational number pi by utilizing the Monte Carlo Algorithm.",
    image: EstimatePiImg,
    projectURL: "https://github.com/stevensikorski/estimate-pi",
    shortenedURL: "github.com/stevensikorski",
  },
  {
    title: "macos-system-info",
    description: "Application to monitor system information on macOS based systems.",
    image: SystemInfoImg,
    projectURL: "https://github.com/stevensikorski/macos-system-info",
    shortenedURL: "github.com/stevensikorski",
  },
] as const;

export const experiences = [] as const;

export const blogs = [] as const;

export const skills = [] as const;

export const socials = {
  linkedin: "https://www.linkedin.com/in/stevensikorski/",
  github: "https://github.com/stevensikorski",
} as const;

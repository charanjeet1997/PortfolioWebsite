import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  git,
  cactus,
  caperminttech,
  pixent,
  carrent,
  jobit,
  tripguide,
  threejs, unity, unreal,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web 3D Developer",
    icon: web,
  },
  {
    title: "AR/VR Developer",
    icon: mobile,
  },
  {
    title: "Shader & Tools Programmer",
    icon: backend,
  },
  {
    title: "Technical Mentor",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Unreal",
    icon: unreal,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Senior XR Developer",
    companyName: "Cactus Creatives",
    icon: cactus,
    iconBg: "#E6DEDD",
    date: "March 2025 – Present",
    points: [
      "Built VR drone simulations using Unity.",
      "Developed Web VR/AR apps with hit-testing and MindAR image tracking.",
      "Created a 3D car showroom using React Three Fiber along with other 3D apps.",
    ],
  },
  {
    title: "Development Team Lead / Senior Game Developer",
    companyName: "Pixent Interactive",
    icon: pixent,
    iconBg: "#383E56",
    date: "August 2020 – January 2025",
    points: [
      "Led AR/VR/XR projects in Unity to enhance user engagement and immersion.",
      "Mentored junior developers, improving workflow and code quality.",
      "Optimized AR apps by reducing load time and app size using Asset Bundles.",
      "Built custom tools including a GPU Instancer (with DOTS, Burst) and Script Generator.",
    ],
  },
  {
    title: "Game Developer Intern",
    companyName: "Capermint Technologies",
    icon: caperminttech,
    iconBg: "#E6DEDD",
    date: "December 2019 – June 2020",
    points: [
      "Prototyped game mechanics including Knife Hit and 8 Ball Pool in Unity.",
      "Enhanced game performance across Android and iOS platforms for smooth gameplay.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Charanjeet played a crucial role in helping us build a complex VR simulation with seamless performance.",
    name: "Amit Sharma",
    designation: "Technical Director",
    company: "Pixent Interactive",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "His mentoring made a real difference to our junior devs. Clear communication, deep knowledge.",
    name: "Sneha Patel",
    designation: "Project Manager",
    company: "Attune World Wide",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Coco Up",
    description:
      "Infinite runner game where a coconut jumps over tree trunks using power-ups. Implemented with Factory Pattern and object pooling for smooth performance.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "gameplay",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/charanjeet1997", // Replace with actual project link if available
  },
  {
    name: "Quantum Puzzle VR",
    description:
      "Educational VR app demonstrating quantum computing through interactive puzzles. Built for Meta Quest with immersive interactions.",
    tags: [
      {
        name: "vr",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "shader",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/charanjeet1997", // Replace with actual project link if available
  },
  {
    name: "AR Gallery",
    description:
      "AR app allowing users to upload images to a server and scan them to view dynamic content like videos, text, and 3D models using a dynamic image library.",
    tags: [
      {
        name: "ar",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "image-tracking",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/charanjeet1997", // Replace with actual project link if available
  },
];

export { services, technologies, experiences, testimonials, projects };

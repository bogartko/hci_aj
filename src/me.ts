import { DiScrum } from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaNewspaper,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { HiChip } from "react-icons/hi";
import {
  SiC,
  SiGnubash,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTypescript
} from "react-icons/si";

import { IMe, ITheme } from "./me.interface";

// Warning: Don't use "black" or "white" values
export const themeColor: ITheme = "orange";

// Multiple theme options
export const multiThemeOptions: ITheme[] = [
  "orange",
  "purple",
  "blue",
  "red",
  "pink",
  "green",
];

// To disable support for multiple themes, set this value to `false`;
export const enableMultiTheme: boolean = true;

export const me = {
  name: "Armando",
  
  facts: [
    
    "",
  ],
  subtitle: " BS Computer Science ",
  tagline:
    "BSCS 4A",
  bigHeading: {
    black: "I make Portfolio",
    blue: "for the Human Computer Interaction",
  },
  about:
    "Iam Armando Gardoce a 4th year Student in North Eastern Mindanao. I was 18 since started my degree as a computer Science and have Intermediate background when it comes to programming languages",
  location: "",
  image: "/assets/me.jpg",
  education: [
    {
      degree: "Bachelor of Science",
      major: "Computer Science",
      school: "University of North Eastern Mindanao",
      graduation: "January 2021",
      awards: ["I was 18 since started my degree as a computer Science and have Intermediate background when it comes to programming languages"],
    },
  ],
  experience: [
    {
      company: "G Hovens IT Solutions",
      location: "",
      position: "Mobile developer Trainee",
      duration: "July 1 August 8",
      bullets: [
        "I had the opportunity to join an international webinar on computer science, which, though conducted virtually, provided valuable insights and a platform for global learning and interaction.",
        
      ],
    },
    {
      company: "Provincial Capitol",
      location: "Patin ay Agusan DelSur",
      position: "Clerical aide",
      duration: "May 2022 June 2022",
      bullets: [
        
      ],
    },
    
  ],
  projects: [
    {
      name: "Mobile Calculator",
      description:
        "Asimple mobile calculator that has 4 functions.",
      contribution:
        "I created a simple mobile calculator with four basic functions: addition, subtraction, multiplication, and division, using languages like JavaScript with React Native or Dart with Flutter, along with tools like Visual Studio Code, to design a clear interface and ensure it is easy to use.",
      technologies: [
        
        
      ],
      links: [
       
      ],
      
    },
    {
      name: "Simple tour Application",
      description:
        "I designed and developed a mobile tour application for Lianga, Surigao del Sur, using Thunkable. The app includes a feature for tracking bus schedules, helping users plan their trips efficiently. With a simple and user-friendly interface, it highlights local tourist spots, activities, and culture, making it a convenient tool for travelers.",
      contribution:
        "I added a feature to my mobile tour app for Lianga, Surigao del Sur, that shows real-time bus schedules. I built an IoT device using an ESP32 and Arduino, connected it to a Node.js server, and used the UMass Transit API to pull the bus data. This helps users plan their trips more efficiently.",
      technologies: [
        
      ],
      links: [
       
        
      ],
    },
    
    
    
  ],
  skills: [
   
    {
      name: "JavaScript",
    },
    {
      name: "Python",
    },
    {
      name: "Embedded Systems",
    },
    {
      name: "Node.js",
      icon: "",
    },   
    
  ],
  social: [
    
    
   
  ],

  contact: {
    email: "itsonezbogs@gmail.com",
  },
} 

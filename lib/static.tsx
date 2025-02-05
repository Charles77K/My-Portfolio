import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGit } from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
  SiExpo,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { Github, Linkedin, Mail } from "lucide-react";

export const apiRoute = "https://project-manager-ruddy-phi.vercel.app/api/v1";

export const techStack = [
  { icon: <FaHtml5 size={22} color="#E34F26" />, text: "HTML5" },
  { icon: <FaCss3Alt size={22} color="#1572B6" />, text: "CSS3" },
  { icon: <FaJs size={22} color="#F7DF1E" />, text: "JavaScript" },
  { icon: <SiTypescript size={22} color="#3178C6" />, text: "TypeScript" },
  { icon: <FaReact size={22} color="#61DAFB" />, text: "React" },
  { icon: <IoLogoReact size={22} color="#61DAFB" />, text: "React Native" },
  { icon: <SiExpo size={22} color="#fff" />, text: "Expo" },
  { icon: <SiNextdotjs size={22} color="#ffff" />, text: "Next.js" },
  { icon: <SiExpress size={22} color="green" />, text: "ExpressJS" },
  { icon: <SiNodedotjs size={22} color="green" />, text: "NodeJS" },
  { icon: <SiMongodb size={22} color="green" />, text: "MongoDB" },
  { icon: <SiTailwindcss size={22} color="#06B6D4" />, text: "Tailwind CSS" },
  { icon: <SiRedux size={22} color="#764ABC" />, text: "Redux" },
  {
    icon: <SiStyledcomponents size={22} color="#DB7093" />,
    text: "Styled Components",
  },
  { icon: <FaGit size={22} color="#F05033" />, text: "Git" },
];

export const EXPERIENCES = [
  {
    role: "Software Developer - Freelancer",
    description:
      "As a freelance software developer, I’ve built and maintained web and mobile applications. I focus on creating responsive, user-friendly interfaces while continuously exploring backend development.",
    duration: "2023 - Present",
  },
  {
    role: "Graphics Designer - Freelancer",
    description:
      "As a freelance graphics designer, I specialized in creating flyers, art covers, and photo manipulations using Adobe Photoshop.",
    duration: "2020 - 2023",
  },
];

export const CONTACT_INFO = [
  {
    icon: <Github className="w-6 h-6" />,
    link: "https://github.com/Charles77K",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    link: "mailto:charlesobiora16@gmail.com",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    link: "https://www.linkedin.com/in/charles-obiora-484a912a0/",
  },
];

export const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    link: "https://github.com/Charles77K",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    link: "https://www.linkedin.com/in/charles-obiora-484a912a0/",
  },
];

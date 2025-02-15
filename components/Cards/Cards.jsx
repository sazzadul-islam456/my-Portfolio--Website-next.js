"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

const journey = [
  // experience
  {
    type: "experience",
    company: "Odeao Labs",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    qualification: "Web Development",
    duration: "Jul 2021 - Present",
    description:
      "Built website and web apps using Next.js Tailwind CSS, and Javascript. Worked on scalable, user-friendly solutions.",
  },
  {
    type: "experience",
    company: "Stacked",
    logoUrl: "/assets/journey/experience/logo-2.svg",
    qualification: "Web Development",
    duration: "Mar 2019 - Jun 2021",
    description:
      "Developed responsive websites with HTML, CSS, and Javascript. Ensured seamless user experience.",
  },
  {
    type: "experience",
    company: "Magnolia",
    logoUrl: "/assets/journey/experience/logo-3.svg",
    qualification: "UI/UX Development",
    duration: "Jan 2017 - Feb 2019",
    description:
      "Designed web interfaces with cross-browser compatibility and responsiveness. Delivered pixel-perfect designs.",
  },
  {
    type: "experience",
    company: "Warpspeed Inc",
    logoUrl: "/assets/journey/experience/logo-4.svg",
    qualification: "Full Stack Developer",
    duration: "Jan 2015 - Feb 2016",
    description:
      "Developed full-stack solutions using React and Node.js. Integrated frontend and backend technologies.",
  },
  // education
  {
    type: "education",
    company: "Udemy",
    logoUrl: "/assets/journey/education/logo-1.svg",
    qualification: "MERN Stack Developer",
    duration: "Jan 2023 - Feb 2024",
    description:
      "Learned full-stack development concepts, focusing on React, Node.js and APIs. Completed hands-on projects to solidify skills.",
  },
  {
    type: "education",
    company: "CodeAcademy Bootcamp",
    logoUrl: "/assets/journey/education/logo-2.svg",
    qualification: "Full Stack",
    duration: "Jan 2023 - Feb 2024",
    description:
      "Learned full-stack development concepts, focusing on React, Node.js and APIs. Completed hands-on projects to solidify skills.",
  },
  {
    type: "education",
    company: "Design Intitute",
    logoUrl: "/assets/journey/education/institution.svg",
    qualification: "Full Stack",
    duration: "Jan 2023 - Feb 2024",
    description:
      "Learned full-stack development concepts, focusing on React, Node.js and APIs. Completed hands-on projects to solidify skills.",
  },
  {
    type: "education",
    company: "Businees School",
    logoUrl: "/assets/journey/education/institution.svg",
    qualification: "Full Stack",
    duration: "Jan 2023 - Feb 2024",
    description:
      "Learned full-stack development concepts, focusing on React, Node.js and APIs. Completed hands-on projects to solidify skills.",
  },
  // skills
  // Change all "Skill" to "skill"
  {
    type: "skill",
    name: "HTML",
    icon: <FaHtml5 />,
    qualification: "Full Stack",
    duration: "Jan 2023 - Feb 2024",
    description:
      "HTML is the foundation of the web—clean structure, better accessibility, endless possibilities! ",
  },
  {
    type: "skill",
    name: "CSS",
    icon: <FaCss3Alt />,
    qualification: "Full Stack",
    duration: "Jan 2023 - Feb 2024",
    description:
      "CSS brings the web to life—style, responsiveness, and creativity in every line!.",
  },
  {
    type: "skill",
    name: "JavaScript",
    icon: <FaJs />,
    qualification: "Full Stack",
    duration: "Jan 2023 - Feb 2024",
    description:
      "JavaScript adds the magic—interactive, dynamic, and powerful!",
  },
  {
    type: "skill",
    name: "React",
    icon: <FaReact />,
    qualification: "Full Stack",
    duration: "Jan 2023 - Feb 2024",
    description:
      "React makes UI development fast, scalable, and efficient—build once, update everywhere!",
  },
  {
    type: "skill",
    name: "WordPress",
    icon: <FaWordpress />,
    qualification: "Full Stack",
    duration: "Jan 2023 - Feb 2024",
    description:
      "WordPress powers the web—flexible, customizable, and built for everyone!",
  },
  {
    type: "skill",
    name: "Figma",
    icon: <FaFigma />,
    qualification: "Full Stack",
    duration: "Jan 2023 - Feb 2024",
    description:
      "Figma turns ideas into reality—design, collaborate, and prototype seamlessly!",
  },
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">My Skills</TabsTrigger> {/* Fixed */}
        </TabsList>

        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {journey
              .filter((item) => item.type === "experience")
              .map((card, index) => {
                return <Card key={index} {...card} />;
              })}
          </motion.div>
          </AnimatePresence>
          
        </TabsContent>

        <TabsContent value="education" className="w-full">
          <AnimatePresence>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          >
            {journey
              .filter((item) => item.type === "education")
              .map((card, index) => {
                return <Card key={index} {...card} />;
              })}
          </motion.div>
          </AnimatePresence>
        </TabsContent>

        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          >
            {journey
              .filter((item) => item.type === "skill")
              .map((card, index) => {
                return <Card key={index} {...card} />;
              })}
          </motion.div>
          </AnimatePresence>
          {" "}
          {/* Fixed */}
          
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;

import { skillsMap, TSkill } from "./skills";

export type TExperience = {
  title: string;
  company: string;
  companyLink: string;
  duration: string;
  skills?: TSkill[];
  location: string; //On-Site/Remote/Hybrid (Location)
  description?: string;
};

export const experiences: TExperience[] = [
  {
    title: "Frontend Developer",
    company: "Pegasus International computer Co",
    companyLink: "https://www.pegasustech.net/",
    duration: "Feb 2025 - Present",
    skills: [
      skillsMap.react,
      skillsMap.node,
      skillsMap.mssql,
      skillsMap.tanstackQueryRouter,
    ],
    location: "On-Site (Udaipur, Rajasthan)",
    description:
      "Modernizing and building frontend UI for selected modules of a .NET-based ERP system using React. Enhancing user experience with fast, responsive, and user-friendly interfaces while integrating with backend APIs",
  },
];

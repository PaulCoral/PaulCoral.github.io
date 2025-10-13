import type { technologies } from "./technologies";

interface JobDescription {
  title: string;
  from: string;
  to: string;
  company: string;
  description: string;
  relatedTech: (keyof typeof technologies)[];
}

export const jobs = [
  {
    title: "Software Engineer Intern",
    from: "02.2023",
    to: "08.2023",
    company: "AUBEP SA, 1400 Yverdon-les-bains",
    description:
      "During my master thesis, I built a factory planning software helping various manufacturing industries to organize their workloads.",
    relatedTech: [],
  },
  {
    title: "Fullstack Software Engineer",
    from: "08.2023",
    to: "11.2025",
    company: "OneDoc SA, 1202 Geneva",
    description:
      "During my master thesis, I built a factory planning software helping various manufacturing industries to organize their workloads.",
    relatedTech: ["scala", "angular", "typescript"],
  },
  {
    title: "Software Engineer",
    from: "12.2025",
    to: "current",
    company: "Softcom Technologies, 1700 Fribourg",
    description:
      "During my master thesis, I built a factory planning software helping various manufacturing industries to organize their workloads.",
    relatedTech: [],
  },
] as const satisfies JobDescription[];

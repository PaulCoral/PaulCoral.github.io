import type { LocaleKeys } from "../assets/locale";
import type { technologies } from "./technologies";

interface JobDescription {
  title: LocaleKeys;
  from: string;
  to: string;
  company: string;
  description: LocaleKeys;
  relatedTech: (keyof typeof technologies)[];
}

export const jobs = [
  {
    title: "home.jobs.aubep.title",
    from: "02.2023",
    to: "08.2023",
    company: "AUBEP SA, 1400 Yverdon-les-bains",
    description: "home.jobs.aubep.description",
    relatedTech: [],
  },
  {
    title: "home.jobs.engineer-full-stack",
    from: "08.2023",
    to: "11.2025",
    company: "OneDoc SA, 1202 Geneva",
    description: "home.jobs.onedoc.description",
    relatedTech: ["scala", "angular", "typescript", "postgreSQL"],
  },
  {
    title: "home.jobs.engineer-full-stack",
    from: "12.2025",
    to: "current",
    company: "Softcom Technologies, 1700 Fribourg",
    description: "home.jobs.softcom.description",
    relatedTech: [],
  },
] as const satisfies JobDescription[];

import type { SvgComponent } from "astro/types";
import type { LocaleKeys } from "../assets/locale";
import PostgresSVG from "../assets/postgres.svg";

interface Technologies {
  title: string;
  img: string | SvgComponent;
  description: LocaleKeys;
  link: string;
}

export const technologies = {
  scala: {
    title: "Scala",
    img: "https://scala-lang.org/resources/img/frontpage/scala-spiral.png",
    description: "home.techs.scala.description",
    link: "https://scala-lang.org",
  },
  angular: {
    title: "Angular",
    img: "https://opensource.google/static/images/projects/os-projects-angular.svg",
    description: "home.techs.angular.description",
    link: "https://https://angular.dev/",
  },
  typescript: {
    title: "TypeScript",
    img: "/images/ts-logo-128.svg",
    description: "home.techs.typescript.description",
    link: "https://www.typescriptlang.org/",
  },
  postgreSQL: {
    title: "PostgreSQL",
    img: PostgresSVG,
    description: "home.techs.typescript.description",
    link: "https://www.postgresql.org/",
  },
} as const satisfies Record<string, Technologies>;

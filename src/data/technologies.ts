import type { LocaleKeys } from "../assets/locale";

interface Technologies {
  title: string;
  imgUrl: string;
  description: LocaleKeys;
  link: string;
}

export const technologies = {
  scala: {
    title: "Scala",
    imgUrl: "https://scala-lang.org/resources/img/frontpage/scala-spiral.png",
    description: "home.techs.scala.description",
    link: "https://scala-lang.org",
  },
  angular: {
    title: "Angular",
    imgUrl:
      "https://opensource.google/static/images/projects/os-projects-angular.svg",
    description: "home.techs.angular.description",
    link: "https://https://angular.dev/",
  },
  typescript: {
    title: "TypeScript",
    imgUrl: "/images/ts-logo-128.svg",
    description: "home.techs.typescript.description",
    link: "https://www.typescriptlang.org/",
  },
} as const satisfies Record<string, Technologies>;

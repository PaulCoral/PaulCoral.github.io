interface Technologies {
  title: string;
  imgUrl: string;
  description: string;
  link?: string;
}

export const technologies = {
  scala: {
    title: "Scala",
    imgUrl: "https://scala-lang.org/resources/img/frontpage/scala-spiral.png",
    description:
      "Scala shines particularly for building performant and very reliable application, thanks to its expressive type system, functional approach, concurrency model and JVM runtime.",
    link: "https://scala-lang.org",
  },
  angular: {
    title: "Angular",
    imgUrl:
      "https://opensource.google/static/images/projects/os-projects-angular.svg",
    description:
      "Professional opinionated Web framework, which allowed me build performant and reliable apps.",
    link: "https://https://angular.dev/",
  },
  typescript: {
    title: "TypeScript",
    imgUrl: "/images/ts-logo-128.svg",
    description: "Lorem ipsum",
    link: "https://www.typescriptlang.org/",
  },
} as const satisfies Record<string, Technologies>;

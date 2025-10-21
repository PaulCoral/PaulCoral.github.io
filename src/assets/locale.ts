export type SupportedLocale = (typeof SUPPORTED_LOCALE)[number];
export type LocaleKeys = keyof typeof LOCALE;

export const SUPPORTED_LOCALE = ["en", "fr"] as const;

export const DEFAULT_LOCALE = SUPPORTED_LOCALE[0];

export function isSupportedLocale(locale: any): locale is SupportedLocale {
  return SUPPORTED_LOCALE.includes(locale);
}

export const SUPPORT_LOCALE_OPTIONS = {
  en: "English",
  fr: "Français",
} as const satisfies Record<SupportedLocale, string>;

export const LOCALE = {
  "home.header-subtitle": {
    en: "Full Stack Software Engineer",
    fr: "Ingénieur Logiciel Full Stack",
  },
  "home.summary": {
    en: "A dedicated **Full Stack Software Engineer** specializing in modern application architecture, performance optimization, and robust cross-browser compatibility. I transform complex requirements into efficient, scalable, and user-friendly web solutions.",
    fr: "**Ingénieur Logiciel Full Stack** passionné, spécialisé dans l'architecture d'application moderne, l'optimisation des performances, et une compatibilité multi-navigateurs robuste. Je transforme des exigences complexes en solutions web efficaces, évolutives et centrées sur l'utilisateur.",
  },
  "home.work-experience": {
    en: "Experience",
    fr: "Experience",
  },
  "home.technologies": {
    en: "Technologies",
    fr: "Technologies",
  },
  "common.website": {
    en: "Website",
    fr: "Site web",
  },
  "home.jobs.aubep.title": {
    en: "Software Engineer (Master thesis)",
    fr: "Ingénieur Logiciel (Projet de Master)",
  },
  "home.jobs.aubep.description": {
    en: "During my master thesis, I built a factory planning software helping various manufacturing industries to organize their workloads.",
    fr: "Durant mon mémoire de Master, j'ai développé un logiciel de planification de production qui aide diverses industries manufacturières à organiser leur charge de travail.",
  },
  "home.jobs.engineer-full-stack": {
    en: "Software Engineer (Full Stack)",
    fr: "Ingénieur Logiciel (Full Stack)",
  },
  "home.jobs.onedoc.description": {
    en: "As a Full Stack Engineer on the core product team, I played a key role in developing highly scalable features that serve millions of users and thousands of healthcare professionals. Leveraging Scala (Backend) and Angular (Frontend), my primary responsibilities included engineering critical third-party health software integrations and building robust billing and invoicing functionalities for professionals and insurance companies, ensuring the delivery of a performant and user-friendly application across the entire product lifecycle.",
    fr: "En tant que Full Stack Engineer au sein de l'équipe produit principale, j'ai joué un rôle clé dans le développement de fonctionnalités hautement évolutives qui servent des millions d'utilisateurs et des milliers de professionnels de la santé. En tirant parti de Scala (Backend) et Angular (Frontend), mes principales responsabilités incluaient l'ingénierie d'intégrations critiques avec des logiciels tiers du secteur de la santé et la création de fonctionnalités robustes de facturation pour les professionnels et les compagnies d'assurance, assurant ainsi la livraison d'une application performante et conviviale tout au long du cycle de vie du produit.",
  },
  "home.jobs.softcom.description": {
    en: "Coming soon...",
    fr: "À venir...",
  },
  "home.techs.scala.description": {
    en: "Scala shines particularly for building performant and very reliable application, thanks to its expressive type system, functional approach, concurrency model and JVM runtime.",
    fr: "Scala excelle dans le développement d'applications performantes et d'une grande fiabilité, notamment en raison de son système de types riche, de son approche fonctionnelle, de son modèle de concurrence et de son runtime JVM.",
  },
  "home.techs.angular.description": {
    en: "Angular is a powerful, comprehensive TypeScript-based framework known for its structural approach, scalability, and robust ecosystem. It excels at building large, high-performance, and maintainable single-page applications (SPAs), making it ideal for complex enterprise-level front-end development.",
    fr: "Angular est un framework puissant et complet basé sur TypeScript, réputé pour son approche structurale, son évolutivité et son écosystème robuste. Il excelle dans la création d'applications monopages (SPA) vastes, très performantes et faciles à maintenir, ce qui le rend idéal pour le développement front-end complexe à l'échelle de l'entreprise.",
  },
  "home.techs.typescript.description": {
    en: "TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It dramatically enhances code quality and maintainability, especially in large-scale applications, by catching errors during development (before runtime) and offering robust tools for modern front-end and back-end development.",
    fr: "TypeScript est un sur-ensemble de JavaScript fortement typé qui compile en JavaScript simple. Il améliore considérablement la qualité et la maintenabilité du code, en particulier dans les applications à grande échelle, en détectant les erreurs pendant le développement (avant l'exécution) et en offrant des outils robustes pour le développement front-end et back-end moderne.",
  },
} as const satisfies Record<string, Record<SupportedLocale, string>>;

export const SUPPORTED_LOCALE = ["en", "fr"] as const;

export const DEFAULT_LOCALE = SUPPORTED_LOCALE[0];

export type SupportedLocale = (typeof SUPPORTED_LOCALE)[number];

export function isSupportedLocale(locale: any): locale is SupportedLocale {
  return SUPPORTED_LOCALE.includes(locale);
}

export const SUPPORT_LOCALE_OPTIONS = {
  en: "English",
  fr: "Français",
} as const satisfies Record<SupportedLocale, string>;

export const LOCALE = {
  "home.header-subtitle": {
    en: "Full-Stack Software Engineer",
    fr: "Ingénieur Logiciel Full-Stack",
  },
  "home.summary": {
    en: "A dedicated Full-Stack Software Engineer specializing in modern application architecture, performance optimization, and robust cross-browser compatibility. I transform complex requirements into efficient, scalable, and user-friendly web solutions.",
    fr: "Ingénieur Logiciel Full-Stack passionné, spécialisé dans l'architecture d'application moderne, l'optimisation des performances, et une compatibilité multi-navigateurs robuste. Je transforme des exigences complexes en solutions web efficaces, évolutives et centrées sur l'utilisateur.",
  },
} as const satisfies Record<string, Record<SupportedLocale, string>>;

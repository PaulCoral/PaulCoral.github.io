import { DEFAULT_LOCALE, isSupportedLocale, LOCALE } from "../assets/locale";

export function useTranslations(lang: string | undefined) {
  const supportedLang = isSupportedLocale(lang) ? lang : DEFAULT_LOCALE;
  return function t(key: keyof typeof LOCALE) {
    return LOCALE[key][supportedLang];
  };
}

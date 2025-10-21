import {
  DEFAULT_LOCALE,
  isSupportedLocale,
  LOCALE,
  type LocaleKeys,
} from "../assets/locale";

export function useTranslations(lang: string | undefined) {
  const supportedLang = isSupportedLocale(lang) ? lang : DEFAULT_LOCALE;
  return function t(key: LocaleKeys) {
    return LOCALE[key][supportedLang];
  };
}

import ua from "./locales/ua.json";
import en from "./locales/en.json";

export const resources = {
  ua: { translation: ua },
  en: { translation: en },
};

const language = localStorage.getItem("language") || "ua";

export const i18Config = {
  lng: language,
  fallbackLng: "ua",
  supportedLngs: ["ua", "en"],
  resources,
};

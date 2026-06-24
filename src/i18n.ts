import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ko from "./locales/ko.json";
import en from "./locales/en.json";

// 서버 프리렌더와 클라이언트 첫 렌더의 hydration이 일치하도록 초기 언어를 고정한다.
// 실제 브라우저 언어 반영은 클라이언트 마운트 후(main.tsx)에서 수행한다.
export function detectClientLang(): "ko" | "en" {
  if (typeof navigator === "undefined") return "ko";
  return navigator.language?.startsWith("ko") ? "ko" : "en";
}

i18n.use(initReactI18next).init({
  resources: {
    ko: { translation: ko },
    en: { translation: en },
  },
  lng: "ko",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

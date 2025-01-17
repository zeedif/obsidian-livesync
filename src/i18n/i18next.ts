import i18next from "i18next";
import { moment } from "obsidian";
import * as en from "./locales/en.json";
import * as de from "./locales/de.json";

// Definir los recursos de traducción
export const resources = {
  en: { translation: en },
  de: { translation: de },
} as const;

// Detectar el idioma actual o usar inglés como predeterminado
export const translationLanguage = Object.keys(resources).includes(moment.locale())
  ? moment.locale()
  : "en";

// Inicializar i18next
export const initI18next = () => {
  i18next.init({
    lng: translationLanguage,
    fallbackLng: "en",
    resources: resources,
    returnNull: false, // Evita retornar `null` si una clave no existe
  });
};

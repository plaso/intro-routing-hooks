import { createContext, useCallback, useMemo, useState } from "react";

const LANGUAGE_KEY = 'language';
const DEFAULT_LANGUAGE = 'es';
const supportedLanguages = ['es', 'en']

const LanguageContext = createContext();
export default LanguageContext;

const getValidLanguage = (language) => {
  return supportedLanguages.includes(language) ? language : DEFAULT_LANGUAGE
}

const userInitialLanguage = getValidLanguage(
  localStorage.getItem(LANGUAGE_KEY)
  || supportedLanguages
    .find(language => window.navigator.language.startsWith(language)))

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(userInitialLanguage);

  const selectLanguage = useCallback((languageToSelect) => {
    const newLanguage = getValidLanguage(languageToSelect)
    setLanguage(newLanguage)
    localStorage.setItem(LANGUAGE_KEY, newLanguage)
  }, [])

  const value = useMemo(() => {
    return {
      language: getValidLanguage(language),
      supportedLanguages,
      setLanguage: selectLanguage
    }
  }, [language, selectLanguage])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
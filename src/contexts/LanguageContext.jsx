import { createContext, useState } from "react";

const DEFAULT_LANGUAGE = 'es';
const supportedLanguages = ['es', 'en']

const LanguageContext = createContext();
export default LanguageContext;

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  const value = {
    language,
    supportedLanguages,
    setLanguage
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
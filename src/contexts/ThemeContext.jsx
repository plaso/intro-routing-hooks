import { createContext, useState } from "react";

const THEME_LOCAL_STORAGE_KEY = 'theme'
const supportedThemes = ['light', 'dark']

const ThemeContext = createContext('light')
export default ThemeContext;

const validateTheme = (themeValue) => {
  return supportedThemes.includes(themeValue) && themeValue // si devuelve false, se queda con la parte izquierda del &&. Sino me devuelve el valor
}

const getInitialTheme = () => {
  return validateTheme(localStorage.getItem(THEME_LOCAL_STORAGE_KEY)) || 'light'  // Si validateTheme me devuelve false, pasa al lado derecho de la evaluación y me devuelve light
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme())

  const toggleTheme = () => {
    const newThemeValue = theme === 'light' ? 'dark' : 'light'
    setTheme(newThemeValue);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newThemeValue)
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
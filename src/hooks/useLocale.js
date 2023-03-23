import { useContext } from "react"
import LanguageContext from "../contexts/LanguageContext"
import esJSON from '../locales/es.json'
import enJSON from '../locales/en.json'

const useLocale = () => {
  const { language } = useContext(LanguageContext)

  const locales = {
    es: esJSON,
    en: enJSON
  }

  const translateText = (keyToTranslate) => {
    const currentLanguageJSON = locales[language] // Aqui pillo el JSON de traducciones

    return currentLanguageJSON[keyToTranslate] || keyToTranslate
  }

  // Que exporte una funcion, que dado un idioma, una palabra y un json de traducciones de ese idioma, busque esa palabra que me dan, y me la devuelva traducida
  return { t: translateText };
}

export default useLocale
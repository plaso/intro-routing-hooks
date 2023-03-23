import { useContext } from "react"
import LanguageContext from "../contexts/LanguageContext"
import es from '../locales/es.json'
import en from '../locales/en.json'

const useLocale = () => {
  const { language } = useContext(LanguageContext)
}

export default useLocale
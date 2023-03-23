import useLocale from "../../hooks/useLocale";

const Home = () => {
  const { t } = useLocale()
  return (
    <h1>{t('homeTitle')}</h1>
  )
}

export default Home;
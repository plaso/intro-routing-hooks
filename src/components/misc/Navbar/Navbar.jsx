import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LanguageContext from '../../../contexts/LanguageContext';
import ThemeContext from '../../../contexts/ThemeContext';
import useLocale from '../../../hooks/useLocale';

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext)
  const { supportedLanguages, setLanguage } = useContext(LanguageContext)
  const { t } = useLocale()

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{t('brandName')}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">  
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                to="products"
                end
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active': ''}`}
                to="products/new"
              >
                Create a new product
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Language
              </a>
              <ul class="dropdown-menu">
                {supportedLanguages.map(language => (
                  <li key={language}>
                    <button className="dropdown-item" onClick={() => setLanguage(language)}>
                      {language}
                    </button>
                  </li>
                ))}
                {/* <li><a class="dropdown-item" href="#">Action</a></li> */}
              </ul>
            </li>
          </ul>
          <button className="btn btn-outline-light" onClick={toggleTheme} >Toggle theme</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

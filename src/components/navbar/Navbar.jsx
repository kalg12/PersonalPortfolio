import React from 'react'
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div></div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Kevin Luciano</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">{t('header.inicio')}
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{t('header.acerca-de')}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{t('header.proyectos')}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{t('header.descargar-cv')}</a>
        </li>
      </ul>
      <ul>
          <button className='btn btn-info' onClick={() => i18n.changeLanguage("es")}>Español</button>
          <button className='btn btn-info' onClick={() => i18n.changeLanguage("en")}>English</button>
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}

export default Navbar
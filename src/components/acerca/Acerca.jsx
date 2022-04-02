import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../styles/style.css'
import profileImage from '../../img/Kevin-Luciano.png'



const Acerca = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <section id="about" className="section-about">
        <h1>{t("acerca.title")}</h1>
        <img className="profile-image" src={profileImage} alt='Kevin Luciano' />
        <div className='aboutme-text'>
          <p>{t("acerca.descripcion")}</p>
          <p><strong>{t("acerca.objetivo")}</strong> {t("acerca.objetivo-2")}</p>
        </div>
      </section>

    </>
  )
}

export default Acerca
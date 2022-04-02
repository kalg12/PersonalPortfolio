import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../styles/style.css'

const Acerca = () => {
const [t] = useTranslation("global");
  return (
    <>
    <section id="about" className="section-about">
  <h1>{t("acerca.title")}</h1>
  <img className="profile-image" src="../../img/Kevin-Luciano.png" alt='Kevin Luciano' />
  <p>¡Hola! <i className="far fa-hand-peace" />, gracias por visitar mi sitio web personal, soy Kevin Luciano, de <img className="mexican-flag" src="./assets/mexico-flag-color-palette.png" alt="México" />, a temprana edad tuve una gran pasión por la tecnología, motivado por: papá.</p>
  <p>Mis primeros pasos en la tecnología web fue a mis 11 años, utilizando HTML y Adobe Flash Player. Empecé a tomar cursos con jovenes universitarios; era el consentido de la clase <i className="far fa-grin-squint-tears" />. A los pocos meses conocí Joomla, un gestor de contenidos (CMS), por ende empecé a dar mis primeros pasos en PHP. Posteriormente conocí Moodle, un gestor de aprendizaje (LMS) y WordPress. A partir de ese momento empecé mi camino por el desarrollo web.</p>
  <p>Mi objetivo como desarrollador es transmitir los conocimientos que tengo e impulsar a otros a emprender este camino.</p>
</section>

    </>
  )
}

export default Acerca
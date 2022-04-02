import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../styles/style.css'


const Portada = () => {
const [t] = useTranslation("global");
  return (
    <>
    <section className="section-image">
        <div className="img-overlay">
            <div className="img-overlay-content">
                <div>
                    <h1 className="tracking-in-expand">Kevin Luciano</h1>
                </div>
                <div>
                    <h2 className="text-focus-in">{t("portada.profesion")}</h2>
                </div>
                <a className="arrow-down" href="#about"><i className="fas fa-angle-double-down"></i></a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Portada
import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../styles/style.css'


const Portada = () => {
const [t] = useTranslation("global");
  return (
    <>
    <section class="section-image">
        <div class="img-overlay">
            <div class="img-overlay-content">
                <div>
                    <h1 class="tracking-in-expand">Kevin Luciano</h1>
                </div>
                <div>
                    <h2 class="text-focus-in">{t("portada.profesion")}</h2>
                </div>
                <a class="arrow-down" href="#about"><i class="fas fa-angle-double-down"></i></a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Portada
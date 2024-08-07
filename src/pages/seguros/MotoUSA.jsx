import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import 'react-tabs/style/react-tabs.css';
import FaqMoto from "./FaqMoto";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/App";
import { useContext } from "react";

const MotoUSA = () => {
  const { t } = useTranslation()
  const { lang } = useContext(LanguageContext)
  const moto = t("moto")

  return (
    <>
      <Seo pageTitle="Service V1" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />
      {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne d-flex align-items-center seguros-hero position-relative mt-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  {moto.motoEtiqueta}
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {moto.motoTitle}
                </h2>
                <p className="tx-dark text-hero-banner pt-20">
                  {moto.motoDesc}
                </p>
                <div>
                  <a href={
                    lang === 'es' ?
                      "https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/"
                      : 
                      "https://www.nuagentesonline.com/agents/676164158d24efd000af9799d82f8b36/index.php?lang=en"
                  } target="blank">
                    <button className="fw-500 text-white tran3s button-primary" type="submit">
                      {moto.motoCotiza}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-lg-6 d-flex align-items-center" data-aos="fade-left">
            <img
              src="/images/assets/seguro-moto-hero.webp"
              alt="icon"
              className="lazy-img seguro-auto-hero"
            />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
        
      </div>
      {/* /.fancy-feature-fiftyOne */}

      <div className="fancy-feature-thirtyEight pt-60 pb-50">
        <div className="container">
          <h2 className="tx-dark mt-100 mb-50 lg-mt-50 text-center" data-aos="fade-up">
            {moto.motoFaq}
          </h2>
          <FaqMoto />
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default MotoUSA;

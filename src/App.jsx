import Aos from "aos";
import { createContext, useEffect, useState } from "react";
import "aos/dist/aos.css";
import "./styles/index.scss";
import ScrollToTop from "./components/common/ScrollTop";
import "bootstrap/dist/js/bootstrap";
import AgencyModern from "./pages/home/agency-modern";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import WebHosting from "./pages/home/web-hosting";
import Education from "./pages/home/education";
import Charity from "./pages/home/charity";
import RealEstate from "./pages/home/real-estate";
import SassProduct from "./pages/home/sass-product";
import AppLanding from "./pages/home/app-landing";
import Crypto from "./pages/home/crypto";
import PersonalPortfolio from "./pages/home/personal-portfolio";
import SeoAgency from "./pages/home/seo-agency";
import DesignAgency from "./pages/home/design-agency";
import LeadGeneration from "./pages/home/lead-generation";
import AboutUsV1 from "./pages/pages-menu/about-us-v1";
import AboutUsV2 from "./pages/pages-menu/about-us-v2";
import AboutUsV3 from "./pages/pages-menu/about-us-v3";
import AboutUsV4 from "./pages/pages-menu/about-us-v4";
import ServiceV1 from "./pages/pages-menu/service-v1";
import ServiceV2 from "./pages/pages-menu/service-v2";
import ServiceV3 from "./pages/pages-menu/service-v3";
import ServiceV4 from "./pages/pages-menu/service-v4";
import ServiceDetails from "./pages/pages-menu/service-details";
import TeamV1 from "./pages/pages-menu/team-v1";
import TeamV2 from "./pages/pages-menu/team-v2";
import Pricing from "./pages/pages-menu/pricing";
import PricingV2 from "./pages/pages-menu/pricing-v2";
import PricingV3 from "./pages/pages-menu/pricing-v3";
import FeaturesV1 from "./pages/pages-menu/features-v1";
import FeaturesV2 from "./pages/pages-menu/features-v2";
import Testimonials from "./pages/pages-menu/testimonials";
import Faq from "./pages/pages-menu/faq";
import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import NotFound from "./pages/404";
import PortfolioV1 from "./pages/portfolio/portfolio-v1";
import PortfolioV2 from "./pages/portfolio/portfolio-v2";
import PortfolioV4 from "./pages/portfolio/portfolio-v4";
import PortfolioV5 from "./pages/portfolio/portfolio-v5";
import PortfolioV3 from "./pages/portfolio/portfolio-v3";
import PortfolioV6 from "./pages/portfolio/portfolio-v6";
import PortfolioV7 from "./pages/portfolio/portfolio-v7";
import DynamicPortfolioDetails from "./pages/portfolio/portfolio-single";
import BlogV1 from "./pages/blog/blog-v1";
import BlogV2 from "./pages/blog/blog-v2";
import BlogV3 from "./pages/blog/blog-v3";
import DynamicBlogDetails from "./pages/blog/blog-single";
import Contacto from "./pages/contact/Contacto";
import AsistenciaVial from "./pages/asistencia-vial/AsistenciaVial";
import ContactV2 from "./pages/contact/contact-v2";
import ContactV3 from "./pages/contact/contact-v3";
import ContactV4 from "./pages/contact/contact-v4";
import ScrollTopBehaviour from "./components/common/ScrollTopBehavier";
import TyC from "./pages/tyc/Tyc";
import ReportarAccidente from "./pages/reportar-accidente/ReportarAccidente";
import AutosUSA from "./pages/seguros/AutoUSA";
import CamionUSA from "./pages/seguros/CamionUSA";
import MotoUSA from "./pages/seguros/MotoUSA";
import LargaEstadia from "./pages/seguros/LargaEstadia";
import AutoRenta from "./pages/seguros/AutoRenta";
import CoberturaPremium from "./pages/seguros/CoberturaPremium";
import UnityCard from "./pages/seguros/UnityCard";
import NuestrosAgentes from "./pages/pages-menu/agentes/NuestrosAgentes";
import { Zendesk } from "./components/chat/Zendesk";
import { Whatsapp } from "./components/chat/Whatsapp";

export const LanguageContext = createContext()

function App() {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <LanguageContext.Provider value={{
      lang,
      setLang
    }}>
      <div className="main-page-wrapper">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home/web-hosting" element={<WebHosting />} />
            <Route path="home/education" element={<Education />} />
            <Route path="home/charity" element={<Charity />} />
            <Route path="home/real-estate" element={<RealEstate />} />
            <Route path="home/sass-product" element={<SassProduct />} />
            <Route path="home/app-landing" element={<AppLanding />} />
            <Route path="home/crypto" element={<Crypto />} />
            <Route
              path="home/personal-portfolio"
              element={<PersonalPortfolio />}
            />
            <Route path="home/agency-modern" element={<AgencyModern />} />
            <Route path="home/seo-agency" element={<SeoAgency />} />
            <Route path="home/design-agency" element={<DesignAgency />} />
            <Route path="home/lead-generation" element={<LeadGeneration />} />

            <Route path="pages-menu/about-us-v1" element={<AboutUsV1 />} />
            <Route path="pages-menu/about-us-v2" element={<AboutUsV2 />} />
            <Route path="pages-menu/about-us-v3" element={<AboutUsV3 />} />
            <Route path="pages-menu/about-us-v4" element={<AboutUsV4 />} />

            <Route path="pages-menu/service-v1" element={<ServiceV1 />} />
            <Route path="pages-menu/service-v2" element={<ServiceV2 />} />
            <Route path="pages-menu/service-v3" element={<ServiceV3 />} />
            <Route path="pages-menu/service-v4" element={<ServiceV4 />} />
            <Route
              path="pages-menu/service-details"
              element={<ServiceDetails />}
            />

            <Route path="pages-menu/team-v1" element={<TeamV1 />} />
            <Route path="pages-menu/team-v2" element={<TeamV2 />} />

            <Route path="pages-menu/pricing" element={<Pricing />} />
            <Route path="pages-menu/pricing-v2" element={<PricingV2 />} />
            <Route path="pages-menu/pricing-v3" element={<PricingV3 />} />

            <Route path="pages-menu/features-v1" element={<FeaturesV1 />} />
            <Route path="pages-menu/features-v2" element={<FeaturesV2 />} />

            <Route path="pages-menu/faq" element={<Faq />} />
            <Route path="pages-menu/testimonials" element={<Testimonials />} />
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="404" element={<NotFound />} />

            <Route path="portfolio/portfolio-v1" element={<PortfolioV1 />} />
            <Route path="portfolio/portfolio-v2" element={<PortfolioV2 />} />
            <Route path="portfolio/portfolio-v3" element={<PortfolioV3 />} />
            <Route path="portfolio/portfolio-v4" element={<PortfolioV4 />} />
            <Route path="portfolio/portfolio-v5" element={<PortfolioV5 />} />
            <Route path="portfolio/portfolio-v6" element={<PortfolioV6 />} />
            <Route path="portfolio/portfolio-v7" element={<PortfolioV7 />} />
            <Route path="portfolio/:id" element={<DynamicPortfolioDetails />} />

            <Route path="blog/blog-v1" element={<BlogV1 />} />
            <Route path="blog/blog-v2" element={<BlogV2 />} />
            <Route path="blog/blog-v3" element={<BlogV3 />} />
            <Route path="blog/:id" element={<DynamicBlogDetails />} />

            {/* Páginas de Main Menu */}
            <Route path="asistencia-vial" element={<AsistenciaVial />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="tyc" element={<TyC />} />
            <Route path="reportar-accidente" element={<ReportarAccidente />} />
            <Route path="seguros/seguro-auto" element={<AutosUSA />} />
            <Route path="seguros/seguro-camion" element={<CamionUSA />} />
            <Route path="seguros/seguro-moto" element={<MotoUSA />} />
            <Route path="seguros/seguro-larga-estadia" element={<LargaEstadia />} />
            <Route path="seguros/seguro-auto-renta" element={<AutoRenta />} />
            <Route path="seguros/cobertura-premium" element={<CoberturaPremium />} />
            <Route path="seguros/unity-card" element={<UnityCard />} />
            <Route path="agentes" element={<NuestrosAgentes />} />


            <Route path="contact/contact-v2" element={<ContactV2 />} />
            <Route path="contact/contact-v3" element={<ContactV3 />} />
            <Route path="contact/contact-v4" element={<ContactV4 />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ScrollTopBehaviour />

        {/*<ScrollToTop />*/}
        <Zendesk />
        <Whatsapp />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;

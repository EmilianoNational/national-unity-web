const TiempoCruces = () => {
  const features = [
    "Actualización de información cada 15 minutos",
    "4 estados de entrada",
    "Promedio de tiempo de cruce para días por venir",
  ];

  {/*const buttons = [
    {
      platform: "Google play",
      icon: "images/icon/playstore.svg",
      className: "windows-button",
    },
    {
      platform: "App store",
      icon: "images/icon/apple-black.svg",
      className: "ios-button",
    },
  ];*/}

  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="block-style-seven" data-aos="fade-right">
          <div className="title-style-one">
            {/*<div className="sc-title text-uppercase">MOBILE APP</div>*/}
            <h2 className="main-title fw-500 tx-dark m0">
              Tiempo de cruces
            </h2>
          </div>
          <p className="fs-20 pt-30 pb-30 lg-pb-20">
            Consulta el tiempo de cruce de los puentes internacionales a Estados Unidos.
          </p>
          <ul className="style-none list-item">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          {/* End list */}

          <div className="d-sm-flex align-items-center mt-55 lg-mt-30">
            {/*{buttons.map((button, index) => (
              <a
                href="#"
                className={`d-flex align-items-center ${button.className}`}
                key={index}
              >
                <img src={button.icon} alt="" className="lazy-img icon" />
                <div>
                  <span>Get it on</span>
                  <strong>{button.platform}</strong>
                </div>
              </a>
            ))}*/}
            <a href="https://www.nationalunity.com/national/Tiempo_Cruce/code/" target="blank">
              <button className="fw-500 text-white tran3s button-primary" type="submit">
                Tiempo de Cruces
              </button>
            </a>
          </div>
          {/* /.platform-button-group-three */}
        </div>
        {/* /.block-style-seven */}
      </div>
      {/* End col-6 */}

      <div className="col-lg-6" data-aos="fade-left">
        <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80">
          {/*<img
            src="images/media/img_57.png"
            alt=""
            className="lazy-img main-img ms-auto"
          />*/}
          <img
            src="images/media/puentes.jpg"
            alt=""
            className="lazy-img screen-two puentes"
          />
          <img
            src="images/shape/shape_139.svg"
            alt=""
            className="lazy-img shapes shape-one"
          />
          {/*<img
            src="images/shape/shape_140.svg"
            alt=""
            className="lazy-img shapes shape-two"
        />*/}
        </div>{" "}
        {/* /.illustration-holder */}
      </div>
    </div>
  );
};

export default TiempoCruces;
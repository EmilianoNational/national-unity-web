const TruckerPlus = () => {
  const features = [
    "Asistencia médica por accidente o enfermedad por un monto máximo de $25,000 USD.",
    "Asistencia médica COVID hasta 65 años.",
    "Repatriación de restos por un monto máximo de $10,000 USD.",
    "Medicamentos por hospitalización."
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
              Potencia tu cobertura con Trucker Plus.
            </h2>
          </div>
          <p className="fs-20 pt-30 pb-30 lg-pb-20">
            ¿Qué es Trucker Plus? Es una protección que asegura a tu conductor.
          </p>
          <ul className="style-none list-item">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          {/* End list */}
          <p className="fs-20 pt-30 pb-30 lg-pb-20">
            ¡Cotiza tu seguro y añade Asistencia Plus al finalizar!
          </p>
         
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

export default TruckerPlus;

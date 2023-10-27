import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(1);

  const ToggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Service</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              product <br />
              Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => ToggleTab(0)}
                className="uil uil-times  services__modal-close"
              ></i>

              <h3 className="services__modal-title">product Designer</h3>
              <p className="services__modal-description">
                Service around 1 years of experience.Providing quality work to
                clients and companies.
              </p>
              <ul className="services__modal-services-grid"></ul>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  develop the user interface.
                </p>
              </li>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">WEb page developmt</p>
              </li>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">I create UI element.</p>
              </li>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I position your company brand.
                </p>
              </li>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  Design and mockups of products for companies
                </p>
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br />
              Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "serevices__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i className="uil uil-times  services__modal-close"></i>

              <h3 className="services__modal-title">ui/Ux Designer</h3>
              <p className="services__modal-description">
                Service around 1 years of experience.Providing quality work to
                clients and companies.
              </p>
              <ul className="services__modal-services-grid"></ul>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  develop the user interface.
                </p>
              </li>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">WEb page developmt</p>
              </li>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">I create UI element.</p>
              </li>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I position your company brand.
                </p>
              </li>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  Design and mockups of products for companies
                </p>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Visual <br />
              Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View more{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times  services__modal-close"
              ></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service around 1 years of experience.Providing quality work to
                clients and companies.
              </p>
              <ul className="services__modal-services-grid"></ul>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  develop the user interface.
                </p>
              </li>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">WEb page developmt</p>
              </li>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">I create UI element.</p>
              </li>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I position your company brand.
                </p>
              </li>
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  Design and mockups of products for companies
                </p>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ansu</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/ansu.upadhayay.96/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer "
          >
            <i className="uil uil-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/ansu_upadhayay/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer "
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ansu-upadhayay-6520b2258/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer "
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

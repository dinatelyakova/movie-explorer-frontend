import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__year">&copy; 2021</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              className="footer__link"
              target="_blank"
              rel="noreferrer"
              href="https://praktikum.yandex.ru/"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dinatelyakova"
            >
              Github
            </a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__link"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/dina.telyakova"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

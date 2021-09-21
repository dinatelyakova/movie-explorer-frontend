import "./AboutMe.css";
import "../AboutProject/AboutProject.css";
import avatar from "../../images/12334.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title about__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__text-box">
          <div className="about-me__info">
            <h3 className="about-me__name">Дина</h3>
            <h4 className="about-me__subtitle">
              Начинающий фронтенд-разработчик, 24 года
            </h4>
            <p className="about-me__text">
              Родилась в маленьком поселке Архангельской области. После школы
              переехала в Санкт-Петербург, чтобы получить профессию психолога.
              После университета появился интерес к программированию, и я решила
              пройти курса от Яндекс.Практикум. Сейчас расботаю в сфере
              косметологии, но в скором времени планирую сфокусироваться на
              профессии веб-разработчика.
            </p>
          </div>
          <ul className="about-me__contacts">
            <li className="about-me__contact">
              <a
                className="about-me__icon"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/dina.telyakova"
              >
                Facebook
              </a>
            </li>
            <li className="about-me__contact">
              <a
                className="about-me__icon"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/dinatelyakova"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="about-me__avatar" src={avatar} alt="Аватар" />
      </div>
    </section>
  );
}

export default AboutMe;

import "./Techs.css";
import "../AboutProject/AboutProject.css";
function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title about__title">Технологии</h2>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="tech__list">
        <li className="tech__list-item">
          <h4 className="tech__item-title">HTML</h4>
        </li>
        <li className="tech__list-item">
          <h4 className="tech__item-title">CSS</h4>
        </li>
        <li className="tech__list-item">
          <h4 className="tech__item-title">JS</h4>
        </li>
        <li className="tech__list-item">
          <h4 className="tech__item-title">React</h4>
        </li>
        <li className="tech__list-item">
          <h4 className="tech__item-title">Git</h4>
        </li>
        <li className="tech__list-item">
          <h4 className="tech__item-title">Express.js</h4>
        </li>
        <li className="tech__list-item">
          <h4 className="tech__item-title">mongoDB</h4>
        </li>
      </ul>
    </section>
  );
}

export default Techs;

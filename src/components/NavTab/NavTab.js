import "./NavTab.css";

function NavTab() {
  return (
    <ul className="navtab__box-icons">
      <li className="navtab__button">
      <a href="#about"
        className="navtab__button_type_icon"
      >
        О проекте
      </a>
      </li>
      <li className="navtab__button">
      <a href="#techs" className="navtab__button_type_icon">
        Технологии
      </a>
      </li>
      <li className="navtab__button">
      <a
        href="#about-me"
        className="navtab__button_type_icon"
      >
        Студент
      </a>
      </li>
    </ul>
  );
}

export default NavTab;

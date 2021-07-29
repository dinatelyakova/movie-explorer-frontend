import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({isOpen, onClose}) {
  return (
    <section className={`nav-menu ${isOpen ? "nav-menu_active" : ""}`}
    >
      <ul className="nav-menu__list">
        <button className="nav-menu__close-button"
            onClick={onClose}
        ></button>
        <li className="nav-menu__list-item">
          <Link to="/" className="nav-menu__link nav-menu__link_type_main">
            Главная
          </Link>{" "}
        </li>
        <li className="nav-menu__list-item">
          <Link to="/movies" className="nav-menu__link nav-menu__link_type_films">
            Фильмы
          </Link>
        </li>
        <li className="nav-menu__list-item">
          <Link to="/saved-movies" className="nav-menu__link nav-menu__link_type_saved">
            Сохраненные фильмы
          </Link>
        </li>
        <li className="nav-menu__list-item">
          <Link to="/profile" className="nav-menu__link nav-menu__link_type_profile">
            Аккаунт
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Navigation;

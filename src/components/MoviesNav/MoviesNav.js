import "./MoviesNav.css";
import { Link} from "react-router-dom";

function MoviesNav({onOpenMenu}){
    return(
        <nav className="movies-nav">
            <ul className="movies-nav__list">
                <li className="movies-nav__list-item">
                    <Link to="/movies" 
                    className="movies-nav__link_type_films">
                        Фильмы
                    </Link>
                </li>
                <li className="movies-nav__list-item">
                    <Link to="/saved-movies" 
                    className="movies-nav__link_type_saved">
                        Сохраненные фильмы
                    </Link>
                </li>
                <li className="movies-nav__list-item">
                    <Link to="/profile" 
                    className="movies-nav__link_type_profile">
                        Аккаунт
                    </Link>
                </li>
            </ul>
            <button
                className="movies-nav__menu-button"
                type="button"
                onClick={onOpenMenu}
                ></button>
        </nav>
    )
}

export default MoviesNav;
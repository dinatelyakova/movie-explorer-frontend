import "./MainNav.css";
import { Link} from "react-router-dom";

function MainNav(){
    return(
        <nav className="main-nav">
            <ul className="main-nav__list">
                <li className="main-nav__list-item">
                    <Link to="/signup" 
                    className="main-nav__link_type_register">
                        Регистрация
                    </Link>
                </li>
                <li className="main-nav__list-item">
                    <Link to="/signin" 
                    className="main-nav__link_type_auth">
                        Войти
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav;
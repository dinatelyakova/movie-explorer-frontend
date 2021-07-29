import "./Greeting.css";
import logo from "../../images/logo.svg";
import { Link} from "react-router-dom";

function Greeting({text}){
    return(
        <div className="greeting">
            <Link to="/" className="greeting__link">
                <img className="greeting__logo" 
                    src={logo} 
                    alt="Логотип приложения"
                />
            </Link>
            <h2 className="greeting__title">{text}</h2>
        </div>

    )
}

export default Greeting;
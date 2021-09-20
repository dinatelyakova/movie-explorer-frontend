import "./NotFound.css";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();
  function handleBack() {
    history.goBack();
    history.goBack();
  }
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__status">404</h1>
        <p className="not-found__text-error">Страница не найдена</p>
      </div>
      <button type="button" className="not-found__button" onClick={handleBack}>
        Назад
      </button>
    </section>
  );
}

export default NotFound;

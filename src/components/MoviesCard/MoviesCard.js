import "./MoviesCard.css";
import deleteIcon from "../../images/deleting-icon.svg";
import saveIcon from "../../images/saving-icon.svg";
import savedIcon from "../../images/saved-movie.svg";
import { useLocation } from "react-router-dom";
import * as utils from "../../utils/utils";

function MoviesCard({ card, onButtonCardClick, isSavedMovie }) {
  const deleteButton = <img  src={deleteIcon} alt="Удалить" />;
  const saveButton = <img  src={saveIcon} alt="Сохранить" />;
  const savedButton = <img  src={savedIcon} alt="Сохранено" />;
  const location = useLocation();

  const savedMoviesPage = location.pathname === "/saved-movies";
  const moviesPage = location.pathname === "/movies";

  const isSaved = isSavedMovie(card);

  function handleClickIcon() {
    onButtonCardClick(card);
  }
  return (
    <li className="card">
      <div className="card__info-container">
        <h3 className="card__title">{card.nameRU}</h3>
        <p className="card__duration">{utils.durationForm(card)}</p>
      </div>

      <button
        type="button"
        onClick={handleClickIcon}
        className="card__save-button"
      >
        {moviesPage && !isSaved && saveButton}
        {moviesPage && isSaved && savedButton}
        {savedMoviesPage && deleteButton}
      </button>

      <div className="card__image-container">
        <a
          className="card__image-link"
          href={card.trailer || card.trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="card__image"
            src={utils.getUrlImage(card)}
            alt={card.nameRU}
          />
        </a>
      </div>
    </li>
  );
}

export default MoviesCard;

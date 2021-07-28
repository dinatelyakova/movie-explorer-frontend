import "./MoviesCard.css";
import deleteIcon from "../../images/delete.svg";

function MoviesCard({ card, isSavedMovies }) {
  const deleteButton = <img src={deleteIcon} alt="Удалить" />;
  return (
    <li className="card">
      <div className="card__info-container">
        <h3 className="card__title">{card.description}</h3>
        <p className="card__duration">{card.duration}</p>
      </div>
      <button
        type="button"
        className={`card__save-button ${
          card.saved && !isSavedMovies ? "card__save-button_active" : ""
        }`}
      >{isSavedMovies && deleteButton}</button>

      <div className="card__image-container">
        <img className="card__image" src={card.image} alt={card.title} />
      </div>
    </li>
  );
}

export default MoviesCard;

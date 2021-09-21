import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  cards,
  isSavedMovie,
  onButtonCardClick,
  savedCards,
}) {
  return (
    <>
      <section className="movies-list">
        {cards.map((card) => (
          <MoviesCard
            key={card.id || card.movieId}
            card={card}
            savedCards={savedCards}
            isSavedMovie={isSavedMovie}
            onButtonCardClick={onButtonCardClick}
          />
        ))}
      </section>
    </>
  );
}

export default MoviesCardList;

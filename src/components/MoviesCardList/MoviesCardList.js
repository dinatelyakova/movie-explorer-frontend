import "./MoviesCardList.css";
import "../MoviesCard/MoviesCard";
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList({cards, isSavedMovies}){
    return(
        <section className="movies-list">
                {cards.map((card) => (
                    <MoviesCard
                      key={card.id}
                      card={card}
                      isSavedMovies={isSavedMovies}
                    />
                  ))}
      
        </section>
    )
}

export default MoviesCardList;
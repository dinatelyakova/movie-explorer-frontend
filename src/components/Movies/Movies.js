import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "../MoreButton/MoreButton";
import movies from "../../utils/movies";
function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList cards={movies} isSavedPage={false} />
      <MoreButton moreButton={true} />
    </section>
  );
}

export default Movies;

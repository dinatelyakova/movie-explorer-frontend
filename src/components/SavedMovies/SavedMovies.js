import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import savedMovies from "../../utils/savedMovies";
import MoreButton from "../MoreButton/MoreButton";

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList cards={savedMovies} isSavedMovies={true} />
      <MoreButton moreButton={false} />
    </>
  );
}

export default SavedMovies;

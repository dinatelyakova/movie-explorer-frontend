import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";
import React from "react";
import * as utils from "../../utils/utils";
import MoreButton from "../MoreButton/MoreButton";

function Movies({
  onOpenMenu,
  isOpen,
  onClose,
  isLoading,
  loadingError,
  getSearchMovies,
  cards,
  onButtonCardClick,
  isSavedMovie,
}) {
  const [isCheckboxOn, setCheckboxOn] = React.useState(false);
  const [countFilms, setCountFilms] = React.useState(0);
  const [extraRow, setExtraRow] = React.useState(3);
  const [movies, setMovies] = React.useState([]);


  const renderExtraRow = () => {
    const count = Math.min(cards.length, countFilms + extraRow);
    const extraMovies = cards.slice(countFilms, count);
    setMovies([...movies, ...extraMovies]);
    setCountFilms(count);
  };

  const resizeHandler = () => {
    const windowSize = window.innerWidth;
    setExtraRow(utils.getCountMovie(windowSize));
  };

  React.useEffect(() => {
    const windowSize = window.innerWidth;
    setExtraRow(utils.getCountMovie(windowSize).extra);
    const count = Math.min(cards.length, utils.getCountMovie(windowSize).first);
    setMovies(cards.slice(0, count));
    setCountFilms(count);
  }, [cards]);

  const onClickMoreButton = () => renderExtraRow();

  React.useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const handleToogleCheckbox = () => {
    setCheckboxOn(!isCheckboxOn);
  };

 

  return (
    <>
      <Header loggedIn={true} onOpenMenu={onOpenMenu} />
      <section className="movies">
        <SearchForm
          onSearchMovies={getSearchMovies}
          handleChecked={handleToogleCheckbox}
          isOn={isCheckboxOn}
        />
        {isLoading && <Preloader />}
        {!isLoading && loadingError === "" && (
          <MoviesCardList
            isSavedMovie={isSavedMovie}
            cards={isCheckboxOn ? utils.filterShortMovies(cards) : movies}
            onButtonCardClick={onButtonCardClick}
          />
        )}

        {!isLoading && loadingError !== "" && (
          <p className="movies__error">{loadingError}</p>
        )}
      </section>
      {countFilms < cards.length && (
        <MoreButton moreButton={true} onClickMoreButton={onClickMoreButton} />
      )}
      <Footer />
      <Navigation isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Movies;

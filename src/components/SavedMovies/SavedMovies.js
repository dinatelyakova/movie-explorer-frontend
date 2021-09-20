import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";
import * as utils from "../../utils/utils";

function SavedMovies({
  onOpenMenu,
  isOpen,
  onClose,
  onButtonCardClick,
  isSavedMovie,
  isLoading,
  loadingError,
  cards,
}) {
  const [isCheckboxOn, setCheckboxOn] = React.useState(false);
  const [savedCards, setSavedCards] = React.useState([]);

  React.useEffect(() => {
    setSavedCards(cards);
  }, [cards]);

  const handleToogleCheckbox = () => {
    setCheckboxOn(!isCheckboxOn);
  };

  React.useEffect(() => {
    setSavedCards(cards);
  }, [cards]);

  const searchInSavedHandler = (value) => {
    setSavedCards(utils.searchFilter(cards, value));
  };

  return (
    <>
      <Header loggedIn={true} onOpenMenu={onOpenMenu} />
      <section className="saved-movies">
        <SearchForm
          onSearchMovies={searchInSavedHandler}
          handleChecked={handleToogleCheckbox}
          isOn={isCheckboxOn}
        />
        {isLoading && <Preloader />}
        {!isLoading && loadingError === "" && (
          <MoviesCardList
            savedCards={savedCards}
            cards={
              isCheckboxOn ? utils.filterShortMovies(savedCards) : savedCards
            }
            isSavedMovie={isSavedMovie}
            onButtonCardClick={onButtonCardClick}
          />
        )}
        {!isLoading && loadingError !== "" && (
          <div className="movies__error">{loadingError}</div>
        )}
      </section>
      <Footer />
      <Navigation isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default SavedMovies;

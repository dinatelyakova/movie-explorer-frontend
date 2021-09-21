import React from "react";
import Main from "../Main/Main";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as moviesApi from "../../utils/MoviesApi";
import * as messages from "../../utils/messeges";

function App() {
  const history = useHistory();
  const location = useLocation();
  const [currentUser, setCurrentUser] = React.useState({});
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [infoTooltipText, setInfoTooltipText] = React.useState("");
  const [infoTooltipSuccess, setInfoTooltipSuccess] = React.useState(false);
  const [infoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingError, setLoadingError] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filterShortMovies, setFilterShortMovies] = React.useState([]);
  const [filterSavedMovies, setFilterSavedMovies] = React.useState([]);
  const [query, setQuery] = React.useState([]);

  const closeModals = () => {
    setMenuOpen(false);
    setInfoTooltipOpen(false);
  };
  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const getUserInfo = () => {
    const token = localStorage.getItem("token");
    mainApi
      .getUserInfoApi(token)
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
          localStorage.setItem("currentUser", JSON.stringify(userData));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const path = location.pathname;
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            getUserInfo();
            history.push(path);
          }
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem("token");
          history.push("/");
        });
    }
  }, []);

  const handleLogin = (data) => {
    setIsLoading(true);
    mainApi
      .authorize(data)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.token);
          setIsLoading(false);
          setLoggedIn(true);
          getUserInfo();
          history.push("/movies");
        }
      })
      .catch((err) => {
        console.log(`Ошибка входа ${err}`);
        setIsLoading(false);
        setInfoTooltipText(messages.UNSUCCESS_AUTH);
        setInfoTooltipOpen(true);
        setInfoTooltipSuccess(false);
      });
  };

  const handleRegister = (data) => {
    setIsLoading(true);
    mainApi
      .register(data)
      .then((res) => {
        if (res) {
          setIsLoading(false);
          setInfoTooltipText(messages.SUCCESS_REGISTER);
          setInfoTooltipOpen(true);
          setInfoTooltipSuccess(true);
          handleLogin({ email: data.email, password: data.password });
          history.push("/movies");
        }
      })
      .catch((err) => {
        console.log(`Ошибка регистрации ${err}`);
        setIsLoading(false);
        setInfoTooltipText(messages.UNSUCCESS_REGISTER);
        setInfoTooltipOpen(true);
        setInfoTooltipSuccess(false);
      });
  };
  const handleUpdateProfile = (userData) => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .updateUserInfo(userData, token)
        .then((res) => {
          setIsLoading(false);
          setCurrentUser(res);
          setInfoTooltipText(messages.SUCCESS_UPDATE_DATA);
          setInfoTooltipOpen(true);
          setInfoTooltipSuccess(true);
        })
        .catch((err) => {
          console.log(`Ошибка обновления данных пользователя ${err}`);
          setIsLoading(false);
          setInfoTooltipText(messages.UNSUCCESS_UPDATE_DATA);
          setInfoTooltipOpen(true);
          setInfoTooltipSuccess(false);
        });
    }
  };

  const getMovies = () => {
    moviesApi
      .getMovies()
      .then((movies) => {
        localStorage.setItem("allMovies", JSON.stringify(movies));
        setMovies(movies);
      })
      .catch((err) => {
        localStorage.removeItem("allMovies");
        setLoadingError(messages.ERROR_SERVER);
        console.log(err);
      });
  };

  const getSavedMovies = () => {
    const token = localStorage.getItem("token");
    mainApi
      .getSavedMovies(token)
      .then((data) => {
        const savedArray = data.map((item) => ({ ...item, id: item.movieId }));
        localStorage.setItem("savedMovies", JSON.stringify(savedArray));
        setSavedMovies(savedArray);
      })
      .catch(() => {
        localStorage.removeItem("savedMovies");
        setLoadingError(messages.ERROR_SERVER);
      });
  };

  React.useEffect(() => {
    const allMoviesArr = JSON.parse(localStorage.getItem("allMovies"));
    if (allMoviesArr) {
      setMovies(allMoviesArr);
    } else {
      getMovies();
    }
    const saved = JSON.parse(localStorage.getItem("savedMovies"));
    if (saved) {
      setSavedMovies(saved);
    } else {
      getSavedMovies();
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem("token");
      Promise.all([
        mainApi.getUserInfoApi(token),
        mainApi.getSavedMovies(token),
      ])
        .then(([userData, movies]) => {
          setCurrentUser(userData);
          setSavedMovies(movies);
          localStorage.setItem("savedMovies", JSON.stringify(movies));
          localStorage.setItem("currentUser", JSON.stringify(userData));
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  const isSavedMovies = (movie) =>
    savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);

  const handleSearchFilter = (data, query) => {
    if (query) {
      const regex = new RegExp(query, "gi");
      const filterData = data.filter(
        (item) => regex.test(item.nameRU) || regex.test(item.nameEN)
      );
      if (filterData.length === 0) {
        setLoadingError(messages.NOT_FOUND);
      } else {
        setLoadingError("");
      }
      return filterData;
    }
    return [];
  };

  const handleSearchMovies = (value) => {
    setIsLoading(true);
    setLoadingError("");
    setTimeout(() => {
      setQuery(value);
      setFilterShortMovies(handleSearchFilter(movies, value));
      console.log(filterSavedMovies);
      setIsLoading(false);
    }, 600);
  };

  const handleClickCardMovie = (movie) => {
    const isSaved = isSavedMovies(movie);
    isSaved ? handleDeleteMovie(movie) : handleAddMovie(movie);
  };

  const handleAddMovie = (movie) => {
    const token = localStorage.getItem("token");
    mainApi
      .createNewCard(movie, token)
      .then((savedMovie) => {
        setSavedMovies([...savedMovies, savedMovie]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovie = (movie) => {
    const token = localStorage.getItem("token");
    const movieId = movie.id || movie.movieId;
    const userMovie = savedMovies.find(
      (savedMovie) => savedMovie.movieId === movieId
    );
    mainApi
      .deleteCard(userMovie._id, token)
      .then(() => {
        const newSavedMovies = savedMovies.filter(
          (savedMovie) => savedMovie.movieId !== movieId
        );
        setSavedMovies(newSavedMovies);
      })
      .catch(() => {
        console.log("Ошибка удаления карточки");
      });
  };

  function onSignOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    localStorage.removeItem("allMovies");
    localStorage.removeItem("savedMovies");
    setCurrentUser({});
    setSavedMovies([]);
    history.push("/");
  }

  React.useEffect(() => {
    setFilterSavedMovies(handleSearchFilter(savedMovies, query));
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main
              isOpen={isMenuOpen}
              onClose={closeModals}
              onOpenMenu={handleOpenMenu}
            />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            onOpenMenu={handleOpenMenu}
            isOpen={isMenuOpen}
            onClose={closeModals}
            loggedIn={loggedIn}
            isLoading={isLoading}
            loadingError={loadingError}
            cards={filterShortMovies}
            getSearchMovies={handleSearchMovies}
            onButtonCardClick={handleClickCardMovie}
            isSavedMovie={isSavedMovies}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            onOpenMenu={handleOpenMenu}
            isOpen={isMenuOpen}
            onClose={closeModals}
            loggedIn={loggedIn}
            loadingError={loadingError}
            isSavedMovie={isSavedMovies}
            savedCards
            onButtonCardClick={handleDeleteMovie}
            cards={savedMovies}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            onOpenMenu={handleOpenMenu}
            loggedIn={loggedIn}
            isOpen={isMenuOpen}
            isLoading={isLoading}
            onClose={closeModals}
            onSignOut={onSignOut}
            onUpdateInfo={handleUpdateProfile}
          />

          <Route path="/signup">
            <Register onRegister={handleRegister} isLoading={isLoading} />
          </Route>
          <Route path="/signin">
            <Login onLogin={handleLogin} isLoading={isLoading} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <InfoTooltip
          isOpen={infoTooltipOpen}
          onClose={closeModals}
          message={infoTooltipText}
          image={infoTooltipSuccess}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

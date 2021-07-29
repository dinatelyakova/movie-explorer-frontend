import React from "react";
import Main from "../Main/Main";
import { Route, Switch } from "react-router-dom";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
function App({ email, name }) {
  // const [currentUser, setCurrentUser] = React.useState({});
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleOpenMenu = () => {
    setMenuOpen(true);
  };
  return (
    // <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header loggedIn={false} />
          <Main />
          <Footer />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register email={email} />
        </Route>
        <Route path="/profile">
          <Header loggedIn={true} onOpenMenu={handleOpenMenu} />
          <Profile name={name} email="dina@mail.ru" />
          <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
        </Route>
        <Route path="/movies">
          <Header loggedIn={true} onOpenMenu={handleOpenMenu} />
          <Movies />
          <Footer />
          <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
        </Route>
        <Route path="/saved-movies">
          <Header loggedIn={true} onOpenMenu={handleOpenMenu} />
          <SavedMovies />
          <Footer />
          <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;

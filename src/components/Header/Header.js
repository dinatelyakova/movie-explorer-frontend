import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import MainNav from "../MainNav/MainNav";
import MoviesNav from "../MoviesNav/MoviesNav";

function Header({ loggedIn, onOpenMenu }) {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Логотип приложения" />
      </Link>
      {!loggedIn && <MainNav />}
      {loggedIn && <MoviesNav onOpenMenu={onOpenMenu} />}
    </header>
  );
}

export default Header;

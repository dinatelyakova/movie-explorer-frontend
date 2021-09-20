import "./SearchForm.css";
import buttonFind from "../../images/find.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React from "react";
import { useFormWithValidation } from "../../utils/formValidation";
import * as messeges from "../../utils/messeges";

function SearchForm({ handleChecked, onSearchMovies, isOn }) {
  const { values, handleChange, resetForm } = useFormWithValidation({});
  const [error, setError] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.searchMovies) {
      setError(messeges.KEY_WORD);
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      setError("");
      onSearchMovies(values.searchMovies);
    }
    resetForm();
  }

  return (
    <section className="film-search">
      <form className="film-search__form" onSubmit={handleSubmit} noValidate>
        <div className="film-search__container">
          <input
            className="film-search__input"
            name="searchMovies"
            placeholder="Фильм"
            type="text"
            value={values.searchMovies || ""}
            onChange={handleChange}
            autoComplete="off"
            required
          ></input>
          <button className="film-search__button" type="submit">
            <img className="film-search__icon" src={buttonFind} alt="lupa" />
          </button>
        </div>
        <FilterCheckbox handleChecked={handleChecked} isOn={isOn} />
        {error && <span className="film-search__error">{error}</span>}
      </form>
      <div className="film-search__line"></div>
    </section>
  );
}

export default SearchForm;

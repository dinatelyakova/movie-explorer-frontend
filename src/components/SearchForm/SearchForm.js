import "./SearchForm.css";
import buttonFind from "../../images/find.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ value }) {
  return (
    <section className="film-search">
      <form className="film-search__form">
        <div className="film-search__container">
          <input
            className="film-search__input"
            placeholder="Фильм"
            type="text"
            required
            minLength="3"
            value={value}
          ></input>
          <button className="film-search__button" type="submit">
            <img className="film-search__icon" src={buttonFind} alt="lupa" />
          </button>
        </div>
        <FilterCheckbox />
      </form>
      <div className="film-search__line"></div>
    </section>
  );
}

export default SearchForm;

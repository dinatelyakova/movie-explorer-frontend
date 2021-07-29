import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter">
      <p className="filter__label-text">Короткометражки</p>
      <label htmlFor="short-films" className="filter__label">
        <input
          type="checkbox"
          id="short-films"
          className="filter__checkbox"
          name="short-films"
        />
        <span className="filter__checkbox-slider" />
      </label>
    </div>
  );
}

export default FilterCheckbox;

import "./FilterCheckbox.css";

function FilterCheckbox({ handleChecked, isOn }) {
  return (
    <div className="filter">
      <p className="filter__label-text">Короткометражки</p>
      <label
        htmlFor="short-films"
        className={`filter__label ${isOn ? "filter__label_on" : ""}`}
      >
        <input
          type="checkbox"
          id="short-films"
          className="filter__checkbox"
          name="short-films"
          checked={isOn}
          onChange={handleChecked}
        />
        <span className="filter__checkbox-slider" />
      </label>
    </div>
  );
}

export default FilterCheckbox;

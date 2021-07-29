import "./NavTab.css";

function NavTab() {
  return (
    <div className="navtab__box-icons">
      <button
        type="button"
        className="navtab__button navtab__button_name_about"
      >
        О проекте
      </button>
      <button type="button" className="navtab__button navtab__button_name_tech">
        Технологии
      </button>
      <button
        type="button"
        className="navtab__button navtab__button_name_student"
      >
        Студент
      </button>
    </div>
  );
}

export default NavTab;

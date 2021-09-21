import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about" id="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__container-info">
        <div className="about__info about__info_column_one">
          <p className="about__subtitle">Дипломный проект включал 5 этапов</p>
          <p className="about__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__info about__info_column_two">
          <p className="about__subtitle">На выполнение диплома ушло 5 недель</p>
          <p className="about__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <table className="about__table">
        <thead>
          <tr className="about__table-titles">
            <th className="about__table_name about__table_name_backend">
              1 неделя
            </th>
            <th className="about__table_name about__table_name_frontend">
              4 недели
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="about__table-texts">
            <td className="about__table_text about__table_text_backend">
              backend
            </td>
            <td className="about__table_text about__table_text_frontend">
              frontend
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default AboutProject;

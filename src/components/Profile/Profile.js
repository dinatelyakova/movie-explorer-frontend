import React from "react";
import "./Profile.css";
import { useState } from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

function Profile({ email, name }) {
  const [values, setValues] = useState({
    name: "",
  });

  const [isError, setError] = useState(true);

  const [isDisable, setDisable] = useState(false);

  const handleChangeInput = (evt) => {
    const { name, value } = evt.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true);
  };

  return (
    <section className="profile">
      <h1 className="profile__greeting">Привет, {name} Дина!</h1>
      <Form
        name="profile"
        buttonClassName="profile__edit-button profile__edit-button_disabled profile__edit-button_invisible"
        classNameForm="profile__form"
        buttonText="Сохранить"
        onSubmit={handleSubmit}
      >
        <Input
          classNameLabel="profile__label"
          classNameInput="profile__input"
          name="name"
          editProfile
          label="Имя"
          id="edit-name"
          type="text"
          onChange={handleChangeInput}
          value={values.name || ""}
          minLength="2"
          maxLength="30"
          autoComplete="off"
          required
        ></Input>
        <span className="profile__input-error profile__input-error_type_name">
          Некорректное имя пользователя
        </span>
        <Input
          classNameLabel="profile__label profile__label_name_email"
          classNameInput="profile__input profile__input_name_email"
          editProfile
          label="Почта"
          id="edit-email"
          type="email"
          name="email"
          defaultValue={email}
          disabled
          required
        ></Input>
        <span
          className={`profile__edit-error ${
            isError ? "profile__edit-error_visible" : ""
          }`}
        >
          При обновлении профиля произошла ошибка
        </span>
        <button
          type="submit"
          className={`profile__link-edit ${
            isDisable ? "profile__link-edit_disabled" : ""
          }`}
        >
          Редактировать
        </button>
      </Form>
      <p className="profile__redirect">
        <Link className="profile__signout redirect__link " to="/signin">
          {" "}
          Выйти из аккаунта
        </Link>
      </p>
    </section>
  );
}

export default Profile;

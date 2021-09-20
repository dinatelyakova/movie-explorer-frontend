import React, { useContext } from "react";
import "./Profile.css";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/formValidation";
import Preloader from "../Preloader/Preloader";

function Profile({
  onOpenMenu,
  isOpen,
  onClose,
  onSignOut,
  onUpdateInfo,
  isLoading,
}) {
  const { values, errors, isValid, handleChange, setValues } =
    useFormWithValidation({});
  const currentUser = useContext(CurrentUserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateInfo(values);
  };

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  return (
    <>
      <Header loggedIn={true} onOpenMenu={onOpenMenu} />

      <section className="profile">
        <h1 className="profile__greeting">Привет, {currentUser.name}!</h1>
        {isLoading && <Preloader />}
        <Form
          name="profile"
          classNameForm="profile__form"
          onSubmit={handleSubmit}
        >
          <Input
            classNameLabel="profile__label"
            classNameInput="profile__input"
            name="name"
            editProfile
            label="Имя"
            type="text"
            onChange={handleChange}
            value={values.name || ""}
            minLength="2"
            maxLength="30"
            autoComplete="off"
            required
          ></Input>
          <span className="profile__input-error profile__input-error_type_name">
            {errors.name}
          </span>
          <Input
            classNameLabel="profile__label profile__label_name_email"
            classNameInput="profile__input profile__input_name_email"
            editProfile
            label="Почта"
            type="email"
            name="email"
            value={currentUser.email || ""}
            autoComplete="off"
            disabled
            required
          ></Input>
          <button
            type="submit"
            className={
              isValid && values.name !== currentUser.name
                ? "profile__link-edit profile__link-edit_active"
                : "profile__link-edit_disabled"
            }
          >
            Редактировать
          </button>
        </Form>
        <p className="profile__redirect">
          <Link
            className="profile__signout redirect__link "
            to="/"
            onClick={onSignOut}
          >
            {" "}
            Выйти из аккаунта
          </Link>
        </p>
      </section>
      <Navigation isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Profile;

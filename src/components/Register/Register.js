import "./Register.css";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import React from "react";
import { useFormWithValidation } from "../../utils/formValidation";
import Preloader from "../Preloader/Preloader";

function Register({ onRegister, isLoading }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);
  const loggedIn = false;
  const formWithValidation = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
    formWithValidation.resetForm();
  };

  return (
    <section className="register">
      {isLoading && <Preloader />}
      <Greeting text="Добро пожаловать!" loggedIn={loggedIn} />
      <Form
        auth
        name="register"
        buttonText="Зарегистрироваться"
        buttonClassName="form__submit_type_register"
        isDisabledButton={!isValid}
        onSubmit={handleSubmit}
      >
        <Input
          register
          label="Имя"
          name="name"
          classNameInput="register__input_type_name"
          type="text"
          value={values.name || ""}
          minLength="2"
          maxLength="30"
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <span className="register__input-error  register__input-error_type_name">
          {errors.name}
        </span>
        <Input
          register
          label="E-mail"
          name="email"
          classNameInput="register__input_type_email"
          type="email"
          value={values.email || ""}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <span className="register__input-error  register__input-error_type_email">
          {errors.email}
        </span>
        <Input
          register
          label="Пароль"
          name="password"
          classNameInput="register__input_type_password"
          type="password"
          minLength="8"
          value={values.password || ""}
          onChange={handleChange}
          autoComplete="off"
          required
        ></Input>
        <span className="register__input-error  register__input-error_type_password">
          {errors.password}
        </span>
      </Form>
      <p className="redirect">
        Уже зарегистрированы?{" "}
        <Link className="redirect__link" to="/signin">
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Register;

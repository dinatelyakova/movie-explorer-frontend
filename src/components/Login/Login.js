import "./Login.css";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import React from "react";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import { useFormWithValidation } from "../../utils/formValidation";
import Preloader from "../Preloader/Preloader";

function Login({ onLogin, isLoading }) {
  const formWithValidation = useFormWithValidation();
  const { values, errors, isValid, handleChange } = useFormWithValidation();
  const loggedIn = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
    formWithValidation.resetForm();
  };
  return (
    <section className="login">
      {isLoading && <Preloader />}
      <Greeting text="Рады видеть!" loggedIn={loggedIn} />
      <Form
        auth
        name="login"
        buttonText="Войти"
        onSubmit={handleSubmit}
        isDisabledButton={!isValid}
      >
        <Input
          auth
          label="E-mail"
          classNameInput="login__input_type_email"
          type="email"
          name="email"
          id="login-auth"
          onChange={handleChange}
          value={values.email || ""}
          required
        />
        <span className="login__input-error login__input-error_type_email">
          {errors.email}
        </span>
        <Input
          auth
          label="Пароль"
          classNameInput="login__input_type_password"
          type="password"
          name="password"
          id="password-auth"
          minLength="8"
          onChange={handleChange}
          value={values.password || ""}
          required
        />
        <span className="login__input-error  login__input-error_type_password">
          {errors.password}
        </span>
      </Form>

      <p className="redirect">
        Ещё не зарегистрированы?{" "}
        <Link className="redirect__link" to="/signup">
          Регистрация{" "}
        </Link>
      </p>
    </section>
  );
}

export default Login;

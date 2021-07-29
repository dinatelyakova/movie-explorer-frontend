import "./Register.css";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register({ name, email, password }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isError, setError] = useState(true);

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
    <section className="register">
      <Greeting text="Добро пожаловать!" />
      <Form
        name="register"
        buttonText="Зарегистрироваться"
        buttonClassName="form__submit_type_register"
        onSubmit={handleSubmit}
      >
        <Input
          register
          label="Имя"
          name="name"
          classNameInput="register__input_type_name"
          type="text"
          value={name || ""}
          id="register-name"
          onChange={handleChangeInput}
          required
        />
        <span className="register__input-error  register__input-error_type_name">
          Некорректная длина имени
        </span>
        <Input
          register
          label="E-mail"
          name="email"
          classNameInput="register__input_type_email"
          type="email"
          value={email || ""}
          id="register-email"
          onChange={handleChangeInput}
          required
        />
        <span className="register__input-error  register__input-error_type_email">
          Некорректный email
        </span>
        <Input
          register
          label="Пароль"
          name="password"
          classNameInput="register__input_type_password"
          type="password"
          value={password || ""}
          id="register-password"
          onChange={handleChangeInput}
          required
        ></Input>
        <span className="register__input-error  register__input-error_type_password">
          Некорректный пароль
        </span>
        <span
          className={`register__error-submit ${
            isError ? "register__error-submit_active" : ""
          }`}
        >
          При регистрации пользователя произошла ошибка
        </span>
      </Form>
      <p className="redirect">
        Уже зарегистрированы?{" "}
        <Link className="redirect__link" to="/signin">
          {" "}
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Register;

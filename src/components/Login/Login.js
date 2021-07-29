import "./Login.css";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import { useState } from "react";
import Greeting from "../Greeting/Greeting";
import Form from "../Form/Form";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [isError, setError] = useState(true);

  const handleChangeInput = (evt) => {
    const { name,  value } = evt.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true)
  };
  return (
    <section className="login">
      <Greeting text="Рады видеть!" />
      <Form name="login" buttonText="Войти" onSubmit={handleSubmit}>
        <Input
          auth
          label="E-mail"
          classNameInput="login__input_type_email"
          type="email"
          name="email"
          id="login-auth"
          onChange={handleChangeInput}
          value={values.email || ""}
          required
        />
        <span className="login__input-error login__input-error_type_email">Некорректный email</span>
        <Input
          auth
          label="Пароль"
          classNameInput="login__input_type_password"
          type="password"
          name="password"
          id="password-auth"
          minLength="6"
          onChange={handleChangeInput}
          value={values.password || ""}
          required
        />
        <span className="login__input-error  login__input-error_type_password">Некорректный пароль</span>
        <span className={`login__submit-error ${isError ? "login__submit-error_active" : ""}`}>
        Вы ввели неправильный логин или пароль
        </span>
      </Form>

      <p className="redirect">
        Ещё не зарегистрированы? {" "}
        <Link className="redirect__link" to="/signup">
          Регистрация {" "}
        </Link>
      </p>
    </section>
  );
}

export default Login;

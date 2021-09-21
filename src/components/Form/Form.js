import "./Form.css";

function Form({
  name,
  children,
  buttonText,
  buttonClassName,
  classNameForm,
  isDisabledButton,
  onSubmit,
  auth,
}) {
  return (
    <form
      className={`form ${classNameForm}`}
      name={name}
      onSubmit={onSubmit}
      noValidate
    >
      {children}
      {auth && (
        <button
          className={`form__submit ${buttonClassName} ${
            isDisabledButton ? "form__submit_disabled" : ""
          } `}
          type="submit"
        >
          {buttonText}
        </button>
      )}
    </form>
  );
}

export default Form;

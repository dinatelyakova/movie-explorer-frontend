import "./Input.css";

function Input({
  id,
  type,
  classNameInput,
  placeholder,
  value,
  name,
  label,
  auth,
  editProfile,
  register,
  error,
  classNameLabel,
  minLength,
  maxLength,
  onChange,
  disabled,
  autoComplete
}) {
  return (
    <>
      {auth && (
        <>
          <label className="input__label" htmlFor={name}>
            {label}
          </label>
          <input
            className={`input ${classNameInput}`}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            id={id}
            error={error}
            onChange={onChange}
            minLength={minLength}
            maxLength={maxLength}
            required
          ></input>
        </>
      )}
      {register && (
        <>
          <label className="input__label" htmlFor={name}>
            {label}
          </label>
          <input
            className={`input ${classNameInput} ${error ? "input__error" : ""} `}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            id={id}
            minLength={minLength}
            maxLength={maxLength}
            error={error}
            onChange={onChange}
            autoComplete={autoComplete}
            required
          ></input>
        </>
      )}
      {editProfile && (
        <div className="input__edit-row">
          <label className={`input__label  ${classNameLabel}`} htmlFor={name}>
            {label}
          </label>
          <input
            className={`input ${classNameInput}`}
            type={type}
            name={name}
            value={value}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
            id={id}
            error={error}
            onChange={onChange}
            disabled={disabled}
          ></input>
        </div>
      )}
    </>
  );
}

export default Input;

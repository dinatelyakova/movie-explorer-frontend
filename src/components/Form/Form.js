import "./Form.css";

function Form({
    name,
    children,
    buttonText,
    buttonClassName,
    classNameForm
}){

    return(
        <form className={`form ${classNameForm}`} name={name} noValidate>
            {children}
        
        <button className={`form__submit ${buttonClassName}`} type="submit">
            {buttonText}
        </button>
        
        </form>
    )
}

export default Form;
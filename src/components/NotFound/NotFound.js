import "./NotFound.css";

function NotFound(){
    return(
        <section className="not-found">
            <div className="not-found__container">
                <h1 className="not-found__status">404</h1>
                <p className="not-found__text-error">Страница не найдена</p>
            </div>
            <button type="button" className="not-found__button"> Назад
            </button>
        </section>
    )
}

export default NotFound;
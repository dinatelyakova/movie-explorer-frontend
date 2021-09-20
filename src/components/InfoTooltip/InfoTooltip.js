import "./InfoTooltip.css";
import successRegisterImg from "../../images/success.svg";
import unsuccessRegisterImg from "../../images/unsuccess.svg";

function InfoTooltip({ onClose, image, message, isOpen }) {
  return (
    <section className={` popup  ${isOpen ? "popup_active" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          onClick={onClose}
          className="popup__button-close"
        ></button>
        <img
          className="popup__image"
          src={image ? successRegisterImg : unsuccessRegisterImg}
          alt="Статус"
        />
        <h2 className="popup__message">{message}</h2>
      </div>
    </section>
  );
}

export default InfoTooltip;

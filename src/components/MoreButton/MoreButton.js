import "./MoreButton.css";

function MoreButton({ moreButton, onClickMoreButton }) {
  return (
    <section className="more">
      {moreButton && (
        <button
          type="button"
          className="more__button"
          onClick={onClickMoreButton}
          name="more"
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoreButton;

import "./MoreButton.css";

function MoreButton({ moreButton }) {
  return (
    <section className="more">
      {moreButton && (
        <button type="button" className="more__button" name="more">
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoreButton;

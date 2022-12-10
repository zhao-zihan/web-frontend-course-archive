import { useState } from "react";
import "../stylesheets/Modal.css";

function Modal({
  showModal,
  setShowModal,
  setNumRating,
  setTotalPoints,
  setLastRating,
}) {
  const [rating, setRating] = useState("");

  function handleRating(event) {
    event.preventDefault();
    if (!rating) return;
    setLastRating(rating);
    setNumRating((prev) => prev + 1);
    setTotalPoints((prev) => prev + +rating);
    setShowModal(!showModal);
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__header">
          <h3 className="modal__title">Rate this Website</h3>
        </div>
        <div className="modal__body">
          <form className="rating">
            <label htmlFor="points" className="rating__select-label">
              Points:
            </label>
            <select
              onChange={(event) => {
                setRating(event.target.value);
              }}
              name="points"
              id="points"
              className="rating__select-input"
            >
              <option value="">Please select</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>

            <button
              onClick={handleRating}
              className="rating__submit"
              type="submit"
              aria-label="Submit rating"
            >
              Submit
            </button>
            {!rating && <span>This field is required</span>}
          </form>
        </div>
        <div className="modal__footer">
          <button
            onClick={() => setShowModal(!showModal)}
            className="modal__button-close"
            aria-label="Close modal window"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

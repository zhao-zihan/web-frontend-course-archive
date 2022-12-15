import { useState } from "react";
import Modal from "./Modal";
import "../stylesheets/Feedback.css";

function Feedback() {
  const [showModal, setShowModal] = useState(false);
  const [numRating, setNumRating] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [lastRating, setLastRating] = useState("");
  const avergRating =
    totalPoints / numRating ? (totalPoints / numRating).toFixed(2) : "";

  return (
    <div className="wrapper">
      <h2 className="sub-title">Please Rate This Website</h2>
      <div className="feedback">
        <p>Number of People Who Rated: {numRating ? numRating : ""}</p>
        <p>Average Rating: {avergRating}</p>
        <p>Last Rating: {lastRating}</p>
        <button
          onClick={() => setShowModal(!showModal)}
          className="feedback__button"
          aria-label="Open modal and start rating"
        >
          Rate Now!
        </button>
        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            setNumRating={setNumRating}
            setTotalPoints={setTotalPoints}
            setLastRating={setLastRating}
          />
        )}
      </div>
    </div>
  );
}

export default Feedback;

import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion__item">
      <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
        <div>{question}</div>
        <div
          className="accordion__opener"
          aria-label={`Open the Tab to See Answers for ${question}`}
        >
          {isActive ? "-" : "+"}
        </div>
      </div>
      {isActive && <div className="accordion__content">{answer}</div>}
    </div>
  );
};

export default Accordion;

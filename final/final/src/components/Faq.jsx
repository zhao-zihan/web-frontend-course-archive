import questions from "../utils/questions";
import Accordion from "./Accordian";
import "../stylesheets/Faq.css";

function Faq() {
  const list = questions.map((item) => (
    <Accordion
      question={item.question}
      answer={item.answer}
      key={item.question}
    />
  ));

  return (
    <div className="wrapper">
      <h2 className="sub-title">Common Questions About Jellyfish</h2>
      <div className="accordion">{list}</div>
    </div>
  );
}

export default Faq;

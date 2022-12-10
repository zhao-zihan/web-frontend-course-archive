import cards from "../utils/cards.js";
import "../stylesheets/Cards.css";

function Cards() {
  const list = cards.map((item) => {
    return (
      <li className={`card ${item.name.toLocaleLowerCase()}`} key={item.name}>
        <h3 className="card__title">{item.name}</h3>
        <img className="card__pic" src={item.imgSrc} alt={item.alt} />
        <p className="card__text">{item.text}</p>
        <a
          className="card__link"
          href="https://en.wikipedia.org/wiki/Jellyfish"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read More on Jellyfish's ${item.name}`}
        >
          Read more
        </a>
      </li>
    );
  });

  return (
    <div className="wrapper">
      <h2 className="sub-title">Learn More About Jellyfish</h2>
      <ul className="cards">{list}</ul>
    </div>
  );
}

export default Cards;

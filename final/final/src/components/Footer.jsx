import links from "../utils/links";

import "../stylesheets/Footer.css";

function Footer({ onNav }) {
  const list = links.map((item) => {
    return (
      <li className="footer__item" key={item.name}>
        <a
          onClick={onNav}
          className="footer__link"
          href={item.path}
          data-target={item.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <footer className="footer grid">
      <small className="footer__signature">
        &copy; Copyright 2022, Zihan Zhao
      </small>
      <ul className="footer__links">{list}</ul>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

function CardItem(props) {
  const { path, label, src, text } = props;
  return (
    <li className="cards__item">
      <Link className="cards__item__link" to={path}>
        <figure className="cards__item__pic__wrap" data-category={label}>
          <img src={src} alt={src} className="cards__item__img" />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{text}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;

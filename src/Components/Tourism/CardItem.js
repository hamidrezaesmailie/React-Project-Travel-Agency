import React from "react";
import "./CardGuide.css";

function CardItem(props) {
  const { src, title, text } = props;
  return (
    <li className="cards__item">
      <div className="compare-item">
        <div className="compare-image-list">
          <img src={src} alt="card" />
          <div className="compere-item-title">{title}</div>
          <div className="compere-item-exp">{text}</div>
        </div>
      </div>
    </li>
  );
}

export default CardItem;

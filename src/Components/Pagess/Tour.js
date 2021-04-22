import React from "react";
import Button from "../../Components/UI/Button";
import CardGuide from "../Tour/CardGuide";
import "../../App.css";

function Tour() {
  return (
    <>
      <div
        className="tourism"
        style={{ backgroundImage: `url(images/12.jpg)` }}
      >
        <div className="tourism-box">
          <input
            className="search-input"
            type="text"
            placeholder="نام شهر یا کشور"
            autocomplete="off"
          />
          <Button
            className="btn"
            buttonStyle="btn--search--place"
            btnSize="btn--large"
          >
            جستجو
          </Button>
        </div>
      </div>
      <CardGuide />
    </>
  );
}

export default Tour;

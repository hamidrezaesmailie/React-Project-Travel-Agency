import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import "./CardGuide.css";
const INFO = [
  {
    text: "تور داخلی",
  },
  {
    text: "تورها خارجی",
  },
  {
    text: "تور زیارتی",
  },
  {
    text: "تور فرهنگی",
  },
  {
    text: "تور لحظه آخری",
  },
  {
    text: "تور نمایشگاهی",
  },
  {
    text: "تور کودکان",
  },
  {
    text: "تور کویر",
  },
  {
    text: "تور سافاری",
  },
  {
    text: "تور طبیعت گردی",
  },
  {
    text: "تور کوهنوردی",
  },
  {
    text: "تور نوروزی",
  },
  {
    text: "تور آفردار",
  },
  {
    text: "تور ماجراجویانه",
  },
  {
    text: "تور یک روزه",
  },
  {
    text: "تور چند روزه",
  },
];

function CardGuide() {
  return (
    <>
      <div className="container">
        <div className="tour__tabs">
          <div className="tour__wrapper">
            <ul className="nav-tabs">
              {INFO.map((item, index) => (
                <li key={index}>
                  <Link to="/" className="anchor">
                    <h5>{item.text}</h5>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="tour__tabs">
        <div className="tab-content">
          <div className="tab-pane">
            <header className="tab-header">
              <div className="tab-text">تور</div>
              <div className="tab-sort-filter tab-text">
                مرتب شده بر اساس
                <span className="selectTours">
                  <select className="tab-sort-input">
                    <option value="newest">جدیدترین</option>
                    <option value="cheapest">ارزان ترین</option>
                    <option value="viewCount">پربازدیدترین</option>
                  </select>
                </span>
              </div>
            </header>
            <div className="tabs-content">
              <ul>
                <li>
                  <Link className="anchor">
                    <span>تور کیش 2 روز و 3 شب</span>
                    <p>از 1,600,000</p>
                    <p>از 20 اسفند 1399 تا 16 فروردین 1400</p>
                    <p>شرکت خدمات سفر تعطیلات</p>
                  </Link>
                </li>
                <li>
                  <Link className="anchor">
                    <span>تور قشم نوروز 1400</span>
                    <p>از 3,393,000</p>
                    <p>از 28 اسفند 1399 الی 2 فروردین 1400</p>
                    <p>آژانس هواپیمایی پرشین</p>
                  </Link>
                </li>
              </ul>
              <div className="more-tour-button">
                <Button buttonStyle="btn--tour" buttonSize="btn--large">
                  تورهای بیشتر
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardGuide;

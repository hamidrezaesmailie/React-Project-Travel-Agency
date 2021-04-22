import React from "react";
import "./Footer.css";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          به خبرنامه ما بپیوندید تا از آفرهای تورهای ایرانگردی و جهانگردی با خبر
          شوید
        </p>
        <p className="footer-subscription-text">
          هر زمانی که بخواهید میتوانید عضویت خود را لغو نمایید
        </p>
        <div className="input-area">
          <form>
            <input
              className="footer-input"
              type="email"
              placeholder="لطفا ایمیل خود را وارد کنید"
            />
            <Button buttonStyle="btn--special">عضویت</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>درباره ما</h2>
            <Link to="/">موقعیت های شغلی</Link>
            <Link to="/">تماس با ما</Link>
            <Link to="/">همکاری با ما</Link>
          </div>
          <div className="footer-link-items">
            <h2>راهنما</h2>
            <Link to="/">نقشه سایت</Link>
            <Link to="/">سوال های متدوال</Link>
            <Link to="/">حریم شخصی</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>رزرو</h2>
            <Link to="/">رزرو هتل</Link>
            <Link to="/">رزرو بلیط هواپیما</Link>
            <Link to="/">رزرو بلیط قطار</Link>
          </div>
          <div className="footer-link-items">
            <h2 style={{ fontSize: "20px" }}>شبکه های اجتماعی</h2>
            <Link to="/">اینستاگرام</Link>
            <Link to="/">توییتر</Link>
            <Link to="/">لینکدین</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Travel <i class="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">TravelⒸ2021</small>
          <div className="social-icons">
            <Link to="/" className="social-icon-link facebook">
              <i className="fab fa-facebook-f " />
            </Link>
            <Link to="/" className="social-icon-link instagram">
              <i className="fab fa-instagram" />
            </Link>
            <Link to="/" className="social-icon-link twitter">
              <i className="fab fa-twitter " />
            </Link>
            <Link to="/" className="social-icon-link linkedin">
              <i className="fab fa-linkedin " />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

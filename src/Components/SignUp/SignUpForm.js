import React from "react";
import "./SignUpForm.css";
import Button from "../UI/Button";

function SignUpForm() {
  return (
    <div
      className="signup-container
    "
    >
      <div className="signup-form">
        <input
          className="text-input"
          type="text"
          placeholder="نام و نام خانوادگی"
          autoComplete="off"
          required
        />
        <input
          className="text-input"
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          autoComplete="off"
          required
        />
        <input
          className="text-input"
          type="password"
          placeholder="رمز خود را وارد کنید"
          autoComplete="off"
          required
        />
        <input
          className="text-input"
          type="number "
          placeholder="شماره همراه"
          autoComplete="off"
          required
        />
        <Button buttonStyle="btn--tour" buttonSize="btn--large">
          ثبت نام
        </Button>
      </div>
    </div>
  );
}

export default SignUpForm;

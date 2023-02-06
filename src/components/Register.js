import React from "react";
import { FormForAuth } from "./FormForAuth";
import { Link } from "react-router-dom";

export function Register({handleRegister, success, fail}) {
  function handleSubmit(formValue) {
    handleRegister({password: formValue.password, email: formValue.email})
    .then(() => {
      success();
    })
    .catch(err => {
      console.log(err)
      fail();
    });
  }

  return (
    <FormForAuth name="register" title="Регистрация" submit="Зарегистрироваться" onSubmit={handleSubmit}>
      <Link to="/sign-in" className="auth__link">
          Уже зарегистрированы? Войти
      </Link>
    </FormForAuth>
  );
}

import React from "react";
import { FormForAuth } from "./FormForAuth";
import { Link, useNavigate } from "react-router-dom";
import * as Auth from "./Auth";

export function Register({success, fail}) {
  function handleSubmit(formValue) {
    Auth.register(formValue.password, formValue.email, fail, success)
    .then((res) => {
      navigate('/sign-in', {replace: true});
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  const navigate = useNavigate();

  return (
    <FormForAuth name="register" title="Регистрация" submit="Зарегистрироваться" onSubmit={handleSubmit}>
      <Link to="/login" className="auth__link">
          Уже зарегистрированы? Войти
      </Link>
    </FormForAuth>
  );
}

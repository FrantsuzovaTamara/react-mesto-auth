import React from "react";
import { FormForAuth } from "./FormForAuth";
import { Link, useNavigate } from "react-router-dom";
import * as Auth from "./Auth"

export function Register() {
  function handleSubmit(formValue) {
    const { email, password } = formValue;
    Auth.register(email, password);
  }
  
  const navigate = useNavigate();

  return (
    <FormForAuth name="register" title="Регистрация" submit="Зарегистрироваться" onSubmit={handleSubmit}>
      <Link to="/login">
        <a className="auth__link" href="#">
          Уже зарегистрированы? Войти
        </a>
      </Link>
    </FormForAuth>
  );
}

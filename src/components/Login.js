import React from "react";
import { FormForAuth } from "./FormForAuth";
import { useNavigate } from "react-router-dom";
import * as Auth from "./Auth";

export function Login({handleLogin}) {
  const navigate = useNavigate();

  function handleSubmit(formValue) {
    Auth.authorize(formValue.email, formValue.password)
    .then((data) => {
      console.log(data);
      if (data.jwt){
        handleLogin();
        navigate('/sign-in', {replace: true});
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <FormForAuth name="log-in" title="Вход" submit="Войти" onSubmit={handleSubmit} />
  );
}

import React from "react";
import { FormForAuth } from "./FormForAuth";

export function Login({handleLogin}) {

  function handleSubmit(formValue) {
    console.log(formValue)
    handleLogin({email: formValue.email, password: formValue.password})
    .catch(err => console.log(err));
  }

  return (
    <FormForAuth name="login" title="Вход" submit="Войти" onSubmit={handleSubmit} />
  );
}

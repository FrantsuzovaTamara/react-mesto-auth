import React from "react";

export function FormForAuth({
  name,
  title,
  submit/* ,
  onSubmit,
  isValid, */
}) {
  return (
    <div className="auth">
      <form className="auth__form" name={name} /* onSubmit={onSubmit} */ noValidate>
        <h3 className="auth__title">{title}</h3>
        <label className="auth__field">
          <input
            id="e-mail"
            type="url"
            name="name"
            className={`auth__input`}
            placeholder="E-mail"/* 
            value={name || ""}
            onChange={handleChangeName} */
            required
          />
          {/* <span
            className={
              errors.avatar
                ? "auth__input-error auth__input-error_active"
                : "auth__input-error"
            }
          >
            {errors.avatar}
          </span> */}
        </label>
        <label className="auth__field">
          <input
            id="password"
            type="password"
            name="password"
            className={`auth__input`}
            placeholder="Пароль"
            /* value={name || ""}
            onChange={handleChangeName} */
            required
          />
          {/* <span
            className={
              errors.avatar
                ? "auth__input-error auth__input-error_active"
                : "auth__input-error"
            }
          >
            {errors.avatar}
          </span> */}
        </label>
        <button
          type="submit"
          className={`auth__submit-button auth__save-button`}
          /* disabled={!isValid} */
        >
          {submit}
        </button>
      </form>
      <a className="auth__link" href="#">Уже зарегистрированы? Войти</a>
    </div>
  );
}

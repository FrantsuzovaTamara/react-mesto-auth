import React from "react";

export function AttentionPopup({ name, isOpen, title, src, onClose }) {
  return (
    <div
      className={`pop-up ${isOpen ? "pop-up_opened" : ""}`}
      id={`pop-up_${name}`}
    >
      <div className="pop-up__content">
        <button
          aria-label="Закрыть"
          type="button"
          className="pop-up__close-button"
          onClick={onClose}
        ></button>
        <img className="pop-up__image" src={src} />
        <h3 className="pop-up__title">{title}</h3>
      </div>
    </div>
  );
}

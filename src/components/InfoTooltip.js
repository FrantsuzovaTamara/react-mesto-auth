import React from "react";

export function InfoTooltip({ name, isOpen, title, src, alt, onClose }) {
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
        <div className="pop-up__attention">
          <img className="pop-up__icon" src={src} alt={alt} />
          <h3 className="pop-up__title pop-up__title_attention">{title}</h3>
        </div>
      </div>
    </div>
  );
}

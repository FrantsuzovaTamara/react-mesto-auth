import React from "react";
import { AttentionPopup } from "./AttentionPopup";

export function SuccessPopup({ isOpen, onClose }) {
  return (
    <AttentionPopup
      src="../images/pop-up__success"
      isOpen={isOpen}
      onClose={onClose}
      name="fail"
      title="Вы успешно зарегистрировались!"
    />
  )
}
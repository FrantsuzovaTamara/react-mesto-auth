import React from "react";
import { AttentionPopup } from "./AttentionPopup";

export function FailPopup({ isOpen, onClose }) {
  return (
    <AttentionPopup
      src="../images/pop-up__fail"
      isOpen={isOpen}
      onClose={onClose}
      name="fail"
      title="Что-то пошло не так! Попробуйте ещё раз."
    />
  )
}
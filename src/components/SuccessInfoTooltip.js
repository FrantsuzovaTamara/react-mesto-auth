import React from "react";
import { InfoTooltip } from "./InfoTooltip";
import success from "../images/pop-up__success.svg";

export function SuccessInfoTooltip({ isOpen, onClose }) {
  return (
    <InfoTooltip
      src={success}
      alt="Успешно"
      isOpen={isOpen}
      onClose={onClose}
      name="fail"
      title="Вы успешно зарегистрировались!"
    />
  )
}
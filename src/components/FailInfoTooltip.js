import React from "react";
import { InfoTooltip } from "./InfoTooltip";
import fail from "../images/pop-up__fail.svg";

export function FailInfoTooltip({ isOpen, onClose }) {
  return (
    <InfoTooltip
      src={fail}
      alt="Ошибка"
      isOpen={isOpen}
      onClose={onClose}
      name="fail"
      title="Что-то пошло не так! Попробуйте ещё раз."
    />
  )
}
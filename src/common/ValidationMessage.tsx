import React from "react";

export default function ValidationMessage({ validation }) {
  const { isValid, message } = validation;
  const styleClass = isValid ? "success-message" : "fail-message";

  return <span className={`message ${styleClass}`}>{message}</span>;
}

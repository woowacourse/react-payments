import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { cardInfoValidationError } from "utils/cardInfoValidationError.js";

const StyledCardInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    align-self: flex-end;
  }
`;

export default function Form({
  children,
  onSubmit,
  isComplete,
  setFormValidity = () => {},
}) {
  const formRef = useRef(null);
  const isInitMount = useRef(true);

  const [formInputArray, setFormInputArray] = useState([]);

  useEffect(() => {
    if (isInitMount.current) isInitMount.current = false;
    else setFormValidity(formInputArray);
  }, [isComplete]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setFormInputArray([...formRef.current]);
  }, []);

  const focusFormInput = (currInput, direction) => {
    const currentIndex = formInputArray.indexOf(currInput);

    const focusTarget = formInputArray[currentIndex + direction];

    if (!focusTarget || focusTarget.parentNode !== currInput.parentNode) return;

    focusTarget.focus();
  };

  const handlePrevFocus = (e) => {
    const { key, target } = e;
    const { value } = target;

    if (key !== "Backspace" || value !== "") return;

    focusFormInput(target, -1);
  };

  const handleNextFocus = (e) => {
    const { target } = e;
    const { maxLength, value } = target;

    if (value.length !== maxLength) return;

    focusFormInput(target, 1);
  };

  const handleFormValidation = ({ target }) => {
    if (target.validity.patternMismatch) {
      const message = cardInfoValidationError[target.name];
      target.setCustomValidity(message);
    } else {
      target.setCustomValidity("");
    }

    target.reportValidity();
  };

  const handleFormChange = (e) => {
    handleNextFocus(e);
    handleFormValidation(e);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());

    onSubmit(formData);
  };

  return (
    <StyledCardInfoForm
      autoComplete="off"
      onChange={handleFormChange}
      onKeyDown={handlePrevFocus}
      onSubmit={handleFormSubmit}
      ref={formRef}
    >
      {children}
    </StyledCardInfoForm>
  );
}

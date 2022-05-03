import React from "react";
import styled from "styled-components";

const StyledCardInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    align-self: flex-end;
  }
`;

export default function Form({ children }) {
  const focusFormInput = (formInputList, currInput, direction) => {
    const formInputArray = [...formInputList];
    const currentIndex = formInputArray.indexOf(currInput);

    const focusTarget = formInputArray[currentIndex + direction];

    if (focusTarget && focusTarget.name !== currInput.name) return;

    focusTarget.focus();
  };

  const handlePrevFocus = (e) => {
    const { key, target } = e;
    const { form: formInputList, value } = target;

    if (key !== "Backspace" || value !== "") return;

    focusFormInput(formInputList, target, -1);
  };

  const handleNextFocus = (e) => {
    const { target } = e;
    const { form: formInputList, maxLength, value } = target;

    if (value.length !== maxLength) return;

    focusFormInput(formInputList, target, 1);
  };

  return (
    <StyledCardInfoForm
      autoComplete="off"
      onChange={handleNextFocus}
      onKeyDown={handlePrevFocus}
    >
      {children}
    </StyledCardInfoForm>
  );
}

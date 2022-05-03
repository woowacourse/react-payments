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
  const handleFocus = (form, currElement, direction) => {
    const formInputArray = [...form];
    const currentIndex = formInputArray.indexOf(currElement);

    const focusTarget = formInputArray[currentIndex + direction];

    if (focusTarget && focusTarget.name === currElement.name) {
      focusTarget.focus();
    }
  };

  const handlePrevFocus = (e) => {
    const { key, target } = e;
    const { form, value } = target;

    if (key !== "Backspace") return;
    if (value !== "") return;

    handleFocus(form, target, -1);
  };

  const handleFormChange = (e) => {
    const { target } = e;
    const { form, maxLength, value } = target;

    if (value.length === maxLength) {
      handleFocus(form, target, 1);
    }
  };

  return (
    <StyledCardInfoForm
      autoComplete="off"
      onChange={handleFormChange}
      onKeyDown={handlePrevFocus}
    >
      {children}
    </StyledCardInfoForm>
  );
}

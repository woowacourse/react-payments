import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { cardInfoValidationError } from "utils/cardInfoValidationError";

const StyledCardInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    align-self: flex-end;
  }
`;

type Props = {
  children: React.ReactNode;
  onSubmit: (formData: Object) => {};
  isComplete: boolean;
  setFormValidity: (formInputArray: Node[]) => void;
};

export default function Form({
  children,
  onSubmit,
  isComplete,
  setFormValidity = () => {},
}: Props) {
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

  const focusFormInput = (currInput: Node, direction: number) => {
    const currentIndex = formInputArray.indexOf(currInput);

    const focusTarget = formInputArray[currentIndex + direction];

    if (!focusTarget || focusTarget.parentNode !== currInput.parentNode) return;

    focusTarget.focus();
  };

  const handlePrevFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    if (e.key !== "Backspace" || value !== "") return;

    focusFormInput(target, -1);
  };

  const handleNextFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { maxLength, value } = e.target as HTMLInputElement;

    if (value.length !== maxLength) return;

    focusFormInput(e.target as Node, 1);
  };

  const handleFormValidation = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.validity.patternMismatch) {
      const message = cardInfoValidationError[target.name];
      target.setCustomValidity(message);
    } else {
      target.setCustomValidity("");
    }

    target.reportValidity();
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleNextFocus(e);
    handleFormValidation(e);
  };

  const handleFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement).entries()
    );

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

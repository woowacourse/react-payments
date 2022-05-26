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
  onSubmit: (formData: Object) => void;
  isComplete?: boolean;
  setFormValidity?: (formInputArray: Node[]) => void;
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

  const handlePrevFocus: React.KeyboardEventHandler<HTMLFormElement> = (
    event: React.KeyboardEvent<HTMLFormElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;

    if (event.key !== "Backspace" || value !== "") return;

    focusFormInput(target, -1);
  };

  const handleNextFocus: React.FormEventHandler<HTMLFormElement> = (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    const { maxLength, value } = e.target;

    if (value.length !== maxLength) return;

    focusFormInput(e.target as Node, 1);
  };

  const handleFormValidation: React.FormEventHandler<HTMLFormElement> = ({
    target,
  }: React.ChangeEvent<HTMLFormElement>) => {
    if (target.validity.patternMismatch) {
      const message = cardInfoValidationError[target.name];
      target.setCustomValidity(message);
    } else {
      target.setCustomValidity("");
    }

    target.reportValidity();
  };

  const handleFormChange: React.FormEventHandler<HTMLFormElement> = (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
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

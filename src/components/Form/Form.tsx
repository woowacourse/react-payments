import useForm from "hooks/useForm";
import React, { useRef } from "react";
import styled from "styled-components";

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
  setFormValidity?: (formElementArray: HTMLFormElement[]) => void;
};

export default function Form({
  children,
  onSubmit,
  isComplete,
  setFormValidity,
}: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  const { handleFormChange, handlePrevFocus, handleFormSubmit } = useForm({
    formRef,
    isComplete,
    onSubmit,
    setFormValidity,
  });

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

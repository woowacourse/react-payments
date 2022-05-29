import React from "react";
import styled from "styled-components";

interface FormComponent {
  onSubmit: () => void;
  children: React.ReactNode;
}

export const Form = ({ onSubmit, children }: FormComponent) => {
  return <FormStyle onSubmit={onSubmit}>{children}</FormStyle>;
};

const FormStyle = styled.form``;

import React from "react";
import styled from "styled-components";

export const Form = ({ onSubmit, children }) => {
  return <FormStyle onSubmit={onSubmit}>{children}</FormStyle>;
};

const FormStyle = styled.form``;

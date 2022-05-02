import React from "react";
import styled from "styled-components";

const StyledCardInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function CardInfoForm({ children }) {
  return <StyledCardInfoForm>{children}</StyledCardInfoForm>;
}

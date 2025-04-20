import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const StyledInputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

export const StyledErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 0;
`;

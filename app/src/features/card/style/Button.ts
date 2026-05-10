import styled from "@emotion/styled";

export const Button = styled.button`
  width: 100%;
  background-color: #333333;
  padding: 20px 0;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  &:disabled {
    background-color: #3333334d;
    cursor: auto;
  }
`;

export const RadiusButton = styled(Button)`
  border-radius: 5px;
`;

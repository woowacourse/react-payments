import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
`;

export const NextButton = styled(Button)`
  display: flex;
  margin: 38px 0 0 auto;
  padding: 10px 16px;
  color: var(--darken-color);
  border: 1px solid var(--darken-color);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  background: none;
`;

export const AddButton = styled(Button)`
  width: 208px;
  height: 123px;
  margin: 30px 0 40px;
  font-size: 34px;
  background: var(--gray-color-100);
  border-radius: 5px;
`;

export const SelectorButton = styled(Button)`
  border: 1px solid var(--gray-color-100);
  margin: 14px auto auto 0;
  padding: 3px 4px;
  font-size: 12px;
  background: transparent;
  color: var(--gray-color-100);
`;

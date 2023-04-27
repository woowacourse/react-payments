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
  margin: 12px auto auto 0;
  font-size: 12px;
  color: #fff;
  background: transparent;

  &.카드사선택 {
    padding: 3px 4px;
    border: 1px solid #fff;
  }

  &.카카오뱅크 {
    color: #000;
  }
`;

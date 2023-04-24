import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const NextButton = styled.button`
  width: 51px;

  background: none;
  border: none;

  box-sizing: border-box;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  &:hover {
    cursor: pointer;
  }
`;

import styled from 'styled-components';

export const Input = styled.input`
  background-color: transparent;
  width: 100%;
  margin: 0 8px;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #525252;

  &::placeholder {
    letter-spacing: -0.02em;
  }

  &.error {
    border-bottom: 1px solid #ff9e9e;
  }

  &.input-expired-date {
    width: 52px;
  }

  &.input-owner {
    width: 311px;
  }

  &.input-cvc {
    width: 74px;
  }

  &.input-password {
    width: 28px;
  }

  &.input-underline {
    border-bottom: 1px solid black;
  }
`;

import styled from "styled-components";

export const Input = styled.input<{ isError: boolean }>`
  width: 100%;
  height: 15px;
  padding: 8px 15px 8px 8px;
  gap: 8px;
  border: 1px solid
    ${(props) =>
      props.isError ? props.theme.colors.inputError : props.theme.colors.input};

  border-radius: 2px;
  font-family: Inter;
  font-size: 11px;
  font-weight: 400;
  line-height: 14.88px;
  text-align: left;

  &::placeholder {
    color: ${({ theme }) => theme.colors.input};
  }
`;

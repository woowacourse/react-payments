import styled from "styled-components";

const InputBox = styled.input<{ isError: boolean }>`
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.COLOR.error : theme.COLOR["grey-2"]};

  padding: 8px;
  border-radius: 2px;
  font-size: 11px;
  font-weight: 400;
  width: 100%;

  :focus {
    border: 1px solid black;
  }
`;

const S = {
  InputBox,
};

export default S;

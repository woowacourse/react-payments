import styled from "styled-components";

const InputBox = styled.input<{ $isError: boolean }>`
  flex: 1;
  border: 1px solid
    ${({ theme, $isError }) =>
      $isError ? theme.COLOR.error : theme.COLOR["grey-2"]};
  &:focus {
    border: 1px solid
      ${({ theme, $isError }) => ($isError ? theme.COLOR.error : "black")};
  }

  padding: 8px;
  border-radius: 2px;
  font-size: 11px;
  font-weight: 400;
  opacity: 0.8;
  min-width: 10px;
`;

const S = {
  InputBox,
};

export default S;

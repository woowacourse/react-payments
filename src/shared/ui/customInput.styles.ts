import styled from '@emotion/styled';

export const CustomInput = styled.input<{ error?: boolean }>`
  flex: 1 1 0;
  min-width: 0;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid #acacac;
  padding: 8px;

  ::placeholder {
    color: #acacac;
  }

  :focus {
    border: 1px solid black;
  }

  ${({ error }) => error && `border: 1px solid #ff3d3d`}
`;

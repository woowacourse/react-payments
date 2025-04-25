import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

export const CustomLinkButton = styled.button<{ css?: SerializedStyles }>`
  width: 100%;
  height: 52px;
  size: 16px;
  font-weight: 700;
  text-align: center;
  background-color: #333333;
  color: white;

  &:hover {
    background-color: rgb(22, 22, 22);
    cursor: pointer;
  }
`;

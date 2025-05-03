import styled from '@emotion/styled';

import { Props } from '.';
import { colors } from '@/styles/global';

export const StyledButton = styled.button<Props>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  border: none;
  border-radius: ${({ isRounded }) => (isRounded ? '12px' : '0')};
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${colors.GY3};
  color: ${colors.white};

  &:hover {
    background-color: ${colors.black};
  }

  &:disabled {
    color: ${colors.GY2};
    background-color: ${colors.GY2};
    cursor: not-allowed;
  }
`;

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/global';

export const StyledSelectContainer = styled.div<{ isOpen: boolean }>`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border: 1px solid ${colors.GY1};
  border-radius: 4px;
  background-color: ${colors.white};

  ${({ isOpen }) =>
    isOpen &&
    css`
      border-color: ${colors.black};
    `}
`;

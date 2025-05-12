import styled from '@emotion/styled';

import { ButtonProps } from './Button.types';

import { colors } from '@/styles/global';

const borderRadiusVariants = {
  rounded: '8px',
  square: '0px',
};

export const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  height: ${({ height }) => height};
  border-radius: ${({ borderType }) => borderRadiusVariants[borderType]};
  background-color: ${colors.GY3};
  position: ${({ position }) => position && position};
  top: ${({ top }) => top && top};
  bottom: ${({ bottom }) => bottom && bottom};
  left: ${({ left }) => left && left};
  right: ${({ right }) => right && right};

  &:hover {
    cursor: pointer;
  }
`;

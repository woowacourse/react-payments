import { ComponentProps } from 'react';

import { StyledButton } from './Button.styled';

import { Text } from '../Text';

export type Props = {
  /**
   * Controls button shape
   * @default false
   */
  isRounded?: boolean;
  /**
   * Button content children
   */
  children: React.ReactNode;
} & ComponentProps<'button'>;

export const Button = ({ isRounded = false, children, ...props }: Props) => {
  return (
    <StyledButton isRounded={isRounded} {...props}>
      <Text variant="Body" color="white">
        {children}
      </Text>
    </StyledButton>
  );
};

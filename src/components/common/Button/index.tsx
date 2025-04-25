import { ComponentProps } from 'react';

import { StyledButton } from './Button.styled';

import { Text } from '../Text';

export type Props = {
  /**
   * Sets the button type
   * @default button
   */
  isRounded?: boolean;

  /**
   * Sets the button type
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

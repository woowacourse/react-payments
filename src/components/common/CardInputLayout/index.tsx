import { PropsWithChildren } from 'react';

import { StyledCardInputLayoutContainer } from './CardInputLayout.styled';

import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';

export type Props = {
  /**
   * Sets the title for the card input field.
   */
  headerText: string;
  /**
   * Sets the description for the card input field.
   */
  description?: string;
  /**
   * Sets the label for the card input field.
   */
  label: string;
} & PropsWithChildren;

export const CardInputLayout = ({ headerText, description, label, children }: Props) => {
  return (
    <StyledCardInputLayoutContainer>
      <Text variant="Title" fontWeight="bold">
        {headerText}
      </Text>
      {description && (
        <Text variant="Caption" color="gray" fontWeight="regular">
          {description}
        </Text>
      )}
      <Text variant="Body" fontWeight="regular">
        {label}
      </Text>
      <Flex gap="8px" width="100%">
        {children}
      </Flex>
    </StyledCardInputLayoutContainer>
  );
};

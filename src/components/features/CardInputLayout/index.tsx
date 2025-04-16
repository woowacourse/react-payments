import { PropsWithChildren } from 'react';

import { css } from '@emotion/react';

import { StyledCardInputLayoutContainer } from './CardInputLayout.styled';

import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';

export type Props = {
  headerText: string;
  description?: string;
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
      <Flex gap="8px">{children}</Flex>
    </StyledCardInputLayoutContainer>
  );
};

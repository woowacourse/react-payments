import { PropsWithChildren } from 'react';

import { css } from '@emotion/react';

import { StyledCardInputLayoutContainer } from './CardInputLayout.styled';

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
      <div
        css={css`
          display: flex;
          flex-direction: row;
          gap: 8px;
          width: 100%;
        `}
      >
        {children}
      </div>
    </StyledCardInputLayoutContainer>
  );
};

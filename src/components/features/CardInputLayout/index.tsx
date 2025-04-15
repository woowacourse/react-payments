import { PropsWithChildren } from 'react';
import { Text } from '../../common/Text';
import { StyledCardInputLayoutContainer } from './CardInputLayout.styled';
import { css } from '@emotion/css';

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
        className={css`
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

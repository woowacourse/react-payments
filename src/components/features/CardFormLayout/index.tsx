import { ComponentProps, ReactNode } from 'react';

import { css } from '@emotion/react';

import { CardFormStyled } from './CardFormLayout.styled';

import { Button } from '@/components/common/Button';
import { Flex } from '@/components/common/Flex';

export type Props = {
  /**
   * Sets the button type
   * @default true
   */
  disabled?: boolean;
  /**
   * Sets the button type
   */
  onSubmit: () => void;
  /**
   * Sets the button type
   */
  children: ReactNode;
} & ComponentProps<'form'>;

export const CardFormLayout = ({ disabled = true, onSubmit, children }: Props) => {
  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <CardFormStyled onSubmit={handleSubmit}>
      <Flex
        justifyContent="flex-start"
        direction="column"
        gap="10px"
        margin="0px 25px 5px 25px"
        padding="0 15px"
      >
        {children}
      </Flex>
      <Flex
        flex={0}
        css={css`
          position: sticky;
          bottom: 0;
          width: 100%;
        `}
      >
        <Button type="submit" disabled={disabled}>
          확인
        </Button>
      </Flex>
    </CardFormStyled>
  );
};

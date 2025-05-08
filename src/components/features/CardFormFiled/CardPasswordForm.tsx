import { css } from '@emotion/react';

import { CardFormFiledProps } from './CardFormFiled.types';

import { CardInputLayout } from '@/components/common/CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { Text } from '@/components/common/Text';
import { CardInputType } from '@/hooks/useCardInput';
import { useFocus } from '@/hooks/useFocus';

type Props = {
  password: CardInputType[];
} & CardFormFiledProps;

export const CardPasswordForm = ({
  password,
  errorMessage,
  onCardInputChange,
  onCardInputBlur,
}: Props) => {
  const { refs } = useFocus(1);

  return (
    <CardInputLayout
      headerText="비밀번호를 입력해 주세요."
      description="앞의 2자리를 입력해 주세요."
      label="비밀번호 앞 2자리"
    >
      <Flex direction="column" alignItems="flex-start" width="100%" gap="4px">
        <Input
          value={password[0].value}
          type="password"
          maxLength={2}
          onChange={(e) => onCardInputChange(e, 0)}
          onBlur={(e) => onCardInputBlur(e, 0)}
          isValid={password[0].isValid}
          ref={refs[0]}
          autoComplete="off"
        />
        <Text
          variant="Caption"
          color="red"
          css={css`
            height: 20px;
          `}
        >
          {errorMessage ? errorMessage : ''}
        </Text>
      </Flex>
    </CardInputLayout>
  );
};

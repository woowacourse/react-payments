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
  const { refs } = useFocus(password.length);

  return (
    <CardInputLayout
      headerText="비밀번호를 입력해 주세요."
      description="앞의 2자리를 입력해 주세요."
      label="비밀번호 앞 2자리"
    >
      <Flex direction="column" alignItems="flex-start" width="100%" gap="4px">
        {password.map((password, index) => (
          <Input
            type="password"
            key={`password-${index}`}
            maxLength={2}
            value={password.value}
            onChange={(e) => onCardInputChange(e, index)}
            onBlur={(e) => onCardInputBlur(e, index)}
            isValid={password.isValid}
            ref={refs[index]}
            autoComplete="off"
          />
        ))}
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

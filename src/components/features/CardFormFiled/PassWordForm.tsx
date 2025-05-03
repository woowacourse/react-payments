import { css } from '@emotion/react';

import { CARD_FILED_CONFIG, CardFormProps } from './CardFormFiled.types';

import { CardInputLayout } from '../../common/CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { Text } from '@/components/common/Text';
import { useCardForm } from '@/hooks/useCardForm';
import { useSingleCardInput } from '@/hooks/useSingleCardInput';

export const PassWordForm = ({ onNext }: CardFormProps) => {
  const { formData, dispatch } = useCardForm();

  const {
    state: passWord,
    error,
    handleChange,
  } = useSingleCardInput({
    state: formData.password,
    setState: (passWord) => {
      dispatch({
        type: 'PASSWORD',
        payload: { ...formData, password: passWord },
      });
    },
    onValid: onNext,
    valueLength: CARD_FILED_CONFIG.password.valueLength,
  });

  return (
    <CardInputLayout
      headerText="비밀번호를 입력해 주세요."
      description="앞의 2자리를 입력해주세요."
      label="비밀번호 앞 2자리"
    >
      <Flex direction="column" alignItems="flex-start" width="100%" gap="4px">
        <Input
          autoFocus
          type="password"
          value={passWord.value}
          maxLength={2}
          placeholder="비밀번호 앞 2자리를 입력해주세요"
          isValid={passWord.isValid}
          onChange={handleChange}
        />
        <Text
          variant="Caption"
          color="red"
          css={css`
            height: 20px;
          `}
        >
          {!passWord.isValid ? error : ''}
        </Text>
      </Flex>
    </CardInputLayout>
  );
};

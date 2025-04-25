import { css } from '@emotion/react';

import { CARD_FILED_CONFIG, CardFormProps, FormData } from './CardFormFiled.types';

import { CardInputLayout } from '../../common/CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { Text } from '@/components/common/Text';
import { CardForm } from '@/hooks/useCardFormState';
import { useSingleCardInput } from '@/hooks/useSingleCardInput';

type Props<T> = CardFormProps & FormData<T>;
export const CVCForm = ({ context, onNext }: Props<CardForm['cvc']>) => {
  const { state: cvcNumberFormData, setState: setCVCNumberFormData } = context;

  const {
    state: CVCNumber,
    error,
    handleChange,
  } = useSingleCardInput({
    state: cvcNumberFormData,
    setState: setCVCNumberFormData,
    onValid: onNext,
    valueLength: CARD_FILED_CONFIG.cvc.valueLength,
  });

  return (
    <CardInputLayout headerText="CVC 번호를 입력해 주세요." label="CVC">
      <Flex direction="column" alignItems="flex-start" width="100%" gap="4px">
        <Input
          autoFocus={CVCNumber.value.length === 0}
          value={CVCNumber.value}
          maxLength={3}
          placeholder="CVC 번호(카드 뒷면의 서명란에 인쇄된 숫자 끝 3자리)"
          isValid={CVCNumber.isValid}
          onChange={(e) => handleChange(e)}
        />
        <Text
          variant="Caption"
          color="red"
          css={css`
            height: 20px;
          `}
        >
          {!CVCNumber.isValid ? error : ''}
        </Text>
      </Flex>
    </CardInputLayout>
  );
};

import { css } from '@emotion/react';

import { CardFormProps } from './CardFormFiled.types';

import { CardInputLayout } from '../../common/CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { Text } from '@/components/common/Text';
import { useCardForm } from '@/hooks/useCardForm';
import { useCardNumber } from '@/hooks/useCardNumber';

export const CardNumberForm = ({ onNext }: CardFormProps) => {
  const { formData, dispatch } = useCardForm();

  const { cardNumbers, error, handleChange, setInputRef } = useCardNumber({
    cardNumbers: formData.cardNumber,
    setCardNumbers: (cardNumber) =>
      dispatch({
        type: 'CARD_NUMBER',
        payload: { ...formData, cardNumber },
      }),
    onValid: onNext,
  });

  const isValid = cardNumbers.every((cardNumber) => cardNumber.isValid);

  return (
    <CardInputLayout
      headerText="결제할 카드 번호를 입력해 주세요."
      description="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
    >
      <Flex direction="column" alignItems="flex-start" width="100%" gap="4px">
        <Flex gap="8px">
          {cardNumbers.map((cardNumber, index) => (
            <Input
              autoFocus={index === 0 && cardNumber.value.length === 0}
              key={`card-${index}`}
              type={index >= 2 ? 'password' : 'tel'}
              value={cardNumber.value}
              maxLength={4}
              onChange={(e) => handleChange(index, e)}
              isValid={cardNumber.isValid}
              placeholder="1234"
              ref={(el) => {
                if (el) setInputRef(el, index);
              }}
            />
          ))}
        </Flex>
        <Text
          variant="Caption"
          color="red"
          css={css`
            height: 20px;
          `}
        >
          {!isValid ? error : ''}
        </Text>
      </Flex>
    </CardInputLayout>
  );
};

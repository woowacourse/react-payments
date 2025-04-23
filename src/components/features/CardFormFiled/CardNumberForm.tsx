import { css } from '@emotion/react';

import { CardFormFiledProps } from './CardFormFiled.types';

import { CardInputLayout } from '../../common/CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { Text } from '@/components/common/Text';
import { CardInputType } from '@/hooks/useCardInput';

type Props = {
  cardNumbers: CardInputType[];
} & CardFormFiledProps;

export const CardNumberForm = ({
  cardNumbers,
  errorMessage,
  onCardInputChange,
  onCardInputBlur,
}: Props) => {
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
              key={`card-${index}`}
              value={cardNumber.value}
              onChange={(e) => onCardInputChange(e, index)}
              onBlur={(e) => onCardInputBlur(e, index)}
              isValid={cardNumber.isValid}
              placeholder="1234"
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
          {errorMessage ? errorMessage : ''}
        </Text>
      </Flex>
    </CardInputLayout>
  );
};

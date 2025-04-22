import { css } from '@emotion/react';

import { CardFormFiledProps } from './CardFormFiled.types';

import { CardInputLayout } from '../../common/CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { Text } from '@/components/common/Text';
import { CardInputType } from '@/hooks/useCardInput';

type Props = {
  cvcNumber: CardInputType[];
} & CardFormFiledProps;

export const CVCForm = ({ cvcNumber, errorMessage, onChange, onBlur }: Props) => {
  const isValidCVC = cvcNumber.every((cvcNumber) => cvcNumber.isValid);

  return (
    <CardInputLayout headerText="CVC 번호를 입력해 주세요." label="CVC">
      <Flex direction="column" alignItems="flex-start" width="100%" gap="4px">
        {cvcNumber.map((cvc, index) => (
          <Input
            key={`cvc-${index}`}
            value={cvc.value}
            maxLength={3}
            placeholder="CVC 번호(카드 뒷면의 서명란에 인쇄된 숫자 끝 3자리)"
            isValid={cvc.isValid}
            onChange={(e) => onChange(e, index)}
            onBlur={(e) => onBlur(e, index)}
          />
        ))}
        <Text
          variant="Caption"
          color="red"
          css={css`
            height: 20px;
          `}
        >
          {isValidCVC ? '' : errorMessage}
        </Text>
      </Flex>
    </CardInputLayout>
  );
};

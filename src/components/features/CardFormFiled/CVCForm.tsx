import { css } from '@emotion/react';

import { CardInputLayout } from '../../common/CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { Text } from '@/components/common/Text';
import { useCardInput } from '@/hooks/useCardInput';

export const CVCForm = () => {
  const { value: cvcNumber, errorMessage, handleChange, handleBlur } = useCardInput('CVC', 1, 3);

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
            onChange={(e) => handleChange(index, e)}
            onBlur={(e) => handleBlur(index, e)}
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

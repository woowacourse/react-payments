import { css } from '@emotion/react';

import { CardFormFiledProps } from './CardFormFiled.types';

import { CardInputLayout } from '../../common/CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { Text } from '@/components/common/Text';
import { CardInputType } from '@/hooks/useCardInput';
import { useFocus } from '@/hooks/useFocus';

type Props = {
  cvcNumber: CardInputType[];
} & CardFormFiledProps;

export const CVCForm = ({ cvcNumber, errorMessage, onCardInputChange, onCardInputBlur }: Props) => {
  const { refs } = useFocus(1);

  return (
    <CardInputLayout headerText="CVC 번호를 입력해 주세요." label="CVC">
      <Flex direction="column" alignItems="flex-start" width="100%" gap="4px">
        <Input
          value={cvcNumber[0].value}
          maxLength={3}
          placeholder="CVC 번호(카드 뒷면의 서명란에 인쇄된 숫자 끝 3자리)"
          isValid={cvcNumber[0].isValid}
          onChange={(e) => onCardInputChange(e, 0)}
          onBlur={(e) => onCardInputBlur(e, 0)}
          ref={refs[0]}
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

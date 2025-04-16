import { css } from '@emotion/react';

import { CardFormFiledProps } from './CardFormFiled.types';

import { CardInputLayout } from '../../common/CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { Text } from '@/components/common/Text';
import { CardInputType } from '@/hooks/useCardInput';

type Props = {
  expireDate: CardInputType[];
} & CardFormFiledProps;

const ExpireDatePlaceholder = ['MM', 'YY'];

export const ExpireDateForm = ({ expireDate, errorMessage, onChange, onBlur }: Props) => {
  const isInvalidDate = expireDate.some((expireDate) => !expireDate.isValid);

  return (
    <CardInputLayout
      headerText="카드 유효기간을 입력해 주세요."
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
    >
      <Flex direction="column" alignItems="flex-start" width="100%" gap="4px">
        <Flex gap="8px" width="100%">
          {expireDate.map((date, index) => (
            <Input
              key={`expire-${index}`}
              value={date.value}
              maxLength={2}
              onChange={(e) => onChange(index, e)}
              onBlur={(e) => onBlur(index, e)}
              isValid={date.isValid}
              placeholder={ExpireDatePlaceholder[index]}
            />
          ))}
        </Flex>
        <Text
          variant="Caption"
          color="red"
          css={css`
            height: 10px;
          `}
        >
          {isInvalidDate ? errorMessage : ''}
        </Text>
      </Flex>
    </CardInputLayout>
  );
};

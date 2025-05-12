import { css } from '@emotion/react';

import { CardExpireDateFiledType } from './CardFormFiled.types';

import { CardInputLayout } from '@/components/common/CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { Text } from '@/components/common/Text';
import { ExpireDateInputType, ExpireDateInputKey } from '@/hooks/useExpireDateInput';
import { useFocus } from '@/hooks/useFocus';

type Props = {
  expireDate: ExpireDateInputType;
} & CardExpireDateFiledType;

const ExpireDatePlaceholder = ['MM', 'YY'];

export const ExpireDateForm = ({
  expireDate,
  errorMessage,
  onCardExpireDateInputChange,
  onCardExpireDateInputBlur,
}: Props) => {
  const { refs } = useFocus(2);
  const expireDateKeys = Object.keys(expireDate) as ExpireDateInputKey[];

  return (
    <CardInputLayout
      headerText="카드 유효기간을 입력해 주세요."
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
    >
      <Flex direction="column" alignItems="flex-start" width="100%" gap="4px">
        <Flex gap="8px" width="100%">
          {expireDateKeys.map((key, index) => (
            <Input
              key={`expire-${key}`}
              value={expireDate[key].value}
              maxLength={2}
              onChange={(e) => onCardExpireDateInputChange(e, key)}
              onBlur={(e) => onCardExpireDateInputBlur(e, key)}
              isValid={expireDate[key].isValid}
              placeholder={ExpireDatePlaceholder[index]}
              ref={refs[index]}
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

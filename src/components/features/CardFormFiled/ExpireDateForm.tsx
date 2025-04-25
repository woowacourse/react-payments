import { css } from '@emotion/react';

import { CardFormProps, FormData } from './CardFormFiled.types';

import { CardInputLayout } from '../../common/CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { Text } from '@/components/common/Text';
import { CardForm } from '@/hooks/useCardFormState';
import { useExpireDate } from '@/hooks/useExpireDate';

const ExpireDatePlaceholder = ['MM', 'YY'];

type Props<T> = CardFormProps & FormData<T>;
export const ExpireDateForm = ({ context, onNext }: Props<CardForm['expireDate']>) => {
  const { state: expireDateFormData, setState: setExpireDateFormData } = context;

  const { expireDates, error, handleChange, setInputRef } = useExpireDate({
    expireDates: expireDateFormData,
    setExpireDates: setExpireDateFormData,
    onValid: onNext,
  });

  const isValid = expireDates.every((expireDate) => expireDate.isValid);

  return (
    <CardInputLayout
      headerText="카드 유효기간을 입력해 주세요."
      description="월/년도(MM/YY)를 순서대로 입력해 주세요."
      label="유효기간"
    >
      <Flex direction="column" alignItems="flex-start" width="100%" gap="4px">
        <Flex gap="8px" width="100%">
          {expireDates.map((date, index) => (
            <Input
              autoFocus={index === 0 && date.value.length === 0}
              key={`expire-${index}`}
              value={date.value}
              maxLength={2}
              onChange={(e) => handleChange(index, e)}
              isValid={date.isValid}
              placeholder={ExpireDatePlaceholder[index]}
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

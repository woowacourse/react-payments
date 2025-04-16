import { CardInputLayout } from '../CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { CardInputType } from '@/hooks/useCardInput';
import { CardFormFiledProps } from './CardFormFiled.types';

type Props = {
  expireDate: CardInputType[];
} & CardFormFiledProps;

export const ExpireDateForm = ({ expireDate, onChange, onBlur }: Props) => {
  const ExpireDatePlaceholder = ['MM', 'YY'];

  return (
    <CardInputLayout
      headerText="카드 유효기간을 입력해 주세요."
      description="월/년도(MMYY)를 순서대로 입력해 주세요."
      label="유효기간"
    >
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
    </CardInputLayout>
  );
};

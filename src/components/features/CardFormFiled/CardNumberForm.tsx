import { CardInputLayout } from '../CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { CardInputType } from '@/hooks/useCardInput';
import { CardFormFiledProps } from './CardFormFiled.types';

type Props = {
  cardNumbers: CardInputType[];
} & CardFormFiledProps;

export const CardNumberForm = ({ cardNumbers, onChange, onBlur }: Props) => {
  return (
    <CardInputLayout
      headerText="결제할 카드 번호를 입력해 주세요."
      description="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
    >
      <Flex gap="8px">
        {cardNumbers.map((cardNumber, index) => (
          <Input
            key={`card-${index}`}
            value={cardNumber.value}
            onChange={(e) => onChange(index, e)}
            onBlur={(e) => onBlur(index, e)}
            isValid={cardNumber.isValid}
            placeholder="1234"
          />
        ))}
      </Flex>
    </CardInputLayout>
  );
};

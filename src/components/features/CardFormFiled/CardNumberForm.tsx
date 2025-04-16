import { CardInputLayout } from '../CardInputLayout';
import { Flex } from '@/components/common/Flex';
import { Input } from '@/components/common/Input';
import { CardInputType } from '@/hooks/useCardInput';

type Props = {
  cardNumber: CardInputType[];
  onChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CardNumberForm = ({ cardNumber, onChange, onBlur }: Props) => {
  return (
    <CardInputLayout
      headerText="결제할 카드 번호를 입력해 주세요."
      description="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
    >
      <Flex gap="8px">
        {cardNumber.map((number, index) => (
          <Input
            key={`card-${index}`}
            value={number.value}
            onChange={(e) => onChange(index, e)}
            onBlur={(e) => onBlur(index, e)}
            isValid={number.isValid}
            placeholder="1234"
          />
        ))}
      </Flex>
    </CardInputLayout>
  );
};

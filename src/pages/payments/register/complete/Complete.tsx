import { SymbolInfo } from '@/core/components/symbolInfo';
import { Button } from '@/core/components/button';
import { CARD_OPTIONS } from '../../register/form/constant';

interface CompleteProps {
  cardNumber: string;
  card: string;
}

export const Complete = ({ cardNumber, card }: CompleteProps) => {
  const cardOption = CARD_OPTIONS.find((option) => option.value === card);
  return (
    <SymbolInfo
      full={true}
      symbol="complete"
      action={
        <Button variant="primary" block>
          확인
        </Button>
      }
    >
      {cardNumber}로 시작하는 {cardOption?.text}가 등록되었어요.
    </SymbolInfo>
  );
};

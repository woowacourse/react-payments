import { ErrorMessage, Input, Label, Spacing, Title } from '@/components';
import { ERROR_MESSAGE } from '@/constants';
import { Register } from '@/hooks';
import { CardCVCNumberInput } from '@/types/input';

interface CardCVCNumberProps {
  register: Register<CardCVCNumberInput>;
  cardCVCNumberErrors: CardCVCNumberInput;
  onFocus: () => void;
  onBlur: () => void;
}

export default function CardCVCNumber({ register, cardCVCNumberErrors, onFocus, onBlur }: CardCVCNumberProps) {
  return (
    <div>
      <Title>CVC 번호를 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-cvc-number">CVC</Label>
      <Spacing size={8} />
      <div>
        <Input
          autoFocus
          placeholder="123"
          maxLength={3}
          isError={cardCVCNumberErrors.cvc !== ''}
          onFocus={onFocus}
          onBlur={onBlur}
          inputMode="numeric"
          data-sequence="8"
          {...register('cvc', {
            inputRegex: /^[0-9]*$/,
            validation: {
              required: true,
              length: 3,
              errorMessage: ERROR_MESSAGE.cardCVCNumber.length,
            },
          })}
        />
      </div>
      <Spacing size={8} />
      <ErrorMessage>{cardCVCNumberErrors.cvc}</ErrorMessage>
    </div>
  );
}

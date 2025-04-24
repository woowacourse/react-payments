import { ErrorMessage, Input, Label, Spacing, Title } from '@/components';
import { ERROR_MESSAGE } from '@/constants';
import { RegisterType } from '@/hooks/useForm';
import { CardCVCNumberInputType } from '@/types/input';

interface CardCVCNumberProps {
  register: RegisterType<CardCVCNumberInputType>;
  cardCVCNumberErrors: CardCVCNumberInputType;
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
          placeholder="123"
          maxLength={3}
          isError={cardCVCNumberErrors.cvc !== ''}
          onFocus={onFocus}
          onBlur={onBlur}
          inputMode="numeric"
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

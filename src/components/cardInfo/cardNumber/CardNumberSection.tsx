import CardInfoHeader from '../cardInfoHeader/CardInfoHeader';
import FormField from '../formField/FormField';
import { Section, InfoInput, ErrorMessage } from '../CardInfo.styles';
import { useCardNumber } from './useCardNumber';
import { useCardForm } from '../../useCardForm';

interface Props {
  field: ReturnType<typeof useCardForm>['cardNumber'];
}

export default function CardNumberSection({ field }: Props) {
  const { value: cardNumber, set: setCardNumber } = field;
  const { error, validate } = useCardNumber(cardNumber);

  return (
    <Section>
      <CardInfoHeader
        title="결제할 카드 번호를 입력해 주세요"
        description="본인 명의의 카드만 결제 가능합니다."
      />
      <FormField label="카드 번호">
        {cardNumber.map((_, index) => (
          <InfoInput
            key={index}
            placeholder="1234"
            maxLength={4}
            value={cardNumber[index]}
            onChange={(e) => {
              const updatedCardNumber = validate(e, index);
              if (updatedCardNumber) setCardNumber(updatedCardNumber);
            }}
            inputMode="numeric"
          />
        ))}
      </FormField>
      <ErrorMessage>{error}</ErrorMessage>
    </Section>
  );
}

import {
  Field,
  InfoInput,
  ErrorMessage,
  Title,
  Description,
  Label,
  InputContainer,
} from '../CardInfo.styles';
import { useCardNumberValidation } from './useCardNumberValidation';
import { useCardForm } from '../../useCardForm';

interface Props {
  field: ReturnType<typeof useCardForm>['cardNumber'];
}
//카드 번호를 입력할수 있는 컴포넌트
export default function CardNumberField({ field }: Props) {
  const { value: cardNumber, set: setCardNumber } = field;
  const { error, validate } = useCardNumberValidation(cardNumber);

  return (
    <Field>
      <Title>결제할 카드 번호를 입력해 주세요</Title>
      <Description>본인 명의의 카드만 결제 가능합니다.</Description>
      <Label>카드 번호</Label>
      <InputContainer>
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
      </InputContainer>
      <ErrorMessage>{error}</ErrorMessage>
    </Field>
  );
}

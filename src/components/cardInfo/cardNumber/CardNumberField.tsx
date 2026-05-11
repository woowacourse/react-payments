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
import { getCardNumberSegments, reshapeCardNumber } from '../../../utils/cardNetwork';
import { useAutoFocus } from '../useAutoFocus';

interface Props {
  field: ReturnType<typeof useCardForm>['cardNumber'];
}
//카드 번호를 입력할수 있는 컴포넌트
export default function CardNumberField({ field }: Props) {
  const { value: cardNumber, set: setCardNumber } = field;
  const { error, validate } = useCardNumberValidation();
  const segments = getCardNumberSegments(cardNumber.join(''));
  const { setRef, focusNext } = useAutoFocus();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    length: number,
  ) => {
    const newValue = e.target.value;
    const updated = reshapeCardNumber(cardNumber, index, newValue);
    if (!validate(updated)) return;
    setCardNumber(updated);
    if (newValue.length === length && index + 1 < updated.length) {
      focusNext(index);
    }
  };

  return (
    <Field>
      <Title>결제할 카드 번호를 입력해 주세요</Title>
      <Description>본인 명의의 카드만 결제 가능합니다.</Description>
      <Label>카드 번호</Label>
      <InputContainer>
        {segments.map((length, index) => (
          <InfoInput
            key={index}
            ref={setRef(index)}
            autoFocus={index === 0}
            placeholder="1234"
            maxLength={length}
            value={cardNumber[index] ?? ''}
            onChange={(e) => handleChange(e, index, length)}
            inputMode="numeric"
          />
        ))}
      </InputContainer>
      <ErrorMessage>{error}</ErrorMessage>
    </Field>
  );
}

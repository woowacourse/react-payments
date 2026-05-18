import {
  Field,
  InfoInput,
  ErrorMessage,
  Title,
  Description,
  Label,
  InputContainer,
} from '../CardFormFields.styles';
import { getCardNumberError, isNumericInput } from '../validator';
import { useCardForm } from '../../useCardForm';
import {
  getCardNumberSegments,
  reshapeCardNumber,
} from '../../../utils/cardNetwork';
import { useAutoFocus } from '../useAutoFocus';
import useBlur from '../useBlur';

interface Props {
  field: ReturnType<typeof useCardForm>['cardNumber'];
  serverError?: string | null;
}
//카드 번호를 입력할수 있는 컴포넌트
export default function CardNumberField({ field, serverError }: Props) {
  const { value: cardNumber, set: setCardNumber } = field;
  const segments = getCardNumberSegments(cardNumber.join(''));
  const { setRef, focusNext } = useAutoFocus();
  const error = getCardNumberError(cardNumber);
  const { touched, handleBlur } = useBlur();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    length: number,
  ) => {
    const newValue = e.target.value;
    if (!isNumericInput(newValue)) return;
    const updated = reshapeCardNumber(cardNumber, index, newValue);
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
            onBlur={handleBlur}
            inputMode="numeric"
          />
        ))}
      </InputContainer>
      <ErrorMessage>{serverError ?? (touched ? error : '')}</ErrorMessage>
    </Field>
  );
}

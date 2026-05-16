import {
  Field,
  InfoInput,
  ErrorMessage,
  Title,
  Description,
  Label,
  InputContainer,
} from '../CardFormFields.styles';
import { getExpireDateError, isNumericInput } from '../validator';
import { useCardForm } from '../../useCardForm';
import { useAutoFocus } from '../useAutoFocus';

interface Props {
  field: ReturnType<typeof useCardForm>['expireDate'];
}
//유효기간을 적을수 있는 컴포넌트
export default function ExpireDateField({ field }: Props) {
  const { value: expireDate, set: setExpireDate } = field;
  const { setRef, focusNext } = useAutoFocus();
  const error = getExpireDateError(expireDate);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = e.target.value;
    if (!isNumericInput(newValue)) return;
    const updated = [...expireDate];
    updated[index] = newValue;
    setExpireDate(updated);
    if (newValue.length === 2 && index === 0) focusNext(0);
  };

  return (
    <Field>
      <Title>카드 유효기간을 입력해 주세요</Title>
      <Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
      <Label>유효기간</Label>
      <InputContainer>
        <InfoInput
          ref={setRef(0)}
          autoFocus
          placeholder="MM"
          maxLength={2}
          value={expireDate[0]}
          onChange={(e) => handleChange(e, 0)}
          inputMode="numeric"
        />
        <InfoInput
          ref={setRef(1)}
          placeholder="YY"
          maxLength={2}
          value={expireDate[1]}
          onChange={(e) => handleChange(e, 1)}
          inputMode="numeric"
        />
      </InputContainer>
      <ErrorMessage>{error}</ErrorMessage>
    </Field>
  );
}

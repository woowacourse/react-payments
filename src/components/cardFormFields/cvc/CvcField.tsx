import {
  Field,
  InfoInput,
  ErrorMessage,
  Title,
  Label,
  InputContainer,
} from '../CardFormFields.styles';
import { getCvcError, isNumericInput } from '../validator';
import { useCardForm } from '../../useCardForm';
import useBlur from '../useBlur';

interface Props {
  field: ReturnType<typeof useCardForm>['cvc'];
}
//cvc를 입력할 수 있는 컴포넌트
export default function CvcField({ field }: Props) {
  const { value: cvc, set: setCvc } = field;
  const error = getCvcError(cvc);
  const { touched, handleBlur } = useBlur();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!isNumericInput(newValue)) return;
    setCvc(newValue);
  };

  return (
    <Field>
      <Title>CVC 번호를 입력해 주세요</Title>
      <Label>CVC</Label>
      <InputContainer>
        <InfoInput
          autoFocus
          placeholder="123"
          maxLength={3}
          value={cvc}
          onChange={handleChange}
          onBlur={handleBlur}
          inputMode="numeric"
        />
      </InputContainer>
      <ErrorMessage>{touched ? error : ''}</ErrorMessage>
    </Field>
  );
}

import {
  Field,
  InfoInput,
  ErrorMessage,
  Title,
  Label,
  InputContainer,
} from '../CardFormFields.styles';
import { useCvcValidation } from './useCvcValidation';
import { useCardForm } from '../../useCardForm';

interface Props {
  field: ReturnType<typeof useCardForm>['cvc'];
}
//cvc를 입력할 수 있는 컴포넌트
export default function CvcField({ field }: Props) {
  const { value: cvc, set: setCvc } = field;
  const { error, validate } = useCvcValidation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!validate(newValue)) return;
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
          inputMode="numeric"
        />
      </InputContainer>
      <ErrorMessage>{error}</ErrorMessage>
    </Field>
  );
}

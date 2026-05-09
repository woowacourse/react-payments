import {
  Field,
  InfoInput,
  ErrorMessage,
  Title,
  Label,
  InputContainer,
} from '../CardInfo.styles';
import { useCvcValidation } from './useCvcValidation';
import { useCardForm } from '../../useCardForm';

interface Props {
  field: ReturnType<typeof useCardForm>['cvc'];
}
//cvc를 입력할 수 있는 컴포넌트
export default function CvcField({ field }: Props) {
  const { value: cvc, set: setCvc } = field;
  const { error, handleChange } = useCvcValidation();

  return (
    <Field>
      <Title>CVC 번호를 입력해 주세요</Title>
      <Label>CVC</Label>
      <InputContainer>
        <InfoInput
          placeholder="123"
          maxLength={3}
          value={cvc}
          onChange={(e) => {
            const updatedCvc = handleChange(e);
            if (updatedCvc !== null) setCvc(updatedCvc);
          }}
          inputMode="numeric"
        />
      </InputContainer>
      <ErrorMessage>{error}</ErrorMessage>
    </Field>
  );
}

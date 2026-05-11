import {
  Description,
  ErrorMessage,
  Field,
  InfoInput,
  InputContainer,
  Label,
  Title,
} from '../CardInfo.styles';
import type { useCardForm } from '../../useCardForm';
import { useCardPasswordValidation } from './useCardPasswordValidation';

interface Props {
  field: ReturnType<typeof useCardForm>['cardPassword'];
}

// 카드 비밀번호 앞 2자리를 입력할 수 있는 컴포넌트
export default function CardPasswordField({ field }: Props) {
  const { value: password, set: setPassword } = field;
  const { error, validate } = useCardPasswordValidation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!validate(newValue)) return;
    setPassword(newValue);
  };

  return (
    <Field>
      <Title>비밀번호를 입력해 주세요</Title>
      <Description>앞의 2자리를 입력해주세요</Description>
      <Label>비밀번호 앞 2자리</Label>
      <InputContainer>
        <InfoInput
          autoFocus
          placeholder="**"
          type="password"
          maxLength={2}
          value={password}
          onChange={handleChange}
          inputMode="numeric"
        />
      </InputContainer>
      <ErrorMessage>{error}</ErrorMessage>
    </Field>
  );
}

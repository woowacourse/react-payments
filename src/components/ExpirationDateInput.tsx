import { InputWrapper } from './InputWrapper';
import { Input } from './Input';

export function ExpirationDateInput() {
  return (
    <InputWrapper width={137}>
      <Input
        width={'24'}
        minLength={2}
        maxLength={2}
        required
        inputMode="numeric"
      />
      &nbsp;/&nbsp;
      <Input
        width={'24'}
        minLength={2}
        maxLength={2}
        required
        inputMode="numeric"
      />
    </InputWrapper>
  );
}

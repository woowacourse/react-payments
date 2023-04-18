import { InputWrapper } from './InputWrapper';
import { Input } from './Input';

export function ExpirationDateInput() {
  return (
    <InputWrapper width={137}>
      <Input about={'24'} minLength={2} maxLength={2} required />
      &nbsp;/&nbsp;
      <Input about={'24'} minLength={2} maxLength={2} required />
    </InputWrapper>
  );
}

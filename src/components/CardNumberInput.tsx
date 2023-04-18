import { InputWrapper } from './InputWrapper';
import { Input } from './Input';

export function CardNumberInput() {
  return (
    <InputWrapper width={318}>
      <Input about={'36'} minLength={4} maxLength={4} required />
      &nbsp;-&nbsp;
      <Input about={'36'} minLength={4} maxLength={4} required />
      &nbsp;-&nbsp;
      <Input
        about={'36'}
        minLength={4}
        maxLength={4}
        type="password"
        required
      />
      &nbsp;-&nbsp;
      <Input
        about={'36'}
        minLength={4}
        maxLength={4}
        type="password"
        required
      />
    </InputWrapper>
  );
}

export function validater(input: string) {
  return !/[^0-9]/.test(input);
}

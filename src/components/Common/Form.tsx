import type { ComponentProps } from 'react';
import Fieldset from './Fieldset';

function Form({
  children,
  disabled,
  ...props
}: ComponentProps<'form'> & { disabled?: ComponentProps<'fieldset'>['disabled'] }) {
  return (
    <form {...props}>
      <Fieldset disabled={disabled}>{children}</Fieldset>
    </form>
  );
}

export default Form;

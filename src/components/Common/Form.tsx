import { type SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import type { ComponentProps } from 'react';
import Fieldset from './Fieldset';

const StyledForm = styled.form<{ style?: never; customStyle?: SerializedStyles }>`
  ${(props) => props.customStyle}
`;

function Form({
  children,
  disabled,
  customStyle,
  ...props
}: ComponentProps<'form'> & {
  disabled?: ComponentProps<'fieldset'>['disabled'];
  style?: never;
  customStyle?: SerializedStyles;
}) {
  return (
    <StyledForm customStyle={customStyle} {...props}>
      <Fieldset disabled={disabled}>{children}</Fieldset>
    </StyledForm>
  );
}

export default Form;

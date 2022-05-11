import styled from '@emotion/styled';
import React, { forwardRef } from 'react';

type Props = {
  className?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  maxlength?: string;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
  css?: any;
};

const Input = styled.input(() => ({
  textAlign: 'center',
  fontSize: '20px',
  border: 'none',
}));

const CardFormInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <Input {...props} ref={ref} />;
});

export default CardFormInput;

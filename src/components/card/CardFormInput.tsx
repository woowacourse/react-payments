import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

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
  width?: string;
  height?: string;
};

const Input = styled.input(
  css`
    text-align: center;
    font-size: 20px;
    border: none;
  `,
  (props) => ({ width: props.width, height: props.height }),
);

const CardFormInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <Input {...props} ref={ref} />;
});

export default CardFormInput;

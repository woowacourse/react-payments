/** @jsxImportSource @emotion/react */

import { COLOR } from '../styles/color';
import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface FormItemProps {
  labelText: string;
  errorMessage?: string;
  children: ReactNode;
}

export default function FormItem({
  labelText,
  errorMessage = '',
  children,
}: FormItemProps) {
  return (
    <div>
      <FormLabel>
        {labelText}
        {children}
      </FormLabel>
      <ErrorText>{errorMessage}</ErrorText>
    </div>
  );
}

const ErrorText = styled.p({
  color: COLOR.error,
  fontSize: '9.5px',
  lineHeight: '13.76px',
  fontWeight: 400,
  marginTop: '5px',
  height: '10px',
});

const FormLabel = styled.label({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '12px',
  fontWeight: 500,
  marginTop: '10px',
  gap: '5px',
});

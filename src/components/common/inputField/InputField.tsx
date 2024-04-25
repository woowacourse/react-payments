import * as React from 'react';
import * as S from './InputField.styled';

export interface InputFieldProps {
  title: string;
  subtitle?: string;
  labelText: string;
  labelFor: string;
  children: React.ReactNode;
}

export default function InputField({
  title,
  subtitle,
  labelText,
  labelFor,
  children,
}: InputFieldProps) {
  return (
    <S.Container>
      <S.Title role="heading" aria-level={1}>
        {title}
      </S.Title>
      {subtitle && (
        <S.Subtitle role="heading" aria-level={2}>
          {subtitle}
        </S.Subtitle>
      )}
      <S.Label htmlFor={labelFor}>{labelText}</S.Label>
      <S.InputWrapper>{children}</S.InputWrapper>
    </S.Container>
  );
}

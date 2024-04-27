import * as React from 'react';
import styled from 'styled-components';

export interface InputContainerProps {
  title: string;
  subtitle?: string;
  labelText?: string;
  labelFor?: string;
  children: React.ReactNode;
}

export default function InputContainer({ title, subtitle, labelText, labelFor, children }: InputContainerProps) {
  return (
    <S.Container>
      <S.UpperWrapper>
        <S.Title>{title}</S.Title>
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      </S.UpperWrapper>
      {labelText && <S.Label htmlFor={labelFor}>{labelText}</S.Label>}
      <S.InputWrapper>{children}</S.InputWrapper>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    margin-top: 10px;
  `,
  UpperWrapper: styled.div`
    margin-bottom: 24px;
  `,
  Title: styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  `,

  Subtitle: styled.h2`
    font-size: 13px;
    font-weight: 300;
    margin-top: 10px;
    color: #8b95a1;
  `,

  Label: styled.label`
    font-size: 15.5px;
    font-weight: 400;
    display: block;
    /* margin-top: 24px; */
    color: #0a0d13;
  `,

  InputWrapper: styled.div`
    display: flex;
    width: 440px;
    justify-content: space-between;
    margin-top: 8px;
  `,
};

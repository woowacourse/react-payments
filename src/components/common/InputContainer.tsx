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
    <Container>
      <UpperWrapper>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </UpperWrapper>
      {labelText && <Label htmlFor={labelFor}>{labelText}</Label>}
      <InputWrapper>{children}</InputWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10px;
`;

const UpperWrapper = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: 13px;
  font-weight: 300;
  margin-top: 10px;
  color: #8b95a1;
`;

export const Label = styled.label`
  font-size: 15.5px;
  font-weight: 400;
  display: block;
  /* margin-top: 24px; */
  color: #0a0d13;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 440px;
  justify-content: space-between;
  margin-top: 8px;
`;

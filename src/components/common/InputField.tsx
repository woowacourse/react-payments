import * as React from 'react';
import styled from 'styled-components';

export interface InputFieldProps {
  title: string;
  subtitle?: string;
  labelText: string;
  labelFor: string;
  children: React.ReactNode;
}

export default function InputField({ title, subtitle, labelText, labelFor, children }: InputFieldProps) {
  return (
    <Container>
      <Title role="heading" aria-level={1}>
        {title}
      </Title>
      {subtitle && (
        <Subtitle role="heading" aria-level={2}>
          {subtitle}
        </Subtitle>
      )}
      <Label htmlFor={labelFor}>{labelText}</Label>
      <InputWrapper>{children}</InputWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

const Subtitle = styled.div`
  font-size: 13px;
  font-weight: 300;
  margin: 10px 0 12px 0;
  color: #8b95a1;
`;

const Label = styled.label`
  font-size: 15.5px;
  font-weight: 400;
  display: block;
  margin-top: 24px;
  color: #0a0d13;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 440px;
  justify-content: space-between;
  margin-top: 8px;
`;

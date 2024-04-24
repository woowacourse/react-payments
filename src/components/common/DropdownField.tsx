import * as React from 'react';
import styled from 'styled-components';

export interface DropdownFieldProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function DropdownField({ title, subtitle, children }: DropdownFieldProps) {
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
      <SelectWrapper>{children}</SelectWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: 10px 0;
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

const SelectWrapper = styled.div`
  margin-top: 8px;
`;

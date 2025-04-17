import { ReactNode } from 'react';
import styled from 'styled-components';

interface InputSectionProps {
  title: string;
  caption?: string;
  children: ReactNode;
}

function InputSection({ title, caption, children }: InputSectionProps) {
  return (
    <Section>
      <TitleWrapper>
        <Title>{title}</Title>
        <Caption>{caption}</Caption>
      </TitleWrapper>
      {children}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

const Caption = styled.p`
  font-weight: 400;
  font-size: 9.5px;
  color: #8b95a1;
`;

export default InputSection;

import { ReactNode } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.p`
  font-family: NotoSansKR;
  font-weight: 700;
  font-size: 18px;
`;

const Caption = styled.p`
  font-family: NotoSansKR;
  font-weight: 400;
  font-size: 9.5px;
  color: #8b95a1;
`;

function InputSection({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: ReactNode;
}) {
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

export default InputSection;

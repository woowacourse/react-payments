import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type InfoProps = {
  title: string;
  description?: string;
  inputTitle: string;
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  height: 26px;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
`;

const DescriptionContainer = styled.div`
  height: 14px;
`;

const Description = styled.span`
  line-height: 0.875rem;
  font-size: 0.5938rem;
  font-weight: 400;
  color: #8b95a1;
`;

const Span = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.9375rem;
`;

const SpanWrapper = styled.div``;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const TitleDescriptionWrapper = styled.div`
  display: 'flex';
  flex-direction: 'column';
  gap: '4px';
`;

const TitleChildrenWrapper = styled.div`
  display: 'flex';
  flex-direction: 'column';
  gap: '8px';
`;

export default function InputSection({
  title,
  description,
  inputTitle,
  children,
}: PropsWithChildren<InfoProps>) {
  return (
    <Section>
      <TitleDescriptionWrapper>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        {description ? (
          <DescriptionContainer>
            <Description>{description}</Description>
          </DescriptionContainer>
        ) : null}
      </TitleDescriptionWrapper>
      <TitleChildrenWrapper>
        <SpanWrapper>
          <Span>{inputTitle}</Span>
        </SpanWrapper>
        <InputWrapper>{children}</InputWrapper>
      </TitleChildrenWrapper>
    </Section>
  );
}

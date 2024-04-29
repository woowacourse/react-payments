import { styled } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  height: 26px;
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
`;

export const DescriptionContainer = styled.div`
  height: 14px;
`;

export const Description = styled.span`
  line-height: 0.875rem;
  font-size: 0.5938rem;
  font-weight: 400;
  color: #8b95a1;
`;

export const Span = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.9375rem;
`;

export const SpanWrapper = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const TitleDescriptionWrapper = styled.div`
  display: 'flex';
  flex-direction: 'column';
  gap: '4px';
`;

export const TitleChildrenWrapper = styled.div`
  display: 'flex';
  flex-direction: 'column';
  gap: '8px';
`;

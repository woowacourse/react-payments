import styled from '@emotion/styled';

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return <Title>{children}</Title>;
}

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;

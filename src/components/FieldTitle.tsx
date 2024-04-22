import styled from 'styled-components';

interface Props {
  title: string;
  subtitle?: string;
}

export default function FieldTitle({ title, subtitle }: Props) {
  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </>
  );
}

const Title = styled.h1`
  color: #000;
  font-size: 18px;
  margin-bottom: 4px;
`;

const SubTitle = styled.p`
  color: #8b95a1;
  font-size: 9.5px;
  margin-bottom: 16px;
`;

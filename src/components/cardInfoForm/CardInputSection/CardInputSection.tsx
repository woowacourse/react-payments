import styled from '@emotion/styled';
import { StepType } from '../../../constants/step';

interface CardInputSectionProps {
  title: string;
  description?: string;
  errorMessage: string;
  children: React.ReactElement;
  name: StepType;
}

function CardInputSection({
  title,
  description,
  errorMessage,
  children,
  name,
}: CardInputSectionProps) {
  return (
    <Wrapper id={name}>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {children}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
}

export default CardInputSection;

const Wrapper = styled.section<{ id: StepType }>`
  width: 100%;
  height: ${({ id }) => (id === 'CardCompany' ? '84' : '114')}px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 4px;
`;

const Description = styled.p`
  font-size: 10px;
  color: #8b95a1;
`;

const ErrorMessage = styled.p`
  font-size: 10px;
  color: red;
  margin-top: 4px;
  height: 16px;
`;

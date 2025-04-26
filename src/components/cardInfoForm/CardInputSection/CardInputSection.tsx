import styled from '@emotion/styled';
import { StepType } from '../../../App';

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
    <section id={name}>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {children}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </section>
  );
}

export default CardInputSection;

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
`;

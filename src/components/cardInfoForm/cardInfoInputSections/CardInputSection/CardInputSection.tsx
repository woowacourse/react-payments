import styled from '@emotion/styled';

interface CardInputSectionProps {
  title: string;
  description?: string;
  errorMessage: string;
  children: React.ReactElement;
}

function CardInputSection({
  title,
  description,
  errorMessage,
  children,
}: CardInputSectionProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {children}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
}

export default CardInputSection;

const Wrapper = styled.section``;

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

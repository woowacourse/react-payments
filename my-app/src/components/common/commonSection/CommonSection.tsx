import {
  Container,
  Description,
  Error,
  Header,
  InputGroup,
  InputSection,
  Label,
  Title,
} from './CommonSection.styles';

interface Props {
  title: string;
  description: string;
  label: string;
  children: React.ReactNode;
  errorMessage: string;
  htmlFor: string;
}

export default function CommonSection({
  title,
  description,
  label,
  children,
  errorMessage,
  htmlFor,
}: Props) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Header>
      <InputSection>
        <Label htmlFor={htmlFor}>{label}</Label>
        <InputGroup>{children}</InputGroup>
        <Error>{errorMessage}</Error>
      </InputSection>
    </Container>
  );
}

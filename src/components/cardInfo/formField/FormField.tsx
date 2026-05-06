import { Wrapper, Label, InputContainer } from './FormField.styles';

interface Props {
  label: string;
  children: React.ReactElement[] | React.ReactElement;
}

export default function FormField({ label, children }: Props) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputContainer>{children}</InputContainer>
    </Wrapper>
  );
}

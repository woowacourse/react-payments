import {
  CardInfoInputWrapper,
  CardInfoInputLabel,
  InputContainer,
} from "./CardInfoInput.styles";

interface CardInfoInputProps {
  inputTitle: string;
  children: React.ReactElement[] | React.ReactElement;
}

export default function CardInfoInput({
  inputTitle,
  children,
}: CardInfoInputProps) {
  return (
    <CardInfoInputWrapper>
      <CardInfoInputLabel>{inputTitle}</CardInfoInputLabel>
      <InputContainer>{children}</InputContainer>
    </CardInfoInputWrapper>
  );
}

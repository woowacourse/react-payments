import * as S from './InputField.style';

interface InputFieldProps {
  label: string;
  errorMessage: string;
  length: number;
  children: React.ReactNode;
}

export default function InputField({ label, errorMessage, length, children }: InputFieldProps) {
  return (
    <S.InputField>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputContainer $length={length}>{children}</S.InputContainer>
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.InputField>
  );
}

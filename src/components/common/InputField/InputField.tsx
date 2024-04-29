import * as S from './InputField.style';

type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};

interface InputFieldProps {
  label: string;
  inputCount: number;
  errorMessage?: string;
}

const InputField = ({ label, errorMessage, inputCount, children }: StrictPropsWithChildren<InputFieldProps>) => {
  return (
    <S.InputField>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputContainer $inputCount={inputCount}>
        {children}
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </S.InputContainer>
    </S.InputField>
  );
};

export default InputField;

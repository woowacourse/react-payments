import * as S from './style';

type Props = {
  children: React.ReactNode;
  errorMessage: string | null;
};

function InputLayout({ children, errorMessage }: Props) {
  return (
    <S.InputLayout>
      {children}
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputLayout>
  );
}

export default InputLayout;

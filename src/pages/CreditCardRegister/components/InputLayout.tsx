import * as S from '../style';

type Props = {
  children: React.ReactNode;
  errorMessage: string | null;
};

function InputLayout({ children, errorMessage }: Props) {
  return (
    <S.RelativeBox>
      {children}
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.RelativeBox>
  );
}

export default InputLayout;

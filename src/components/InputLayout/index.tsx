import * as S from './style';
import { InputLayoutProps } from './type';

function InputLayout({ children, errorMessage }: InputLayoutProps) {
  return (
    <S.InputLayout>
      {children}
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputLayout>
  );
}

export default InputLayout;

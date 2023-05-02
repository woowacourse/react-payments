import { ReactNode } from 'react';
import * as S from './style';

interface CreditCardRegisterLayoutProps {
  children: ReactNode;
}
function CreditCardRegisterLayout({ children }: CreditCardRegisterLayoutProps) {
  return <S.CreditCardRegisterLayout>{children}</S.CreditCardRegisterLayout>;
}

export default CreditCardRegisterLayout;

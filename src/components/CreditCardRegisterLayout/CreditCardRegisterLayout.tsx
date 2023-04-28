import { PropsWithChildren } from 'react';
import * as S from './style';

function CreditCardRegisterLayout({ children }: PropsWithChildren) {
  return (
    <S.CreditCardRegisterLayout>
      {children}
    </S.CreditCardRegisterLayout>
  );
}

export default CreditCardRegisterLayout;

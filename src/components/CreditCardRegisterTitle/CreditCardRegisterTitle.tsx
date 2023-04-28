import { PropsWithChildren } from 'react';
import * as S from './style';

function CreditCardRegisterTitle({ children }: PropsWithChildren) {
  return (
    <S.CreditCardRegisterTitle>
      {children}
    </S.CreditCardRegisterTitle>
  );
}

export default CreditCardRegisterTitle;

import { ReactNode } from 'react';
import * as S from './style';

interface CreditCardRegisterTopSheetProps {
  children: ReactNode;
}
function CreditCardRegisterTopSheet({
  children,
}: CreditCardRegisterTopSheetProps) {
  return (
    <S.CreditCardRegisterTopSheet>{children}</S.CreditCardRegisterTopSheet>
  );
}

export default CreditCardRegisterTopSheet;

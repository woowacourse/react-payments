import { PropsWithChildren } from 'react';
import * as S from './style';

function PreviewCreditCard({ children }: PropsWithChildren) {
  return (
    <S.PreviewCreditCard>
      {children}
    </S.PreviewCreditCard>
  );
}

export default PreviewCreditCard;

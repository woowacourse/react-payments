import * as S from './ErrorMessage.styles';
import { PropsWithChildren } from 'react';

export default function ErrorMessage({ children }: PropsWithChildren) {
  if (!children) return null;
  return <S.ErrorBox>{children}</S.ErrorBox>;
}

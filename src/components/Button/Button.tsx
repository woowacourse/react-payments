import * as S from './Button.styles';
import { PropsWithChildren } from 'react';

export default function Button({ children }: PropsWithChildren) {
  return <S.AddCardFormButton type="submit">{children}</S.AddCardFormButton>;
}

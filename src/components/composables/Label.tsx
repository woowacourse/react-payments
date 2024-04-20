import { PropsWithChildren, LabelHTMLAttributes } from 'react';
import * as S from './label.style';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ children, ...props }: PropsWithChildren<LabelProps>) {
  return <S.Label {...props}>{children}</S.Label>;
}

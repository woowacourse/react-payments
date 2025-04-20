import * as S from './Title.styles';
import { forwardRef, PropsWithChildren } from 'react';

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  description?: string;
}

export default forwardRef<HTMLDivElement, PropsWithChildren<TitleProps>>(function Title(
  { children, description, ...props },
  ref,
) {
  return (
    <S.TitleBox ref={ref} {...props}>
      <S.Title>{children}</S.Title>
      {description && <S.Description>{description}</S.Description>}
    </S.TitleBox>
  );
});

import { forwardRef } from 'react';
import { Styled as S } from './Icon.styles';

export interface IconProps extends React.ComponentPropsWithoutRef<'span'> {
  imgSrc?: string;
  name?: string;
}

type Ref = HTMLSpanElement;

export const Icon = forwardRef<Ref, IconProps>(({ imgSrc, name, ...props }, ref) => {
  return (
    <S.Icon {...props} ref={ref}>
      <img src={`${process.env.PUBLIC_URL}${imgSrc ?? 'default'}`} alt={imgSrc} />
      <S.CardName>{name}</S.CardName>
    </S.Icon>
  );
});

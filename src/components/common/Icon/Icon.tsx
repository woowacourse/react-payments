import { Styled as S } from './Icon.styles';

export interface IconProps extends React.ComponentPropsWithoutRef<'span'> {
  imgSrc?: string;
  name?: string;
}

export const Icon = ({ imgSrc, name, ...props }: IconProps) => {
  return (
    <S.Icon {...props}>
      <img src={`${process.env.PUBLIC_URL}${imgSrc ?? 'default'}`} alt={imgSrc} />
      <S.CardName>{name}</S.CardName>
    </S.Icon>
  );
};

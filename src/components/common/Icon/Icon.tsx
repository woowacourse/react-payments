import { forwardRef } from 'react';
import styled from 'styled-components';

export interface IconProps extends React.ComponentPropsWithoutRef<'span'> {
  imgSrc?: string;
  name?: string;
}

type Ref = HTMLSpanElement;

export const Icon = forwardRef<Ref, IconProps>(({ imgSrc, name, ...props }, ref) => {
  return (
    <Styled.Icon {...props} ref={ref}>
      <img src={`${process.env.PUBLIC_URL}${imgSrc ?? 'default'}`} alt={imgSrc} />
      <Styled.CardName>{name}</Styled.CardName>
    </Styled.Icon>
  );
});

const Styled = {
  Icon: styled.span<IconProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 37px;
    height: 37px;
    margin: 30px 20px 35px 20px;
    cursor: pointer;
  `,
  CardName: styled.span`
    width: 70px;
    height: 15px;
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
  `,
};

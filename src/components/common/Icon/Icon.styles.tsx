import styled from 'styled-components';
import { IconProps } from './Icon';

export const Styled = {
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

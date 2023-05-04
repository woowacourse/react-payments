import styled from 'styled-components';
import { CardColorProps } from './CreditCard';
import { CARDS_INFO, COMPANY_LIST } from '../../../constants';

export const Styled = {
  Wrapper: styled.div<CardColorProps>`
    position: relative;
    width: 213px;
    height: 133px;
    background-color: ${({ backgroundColor }) =>
      CARDS_INFO[Object.values(COMPANY_LIST).indexOf(backgroundColor)].color ?? 'black'};
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    color: ${({ backgroundColor }) => (backgroundColor === '카카오뱅크' ? '#3A1D1D' : 'white')};
    z-index: 1;
    cursor: pointer;
  `,
  Chip: styled.div`
    position: absolute;
    width: 40px;
    height: 26px;
    left: 14px;
    top: 47px;
    background: #cbba64;
    border-radius: 4px;
  `,

  CardNumbers: styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 169px;
    height: 10px;
    left: 24px;
    top: 84px;
    span {
      width: 34px;
      font-size: 14px;
    }
  `,

  Container: styled.div`
    position: absolute;
    width: 174px;
    height: 10px;
    left: 19px;
    top: 107px;
    display: flex;
    justify-content: space-between;
  `,

  Bank: styled.span`
    position: absolute;
    top: 11px;
    left: 13px;
    font-size: 12px;
  `,

  Name: styled.span`
    width: 140px;
    height: 12px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  ExpirationDate: styled.div`
    font-size: 12px;
    width: 40px;
    height: 10px;
    display: flex;
  `,

  Month: styled.span`
    width: 20px;
    text-align: center;
  `,

  Year: styled.span`
    width: 20px;
    text-align: center;
  `,

  DateSeparator: styled.span`
    width: 6px;
    text-align: center;
  `,
};

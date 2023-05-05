import styled from 'styled-components';

import { COLOR } from '../../constants/card';
import { generateFontColor } from '../../domains/colorGenerator';

export const CardBox = styled.div<Record<'backgroundColor', string | null>>`
  position: relative;
  width: 220px;
  height: 140px;

  padding: ${props => (props.backgroundColor ? '12px 16px' : '')};

  background-color: ${props => props.backgroundColor ?? COLOR.DEFAULT};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  color: ${props => generateFontColor(props.backgroundColor)};

  font-size: 12px;
  letter-spacing: 0.1em;

  cursor: pointer;
`;

export const EmptyCardBox = styled.div<Record<'company', string>>`
  display: ${props => (props.company ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border-radius: 5px;
  background-color: ${COLOR.GREY200};
  opacity: 0.6;

  & > p {
    font-size: x-large;
    font-weight: 700;
  }
`;

export const CardNameParagraph = styled.p`
  position: absolute;
`;

export const RectangleBox = styled.div<
  Record<'backgroundColor', string | null>
>`
  display: ${props =>
    props.backgroundColor === COLOR.DEFAULT ? 'none' : 'block'};
  width: 40px;
  height: 26px;

  position: absolute;
  top: 52px;
  left: 18px;

  background: ${COLOR.GOLD};
  border-radius: 4px;
`;

export const CardInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 100%;
`;

export const SerialNumberBox = styled.div<
  Record<'backgroundColor', string | null>
>`
  margin-bottom: 12px;

  letter-spacing: 0.2em;

  input {
    width: 25%;
    font-size: 12px;
    letter-spacing: 2px;
    color: white;
    color: ${props => generateFontColor(props.backgroundColor)};
    background-color: inherit;
    border: none;
    text-align: center;
  }
`;

export const OwnerNameAndExpirationDateBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  padding: 0 4px;
`;

export const OwnerNameParagraph = styled.p`
  width: 50%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ExpirationDateParagraph = styled.p``;

import styled from 'styled-components';
import { COLOR } from '../../constants/cardInfo';

export const Card = styled.div`
  position: relative;
  width: 220px;
  height: 140px;

  padding: ${props => (props.theme === COLOR.DEFAULT ? '' : '12px 16px')};

  background-color: ${props => props.theme ?? COLOR.DEFAULT};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  color: ${props => (props.theme === '#FFE600' ? COLOR.BLACK : COLOR.WHITE)};

  font-size: 12px;
  letter-spacing: 0.1em;

  cursor: pointer;
`;

export const EmptyCardCover = styled.div<Record<'cardCompany', string>>`
  display: ${props => (props.cardCompany ? 'none' : 'flex')};
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

export const CardName = styled.p`
  position: absolute;
`;

export const Rectangle = styled.div`
  display: ${props => (props.theme === COLOR.DEFAULT ? 'none' : 'block')};
  width: 40px;
  height: 26px;

  position: absolute;
  top: 52px;
  left: 18px;

  background: ${COLOR.GOLD};
  border-radius: 4px;
`;

export const CardInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 100%;
`;

export const CardNumber = styled.div`
  margin-bottom: 12px;

  letter-spacing: 0.2em;

  input {
    width: 25%;
    font-size: 12px;
    letter-spacing: 2px;
    color: white;
    color: ${props => (props.theme === '#FFE600' ? COLOR.BLACK : COLOR.WHITE)};
    background-color: inherit;
    border: none;
    text-align: center;
  }
`;

export const Ellipse = styled.div`
  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: ${props => (props.color ? props.color : COLOR.WHITE)};
`;

export const CardNameAndExpirationDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  padding: 0 4px;
`;

export const OwnerName = styled.p`
  width: 50%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ExpirationDate = styled.p``;

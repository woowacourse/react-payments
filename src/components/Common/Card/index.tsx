/* eslint-disable react/no-array-index-key */

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Dot } from '../../../assets/white-dot.svg';
import type { CardInformation } from './types';

interface CardProps {
  cardInformation?: CardInformation;
  isAddForm: boolean;
}

const defaultCardInformation: CardInformation = {
  cardNumber: ['', '', '', ''],
  expirationDate: ['MM', 'YY'],
  owner: ['NAME'],
};

function Card({ cardInformation = defaultCardInformation, isAddForm }: CardProps) {
  const { cardNumber, expirationDate, owner } = cardInformation;
  return (
    <StyledCardContainer isAddFrom={isAddForm}>
      {isAddForm ? (
        <>
          <StyledICChipTemplate />
          <StyledCardInfoTemplate>
            <StyledCardNumberTemplate>
              {cardNumber?.map((number, index) =>
                index < 2 ? (
                  <StyledCardNumberItem key={index}>{number}</StyledCardNumberItem>
                ) : (
                  <StyledCardNumberItem key={index}>
                    {Array.from({ length: number?.length }, (_, dotIndex) => (
                      <Dot key={dotIndex} />
                    ))}
                  </StyledCardNumberItem>
                ),
              )}
            </StyledCardNumberTemplate>
            <StyledCardDetail>
              {owner && <div>{owner[0].slice(0, 12)}</div>}
              {expirationDate && (
                <div>
                  {expirationDate[0]?.padStart(2, '0')}/{expirationDate[1]?.padStart(2, '0')}
                </div>
              )}
            </StyledCardDetail>
          </StyledCardInfoTemplate>
        </>
      ) : (
        <Link to="/registration">
          <StyledAddButton type="button">+</StyledAddButton>
        </Link>
      )}
    </StyledCardContainer>
  );
}

const StyledCardContainer = styled.div<{ isAddFrom: boolean }>`
  position: relative;
  width: 214px;
  height: 134px;
  background-color: ${props => (props.isAddFrom ? `#333333` : `#E5E5E5`)};
  font-size: 18px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: white;
`;

const StyledICChipTemplate = styled.div`
  position: absolute;
  width: 40px;
  height: 26px;
  left: 14px;
  top: 48px;

  background: #cbba64;
  border-radius: 4px;
`;

const StyledCardNumberTemplate = styled.div`
  display: flex;
  height: 18px;
  & > * {
    min-width: 44px;
    margin-right: 4px;
  }
`;

const StyledCardNumberItem = styled.div`
  display: flex;
  align-items: center;
  & > * {
    width: 9px;
  }
`;

const StyledCardInfoTemplate = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 80px;
  width: 100%;
  padding: 0 18px;
`;

const StyledCardDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 14px;
`;

const StyledAddButton = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  font-size: 30px;
`;

export default Card;

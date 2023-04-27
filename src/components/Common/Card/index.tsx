/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Dot } from '../../../assets/dot.svg';
import {
  CARD_EXPIRATION_MONTH_LENGTH,
  CARD_EXPIRATION_YEAR_LENGTH,
  CARD_NUMBER_LENGTH,
  CARD_NUMBER_VISIBLE_LENGTH,
} from '../../../constants';
import { CARD_COMPANY_COLOR_MAP } from '../../../data/bankList';
import type { CardInformation } from './types';

interface CardProps {
  cardInformation?: CardInformation;
  isAddForm: boolean;
  isShowName?: boolean;
}

const defaultCardInformation: CardInformation = {
  bankName: '',
  cardNumber: ['', '', '', ''],
  expirationDate: ['MM', 'YY'],
  owner: ['NAME'],
};

function Card({ cardInformation = defaultCardInformation, isAddForm, isShowName = false }: CardProps) {
  const { cardName, bankName, cardNumber, expirationDate, owner } = cardInformation;
  const { color, background } = CARD_COMPANY_COLOR_MAP[bankName === '' ? 'default' : bankName];

  return (
    <StyledCardContainer>
      <StyledCard isAddFrom={isAddForm} textColor={color} backgroundColor={background}>
        {isAddForm ? (
          <>
            <StyledBankName>{bankName}</StyledBankName>
            <StyledICChipTemplate />
            <StyledCardInfoTemplate>
              <StyledCardNumberTemplate>
                {cardNumber?.map((number, index) =>
                  index < CARD_NUMBER_LENGTH / CARD_NUMBER_VISIBLE_LENGTH ? (
                    <StyledCardNumberItem key={index}>{number}</StyledCardNumberItem>
                  ) : (
                    <StyledCardNumberItem key={index}>
                      {Array.from({ length: number?.length }, (_, dotIndex) => (
                        <Dot key={dotIndex} fill={color} />
                      ))}
                    </StyledCardNumberItem>
                  ),
                )}
              </StyledCardNumberTemplate>
              <StyledCardDetail>
                {owner && <div>{owner[0].slice(0, 12)}</div>}
                {expirationDate && (
                  <div>
                    {expirationDate.at(0)?.padStart(CARD_EXPIRATION_MONTH_LENGTH, '0')}/
                    {expirationDate.at(1)?.padStart(CARD_EXPIRATION_YEAR_LENGTH, '0')}
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
      </StyledCard>
      {isShowName && cardName && <StyledCardName>{cardName}</StyledCardName>}
    </StyledCardContainer>
  );
}

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
`;

const StyledCard = styled.div<{
  isAddFrom: boolean;
  textColor?: string;
  backgroundColor?: string;
}>`
  position: relative;
  width: 214px;
  height: 134px;
  & > * {
    color: ${({ textColor }) => textColor ?? `#FFFFFF`};
  }
  background-color: ${({ isAddFrom, backgroundColor }) => (isAddFrom ? backgroundColor ?? `#525252` : `#E5E5E5`)};
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

const StyledBankName = styled.div`
  position: absolute;
  top: 12px;
  left: 14px;
  font-size: 12px;
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

const StyledCardName = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`;

const StyledAddButton = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  font-size: 30px;
`;

export default Card;

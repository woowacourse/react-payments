import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Dot } from '../assets/white-dot.svg';
import type { CardInformation } from '../domain/types/card';

const OWNER_VISIBLE_LENGTH = 12;
const CARD_NUMBER = {
  VISIBLE_LENGTH: 8,
  EACH_LENGTH: 4,
};

// TODO: ObjectValuesUnion 타입이 어디에 있어야 할지?
type ObjectValuesUnion<T> = T[keyof T];

export const CARD_TYPE = {
  REGISTER_BUTTON: 'REGISTER_BUTTON',
  DEFAULT: 'DEFAULT',
} as const;

type CardTypeUnion = ObjectValuesUnion<typeof CARD_TYPE>;

const BACKGROUND_COLOR = {
  REGISTER_BUTTON: '#E5E5E5',
  DEFAULT: '#333333',
} as const;

type CardConatinerProps = {
  cardType: CardTypeUnion;
};

const CardContainer = styled.div<CardConatinerProps>`
  position: relative;
  width: 214px;
  height: 134px;
  background-color: ${props => BACKGROUND_COLOR[props.cardType]};
  font-size: 18px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: white;
`;

const ICChipTemplate = styled.div`
  position: absolute;
  width: 40px;
  height: 26px;
  left: 14px;
  top: 48px;

  background: #cbba64;
  border-radius: 4px;
`;

const CardNumberTemplate = styled.div`
  display: flex;
  height: 18px;
  & > * {
    min-width: 44px;
    margin-right: 4px;
  }
`;

const CardNumberItem = styled.div`
  display: flex;
  align-items: center;
  & > * {
    width: 9px;
  }
`;

const CardInfoTemplate = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 80px;
  width: 100%;
  padding: 0 18px;
`;

const CardDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 14px;
`;

const AddButton = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  }
`;

interface CardProps {
  cardInformation?: CardInformation;
  cardType: CardTypeUnion;
}

const defaultCardInformation: CardInformation = {
  cardNumber: ['', '', '', ''],
  expirationDate: { year: 'YY', month: 'MM' },
  owner: 'NAME',
};

function Card({ cardInformation = defaultCardInformation, cardType }: CardProps) {
  const { cardNumber, expirationDate, owner } = cardInformation;

  return (
    <CardContainer cardType={cardType}>
      {cardType === CARD_TYPE.REGISTER_BUTTON && (
        <Link to="/registration">
          <AddButton type="button">+</AddButton>
        </Link>
      )}
      {cardType === CARD_TYPE.DEFAULT && (
        <>
          <ICChipTemplate />
          <CardInfoTemplate>
            <CardNumberTemplate>
              {cardNumber?.map((number, index) =>
                index < CARD_NUMBER.VISIBLE_LENGTH / CARD_NUMBER.EACH_LENGTH ? (
                  <CardNumberItem>{number}</CardNumberItem>
                ) : (
                  <CardNumberItem>
                    {Array.from({ length: number.length }, () => (
                      <Dot />
                    ))}
                  </CardNumberItem>
                ),
              )}
            </CardNumberTemplate>
            <CardDetail>
              <div>{owner?.slice(0, OWNER_VISIBLE_LENGTH)}</div>
              {expirationDate && (
                <div>
                  {expirationDate.month.padStart(2, '0')}/{expirationDate.year.padStart(2, '0')}
                </div>
              )}
            </CardDetail>
          </CardInfoTemplate>
        </>
      )}
    </CardContainer>
  );
}

export default Card;

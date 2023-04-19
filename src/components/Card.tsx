import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div<{ isAddFrom: boolean }>`
  position: relative;
  width: 214px;
  height: 134px;
  background-color: ${props => (props.isAddFrom ? `#333333` : `#E5E5E5`)};
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
  justify-content: space-between;
  height: 18px;
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
`;

interface CardProps {
  cardInformation?: CardInformation;
  isAddForm: boolean;
}

interface CardInformation {
  cardNumber: CardNumber;
  expirationDate: ExpirationDate;
  owner?: string;
}

type CardNumber = [string, string, string, string];

interface ExpirationDate {
  year: string;
  month: string;
}

export type { CardInformation, CardNumber };

const defaultCardInformation: CardInformation = {
  cardNumber: ['', '', '', ''],
  expirationDate: { year: 'YY', month: 'MM' },
  owner: 'NAME',
};

function Card({ cardInformation = defaultCardInformation, isAddForm }: CardProps) {
  const { cardNumber, expirationDate, owner } = cardInformation;
  return (
    <CardContainer isAddFrom={isAddForm}>
      {isAddForm ? (
        <>
          <ICChipTemplate />
          <CardInfoTemplate>
            <CardNumberTemplate>
              {cardNumber?.map(number => (
                <div>{number}</div>
              ))}
            </CardNumberTemplate>
            <CardDetail>
              <div>{owner}</div>
              {expirationDate && (
                <div>
                  {expirationDate.month.padStart(2, '0')}/{expirationDate.year}
                </div>
              )}
            </CardDetail>
          </CardInfoTemplate>
        </>
      ) : (
        <Link to="/registration">
          <AddButton type="button">+</AddButton>
        </Link>
      )}
    </CardContainer>
  );
}

export default Card;

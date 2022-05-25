import styled from 'styled-components';
import { CARD_SIZE, DEFAULT_TEXT } from 'constant';
import { CARD_NUMBER_MARK, DATE_SEPARATOR } from 'constant/mark';

const sizeTable = {
  cardContainer: {
    [CARD_SIZE.MEDIUM]: {
      width: '213px',
      height: '133px',
      padding: '14px 14px 0',
    },
    [CARD_SIZE.LARGE]: {
      width: '293px',
      height: '183px',
      padding: '19px 19px 0',
    },
  },
  cardCompanyName: {
    [CARD_SIZE.MEDIUM]: {
      fontSize: '10px',
      lineHeight: '12px',
    },
    [CARD_SIZE.LARGE]: {
      fontSize: '14px',
      lineHeight: '16px',
    },
  },
  IC: {
    [CARD_SIZE.MEDIUM]: {
      width: '40px',
      height: '26px',
      marginTop: '16px',
    },
    [CARD_SIZE.LARGE]: {
      width: '55px',
      height: '36px',
      marginTop: '30px',
    },
  },
  cardNumberContainer: {
    [CARD_SIZE.MEDIUM]: {
      marginTop: '15px',
      fontSize: '12px',
      lineHeight: '13px',
    },
    [CARD_SIZE.LARGE]: {
      marginTop: '20px',
      fontSize: '17px',
      lineHeight: '18px',
    },
  },
  cardBottomContainer: {
    [CARD_SIZE.MEDIUM]: {
      marginTop: '15px',
      fontSize: '10px',
      lineHeight: '12px',
    },
    [CARD_SIZE.LARGE]: {
      marginTop: '17px',
      fontSize: '14px',
      lineHeight: '16px',
    },
  },
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ size }) => sizeTable.cardContainer[size].width};
  height: ${({ size }) => sizeTable.cardContainer[size].height};
  padding: ${({ size }) => sizeTable.cardContainer[size].padding};
  background-color: ${props => props.color};
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  cursor: ${props => (props.canClick ? 'pointer' : 'auto')};
`;

const CardCompanyName = styled.span`
  font-weight: 500;
  font-size: ${({ size }) => sizeTable.cardCompanyName[size].fontSize};
  line-height: ${({ size }) => sizeTable.cardCompanyName[size].lineHeight};
  color: #383838;
`;

const IC = styled.div`
  width: ${({ size }) => sizeTable.IC[size].width};
  height: ${({ size }) => sizeTable.IC[size].height};
  margin-top: ${({ size }) => sizeTable.IC[size].marginTop};
  background: #cbba64;
  border-radius: 4px;
`;

const CardNumberContainer = styled.p`
  display: flex;
  justify-content: center;
  gap: 5px;
  height: 10px;
  margin-top: ${({ size }) => sizeTable.cardNumberContainer[size].marginTop};
  font-weight: 700;
  font-size: ${({ size }) => sizeTable.cardNumberContainer[size].fontSize};
  line-height: ${({ size }) => sizeTable.cardNumberContainer[size].lineHeight};
  letter-spacing: 0.1em;
  color: #525252;
`;

const CardBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  margin-top: ${({ size }) => sizeTable.cardBottomContainer[size].marginTop};
  font-weight: 700;
  font-size: ${({ size }) => sizeTable.cardBottomContainer[size].fontSize};
  line-height: ${({ size }) => sizeTable.cardBottomContainer[size].lineHeight};
  letter-spacing: 0.1em;
  color: #525252;
`;

const CardOwnerName = styled.span`
  word-break: break-all;
`;

function Card({
  cardCompany,
  cardNumbers,
  ownerName,
  expiredDate,
  handleClickCard,
  size = CARD_SIZE.MEDIUM,
}) {
  const { name, color } = cardCompany;
  const displayExpiredDate = () => {
    return expiredDate.month || expiredDate.year
      ? `${expiredDate.month}${expiredDate.month.length === 2 ? DATE_SEPARATOR : ''}${
          expiredDate.year
        }`
      : DEFAULT_TEXT.DATE;
  };

  return (
    <CardContainer
      color={color}
      size={size}
      onClick={handleClickCard}
      canClick={handleClickCard !== undefined}
    >
      <CardCompanyName size={size}>{name}</CardCompanyName>
      <IC size={size} />
      <CardNumberContainer size={size}>
        {cardNumbers.map((cardNumber, index) => (
          <span key={cardNumber + index}>
            {index >= 2 ? CARD_NUMBER_MARK.repeat(cardNumber.length) : cardNumber}
          </span>
        ))}
      </CardNumberContainer>
      <CardBottomContainer size={size}>
        <CardOwnerName>{ownerName || DEFAULT_TEXT.NAME}</CardOwnerName>
        <span>{displayExpiredDate()}</span>
      </CardBottomContainer>
    </CardContainer>
  );
}

export default Card;

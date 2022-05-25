import styled from 'styled-components';
import { CARD_SIZE, DEFAULT_TEXT } from 'constant';
import { CARD_NUMBER_MARK, DATE_SEPARATOR } from 'constant/mark';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  background-color: ${props => props.color};
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  cursor: ${props => (props.canClick ? 'pointer' : 'auto')};
`;

const CardCompanyName = styled.span`
  font-weight: 500;
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  color: #383838;
`;

const IC = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-top: ${props => props.marginTop};
  background: #cbba64;
  border-radius: 4px;
`;

const CardNumberContainer = styled.p`
  display: flex;
  justify-content: center;
  gap: 5px;
  height: 10px;
  margin-top: ${props => props.marginTop};
  font-weight: 700;
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  letter-spacing: 0.1em;
  color: #525252;
`;

const CardBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  margin-top: ${props => props.marginTop};
  font-weight: 700;
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  letter-spacing: 0.1em;
  color: #525252;
`;

const CardOwnerName = styled.span`
  word-break: break-all;
`;

const sizeTable = {
  medium: {
    cardContainerSize: {
      width: '213px',
      height: '133px',
      padding: '14px 14px 0',
    },
    cardCompanyNameSize: {
      fontSize: '10px',
      lineHeight: '12px',
    },
    ICSize: {
      width: '40px',
      height: '26px',
      marginTop: '16px',
    },
    cardNumberContainerSize: {
      marginTop: '15px',
      fontSize: '12px',
      lineHeight: '13px',
    },
    cardBottomContainerSize: {
      marginTop: '15px',
      fontSize: '10px',
      lineHeight: '12px',
    },
  },
  large: {
    cardContainerSize: {
      width: '293px',
      height: '183px',
      padding: '19px 19px 0',
    },
    cardCompanyNameSize: {
      fontSize: '14px',
      lineHeight: '16px',
    },
    ICSize: {
      width: '55px',
      height: '36px',
      marginTop: '30px',
    },
    cardNumberContainerSize: {
      marginTop: '20px',
      fontSize: '17px',
      lineHeight: '18px',
    },
    cardBottomContainerSize: {
      marginTop: '17px',
      fontSize: '14px',
      lineHeight: '16px',
    },
  },
};

function Card({
  cardCompany,
  cardNumbers,
  ownerName,
  expiredDate,
  handleClickCard,
  size = CARD_SIZE.MEDIUM,
}) {
  const { name, color } = cardCompany;
  const {
    cardContainerSize,
    cardCompanyNameSize,
    ICSize,
    cardNumberContainerSize,
    cardBottomContainerSize,
  } = sizeTable[size];

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
      onClick={handleClickCard}
      canClick={handleClickCard !== undefined}
      {...cardContainerSize}
    >
      <CardCompanyName {...cardCompanyNameSize}>{name}</CardCompanyName>
      <IC {...ICSize} />
      <CardNumberContainer {...cardNumberContainerSize}>
        {cardNumbers.map((cardNumber, index) => (
          <span key={cardNumber + index}>
            {index >= 2 ? CARD_NUMBER_MARK.repeat(cardNumber.length) : cardNumber}
          </span>
        ))}
      </CardNumberContainer>
      <CardBottomContainer {...cardBottomContainerSize}>
        <CardOwnerName>{ownerName || DEFAULT_TEXT.NAME}</CardOwnerName>
        <span>{displayExpiredDate()}</span>
      </CardBottomContainer>
    </CardContainer>
  );
}

export default Card;

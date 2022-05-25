import {
  CardContainer,
  CardCompanyName,
  IC,
  CardNumberContainer,
  CardBottomContainer,
  CardOwnerName,
  sizeTable,
} from './style';
import { CARD_SIZE, DEFAULT_TEXT } from 'constant';
import { CARD_NUMBER_MARK, DATE_SEPARATOR } from 'constant/mark';

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

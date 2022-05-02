import {
  CardContainer,
  CardCompanyName,
  IC,
  CardNumberContainer,
  CardBottomContainer,
  CardOwnerName,
} from '../../style/card';
import { PLACEHOLDER } from '../../constant';
import { CARD_NUMBER_MARK } from '../../constant/mark';

function Card({ companyName, cardNumbers, ownerName, expiredDate }) {
  return (
    <CardContainer>
      <CardCompanyName>{companyName}</CardCompanyName>
      <IC />
      <CardNumberContainer>
        {cardNumbers.map((cardNumber, index) => (
          <span key={cardNumber + index}>
            {index >= 2 ? CARD_NUMBER_MARK.repeat(cardNumber.length) : cardNumber}
          </span>
        ))}
      </CardNumberContainer>
      <CardBottomContainer>
        <CardOwnerName>{ownerName || PLACEHOLDER.NAME}</CardOwnerName>
        <span>{expiredDate ? expiredDate : PLACEHOLDER.DATE}</span>
      </CardBottomContainer>
    </CardContainer>
  );
}

export default Card;

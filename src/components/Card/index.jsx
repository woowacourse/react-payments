import {
  CardContainer,
  CardCompanyName,
  IC,
  CardNumberContainer,
  CardBottomContainer,
  CardOwnerName,
} from '../../style/card';
import { PLACEHOLDER } from '../../constant';

function Card({ companyName, cardNumbers, ownerName, expiredDate }) {
  return (
    <CardContainer>
      <CardCompanyName>{companyName}</CardCompanyName>
      <IC />
      <CardNumberContainer>
        {cardNumbers.map((cardNumber, index) => (
          <span key={cardNumber + index}>{cardNumber}</span>
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

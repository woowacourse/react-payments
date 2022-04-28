import {
  CardContainer,
  CardCompanyName,
  IC,
  CardNumberContainer,
  CardBottomContainer,
  CardOwnerName,
} from '../../style/card';

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
        <CardOwnerName>{ownerName || 'NAME'}</CardOwnerName>
        <span>{expiredDate ? expiredDate : 'MM/YY'}</span>
      </CardBottomContainer>
    </CardContainer>
  );
}

export default Card;

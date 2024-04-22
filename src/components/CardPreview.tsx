import * as CP from './style/CardPreview.style';
import IcChip from '../asset/IcChip.svg';
import CardBrand from './CardBrand';

import REGEX from '../constants/regex';

const CardPreview = ({ ...props }: CardInfo) => {
  const { cardNumber, expirationMonth, expirationYear, name } = props;

  const secureNumber = (number: string) => {
    return number.replace(REGEX.allNumbers, '∙');
  };

  return (
    <CP.Card>
      <CP.CardHeader>
        <CP.Image src={IcChip} />
        <CardBrand firstCardNumbers={cardNumber[0]} />
      </CP.CardHeader>
      <CP.CardNumbers>
        <CP.CardNumber>{cardNumber[0]}</CP.CardNumber>
        <CP.CardNumber>{cardNumber[1]}</CP.CardNumber>
        <CP.CardNumber>{secureNumber(cardNumber[2])}</CP.CardNumber>
        <CP.CardNumber>{secureNumber(cardNumber[3])}</CP.CardNumber>
      </CP.CardNumbers>
      <CP.CardNameAndExpiration>
        <CP.CardNameContainer>
          <CP.NameLabel>NAME</CP.NameLabel>
          <CP.Name>{name}</CP.Name>
        </CP.CardNameContainer>
        <CP.CardExpirationContainer>
          <CP.ExpirationLabel>EXPIRATION</CP.ExpirationLabel>
          <CP.Expiration>{`${expirationMonth}${expirationMonth ? '/' : ''}${expirationYear}`}</CP.Expiration>
        </CP.CardExpirationContainer>
      </CP.CardNameAndExpiration>
    </CP.Card>
  );
};

export default CardPreview;

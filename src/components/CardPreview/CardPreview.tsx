import IcChip from '../../asset/IcChip.svg'
import CardBrand from '../CardBrand/CardBrand';

import REGEX from '../../constants/regex';

import * as Styled from './CardPreview.styled'

const CardPreview = ({ ...props }: CardInfo) => {
  const { cardNumber, expirationMonth, expirationYear, name } = props;

  const secureNumber = (number: string) => {
    return number.replace(REGEX.allNumbers, '∙');
  };

  return (
    <Styled.Card>
      <Styled.CardHeader>
        <Styled.Image src={IcChip} />
        <CardBrand firstCardNumbers={cardNumber[0]} />
      </Styled.CardHeader>
      <Styled.CardNumbers>
        <Styled.CardNumber>{cardNumber[0]}</Styled.CardNumber>
        <Styled.CardNumber>{cardNumber[1]}</Styled.CardNumber>
        <Styled.CardNumber>{secureNumber(cardNumber[2])}</Styled.CardNumber>
        <Styled.CardNumber>{secureNumber(cardNumber[3])}</Styled.CardNumber>
      </Styled.CardNumbers>
      <Styled.CardNameAndExpiration>
        <Styled.CardNameContainer>
          <Styled.NameLabel>NAME</Styled.NameLabel>
          <Styled.Name>{name}</Styled.Name>
        </Styled.CardNameContainer>
        <Styled.CardExpirationContainer>
          <Styled.ExpirationLabel>EXPIRATION</Styled.ExpirationLabel>
          <Styled.Expiration>{`${expirationMonth}${expirationMonth ? '/' : ''}${expirationYear}`}</Styled.Expiration>
        </Styled.CardExpirationContainer>
      </Styled.CardNameAndExpiration>
    </Styled.Card>
  );
};

export default CardPreview;

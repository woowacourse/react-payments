import { startsWithNumberRegex } from '../../util/startsWithNumberRegex';
import CardNumbersFormSection from '../FormSection/CardNumbersFormSection/CardNumbersFormSection';
import ExpirationDateFormSection from '../FormSection/ExpirationDateFormSection/ExpirationDateFormSection';
import NameFormSection from '../FormSection/NameFormSection/NameFormSection';

import { Container } from './CardInfo.styled';

const CardInfo = ({ ...props }) => {
  const { setCardInfo, cardInfo } = props;

  const changeCardBrand = (cardNumber: string) => {
    if (startsWithNumberRegex(4).test(cardNumber)) {
      return ('Visa');
    } else if (startsWithNumberRegex(51, 55).test(cardNumber)) {
      return ('MasterCard');
    } else {
      return ('none');
    }
  }

  const changeCardNumbers = (cardNumber: string, index: number) => {
    const newCardInfo = [...cardInfo.cardNumbers]
    newCardInfo[index] = cardNumber
    setCardInfo((prev: CardInfo) => ({ ...prev, cardNumbers: newCardInfo, }));
    if (index === 0) {
      setCardInfo((prev: CardInfo) => ({ ...prev, cardBrand: changeCardBrand(cardNumber) }))
    }
  };

  const changeExpiration = ({ month, year }: Expiration) => {
    setCardInfo((prev: CardInfo) => ({
      ...prev,
      expirationMonth: month,
      expirationYear: year,
    }));
  };

  const changeName = (name: string) => {
    setCardInfo((prev: CardInfo) => ({ ...prev, name: name }));
  };

  return (
    <Container>
      <CardNumbersFormSection changeCardNumbers={changeCardNumbers} value={cardInfo.cardNumbers} />
      <ExpirationDateFormSection changeExpiration={changeExpiration} expiration={{ month: cardInfo.expirationMonth, year: cardInfo.expirationYear }} />
      <NameFormSection changeName={changeName} name={cardInfo.name} />
    </Container>
  );
};

export default CardInfo;
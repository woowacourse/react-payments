import { startsWithNumberRegex } from '../../util/startsWithNumberRegex';
import CardNumbersFormSection from '../FormSection/CardNumbersFormSection/CardNumbersFormSection';
import ExpirationDateFormSection from '../FormSection/ExpirationDateFormSection/ExpirationDateFormSection';
import NameFormSection from '../FormSection/NameFormSection/NameFormSection';

import { Container } from './CardInfo.styled';

interface ChangeExpirationProps {
  month: string;
  year: string;
}

const CardInfo = ({ ...props }) => {
  const { changeCardInfo } = props;

  const changeCardBrand = (cardNumber: string[]) => {
    if (startsWithNumberRegex(4).test(cardNumber[0])) {
      return ('Visa');
    } else if (startsWithNumberRegex(51, 55).test(cardNumber[0])) {
      return ('MasterCard');
    } else {
      return ('none');
    }
  }

  const changeCardNumber = (cardNumber: string[]) => {
    changeCardInfo((prev: CardInfo) => ({ ...prev, cardNumber, cardBrand: changeCardBrand(cardNumber) }));
  };

  const changeExpiration = ({ month, year }: ChangeExpirationProps) => {
    changeCardInfo((prev: CardInfo) => ({
      ...prev,
      expirationMonth: month,
      expirationYear: year,
    }));
  };

  const changeName = (name: string) => {
    changeCardInfo((prev: CardInfo) => ({ ...prev, name: name }));
  };

  return (
    <Container>
      <CardNumbersFormSection changeCardNumber={changeCardNumber} />
      <ExpirationDateFormSection changeExpiration={changeExpiration} />
      <NameFormSection changeName={changeName} />
    </Container>
  );
};

export default CardInfo;

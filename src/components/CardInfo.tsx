import Container from './style/CardInfo.style';
import CardNumbersFormSection from './CardNumbersFormSection';
import ExpirationDateFormSection from './ExpirationDateFormSection';
import NameFormSection from './NameFormSection';

const CardInfo = ({ ...props }) => {
  const { changeCardInfo } = props;
  const changeCardNumber = (cardNumber: string[]) => {
    changeCardInfo((prev: CardInfo) => ({ ...prev, cardNumber: cardNumber }));
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

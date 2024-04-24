import Container from './style/CardInfo.style';
import CardNumbersFormSection from './CardNumbersFormSection';
import ExpirationDateFormSection from './ExpirationDateFormSection';
import NameFormSection from './NameFormSection';
import CardCompanyFormSection from './CardCompanyFormSection';
import CVCFormSection from './CVCFormSection';
import PasswordFormSection from './PasswordFormSection';

const CardInfo = ({ ...props }) => {
  const { changeCardInfo } = props;

  const changeCVC = (cvc: string) => {
    changeCardInfo((prev: CardInfo) => ({ ...prev, cvc: cvc }));
  };

  const changeCardCompany = (cardCompany: string) => {
    changeCardInfo((prev: CardInfo) => ({ ...prev, cardCompany: cardCompany }));
  };

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
      <PasswordFormSection></PasswordFormSection>
      <CVCFormSection changeCVC={changeCVC}></CVCFormSection>
      <CardCompanyFormSection
        changeCardCompany={changeCardCompany}
      ></CardCompanyFormSection>
      <CardNumbersFormSection changeCardNumber={changeCardNumber} />
      <ExpirationDateFormSection changeExpiration={changeExpiration} />
      <NameFormSection changeName={changeName} />
    </Container>
  );
};

export default CardInfo;

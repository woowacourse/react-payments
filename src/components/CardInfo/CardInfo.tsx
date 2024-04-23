import useCardInfo from '../../hook/useCardInfo';
import CVCFormSection from '../FormSection/CVCFormSection/CVCFormSection';
import CardNumbersFormSection from '../FormSection/CardNumbersFormSection/CardNumbersFormSection';
import CompanyDropdownFormSection from '../FormSection/CompanyDropdownFormSection/CompanyDropdownFormSection';
import ExpirationDateFormSection from '../FormSection/ExpirationDateFormSection/ExpirationDateFormSection';
import NameFormSection from '../FormSection/NameFormSection/NameFormSection';
import PasswordFormSection from '../FormSection/PasswordFormSection/PasswordFormSection';

import { Container } from './CardInfo.styled';

interface CardInfoProps {
  cardInfo: CardInfo
  setCardInfo: React.Dispatch<React.SetStateAction<CardInfo>>
}

const CardInfo = (props: CardInfoProps) => {
  const { setCardInfo, cardInfo } = props;
  const { changeCompany, changeCardNumbers, changeExpiration, changeName, changeCVC, changePassword } = useCardInfo({ cardInfo, setCardInfo });

  return (
    <Container>
      <PasswordFormSection changePassword={changePassword} password={cardInfo.password} />
      <CVCFormSection changeCVC={changeCVC} cvc={cardInfo.cvc} />
      <NameFormSection changeName={changeName} name={cardInfo.name} />
      <ExpirationDateFormSection changeExpiration={changeExpiration} expiration={{ month: cardInfo.expirationMonth, year: cardInfo.expirationYear }} />
      <CompanyDropdownFormSection changeCompany={changeCompany} company={cardInfo.cardCompany} />
      <CardNumbersFormSection changeCardNumbers={changeCardNumbers} value={cardInfo.cardNumbers} />
    </Container>
  );
};

export default CardInfo;
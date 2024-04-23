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
      {!cardInfo.cvc.isComplete || <PasswordFormSection changePassword={changePassword} password={cardInfo.password.value} />}
      {!cardInfo.name.isComplete || <CVCFormSection changeCVC={changeCVC} cvc={cardInfo.cvc.value} />}
      {!cardInfo.expiration.isComplete || <NameFormSection changeName={changeName} name={cardInfo.name.value} />}
      {!cardInfo.cardCompany.isComplete || <ExpirationDateFormSection changeExpiration={changeExpiration} expiration={cardInfo.expiration.value} />}
      {!cardInfo.cardNumbers.isComplete || <CompanyDropdownFormSection changeCompany={changeCompany} company={cardInfo.cardCompany.value} />}
      <CardNumbersFormSection changeCardNumbers={changeCardNumbers} value={cardInfo.cardNumbers.value} />
    </Container>
  );
};

export default CardInfo;
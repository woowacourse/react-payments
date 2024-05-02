import CVCFormSection from '../FormSection/CVCFormSection/CVCFormSection';
import CardNumbersFormSection from '../FormSection/CardNumbersFormSection/CardNumbersFormSection';
import CompanyDropdownFormSection from '../FormSection/CompanyDropdownFormSection/CompanyDropdownFormSection';
import ExpirationDateFormSection from '../FormSection/ExpirationDateFormSection/ExpirationDateFormSection';
import NameFormSection from '../FormSection/NameFormSection/NameFormSection';
import PasswordFormSection from '../FormSection/PasswordFormSection/PasswordFormSection';

import { Container } from './CardInfo.styled';

interface CardInfoProps {
  cardInfo: CardInfo
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  handleCardState: (cardState: CardState) => void;
}

const CardInfo = (props: CardInfoProps) => {
  const { cardInfo, dispatchCardInfo, handleCardState } = props;

  return (
    <Container>
      {!cardInfo.expiration.isComplete || <NameFormSection cardInfo={cardInfo} dispatchCardInfo={dispatchCardInfo} />}
      {!cardInfo.cardCompany.isComplete || <ExpirationDateFormSection cardInfo={cardInfo} dispatchCardInfo={dispatchCardInfo} />}
      {!cardInfo.cardNumbers.isComplete || <CompanyDropdownFormSection cardInfo={cardInfo} dispatchCardInfo={dispatchCardInfo} />}
      <CardNumbersFormSection cardInfo={cardInfo} dispatchCardInfo={dispatchCardInfo} />
    </Container>
  );
};

export default CardInfo;
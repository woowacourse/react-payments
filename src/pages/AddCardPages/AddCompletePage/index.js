import { Card, CreditCard, Text } from '../../../components';
import { CardNicknameForm } from './CardNicknameForm';
import {
  getNumberInString,
  getExpirationDateInString,
  getOwnerNameInString,
} from '../../../cardInfoFormatter';
import './style.css';

export const AddCompletePage = (props) => {
  const { setRoute, initialCardInfo, cardInfo, setCardInfo } = props;
  const { number, expirationDate, ownerName, company, nickname } = cardInfo;
  const numberInString = getNumberInString({ number });
  const expirationDateInString = getExpirationDateInString({ expirationDate });
  const ownerNameInString = getOwnerNameInString({ ownerName, cardInfo });

  return (
    <div>
      <Text className="AddCompletePage__Text" fontSize="1.5rem">
        카드등록이 완료되었습니다.
      </Text>
      <CreditCardPreview
        cardCompany={company}
        cardNumberInString={numberInString}
        expirationDateInString={expirationDateInString}
        ownerNameInString={ownerNameInString}
      />
      <CardNicknameForm
        setRoute={setRoute}
        nickname={nickname}
        setCardInfo={setCardInfo}
        initialCardInfo={initialCardInfo}
      />
    </div>
  );
};

function CreditCardPreview(props) {
  const { cardCompany, cardNumberInString, expirationDateInString, ownerNameInString } = props;

  return (
    <div className="CreditCardPreview CreditCardPreview--large">
      <Card backgroundColor={cardCompany.color} boxShadow size="medium">
        <CreditCard
          cardCompany={cardCompany.name}
          cardNumber={cardNumberInString}
          expirationDate={expirationDateInString}
          ownerName={ownerNameInString}
        />
      </Card>
    </div>
  );
}

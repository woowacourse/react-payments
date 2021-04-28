import { Card, CreditCard, Text } from '../../../components';
import { CardNicknameForm } from './CardNicknameForm';
import {
  getFormattedNumber,
  getFormattedExpirationDate,
  getFormattedOwnerName,
} from '../../../cardInfoFormatter';
import './style.css';

export const AddCompletePage = (props) => {
  const { setRoute, initialCardInfo, cardInfo, setCardInfo } = props;
  const { number, expirationDate, ownerName, company, nickname } = cardInfo;
  const formattedNumber = getFormattedNumber({ number });
  const formattedExpirationDate = getFormattedExpirationDate({ expirationDate });
  const formattedOwnerName = getFormattedOwnerName({ ownerName, cardInfo });

  return (
    <div>
      <Text className="AddCompletePage__Text" fontSize="1.5rem">
        카드등록이 완료되었습니다.
      </Text>
      <CreditCardPreview
        companyColor={company.color}
        companyName={company.name}
        formattedNumber={formattedNumber}
        formattedExpirationDate={formattedExpirationDate}
        formattedOwnerName={formattedOwnerName}
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
  const {
    companyColor,
    companyName,
    formattedNumber,
    formattedExpirationDate,
    formattedOwnerName,
  } = props;

  return (
    <div className="CreditCardPreview CreditCardPreview--large">
      <Card backgroundColor={companyColor} boxShadow size="medium">
        <CreditCard
          company={companyName}
          cardNumber={formattedNumber}
          expirationDate={formattedExpirationDate}
          ownerName={formattedOwnerName}
        />
      </Card>
    </div>
  );
}

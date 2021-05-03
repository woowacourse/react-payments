import { Card, CreditCard, Text } from '../../../components';
import { CardNicknameForm } from './CardNicknameForm';
import { getFormattedCardInfo } from '../../../cardInfoFormatter';
import './style.css';

export const AddCompletePage = (props) => {
  const { setRoute, initialCardInfo, cardInfo, setCardInfo, addCardInfoToList } = props;
  const { formattedNumber, formattedExpirationDate, formattedOwnerName } = getFormattedCardInfo({ cardInfo });
  const { company } = cardInfo;

  return (
    <div>
      <Text className="AddCompletePage__Text">카드등록이 완료되었습니다.</Text>
      <CreditCardPreview
        companyColor={company.color}
        companyName={company.name}
        formattedNumber={formattedNumber}
        formattedExpirationDate={formattedExpirationDate}
        formattedOwnerName={formattedOwnerName}
      />
      <CardNicknameForm
        setRoute={setRoute}
        cardInfo={cardInfo}
        setCardInfo={setCardInfo}
        initialNickname={initialCardInfo.nickname}
        addCardInfoToList={addCardInfoToList}
      />
    </div>
  );
};

function CreditCardPreview(props) {
  const { companyColor, companyName, formattedNumber, formattedExpirationDate, formattedOwnerName } = props;

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

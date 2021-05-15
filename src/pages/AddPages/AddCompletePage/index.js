import { CreditCardPreview, Text } from '../../../components';
import { CardNicknameForm } from './CardNicknameForm';
import { getFormattedCardInfo } from '../../../cardInfoFormatter';
import './style.css';

export const AddCompletePage = (props) => {
  const { initialCardInfo, cardInfo, setCardInfo } = props;
  const { formattedNumber, formattedExpirationDate, formattedOwnerName } = getFormattedCardInfo({ cardInfo });
  const { company } = cardInfo;

  return (
    <div>
      <Text className="AddCompletePage__Text">카드등록이 완료되었습니다.</Text>
      <CreditCardPreview
        className="AddCompletePage__CreditCardPreview"
        companyColor={company.color}
        companyName={company.name}
        cardNumber={formattedNumber}
        ownerName={formattedOwnerName}
        expirationDate={formattedExpirationDate}
      />
      <CardNicknameForm cardInfo={cardInfo} setCardInfo={setCardInfo} initialNickname={initialCardInfo.nickname} />
    </div>
  );
};

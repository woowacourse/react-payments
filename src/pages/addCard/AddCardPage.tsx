import styled from "@emotion/styled";
import Announcement from "../../components/@common/Announcement/Announcement";
import Card from "../../components/CardPreview/Card";
import CardNumberField from "../../components/InputField/CardNumber/CardNumberField";
import CardCVCField from "../../components/InputField/CVC/CardCVCField";
import CardExpirationField from "../../components/InputField/Expiration/CardExpirationField";
import {
  CARD_NUMBER_MESSAGE,
  CVC_MESSAGE,
  EXPIRATION_MESSAGE,
} from "../../constants/guide";
import { CARD_INFO_LENGTH } from "../../constants/setting";
import useCardInfo from "../../hooks/useCardInfo";

function AddCardPage() {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return (
    <AppContainer>
      <Card
        cardNumber={[
          cardInfo.firstNumber,
          cardInfo.secondNumber,
          cardInfo.thirdNumber,
          cardInfo.fourthNumber,
        ]}
        expiration={[cardInfo.month, cardInfo.year]}
      ></Card>
      <div>
        <Announcement
          main={CARD_NUMBER_MESSAGE.MAIN}
          caption={CARD_NUMBER_MESSAGE.CAPTION}
        />
        <CardNumberField
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.NUMBER}
        />
        <Announcement
          main={EXPIRATION_MESSAGE.MAIN}
          caption={EXPIRATION_MESSAGE.CAPTION}
        />
        <CardExpirationField
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.EXPIRATION}
        />
        <Announcement main={CVC_MESSAGE.MAIN} />
        <CardCVCField
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.CVC}
        />
      </div>
    </AppContainer>
  );
}
export default AddCardPage;

const AppContainer = styled.div`
  width: 376px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

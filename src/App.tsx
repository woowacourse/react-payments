import Announcement from "./components/Announcement";
import Card from "./components/Card";
import CardNumberField from "./components/CardNumberField";
import CardExpirationField from "./components/CardExpirationField";
import CardCVCField from "./components/CardCVCField";
import styled from "@emotion/styled";
import useCardInfo from "./hooks/useCardInfo";
import {
  CARD_NUMBER_MESSAGE,
  CVC_MESSAGE,
  EXPIRATION_MESSAGE,
} from "./constants/guide";
import { CARD_INFO_LENGTH } from "./constants/setting";

function App() {
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
          main={CARD_NUMBER_MESSAGE.main}
          caption={CARD_NUMBER_MESSAGE.caption}
        />
        <CardNumberField
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.NUMBER}
        />
        <Announcement
          main={EXPIRATION_MESSAGE.main}
          caption={EXPIRATION_MESSAGE.caption}
        />
        <CardExpirationField
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.EXPIRATION}
        />
        <Announcement main={CVC_MESSAGE.main} />
        <CardCVCField
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.CVC}
        />
      </div>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 376px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

import Announcement from "./components/Announcement";
import Card from "./components/Card";
import CardNumberForm from "./components/CardNumberForm";
import CardExpirationForm from "./components/CardExpirationForm";
import CardCVCForm from "./components/CardCVCForm";
import styled from "@emotion/styled";
import useCardInfo from "./hooks/useCardInfo";

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
          main="결제할 카드 번호를 입력해 주세요"
          caption="본인 명의의 카드만 결제 가능합니다."
        ></Announcement>
        <CardNumberForm
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={4}
        />
        <Announcement
          main="카드 유효기간을 입력해 주세요"
          caption="월/년도(MMYY)를 순서대로 입력해 주세요."
        ></Announcement>
        <CardExpirationForm
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={2}
        />
        <Announcement main="CVC 번호를 입력해 주세요"></Announcement>
        <CardCVCForm
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={3}
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

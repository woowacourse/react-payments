import Announcement from './components/Announcement';
import Card from './components/Card';
import CardNumberForm from './components/CardNumberForm';
import CardExpirationForm from './components/CardExpirationForm';
import CardCVCForm from './components/CardCVCForm';
import styled from '@emotion/styled';
import useCardInfo from './hooks/useCardInfo';
import { CARD_NUMBER_MESSAGE, CVC_MESSAGE, EXPIRATION_MESSAGE } from './constants/guide';
import { CARD_INFO_LENGTH } from './constants/setting';

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
      />
      <div>
        <Announcement main={CARD_NUMBER_MESSAGE.main} caption={CARD_NUMBER_MESSAGE.caption} />
        <CardNumberForm
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.NUMBER}
        />
        <Announcement main={EXPIRATION_MESSAGE.main} caption={EXPIRATION_MESSAGE.caption} />
        <CardExpirationForm
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.EXPIRATION}
        />
        <Announcement main={CVC_MESSAGE.main} />
        <CardCVCForm
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

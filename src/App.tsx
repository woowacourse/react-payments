import Announcement from './components/common/Announcement';
import Card from './components/domain/Card';
import CardNumberForm from './components/domain/CardNumberForm';
import CardExpirationForm from './components/domain/CardExpirationForm';
import CardCVCForm from './components/domain/CardCVCForm';
import styled from '@emotion/styled';
import useCardInfo from './hooks/useCardInfo';
import { CARD_NUMBER_MESSAGE, CVC_MESSAGE, EXPIRATION_MESSAGE } from './constants/guide';
import { CARD_INFO_LENGTH } from './constants/setting';
import { VIEWPORT } from './constants/viewport';

function App() {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return (
    <AppContainer>
      <Card
        cardNumber={[
          cardInfo.number.first,
          cardInfo.number.second,
          cardInfo.number.third,
          cardInfo.number.fourth,
        ]}
        expiration={{ month: cardInfo.expiration.month, year: cardInfo.expiration.year }}
      />
      <div>
        <Announcement main={CARD_NUMBER_MESSAGE.MAIN} caption={CARD_NUMBER_MESSAGE.CAPTION} />
        <CardNumberForm
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.NUMBER}
        />
        <Announcement main={EXPIRATION_MESSAGE.MAIN} caption={EXPIRATION_MESSAGE.CAPTION} />
        <CardExpirationForm
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={CARD_INFO_LENGTH.EXPIRATION}
        />
        <Announcement main={CVC_MESSAGE.MAIN} />
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
  width: ${VIEWPORT.MOBILE}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

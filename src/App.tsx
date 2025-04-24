import Preview from './widgets/preview/ui/Preview';
import useCardInfo from './features/cardInfo/hooks/useCardInfo';
import { CardInfoContainer } from './features/cardInfo/ui';
import * as S from './App.styles';

function App() {
  const { cardNumber, cardExpirationDate, cardCVC, cardIssuer, cardPassword, handleCardInfoChange, error } =
    useCardInfo();

  return (
    <S.AppContainer>
      <S.CardContainer>
        <Preview cardNumber={cardNumber} cardExpirationDate={cardExpirationDate} />
        <CardInfoContainer
          cardNumber={cardNumber}
          cardExpirationDate={cardExpirationDate}
          cardCVC={cardCVC}
          cardIssuer={cardIssuer}
          cardPassword={cardPassword}
          onChange={handleCardInfoChange}
          error={error}
        />
      </S.CardContainer>
    </S.AppContainer>
  );
}

export default App;

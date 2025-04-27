import "./App.css";
import { StyledApp, StyledFrame } from "./App.style.ts";
import CardPreview from "../features/cardPreview/ui/CardPreview.tsx";
import CardInfoForm from "../features/cardInfoForm/CardInfoForm.tsx";
import useAllCardInfo from "./hooks/useAllCardInfo.ts";

function App() {
  const { cardNumber, expirationPeriod, CVCNumber, password, cardType } =
    useAllCardInfo();

  return (
    <StyledApp>
      <StyledFrame>
        <CardPreview
          cardNumber={cardNumber.values}
          expirationPeriod={expirationPeriod.values}
          cardType={cardType.values.cardType}
        />
        <CardInfoForm
          cardNumber={cardNumber}
          expirationPeriod={expirationPeriod}
          CVCNumber={CVCNumber}
          password={password}
          cardType={cardType}
        />
      </StyledFrame>
    </StyledApp>
  );
}

export default App;

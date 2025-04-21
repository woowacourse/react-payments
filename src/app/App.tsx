import "./App.css";
import { StyledApp, StyledFrame } from "./App.style.ts";
import CardPreview from "../features/cardPreview/CardPreview";
import CardInfoForm from "../features/cardInfoForm/cardInfoForm.tsx";
import { ExpirationPeriod, CardNumberPosition } from "../types/index.types";
import { INITIALIZE_VALUE } from "../shared/constants/constant";
import useCardInfo from "./useCardInfo.ts";

type CardNumberState = {
  [key in CardNumberPosition]: string;
};

type ExpirationPeriodState = {
  [key in ExpirationPeriod]: string;
};

function App() {
  const { values: cardNumber, changeValues: changeCardNumber } =
    useCardInfo<CardNumberState>({
      first: INITIALIZE_VALUE,
      second: INITIALIZE_VALUE,
      third: INITIALIZE_VALUE,
      fourth: INITIALIZE_VALUE,
    });

  const { values: expirationPeriod, changeValues: changeExpirationPeriod } =
    useCardInfo<ExpirationPeriodState>({
      month: INITIALIZE_VALUE,
      year: INITIALIZE_VALUE,
    });

  const {
    values: { CVCNumber },
    changeValues: changeCVCNumber,
  } = useCardInfo({
    CVCNumber: INITIALIZE_VALUE,
  });

  return (
    <StyledApp>
      <StyledFrame>
        <CardPreview
          cardNumber={cardNumber}
          expirationPeriod={expirationPeriod}
        />
        <CardInfoForm
          cardNumber={cardNumber}
          changeCardNumber={changeCardNumber}
          expirationPeriod={expirationPeriod}
          changeExpirationPeriod={changeExpirationPeriod}
          CVCNumber={CVCNumber}
          changeCVCNumber={changeCVCNumber}
        />
      </StyledFrame>
    </StyledApp>
  );
}

export default App;

import "./App.css";
import { StyledApp, StyledFrame } from "./App.style.ts";
import CardPreview from "../features/cardPreview/CardPreview";
import CardNumberSection from "../features/cardNumberSection/CardNumberSection";
import CardExpirationPeriodSection from "../features/cardExpirationPeriodSection/CardExpirationPeriodSection";
import CardCVCNumberSection from "../features/cardCVCNumberSection/CardCVCNumberSection";
import { ExpirationPeriod, CardNumberPosition } from "../types/index.types";
import { INITIALIZE_VALUE } from "../shared/constants/constant";
import useCardInfo from "./useCardInfo.ts";

type CardNumberState = {
  [key in CardNumberPosition]: string;
};

type ExpirationPeriodState = {
  [key in keyof ExpirationPeriod]: string;
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
        <CardNumberSection
          cardNumber={cardNumber}
          changeCardNumber={changeCardNumber}
        />
        <CardExpirationPeriodSection
          expirationPeriod={expirationPeriod}
          changeExpirationPeriod={changeExpirationPeriod}
        />
        <CardCVCNumberSection
          CVCNumber={CVCNumber}
          changeCVCNumber={changeCVCNumber}
        />
      </StyledFrame>
    </StyledApp>
  );
}

export default App;

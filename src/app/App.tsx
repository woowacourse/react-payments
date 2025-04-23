import "./App.css";
import { StyledApp, StyledFrame } from "./App.style.ts";
import CardPreview from "../features/cardPreview/CardPreview";
import CardInfoForm from "../features/cardInfoForm/cardInfoForm.tsx";
import { ExpirationPeriod, CardNumberPosition } from "../types/index.types";
import { INITIALIZE_VALUE } from "../shared/constants/constant";
import useCardInfo from "./useCardInfo.ts";

type CardNumberState = Record<CardNumberPosition, string>;

type ExpirationPeriodState = Record<ExpirationPeriod, string>;

function App() {
  const cardNumber = useCardInfo<CardNumberState>({
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

  const password = useCardInfo({
    password: INITIALIZE_VALUE,
  });

  return (
    <StyledApp>
      <StyledFrame>
        <CardPreview
          cardNumber={cardNumber.values}
          expirationPeriod={expirationPeriod}
        />
        <CardInfoForm
          cardNumber={cardNumber.values}
          changeCardNumber={cardNumber.changeValues}
          expirationPeriod={expirationPeriod}
          changeExpirationPeriod={changeExpirationPeriod}
          CVCNumber={CVCNumber}
          changeCVCNumber={changeCVCNumber}
          password={password}
        />
      </StyledFrame>
    </StyledApp>
  );
}

export default App;

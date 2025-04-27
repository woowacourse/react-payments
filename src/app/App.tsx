import "./App.css";
import { StyledApp, StyledFrame } from "./App.style.ts";
import CardPreview from "../features/cardPreview/CardPreview";
import CardInfoForm from "../features/cardInfoForm/CardInfoForm.tsx";
import {
  ExpirationPeriod,
  CardNumberPosition,
  CardTypeList,
} from "../types/index.types.ts";
import { INITIALIZE_VALUE } from "../shared/constants/constant";
import useCardInfo from "./hooks/useCardInfo.ts";

type CardNumberState = Record<CardNumberPosition, string>;

type ExpirationPeriodState = Record<ExpirationPeriod, string>;

function App() {
  const cardNumber = useCardInfo<CardNumberState>(
    {
      first: INITIALIZE_VALUE,
      second: INITIALIZE_VALUE,
      third: INITIALIZE_VALUE,
      fourth: INITIALIZE_VALUE,
    },
    4
  );

  const expirationPeriod = useCardInfo<ExpirationPeriodState>(
    {
      month: INITIALIZE_VALUE,
      year: INITIALIZE_VALUE,
    },
    2
  );

  const CVCNumber = useCardInfo(
    {
      CVCNumber: INITIALIZE_VALUE,
    },
    3
  );

  const password = useCardInfo(
    {
      password: INITIALIZE_VALUE,
    },
    2
  );

  const cardType = useCardInfo<{ cardType: keyof CardTypeList | "" }>(
    {
      cardType: INITIALIZE_VALUE,
    },
    2
  );

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

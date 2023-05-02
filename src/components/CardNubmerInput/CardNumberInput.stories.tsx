import GlobalStyle from "../../styles/GlobalStyle";
import { cardNumberInitialValue, emptyArrowFuction } from "../../util/initialValue";
import CardNumberInput from "./CardNumberInput";

export default {
  title: "CardNumberInput",
  component: CardNumberInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardNumberInput cardNumber={cardNumberInitialValue} setCardNumber={emptyArrowFuction}></CardNumberInput>
  </>
);

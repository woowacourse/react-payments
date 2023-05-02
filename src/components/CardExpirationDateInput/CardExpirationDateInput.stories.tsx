import GlobalStyle from "../../styles/GlobalStyle";
import { emptyArrowFuction, expirationDateInitialValue } from "../../util/initialValue";
import CardExpirationDateInput from "./CardExpirationDateInput";

export default {
  title: "CardExpirationDateInput",
  component: CardExpirationDateInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardExpirationDateInput
      expirationDate={expirationDateInitialValue}
      expirationError={false}
      setExpirationDate={emptyArrowFuction}
      setError={emptyArrowFuction}
    ></CardExpirationDateInput>
  </>
);

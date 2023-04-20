import GlobalStyle from "../../styled/GlobalStyle";
import CardExpirationDateInput from "./CardExpirationDateInput";

export default {
  title: "CardExpirationDateInput",
  component: CardExpirationDateInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardExpirationDateInput expirationDate={{ month: "", year: "" }} onChange={() => {}}></CardExpirationDateInput>
  </>
);

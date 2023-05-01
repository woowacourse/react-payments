import GlobalStyle from "../../styles/GlobalStyle";
import CardExpirationDateInput from "./CardExpirationDateInput";

export default {
  title: "CardExpirationDateInput",
  component: CardExpirationDateInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardExpirationDateInput
      expirationDate={{ month: "", year: "" }}
      expirationError={false}
      setExpirationDate={() => {}}
      setError={() => {}}
    ></CardExpirationDateInput>
  </>
);

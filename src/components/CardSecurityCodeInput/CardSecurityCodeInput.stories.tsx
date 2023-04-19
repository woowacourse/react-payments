import GlobalStyle from "../../styled/GlobalStyle";
import CardSecurityCodeInput from "./CardSecurityCodeInput";

export default {
  title: "CardSecurityCodeInput",
  component: CardSecurityCodeInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardSecurityCodeInput onChange={() => {}}></CardSecurityCodeInput>
  </>
);

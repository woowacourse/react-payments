import GlobalStyle from "../../styles/GlobalStyle";
import CardSecurityCodeInput from "./CardSecurityCodeInput";

export default {
  title: "CardSecurityCodeInput",
  component: CardSecurityCodeInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardSecurityCodeInput securityCode={""} onChange={() => {}}></CardSecurityCodeInput>
  </>
);

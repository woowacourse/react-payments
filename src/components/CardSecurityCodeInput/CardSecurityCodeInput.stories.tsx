import GlobalStyle from "../../styles/GlobalStyle";
import { emptyArrowFuction } from "../../util/initialValue";
import CardSecurityCodeInput from "./CardSecurityCodeInput";

export default {
  title: "CardSecurityCodeInput",
  component: CardSecurityCodeInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardSecurityCodeInput securityCode={""} setSecurityCode={emptyArrowFuction}></CardSecurityCodeInput>
  </>
);

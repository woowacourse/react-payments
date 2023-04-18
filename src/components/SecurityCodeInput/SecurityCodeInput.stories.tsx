import GlobalStyle from "../../styled/GlobalStyle";
import SecurityCodeInput from "./SecurityCodeInput";

export default {
  title: "SecurityCodeInput",
  component: SecurityCodeInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <SecurityCodeInput></SecurityCodeInput>
  </>
);

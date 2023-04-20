import GlobalStyle from "../../styled/GlobalStyle";
import CardNumberInput from "./CardNumberInput";

export default {
  title: "CardNumberInput",
  component: CardNumberInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardNumberInput
      cardNumber={{ firstGroup: "", secondGroup: "", thirdGroup: "", fourthGroup: "" }}
      onChange={() => {}}
    ></CardNumberInput>
  </>
);

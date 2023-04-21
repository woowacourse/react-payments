import GlobalStyle from "../../styles/GlobalStyle";
import CardCompanyIcon from "./CardCompanyIcon";

export default {
  title: "CardCompanyIcon",
  component: CardCompanyIcon,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardCompanyIcon children={<div></div>} company={"하나카드"}></CardCompanyIcon>
  </>
);

import GlobalStyle from "../../styles/GlobalStyle";
import { emptyArrowFuction } from "../../util/initialValue";
import CardCompanyIcon from "./CardCompanyIcon";

export default {
  title: "CardCompanyIcon",
  component: CardCompanyIcon,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardCompanyIcon company={"하나카드"} onClickHandler={emptyArrowFuction}></CardCompanyIcon>
  </>
);

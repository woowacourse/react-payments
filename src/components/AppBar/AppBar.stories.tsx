import GlobalStyle from "../../styles/GlobalStyle";
import AppBar from "./AppBar";

export default {
  title: "AppBar",
  component: AppBar,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <AppBar title="보유카드" />
  </>
);

export const UsePrevButton = () => (
  <>
    <GlobalStyle />
    <AppBar title="카드추가" prevButton />
  </>
);

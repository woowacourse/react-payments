import AppBar from "./AppBar";

export default {
  title: "AppBar",
  component: AppBar,
};

export const Default = () => <AppBar>보유카드</AppBar>;

export const UsePrevButton = () => <AppBar prevButton>카드추가</AppBar>;

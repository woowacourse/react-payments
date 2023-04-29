import AppBar from "./AppBar";

export default {
  title: "AppBar",
  component: AppBar,
};

export const Default = () => <AppBar title="보유카드" />;

export const UsePrevButton = () => <AppBar title="카드추가" prevButton />;

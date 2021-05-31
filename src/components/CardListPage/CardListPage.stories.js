import React from "react";
import CardListPage from "./CardListPage";

export default {
  title: "CardListPage",
  component: CardListPage,
};

export const PlainCardListPage = args => <CardListPage {...args} />;

PlainCardListPage.args = {
  backgroundColor: "bg-custom-green",
  bank: "국민",
  cardNumbers: ["1234", "4567", "xxxx", "xxxx"],
  ownerName: "KYLE",
  expirationMonth: "04",
  expirationYear: "21",
  nickname: "nickname",
};

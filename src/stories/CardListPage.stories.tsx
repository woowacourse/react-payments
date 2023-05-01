import type { Meta } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import CardListPage from "../component/CardListPage/CardListPage";

const meta: Meta = {
  title: "CardListPage component",
  component: CardListPage,
  argTypes: {
    setNickNewCard: {
      action: "카드 객체에 별칭 수정",
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};
export default meta;

export const nothingListTest = (args: any) => (
  <CardListPage {...args}></CardListPage>
);
nothingListTest.args = {
  cardList: [],
};

export const oneCardListTest = (args: any) => (
  <CardListPage {...args}></CardListPage>
);
oneCardListTest.args = {
  cardList: [
    {
      nickName: "이것은 하나의 카드",
      owner: "HANA KIM",
      expirationDate: "12/23",
      cardCo: "hana",
      cardNumber: [1234, 5678, 9984, 1245],
      securityCode: "124",
      password: ["1", "6"],
    },
  ],
};

export const twoCardListTest = (args: any) => (
  <CardListPage {...args}></CardListPage>
);
twoCardListTest.args = {
  cardList: [
    {
      nickName: "하나의 카드",
      owner: "HANA KIM",
      expirationDate: "12/23",
      cardCo: "hana",
      cardNumber: [1234, 8221, 9984, 1245],
      securityCode: "124",
      password: ["1", "6"],
    },
    {
      nickName: "우리의 카드",
      owner: "CARD OF WOORI",
      expirationDate: "12/23",
      cardCo: "woori",
      cardNumber: [1234, 5678, 1357, 1245],
      securityCode: "124",
      password: ["1", "6"],
    },
  ],
};

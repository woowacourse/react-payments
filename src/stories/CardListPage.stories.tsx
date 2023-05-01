import type { Meta } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import CardListPage from "../component/CardListPage/CardListPage";
import { filledCardWithoutOwner_test, filledCard_test } from "../cardData";

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
  cardList: [filledCard_test],
};

export const twoCardListTest = (args: any) => (
  <CardListPage {...args}></CardListPage>
);
twoCardListTest.args = {
  cardList: [filledCard_test, filledCardWithoutOwner_test],
};

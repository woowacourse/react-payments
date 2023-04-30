import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardListPage from "./CardListPage";
import { withRouter } from "storybook-addon-react-router-v6";
const meta = {
  component: CardListPage,
  title: "Page/CardListPage",
  decorators: [withRouter],
} satisfies Meta<typeof CardListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { creditCardList: [] },
};

export const CardList: Story = {
  args: {
    creditCardList: [
      {
        cardNumberOrigin: "1111111111111111",
        cardNumberHidden: "1111-1111-••••-••••",
        cardDate: "12/25",
        cardOwnerName: "루루",
        cardCVC: "111",
        cardPassword: ["1", "1"],
        cardCompany: "BC카드",
        cardName: "BC카드",
      },
      {
        cardNumberOrigin: "1111111111111111",
        cardNumberHidden: "1111-1111-••••-••••",
        cardDate: "12/25",
        cardOwnerName: "루루",
        cardCVC: "111",
        cardPassword: ["1", "1"],
        cardCompany: "국민카드",
        cardName: "국민카드",
      },
    ],
  },
};

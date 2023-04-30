import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardNamePage from "../CardNamePage/CardNamePage";
import { withRouter } from "storybook-addon-react-router-v6";
import { CreditCard } from "../../types/card";
const meta = {
  component: CardNamePage,
  title: "Page/CardNamePage",
  decorators: [withRouter],
} satisfies Meta<typeof CardNamePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    addCreditCard: (card: CreditCard) => console.log(card),
    lastCard: {
      cardNumberOrigin: "1111111111111111",
      cardNumberHidden: "1111-1111-••••-••••",
      cardDate: "12/25",
      cardOwnerName: "루루",
      cardCVC: "111",
      cardPassword: ["1", "1"],
      cardCompany: "BC카드",
    },
  },
};

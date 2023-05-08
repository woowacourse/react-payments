import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardLoadingPage from "./CardLoadingPage";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  component: CardLoadingPage,
  title: "Page/CardLoadingPage",
  decorators: [withRouter],
} satisfies Meta<typeof CardLoadingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
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

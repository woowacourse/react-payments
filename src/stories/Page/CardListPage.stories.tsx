import type { Meta, StoryObj } from "@storybook/react";
import CardListPage from "../../component/CardListPage/CardListPage";
import {
  BCCard,
  HyundaiCard,
  KookminCard,
  ShinhanCard,
} from "../CardDetailView.stories";

const meta = {
  component: CardListPage,
  title: "Page/CardList",
} satisfies Meta<typeof CardListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    creditCardList: [],
  },
};

export const List: Story = {
  args: {
    creditCardList: [
      BCCard.args.creditcard,
      KookminCard.args.creditcard,
      ShinhanCard.args.creditcard,
      HyundaiCard.args.creditcard,
    ],
  },
};

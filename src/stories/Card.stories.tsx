import { Meta, StoryObj } from "@storybook/react";

import Card from "../components/Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Card",
};

export default meta;
type Story = StoryObj<typeof Card>;

//title,cardNumberSet,owner,expiracy
export const EmptyCard: Story = {
  args: {
    cardNumberSet: ["", "", "", ""],
    owner: "NAME",
    expiracy: "MM/YY",
  },
};

export const FullfilledCard: Story = {
  args: {
    cardNumberSet: ["1111", "2222", "····", "····"],
    owner: "EYK",
    expiracy: "12/21",
  },
};
